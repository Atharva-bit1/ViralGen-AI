from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class CampaignCreate(BaseModel):
    title: str = Field(
        min_length=3,
        max_length=100
    )

    product: str = Field(
        min_length=2,
        max_length=100
    )

    platform: Literal[
        "Instagram",
        "Facebook",
        "LinkedIn",
        "Twitter",
        "YouTube"
    ]

    persona: Literal[
        "Professional",
        "Friendly",
        "Luxury",
        "Minimal",
        "Bold"
    ]

    description: str = Field(
        min_length=10,
        max_length=1000
    )


class CampaignResponse(BaseModel):
    id: str

    title: str

    product: str

    platform: str

    persona: str

    status: str

    created_at: datetime