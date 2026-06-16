# ViralGen-AI
# ViralGen AI – Multi-Modal Social Media Content Generator

ViralGen AI is an AI-powered marketing automation platform that generates complete social media campaign assets from a simple text brief. The system combines Large Language Models (LLMs) for marketing copy generation, AI image generation models for visual creation, and image compositing techniques to produce ready-to-publish marketing content.

The platform features intelligent prompt enhancement, brand voice enforcement, asynchronous image generation, and automated asset creation. Users submit a short product or campaign description, and the system generates platform-specific marketing copy, creates high-quality promotional visuals, overlays branding content, and delivers a final social media asset.

## Features

* AI-powered prompt refinement for enhanced image generation
* Multi-persona marketing copy generation (Professional, Witty, Urgent)
* Platform-specific content generation (Instagram, LinkedIn, etc.)
* AI image generation using Stability AI / Stable Diffusion
* Asynchronous processing with Celery and Redis
* Real-time job status tracking through polling APIs
* Automated image and text compositing using Pillow (PIL)
* Campaign history storage with MongoDB
* Scalable architecture for high-volume content generation

## Tech Stack

* Backend: Python, FastAPI
* LLM: GPT-4
* Image Generation: Stability AI / Stable Diffusion
* Task Queue: Celery + Redis
* Database: MongoDB
* Image Processing: Pillow (PIL)

## Workflow

1. User submits a marketing brief.
2. AI enhances the prompt for image generation.
3. Marketing copy is generated based on selected brand persona.
4. Image generation task is processed asynchronously.
5. Generated copy and image are combined into a final asset.
6. Results are stored and served through API endpoints.

This project demonstrates the integration of Generative AI, Computer Vision, Distributed Task Processing, and Modern Backend Development to build a production-ready Marketing Technology (MarTech) solution.
