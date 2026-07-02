from datetime import datetime

from pydantic import BaseModel, EmailStr


class UserProfileResponse(BaseModel):
    id: str
    name: str
    username: str
    email: EmailStr
    mobile: str
    avatar: str | None = None
    created_at: datetime

class UpdateProfileRequest(BaseModel):
    name: str
    username: str
    mobile: str
    avatar: str | None = None