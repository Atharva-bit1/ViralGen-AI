from datetime import datetime

from pydantic import BaseModel


class DashboardStats(BaseModel):
    total_campaigns: int
    completed: int
    processing: int
    failed: int


class RecentCampaign(BaseModel):
    id: str
    title: str
    product: str
    status: str
    created_at: datetime


class DashboardResponse(BaseModel):
    stats: DashboardStats
    recent_campaigns: list[RecentCampaign]