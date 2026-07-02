from bson import ObjectId
from fastapi import HTTPException

from app.database.collections import notifications_collection


async def get_notifications_service(current_user: dict):

    cursor = notifications_collection().find(
        {
            "user_id": str(current_user["_id"])
        }
    ).sort(
        "created_at",
        -1,
    )

    notifications = []

    async for notification in cursor:

        notifications.append(
            {
                "id": str(notification["_id"]),
                "title": notification["title"],
                "message": notification["message"],
                "read": notification["read"],
                "created_at": notification["created_at"],
            }
        )

    return notifications


async def mark_notification_read_service(
    notification_id: str,
    current_user: dict,
):

    result = await notifications_collection().update_one(
        {
            "_id": ObjectId(notification_id),
            "user_id": str(current_user["_id"]),
        },
        {
            "$set": {
                "read": True,
            }
        },
    )

    if result.matched_count == 0:
        raise HTTPException(
            status_code=404,
            detail="Notification not found",
        )

    return {
        "message": "Notification marked as read"
    }


async def delete_notification_service(
    notification_id: str,
    current_user: dict,
):

    result = await notifications_collection().delete_one(
        {
            "_id": ObjectId(notification_id),
            "user_id": str(current_user["_id"]),
        }
    )

    if result.deleted_count == 0:
        raise HTTPException(
            status_code=404,
            detail="Notification not found",
        )

    return {
        "message": "Notification deleted successfully"
    }