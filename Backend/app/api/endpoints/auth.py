from datetime import datetime

from fastapi import APIRouter, HTTPException

from app.database.collections import users_collection
from app.schemas.auth import RegisterRequest
from app.utils.hashing import hash_password

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
async def register_user(user: RegisterRequest):

    users = users_collection()

    # Check if email already exists
    existing_email = await users.find_one({"email": user.email})

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )

    # Check if username already exists
    existing_username = await users.find_one(
        {"username": user.username}
    )

    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="Username already exists",
        )

    # Check if mobile already exists
    existing_mobile = await users.find_one(
        {"mobile": user.mobile}
    )

    if existing_mobile:
        raise HTTPException(
            status_code=400,
            detail="Mobile number already registered",
        )

    new_user = {
        "name": user.name,
        "username": user.username,
        "email": user.email,
        "mobile": user.mobile,
        "password": hash_password(user.password),
        "avatar": None,
        "created_at": datetime.utcnow(),
    }

    result = await users.insert_one(new_user)

    return {
        "message": "User registered successfully",
        "user_id": str(result.inserted_id),
    }