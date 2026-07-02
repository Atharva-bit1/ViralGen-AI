from datetime import datetime

from app.database.collections import campaigns_collection
from app.schemas.campaign import CampaignCreate

from fastapi import HTTPException
from bson import ObjectId

from app.services.ai_generator import generate_campaign_ai
from app.database.collections import notifications_collection

async def create_campaign_service(
    campaign: CampaignCreate,
    current_user: dict,
):
    campaigns = campaigns_collection()

    new_campaign = {
        "user_id": str(current_user["_id"]),
        "title": campaign.title,
        "product": campaign.product,
        "platform": campaign.platform,
        "persona": campaign.persona,
        "description": campaign.description,
        "status": "Pending",
        "created_at": datetime.utcnow(),
    }

    result = await campaigns.insert_one(new_campaign)

    return {
        "message": "Campaign created successfully",
        "campaign_id": str(result.inserted_id),
    }
async def get_campaign_history_service(current_user: dict):
    campaigns = campaigns_collection()

    cursor = campaigns.find(
        {
            "user_id": str(current_user["_id"])
        }
    ).sort("created_at", -1)

    campaign_list = []

    async for campaign in cursor:
        campaign_list.append(
            {
                "id": str(campaign["_id"]),
                "title": campaign["title"],
                "product": campaign["product"],
                "platform": campaign["platform"],
                "persona": campaign["persona"],
                "status": campaign["status"],
                "created_at": campaign["created_at"],
            }
        )

    return campaign_list

from bson import ObjectId
from fastapi import HTTPException


async def get_campaign_by_id_service(
    campaign_id: str,
    current_user: dict,
):
    campaign = await campaigns_collection().find_one(
        {
            "_id": ObjectId(campaign_id),
            "user_id": str(current_user["_id"]),
        }
    )

    if not campaign:
        raise HTTPException(
            status_code=404,
            detail="Campaign not found",
        )

    return {
    "id": str(campaign["_id"]),
    "title": campaign["title"],
    "product": campaign["product"],
    "platform": campaign["platform"],
    "persona": campaign["persona"],
    "description": campaign["description"],

    "status": campaign["status"],

    "enhanced_prompt": campaign.get("enhanced_prompt"),

    "headline": campaign.get("headline"),

    "caption": campaign.get("caption"),

    "hashtags": campaign.get("hashtags", []),

    "image_prompt": campaign.get("image_prompt"),

    "generated_image": campaign.get("generated_image"),

    "generation_time": campaign.get("generation_time"),

    "cta": campaign.get("cta"),

    "target_audience": campaign.get("target_audience"),

    "error": campaign.get("error"),

    "created_at": campaign["created_at"],
}

from pymongo.results import DeleteResult


async def delete_campaign_service(
    campaign_id: str,
    current_user: dict,
):
    result: DeleteResult = await campaigns_collection().delete_one(
        {
            "_id": ObjectId(campaign_id),
            "user_id": str(current_user["_id"]),
        }
    )

    if result.deleted_count == 0:
        raise HTTPException(
            status_code=404,
            detail="Campaign not found",
        )

    return {
        "message": "Campaign deleted successfully"
    }
import time


async def generate_campaign_service(
    campaign_id: str,
    current_user: dict,
):
    campaigns = campaigns_collection()

    campaign = await campaigns.find_one(
        {
            "_id": ObjectId(campaign_id),
            "user_id": str(current_user["_id"]),
        }
    )

    if not campaign:
        raise HTTPException(
            status_code=404,
            detail="Campaign not found",
        )

    await campaigns.update_one(
        {"_id": ObjectId(campaign_id)},
        {
            "$set": {
                "status": "Processing",
                "error": None,
            }
        },
    )

    start_time = time.time()

    try:

        ai_result = await generate_campaign_ai(
            title=campaign["title"],
            product=campaign["product"],
            platform=campaign["platform"],
            persona=campaign["persona"],
            description=campaign["description"],
        )

        generation_time = round(
            time.time() - start_time,
            2,
        )

        await campaigns.update_one(
            {"_id": ObjectId(campaign_id)},
            {
                "$set": {
                    "status": "Completed",

                    "enhanced_prompt": ai_result["enhanced_prompt"],

                    "headline": ai_result["headline"],

                    "caption": ai_result["caption"],

                    "hashtags": ai_result["hashtags"],

                    "image_prompt": ai_result["image_prompt"],

                    "cta": ai_result["cta"],

                    "target_audience": ai_result["target_audience"],

                    "generation_time": generation_time,

                    "error": None,
                }
            },
            await notifications_collection().insert_one(
    {
        "user_id": str(current_user["_id"]),
        "title": "Campaign Generated",
        "message": f"{campaign['title']} is ready.",
        "read": False,
        "created_at": datetime.utcnow(),
    }
)
        )

        return {
            "message": "Campaign generated successfully",
            "campaign_id": campaign_id,
            "generation_time": generation_time,
            "campaign": ai_result,
        }

    except Exception as e:

        await campaigns.update_one(
            {"_id": ObjectId(campaign_id)},
            {
                "$set": {
                    "status": "Failed",
                    "error": str(e),
                }
            },
        )

        raise HTTPException(
            status_code=500,
            detail=f"AI Generation Failed: {str(e)}",
        )