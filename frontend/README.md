# ViralGen AI - Multi-Modal Social Media Content Generator

A production-ready Next.js application for generating viral social media content across multiple platforms using AI.

## Features

- 🎨 **Multi-Modal Generation** - Create content for Instagram, LinkedIn, and Facebook
- 🎯 **Brand Personas** - Professional, Witty, and Urgent tone options
- 🎬 **Multiple Variations** - Generate 1, 3, or 5 variations of each campaign
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌓 **Dark Mode** - Built-in dark theme toggle
- ⚡ **Fast & Modern** - Built with Next.js 14, React 18, and Tailwind CSS
- 💾 **Campaign History** - Track and revisit previous campaigns

## Tech Stack

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **State Management**: Zustand
- **Icons**: Lucide React
- **Language**: TypeScript
- **HTTP Client**: Axios

## Project Structure

```
viralgen-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css          # Global styles
│   │   ├── page.tsx             # Landing page
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Campaign creation form
│   │   ├── status/
│   │   │   └── page.tsx         # Generation progress
│   │   ├── result/
│   │   │   └── page.tsx         # Campaign results
│   │   └── history/
│   │       └── page.tsx         # Campaign history
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Button.tsx           # Reusable button
│   │   ├── FormInput.tsx        # Form inputs
│   │   ├── SelectorGroup.tsx    # Option selector
│   │   ├── FeatureCard.tsx      # Feature showcase
│   │   ├── CampaignCard.tsx     # Campaign display
│   │   └── index.ts             # Component exports
│   ├── store/
│   │   └── appStore.ts          # Zustand state management
│   ├── types/
│   └── lib/
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd viralgen-ai
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm run start
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
# Add other environment variables as needed
```

### Tailwind CSS

Customize colors and styles in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#7F77DD',
      'primary-light': '#AFA9EC',
      'primary-dark': '#3C3489',
    },
  },
}
```

## Pages

### 1. Landing Page (`/`)
- Hero section with value proposition
- Feature cards showcasing key capabilities
- Call-to-action buttons to get started

### 2. Dashboard (`/dashboard`)
- Campaign prompt textarea
- Brand persona selector (Professional, Witty, Urgent)
- Platform selector (Instagram, LinkedIn, Facebook)
- Number of variations selector (1, 3, or 5)
- Generate button

### 3. Status Page (`/status`)
- Real-time generation progress
- Job ID tracking
- Step-by-step progress indicators
- Auto-redirects to results page

### 4. Result Page (`/result`)
- Split layout with generated image and content
- Marketing copy with copy-to-clipboard
- Enhanced prompt display
- Brand persona information
- Variation selector for multiple versions
- Download and export options

### 5. History Page (`/history`)
- Grid layout of previous campaigns
- Campaign name, persona, and date
- Click to view campaign details
- Sortable and filterable (can be extended)

## State Management

Using Zustand for global state:

```typescript
const { prompt, setPrompt } = useAppStore()
const { persona, setPersona } = useAppStore()
const { platform, setPlatform } = useAppStore()
const { isDark, setIsDark } = useAppStore()
// ... more state
```

## Styling

The application uses Tailwind CSS with custom configuration:

- **Primary Color**: `#7F77DD` (Purple)
- **Light Mode**: Clean white backgrounds
- **Dark Mode**: Gray-900 backgrounds with proper contrast
- **Responsive**: Mobile-first responsive design

## Components

### Button
```tsx
<Button variant="primary" size="lg">
  Get started
</Button>
```

### FormTextarea
```tsx
<FormTextarea
  label="Prompt"
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Enter your prompt..."
/>
```

### SelectorGroup
```tsx
<SelectorGroup
  label="Platform"
  value={platform}
  onChange={(value) => setPlatform(value)}
  options={[
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'LinkedIn' },
  ]}
/>
```

## API Integration

To integrate with a backend API:

1. Update the API calls in respective pages
2. Use Axios for HTTP requests:

```typescript
import axios from 'axios'

const response = await axios.post('/api/generate', {
  prompt,
  persona,
  platform,
  variations,
})
```

3. Update the Zustand store with API responses

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- CSS-in-JS optimization via Tailwind
- Component lazy loading where appropriate

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - feel free to use this project

## Support

For issues and questions, please create an issue in the repository.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
