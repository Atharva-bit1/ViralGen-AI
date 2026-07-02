from pydantic import BaseModel
from typing import Literal


class SettingsRequest(BaseModel):
    default_platform: Literal[
        "Instagram",
        "Facebook",
        "LinkedIn",
        "Twitter",
        "YouTube",
    ]

    default_persona: Literal[
        "Professional",
        "Friendly",
        "Luxury",
        "Minimal",
        "Bold",
    ]

    theme: Literal[
        "light",
        "dark",
        "system",
    ]


class SettingsResponse(SettingsRequest):
    pass