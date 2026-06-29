from datetime import datetime

from pydantic import BaseModel, EmailStr


class User(BaseModel):
    name: str

    username: str

    email: EmailStr

    mobile: str

    password: str

    avatar: str | None = None

    created_at: datetime = datetime.utcnow()