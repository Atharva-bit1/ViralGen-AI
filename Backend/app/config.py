from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str

    HOST: str
    PORT: int

    MONGO_URI: str
    DATABASE_NAME: str

    JWT_SECRET: str
    JWT_ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    GEMINI_API_KEY: str

    GENERATED_FOLDER: str

    REDIS_URL: str

    class Config:
        env_file = ".env"


settings = Settings()