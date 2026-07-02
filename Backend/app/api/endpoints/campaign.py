from fastapi import APIRouter, Depends

from app.dependencies.auth import get_current_user
from app.schemas.campaign import CampaignCreate
from app.services.campaign_service import create_campaign_service
from app.services.campaign_service import (
    create_campaign_service,
    get_campaign_history_service,
)
from app.services.campaign_service import (
    create_campaign_service,
    get_campaign_history_service,
    get_campaign_by_id_service,
    delete_campaign_service,
    generate_campaign_service,
)

router = APIRouter(
    prefix="/campaign",
    tags=["Campaign"],
)


@router.post("/create")
async def create_campaign(
    campaign: CampaignCreate,
    current_user=Depends(get_current_user),
):
    return await create_campaign_service(
        campaign,
        current_user,
    )

@router.get("/history")
async def get_campaign_history(
    current_user=Depends(get_current_user),
):
    return await get_campaign_history_service(
        current_user
    )

@router.get("/{campaign_id}")
async def get_campaign(
    campaign_id: str,
    current_user=Depends(get_current_user),
):
    return await get_campaign_by_id_service(
        campaign_id,
        current_user,
    )

@router.delete("/{campaign_id}")
async def delete_campaign(
    campaign_id: str,
    current_user=Depends(get_current_user),
):
    return await delete_campaign_service(
        campaign_id,
        current_user,
    )

@router.post("/{campaign_id}/generate")
async def generate_campaign(
    campaign_id: str,
    current_user=Depends(get_current_user),
):
    return await generate_campaign_service(
        campaign_id,
        current_user,
    )