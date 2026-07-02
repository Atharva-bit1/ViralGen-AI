from app.database.collections import settings_collection
from app.schemas.settings import SettingsRequest


async def get_settings_service(current_user: dict):

    settings = await settings_collection().find_one(
        {
            "user_id": str(current_user["_id"])
        }
    )

    if not settings:

        return {
            "default_platform": "Instagram",
            "default_persona": "Professional",
            "theme": "system",
        }

    settings.pop("_id", None)
    settings.pop("user_id", None)

    return settings


async def update_settings_service(
    data: SettingsRequest,
    current_user: dict,
):

    await settings_collection().update_one(
        {
            "user_id": str(current_user["_id"])
        },
        {
            "$set": {
                "default_platform": data.default_platform,
                "default_persona": data.default_persona,
                "theme": data.theme,
            }
        },
        upsert=True,
    )

    return {
        "message": "Settings updated successfully"
    }