from datetime import datetime

from pydantic import BaseModel


class NotificationResponse(BaseModel):
    id: str
    title: str
    message: str
    read: bool
    created_at: datetime