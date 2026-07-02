from fastapi import APIRouter
from app.schemas.auth import LoginRequest
from app.services.auth_service import login_user_service

from app.schemas.auth import RegisterRequest
from app.services.auth_service import register_user_service

from fastapi import Depends

from app.dependencies.auth import get_current_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
async def register_user(user: RegisterRequest):
    return await register_user_service(user)
@router.post("/login")
async def login_user(login_data: LoginRequest):
    return await login_user_service(login_data)
@router.get("/me")
async def get_profile(
    current_user=Depends(get_current_user),
):
    return {
        "id": str(current_user["_id"]),
        "name": current_user["name"],
        "username": current_user["username"],
        "email": current_user["email"],
        "mobile": current_user["mobile"],
    }