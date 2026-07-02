from fastapi import APIRouter, Depends

from app.dependencies.auth import get_current_user
from app.services.notification_service import (
    delete_notification_service,
    get_notifications_service,
    mark_notification_read_service,
)

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"],
)


@router.get("/")
async def get_notifications(
    current_user=Depends(get_current_user),
):
    return await get_notifications_service(current_user)


@router.patch("/{notification_id}/read")
async def mark_read(
    notification_id: str,
    current_user=Depends(get_current_user),
):
    return await mark_notification_read_service(
        notification_id,
        current_user,
    )


@router.delete("/{notification_id}")
async def delete_notification(
    notification_id: str,
    current_user=Depends(get_current_user),
):
    return await delete_notification_service(
        notification_id,
        current_user,
    )