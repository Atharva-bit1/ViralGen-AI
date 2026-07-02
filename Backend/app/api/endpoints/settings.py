from fastapi import APIRouter, Depends

from app.dependencies.auth import get_current_user
from app.schemas.settings import SettingsRequest
from app.services.settings_service import (
    get_settings_service,
    update_settings_service,
)

router = APIRouter(
    prefix="/settings",
    tags=["Settings"],
)


@router.get("/")
async def get_settings(
    current_user=Depends(get_current_user),
):
    return await get_settings_service(current_user)


@router.put("/")
async def update_settings(
    settings: SettingsRequest,
    current_user=Depends(get_current_user),
):
    return await update_settings_service(
        settings,
        current_user,
    )