import json

from google import genai
from google.genai import types

from app.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


async def generate_campaign_ai(
    title: str,
    product: str,
    platform: str,
    persona: str,
    description: str,
):
    prompt = f"""
You are an expert digital marketing strategist.

Generate a complete marketing campaign.

Return ONLY valid JSON.

JSON format:

{{
    "enhanced_prompt": "...",
    "headline": "...",
    "caption": "...",
    "hashtags":[
        "...",
        "..."
    ],
    "image_prompt":"...",
    "cta":"...",
    "target_audience":"..."
}}

Campaign Details

Title:
{title}

Product:
{product}

Platform:
{platform}

Persona:
{persona}

Description:
{description}
"""

    response = client.models.generate_content(
        model=settings.GEMINI_MODEL,
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0.8,
            response_mime_type="application/json",
        ),
    )

    return json.loads(response.text)