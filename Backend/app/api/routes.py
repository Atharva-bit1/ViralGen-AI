from fastapi import APIRouter

from app.api.endpoints.auth import router as auth_router
from app.api.endpoints.campaign import router as campaign_router
from app.api.endpoints.dashboard import router as dashboard_router
from app.api.endpoints.profile import router as profile_router
from app.api.endpoints.settings import router as settings_router
from app.api.endpoints.notification import router as notification_router

api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(campaign_router)
api_router.include_router(dashboard_router)
api_router.include_router(profile_router)
api_router.include_router(settings_router)
api_router.include_router(notification_router)