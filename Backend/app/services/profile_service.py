from fastapi import HTTPException

from app.database.collections import users_collection
from app.schemas.user import UpdateProfileRequest


async def get_profile_service(current_user: dict):

    return {
        "id": str(current_user["_id"]),
        "name": current_user["name"],
        "username": current_user["username"],
        "email": current_user["email"],
        "mobile": current_user["mobile"],
        "avatar": current_user.get("avatar"),
        "created_at": current_user["created_at"],
    }


async def update_profile_service(
    profile: UpdateProfileRequest,
    current_user: dict,
):

    users = users_collection()

    existing = await users.find_one(
        {
            "username": profile.username,
            "_id": {
                "$ne": current_user["_id"]
            },
        }
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Username already exists",
        )

    await users.update_one(
        {
            "_id": current_user["_id"]
        },
        {
            "$set": {
                "name": profile.name,
                "username": profile.username,
                "mobile": profile.mobile,
                "avatar": profile.avatar,
            }
        },
    )

    return {
        "message": "Profile updated successfully"
    }