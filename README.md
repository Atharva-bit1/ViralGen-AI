# 🚀 ViralGen AI – Multi-Modal Social Media Content Generator

<div align="center">

### Transform Simple Marketing Ideas into Complete Social Media Assets with AI

Generate **marketing copy**, **AI-powered visuals**, and **ready-to-publish social media creatives** from a single text prompt.

![Python](https://img.shields.io/badge/Python-3.10+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![GPT-4](https://img.shields.io/badge/GPT--4-LLM-orange)
![StableDiffusion](https://img.shields.io/badge/Stable_Diffusion-Image_Generation-purple)
![Celery](https://img.shields.io/badge/Celery-Async_Task_Queue-brightgreen)
![Redis](https://img.shields.io/badge/Redis-Message_Broker-red)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen)

</div>

---

# 📖 Overview

Marketing teams often need dozens of content variations daily for campaigns across multiple platforms. Creating engaging copy, generating visuals, and maintaining brand consistency manually is time-consuming.

**ViralGen AI** solves this problem by automating the entire content creation pipeline.

Users simply provide a brief such as:

```text
Red running shoes for athletes
```

The platform automatically:

✅ Generates platform-specific marketing copy

✅ Enhances the prompt for high-quality image generation

✅ Creates AI-generated promotional visuals

✅ Applies brand voice and marketing personas

✅ Composites text and image into a final social media asset

✅ Stores campaign history for future reference

---

# 🎯 Key Features

## 🧠 Prompt Refinement Agent

Transforms simple user prompts into detailed image-generation prompts.

### Input

```text
Red Running Shoes
```

### Enhanced Prompt

```text
Photorealistic image of sleek red running shoes on a wet asphalt running track,
cinematic lighting, commercial advertising photography,
ultra detailed, 8K resolution.
```

---

## ✍️ AI Marketing Copy Generation

Generate platform-specific content for:

* Instagram
* LinkedIn
* Facebook
* Twitter/X

Supported Brand Personas:

### Professional

```text
Push your limits with the all-new RedSprint Pro.
Engineered for performance and built for champions.
```

### Witty

```text
Your old shoes are officially nervous.
Meet the new RedSprint Pro.
```

### Urgent

```text
Limited stock available.
Upgrade your run before they're gone.
```

---

## 🎨 AI Image Generation

Generate professional marketing visuals using:

* Stability AI
* Stable Diffusion
* DALL-E (Optional)

Capabilities:

* Product advertising
* Social media creatives
* Lifestyle imagery
* Promotional campaigns

---

## ⚡ Asynchronous Processing

Image generation is computationally expensive.

To ensure responsiveness:

* API immediately returns a Job ID
* Celery processes tasks in the background
* Redis manages job queues
* Frontend polls job status

---

## 🖼️ Automatic Asset Compositing

Using Pillow (PIL), the platform:

* Adds marketing copy
* Applies branding
* Creates final social-media-ready creatives

---

## 📊 Campaign History Tracking

Store:

* Original Prompt
* Enhanced Prompt
* Generated Copy
* Generated Image URL
* Final Asset URL
* Timestamp

using MongoDB.

---

# 🏗️ System Architecture

```text
                         ┌───────────────────┐
                         │      Frontend     │
                         │ React / Next.js   │
                         └─────────┬─────────┘
                                   │
                                   ▼
                    ┌──────────────────────────┐
                    │      FastAPI Server      │
                    │      REST Endpoints      │
                    └─────────┬────────────────┘
                              │
               Returns Job ID │
                              ▼
                    ┌─────────────────────┐
                    │        Redis        │
                    │    Message Queue    │
                    └─────────┬───────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │    Celery Worker    │
                    └─────────┬───────────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼

 ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
 │ Prompt Agent   │  │ GPT-4 Service  │  │ Image Service  │
 │ Enhancement    │  │ Copy Generator │  │ Stable Diff.   │
 └────────────────┘  └────────────────┘  └────────────────┘

          └───────────────────┼───────────────────┘
                              ▼
                    ┌─────────────────────┐
                    │ Pillow Compositor   │
                    │ Text + Image Merge  │
                    └─────────┬───────────┘
                              ▼
                    ┌─────────────────────┐
                    │      MongoDB        │
                    │ Campaign Storage    │
                    └─────────────────────┘
```

---

# 🔄 Workflow

```text
User Prompt
      │
      ▼
Prompt Enhancement
      │
      ▼
Copy Generation
      │
      ▼
Image Generation
      │
      ▼
Image + Text Compositing
      │
      ▼
Save to MongoDB
      │
      ▼
Return Final Asset
```

---

# 📂 Project Structure

```bash
viralgen-ai/
│
├── app/
│   ├── api/
│   │   ├── routes/
│   │   └── endpoints/
│   │
│   ├── services/
│   │   ├── prompt_enhancer.py
│   │   ├── copy_generator.py
│   │   ├── image_generator.py
│   │   └── compositor.py
│   │
│   ├── workers/
│   │   └── celery_worker.py
│   │
│   ├── database/
│   │   └── mongodb.py
│   │
│   └── models/
│
├── assets/
│
├── generated/
│
├── requirements.txt
│
├── docker-compose.yml
│
├── .env
│
└── main.py
```

---

# 🛠️ Technology Stack

| Layer            | Technology                      |
| ---------------- | ------------------------------- |
| Backend          | FastAPI                         |
| LLM              | GPT-4                           |
| Image Generation | Stability AI / Stable Diffusion |
| Queue System     | Celery                          |
| Message Broker   | Redis                           |
| Database         | MongoDB                         |
| Image Processing | Pillow (PIL)                    |
| Deployment       | Docker                          |

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/viralgen-ai.git

cd viralgen-ai
```

---

## 2. Create Virtual Environment

```bash
python -m venv venv

source venv/bin/activate
```

Windows:

```bash
venv\Scripts\activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Configure Environment Variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_key

STABILITY_API_KEY=your_stability_key

MONGODB_URI=mongodb://localhost:27017

REDIS_URL=redis://localhost:6379
```

---

# 🐳 Running Redis & MongoDB

Using Docker:

```bash
docker compose up -d
```

Or separately:

```bash
docker run -d -p 6379:6379 redis

docker run -d -p 27017:27017 mongo
```

---

# ▶️ Running the Application

## Start FastAPI

```bash
uvicorn main:app --reload
```

---

## Start Celery Worker

```bash
celery -A app.workers.celery_worker worker --loglevel=info
```

---

## Verify API

```bash
http://localhost:8000/docs
```

Swagger UI will open automatically.

---

# 📡 API Endpoints

## Generate Campaign

### Request

```http
POST /generate
```

Body:

```json
{
  "prompt": "Red Running Shoes",
  "persona": "Professional",
  "platform": "Instagram"
}
```

Response:

```json
{
  "job_id": "abc123",
  "status": "processing"
}
```

---

## Check Status

```http
GET /status/{job_id}
```

Processing:

```json
{
  "status": "processing"
}
```

Completed:

```json
{
  "status": "completed",
  "copy": "...",
  "image_url": "...",
  "final_asset_url": "..."
}
```

---

# 🧪 Testing

## Copy Quality Testing

Verify:

* Professional Persona
* Witty Persona
* Urgent Persona

produce different outputs.

---

## Prompt Enhancement Testing

Input:

```text
Red Shoes
```

Verify generated prompts remain:

* Consistent
* Detailed
* Marketing-oriented

---

## Load Testing

Submit multiple requests:

```bash
5-10 concurrent image generations
```

Ensure:

* API remains responsive
* Celery handles background processing
* No request blocking occurs

---

# 📈 Future Enhancements

* Multi-language campaign generation
* AI video generation
* Brand logo integration
* Social media scheduler
* Campaign analytics dashboard
* A/B testing support
* Multi-image carousel generation
* Canva-style template system

---

# 🎓 Learning Outcomes

This project demonstrates:

* Generative AI Integration
* Prompt Engineering
* LLM Application Development
* Async Task Processing
* Distributed Systems
* Image Generation Pipelines
* FastAPI Backend Development
* MongoDB Integration
* Production-ready AI Architecture

---

# 📜 License

This project is developed for educational and research purposes as part of an AI-powered Marketing Technology (MarTech) solution.

---

<div align="center">

### Built with AI, Automation, and Creativity 🚀

**ViralGen AI — Generate. Visualize. Viralize.**

</div>
