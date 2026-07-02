from app.database.collections import campaigns_collection


async def get_dashboard_service(current_user: dict):

    campaigns = campaigns_collection()

    user_id = str(current_user["_id"])

    total = await campaigns.count_documents(
        {
            "user_id": user_id
        }
    )

    completed = await campaigns.count_documents(
        {
            "user_id": user_id,
            "status": "Completed",
        }
    )

    processing = await campaigns.count_documents(
        {
            "user_id": user_id,
            "status": "Processing",
        }
    )

    failed = await campaigns.count_documents(
        {
            "user_id": user_id,
            "status": "Failed",
        }
    )

    cursor = campaigns.find(
        {
            "user_id": user_id
        }
    ).sort(
        "created_at",
        -1
    ).limit(5)

    recent_campaigns = []

    async for campaign in cursor:

        recent_campaigns.append(
            {
                "id": str(campaign["_id"]),
                "title": campaign["title"],
                "product": campaign["product"],
                "status": campaign["status"],
                "created_at": campaign["created_at"],
            }
        )

    return {
        "stats": {
            "total_campaigns": total,
            "completed": completed,
            "processing": processing,
            "failed": failed,
        },
        "recent_campaigns": recent_campaigns,
    }