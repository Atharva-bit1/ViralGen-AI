from datetime import datetime

from pydantic import BaseModel


class Campaign(BaseModel):
    user_id: str

    title: str
    product: str
    platform: str
    persona: str
    description: str

    status: str = "Pending"

    enhanced_prompt: str | None = None
    headline: str | None = None
    caption: str | None = None
    hashtags: list[str] = []
    image_prompt: str | None = None
    generated_image: str | None = None
    generation_time: float | None = None
    error: str | None = None
    cta: str | None = None
    target_audience: str | None = None
    created_at: datetime = datetime.utcnow()


    