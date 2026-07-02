from datetime import datetime

from fastapi import HTTPException

from app.database.collections import users_collection
from app.schemas.auth import RegisterRequest
from app.utils.hashing import hash_password


async def register_user_service(user: RegisterRequest):

    users = users_collection()

    # Email already exists
    if await users.find_one({"email": user.email}):
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )

    # Username already exists
    if await users.find_one({"username": user.username}):
        raise HTTPException(
            status_code=400,
            detail="Username already exists",
        )

    # Mobile already exists
    if await users.find_one({"mobile": user.mobile}):
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

from app.schemas.auth import LoginRequest
from app.utils.hashing import verify_password
from app.utils.jwt_handler import create_access_token


async def login_user_service(login_data: LoginRequest):

    users = users_collection()

    identifier = login_data.identifier

    if "@" in identifier:
        user = await users.find_one({"email": identifier})

    elif identifier.isdigit():
        user = await users.find_one({"mobile": identifier})

    else:
        user = await users.find_one({"username": identifier})

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
        )

    if not verify_password(
        login_data.password,
        user["password"],
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
        )

    token = create_access_token(
        {
            "sub": str(user["_id"])
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }