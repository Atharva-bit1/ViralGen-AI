"use client";

import { useRouter } from "next/navigation";
import { CampaignCard, Campaign } from "@/components/CampaignCard";
import { useState } from "react";
import CampaignDrawer from "@/components/CampaignDrawer";
import { ArrowLeft } from "lucide-react";

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Red Shoes Campaign",
    persona: "professional",
    date: "12 Jun 2026",
  },
  {
    id: "2",
    name: "Protein Shake Launch",
    persona: "witty",
    date: "14 Jun 2026",
  },
  {
    id: "3",
    name: "Summer Collection Drop",
    persona: "urgent",
    date: "15 Jun 2026",
  },
  {
    id: "4",
    name: "Coffee Brand Refresh",
    persona: "professional",
    date: "16 Jun 2026",
  },
  {
    id: "5",
    name: "Flash Sale Announcement",
    persona: "witty",
    date: "17 Jun 2026",
  },
  {
    id: "6",
    name: "Product Showcase",
    persona: "professional",
    date: "18 Jun 2026",
  },
];

export default function HistoryPage() {
  const router = useRouter();

  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null,
  );

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCampaignClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2 text-purple-500 hover:text-purple-400 mb-4"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </button>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Campaign History
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              View and manage your previously generated campaigns.
            </p>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                {...campaign}
                onClick={() => handleCampaignClick(campaign)}
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
        <CampaignDrawer
          campaign={
            selectedCampaign && {
              ...selectedCampaign,
              prompt:
                "Create a high-converting Instagram campaign showcasing the product with premium lighting.",
              platform: "Instagram",
              image: "https://picsum.photos/600",
            }
          }
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>
    
  );
}
