from contextlib import asynccontextmanager

from fastapi import FastAPI
from app.api.routes import api_router

from app.config import settings
from app.database.mongodb import (
    connect_to_mongo,
    close_mongo_connection,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_mongo()
    yield
    await close_mongo_connection()


app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    lifespan=lifespan,
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to ViralGen AI Backend",
        "status": "Running",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "database": "connected",
    }
app.include_router(api_router)