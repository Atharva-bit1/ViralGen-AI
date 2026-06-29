from pydantic import BaseModel, EmailStr, Field


class RegisterRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)

    username: str = Field(
        min_length=3,
        max_length=30
    )

    email: EmailStr

    mobile: str = Field(
        min_length=10,
        max_length=15
    )

    password: str = Field(min_length=8)


class LoginRequest(BaseModel):
    identifier: str = Field(
        min_length=3,
        max_length=100,
        description="Email, username or mobile number"
    )

    password: str = Field(min_length=8)

class TokenResponse(BaseModel):
    access_token: str

    token_type: str = "bearer"