# API Integration Guide

## Overview

This guide shows how to integrate ViralGen AI with a backend API for actual content generation.

## Setup

### 1. Environment Configuration

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_API_VERSION=v1
```

### 2. API Client Setup

Create `src/lib/api.ts`:
```typescript
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token if needed
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
```

### 3. API Functions

Create `src/lib/services/generationService.ts`:
```typescript
import api from '../api'

export interface GenerationRequest {
  prompt: string
  persona: 'professional' | 'witty' | 'urgent'
  platform: 'instagram' | 'linkedin' | 'facebook'
  variations: number
}

export interface GenerationResponse {
  jobId: string
  status: 'processing' | 'completed' | 'failed'
  content: {
    copy: string
    enhancedPrompt: string
    imageUrl: string
    variations: string[]
  }
}

export const generationService = {
  async generate(request: GenerationRequest) {
    const response = await api.post<GenerationResponse>(
      '/v1/generate',
      request
    )
    return response.data
  },

  async getStatus(jobId: string) {
    const response = await api.get<GenerationResponse>(
      `/v1/status/${jobId}`
    )
    return response.data
  },

  async getCampaigns() {
    const response = await api.get('/v1/campaigns')
    return response.data
  },

  async getCampaign(id: string) {
    const response = await api.get(`/v1/campaigns/${id}`)
    return response.data
  },
}
```

## Integration Points

### 1. Dashboard Page (Generate Campaign)

Update `src/app/dashboard/page.tsx`:
```typescript
import { generationService } from '@/lib/services/generationService'

const handleGenerate = async () => {
  if (!prompt.trim()) {
    alert('Please enter a campaign prompt')
    return
  }

  try {
    setIsLoading(true)
    const response = await generationService.generate({
      prompt,
      persona,
      platform,
      variations,
    })

    setJobId(response.jobId)
    router.push('/status')
  } catch (error) {
    console.error('Generation failed:', error)
    alert('Failed to generate campaign. Please try again.')
  } finally {
    setIsLoading(false)
  }
}
```

### 2. Status Page (Poll for Progress)

Update `src/app/status/page.tsx`:
```typescript
import { generationService } from '@/lib/services/generationService'

useEffect(() => {
  const pollStatus = async () => {
    try {
      const response = await generationService.getStatus(jobId)

      if (response.status === 'completed') {
        // Store results in state/store
        setResults(response.content)
        router.push('/result')
      } else if (response.status === 'failed') {
        alert('Generation failed. Please try again.')
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Status check failed:', error)
    }
  }

  const interval = setInterval(pollStatus, 2000)
  return () => clearInterval(interval)
}, [jobId])
```

### 3. History Page (Load Campaigns)

Update `src/app/history/page.tsx`:
```typescript
import { generationService } from '@/lib/services/generationService'

useEffect(() => {
  const loadCampaigns = async () => {
    try {
      const campaigns = await generationService.getCampaigns()
      setCampaigns(campaigns)
    } catch (error) {
      console.error('Failed to load campaigns:', error)
    }
  }

  loadCampaigns()
}, [])
```

## API Response Examples

### Generate Response
```json
{
  "jobId": "job_2024_001",
  "status": "processing",
  "content": {
    "copy": "Transform your fitness journey...",
    "enhancedPrompt": "premium protein shake, fitness...",
    "imageUrl": "https://cdn.example.com/image.jpg",
    "variations": ["variation1", "variation2", "variation3"]
  }
}
```

### Status Response
```json
{
  "jobId": "job_2024_001",
  "status": "completed",
  "progress": 100,
  "steps": [
    { "name": "Prompt Enhancement", "status": "completed" },
    { "name": "Copy Generation", "status": "completed" },
    { "name": "Image Generation", "status": "completed" },
    { "name": "Asset Composition", "status": "completed" }
  ],
  "content": { ... }
}
```

## Error Handling

Add to `src/lib/api.ts`:
```typescript
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    } else if (error.response?.status === 429) {
      // Handle rate limiting
      alert('Too many requests. Please try again later.')
    } else if (error.response?.status >= 500) {
      // Handle server error
      alert('Server error. Please try again later.')
    }
    return Promise.reject(error)
  }
)
```

## Authentication

### Add JWT Token Support

Update `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_AUTH_URL=https://api.yourdomain.com/auth
```

Create `src/lib/auth.ts`:
```typescript
import api from './api'

export const authService = {
  async login(email: string, password: string) {
    const response = await api.post('/auth/login', { email, password })
    const { token } = response.data
    localStorage.setItem('authToken', token)
    return response.data
  },

  async logout() {
    localStorage.removeItem('authToken')
  },

  getToken() {
    return localStorage.getItem('authToken')
  },
}
```

## Testing API Integration

### Using Postman

1. Create collection: `ViralGen AI`
2. Add requests:
   - `POST /v1/generate` - Test campaign generation
   - `GET /v1/status/:jobId` - Test status polling
   - `GET /v1/campaigns` - Test campaign history

### Using cURL

```bash
# Generate campaign
curl -X POST https://api.yourdomain.com/v1/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Premium protein shake",
    "persona": "professional",
    "platform": "instagram",
    "variations": 3
  }'

# Check status
curl https://api.yourdomain.com/v1/status/job_2024_001

# Get campaigns
curl https://api.yourdomain.com/v1/campaigns
```

## Deployment Considerations

1. **CORS**: Configure backend CORS for frontend domain
2. **API Rate Limiting**: Implement rate limiting for fair usage
3. **Error Responses**: Consistent error format
4. **Logging**: Log all API requests for debugging
5. **Monitoring**: Set up alerts for API failures
6. **Security**: Use HTTPS and secure tokens

## Type Definitions

Create `src/types/api.ts`:
```typescript
export type PersonaType = 'professional' | 'witty' | 'urgent'
export type PlatformType = 'instagram' | 'linkedin' | 'facebook'
export type StatusType = 'processing' | 'completed' | 'failed'

export interface Campaign {
  id: string
  prompt: string
  persona: PersonaType
  platform: PlatformType
  variations: number
  status: StatusType
  createdAt: string
  updatedAt: string
}

export interface GenerationResult {
  copy: string
  enhancedPrompt: string
  imageUrl: string
  variations: string[]
}
```

---

For more details on specific integrations, refer to individual service files in `src/lib/services/`
