# ViralGen AI - Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (optional)

## Setup Instructions

### Step 1: Navigate to Project Directory
```bash
cd viralgen-ai
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Features Included

✅ **Landing Page** - Hero section with feature cards
✅ **Dashboard** - Campaign creation form
✅ **Status Page** - Real-time generation progress
✅ **Result Page** - Display and manage generated content
✅ **History Page** - Campaign history tracking
✅ **Dark Mode** - Light/dark theme toggle
✅ **Responsive Design** - Mobile, tablet, desktop
✅ **State Management** - Zustand for global state
✅ **Type Safety** - Full TypeScript support
✅ **Modern UI** - Tailwind CSS styling

## Navigation

- **Landing** (`/`) - Home page
- **Generate** (`/dashboard`) - Create campaigns
- **History** (`/history`) - View past campaigns
- **Status** (`/status`) - Monitor generation
- **Result** (`/result`) - View campaign results

## Customization

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#7F77DD', // Change this color
}
```

### Add New Pages
Create new files in `src/app/`:
```
src/app/new-page/page.tsx
```

### Modify Components
All components are in `src/components/`:
- Button.tsx
- Navbar.tsx
- FormInput.tsx
- SelectorGroup.tsx
- FeatureCard.tsx
- CampaignCard.tsx

## API Integration

To connect to a backend:

1. Update API endpoints in `.env.local`
2. Use Axios in your page components:
```typescript
import axios from 'axios'
const response = await axios.post('/api/generate', data)
```

3. Update Zustand store with responses

## File Structure Overview

```
src/
├── app/          # Pages and layouts
├── components/   # Reusable components
├── store/        # State management
├── types/        # TypeScript types
└── lib/          # Utility functions
```

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
npm run lint
```

## Next Steps

1. **Backend Integration**: Connect to your API
2. **Database Setup**: Add campaign persistence
3. **Authentication**: Implement user login
4. **Image Upload**: Add file upload capability
5. **Export Options**: Implement download features

## Support

For detailed documentation, see `README.md`

---

Happy building! 🚀
