from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.config import settings


class MongoDB:
    client: AsyncIOMotorClient | None = None
    database: AsyncIOMotorDatabase | None = None


mongodb = MongoDB()


async def connect_to_mongo():
    mongodb.client = AsyncIOMotorClient(settings.MONGO_URI)

    mongodb.database = mongodb.client[settings.DATABASE_NAME]

    await mongodb.client.admin.command("ping")

    print("✅ MongoDB Connected")


async def close_mongo_connection():
    if mongodb.client:
        mongodb.client.close()
        print("❌ MongoDB Connection Closed")