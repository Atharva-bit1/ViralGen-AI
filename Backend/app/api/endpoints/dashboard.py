from fastapi import APIRouter, Depends

from app.dependencies.auth import get_current_user
from app.services.dashboard_service import get_dashboard_service

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get("/")
async def dashboard(
    current_user=Depends(get_current_user),
):
    return await get_dashboard_service(
        current_user
    )