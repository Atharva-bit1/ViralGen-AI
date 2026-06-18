'use client'

import { useRouter } from 'next/navigation'
import { CampaignCard, Campaign } from '@/components/CampaignCard'

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Red Shoes Campaign',
    persona: 'professional',
    date: '12 Jun 2026',
  },
  {
    id: '2',
    name: 'Protein Shake Launch',
    persona: 'witty',
    date: '14 Jun 2026',
  },
  {
    id: '3',
    name: 'Summer Collection Drop',
    persona: 'urgent',
    date: '15 Jun 2026',
  },
  {
    id: '4',
    name: 'Coffee Brand Refresh',
    persona: 'professional',
    date: '16 Jun 2026',
  },
  {
    id: '5',
    name: 'Flash Sale Announcement',
    persona: 'witty',
    date: '17 Jun 2026',
  },
  {
    id: '6',
    name: 'Product Showcase',
    persona: 'professional',
    date: '18 Jun 2026',
  },
]

export default function HistoryPage() {
  const router = useRouter()

  const handleCampaignClick = () => {
    router.push('/result')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Campaign history
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              {...campaign}
              onClick={handleCampaignClick}
            />
          ))}
        </div>

        {mockCampaigns.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              No campaigns yet. Create your first one to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
