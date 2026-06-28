"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, Image, Users, History } from "lucide-react";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { useAuthStore } from "@/store/authStore";

export default function Home() {
  const router = useRouter();

  const { isLoggedIn } = useAuthStore();

  const handleGenerateCampaign = () => {
    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      router.push("/auth");
    }
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
          ✨ AI-Powered Marketing Content Studio
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Generate Complete
          <span className="block text-purple-600 dark:text-purple-400">
            Social Media Campaigns
          </span>
          with AI
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          Create marketing copy, AI-generated visuals, and ready-to-publish
          social media assets from a single prompt. Built for marketers,
          creators, and brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8" onClick={handleGenerateCampaign}>
            Generate Campaign
          </Button>

          <button className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            View Demo
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          No credit card required. Start with 50 free generations.
        </p>
      </section>
      <div className="mt-16 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="px-4 py-2 rounded-lg border">Prompt</div>

        <span>→</span>

        <div className="px-4 py-2 rounded-lg border">AI Copy</div>

        <span>→</span>

        <div className="px-4 py-2 rounded-lg border">AI Visual</div>

        <span>→</span>

        <div className="px-4 py-2 rounded-lg border">Final Asset</div>
      </div>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Everything Required to Build High-Converting Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Sparkles className="w-full h-full" />}
              title="AI Copy Generation"
              description="Generate platform-specific marketing copy tailored to your audience."
            />
            <FeatureCard
              icon={<Image className="w-full h-full" />}
              title="AI Image Generation"
              description="Create high-quality promotional visuals using AI image models."
            />
            <FeatureCard
              icon={<Users className="w-full h-full" />}
              title="Brand Personas"
              description="Maintain consistent messaging with Professional, Witty, and Urgent tones."
            />
            <FeatureCard
              icon={<History className="w-full h-full" />}
              title="Campaign History"
              description="Store, revisit, and regenerate previous marketing campaigns."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Start generating viral content today
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of creators already using ViralGen to 10x their
            social media presence
          </p>
          <Button size="lg" className="px-8" onClick={handleGenerateCampaign}>
            Get started free
          </Button>
        </div>
      </section>
    </div>
  );
}
