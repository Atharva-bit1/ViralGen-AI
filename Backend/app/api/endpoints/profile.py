from fastapi import APIRouter, Depends

from app.dependencies.auth import get_current_user
from app.schemas.user import UpdateProfileRequest
from app.services.profile_service import (
    get_profile_service,
    update_profile_service,
)

router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)


@router.get("/")
async def get_profile(
    current_user=Depends(get_current_user),
):
    return await get_profile_service(current_user)


@router.put("/")
async def update_profile(
    profile: UpdateProfileRequest,
    current_user=Depends(get_current_user),
):
    return await update_profile_service(
        profile,
        current_user,
    )