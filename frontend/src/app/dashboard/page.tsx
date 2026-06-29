"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppStore } from "@/store/appStore.ts";
import { Button } from "@/components/Button.tsx";
import { FormTextarea } from "@/components/FormInput.tsx";
import { SelectorGroup } from "@/components/SelectorGroup.tsx";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

import React from "react";
import { SummaryCard } from "@/components/SummaryCard";

import {
  Smartphone,
  Palette,
  Images,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import CampaignDrawer from "@/components/CampaignDrawer";



export default function Dashboard() {
  const router = useRouter();

  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/auth");
    }
  }, [isLoggedIn, router]);

  const {
    prompt,
    setPrompt,
    persona,
    setPersona,
    platform,
    setPlatform,
    variations,
    setVariations,
    setJobId,
  } = useAppStore();

  const [isLoading, setIsLoading] = useState(false);
  

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a campaign prompt");
      return;
    }

    setIsLoading(true);
    const jobId = `JOB-${Date.now()}`;
    setJobId(jobId);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/status");
    }, 500);
  };
  if (!isLoggedIn) {
    return null;
  }

  const mockCampaigns = [
    {
      id: "1",
      name: "Nike Shoes",
      prompt:
        "Create a premium Instagram advertisement for Nike running shoes.",
      persona: "Professional",
      platform: "Instagram",
      date: "20 June 2026",
      image: "https://picsum.photos/600/600?random=1",
    },
    {
      id: "2",
      name: "Protein Shake",
      prompt: "Create a Facebook campaign for a protein shake.",
      persona: "Witty",
      platform: "Facebook",
      date: "18 June 2026",
      image: "https://picsum.photos/600/600?random=2",
    },
    {
      id: "3",
      name: "Laptop Sale",
      prompt: "LinkedIn campaign for premium laptops.",
      persona: "Professional",
      platform: "LinkedIn",
      date: "15 June 2026",
      image: "https://picsum.photos/600/600?random=3",
    },
  ];
  return (
    <div className="flex gap-6 p-6 bg-slate-900 bg-slate-900bg-white dark:bg-gray-900 py-4 px-6">
      <div className="w-full max-w-screen-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          New Campaign
        </h1>
        <p className="text-gray-500 mt-2">
          Create high-converting marketing content in seconds with AI.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          {/* Left Side - Campaign Settings */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 min-h-[720px] rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Campaign Settings
            </h2>

            <div className="space-y-4">
              <FormTextarea
                label="Product/Campaign Prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your product, offer, or campaign idea..."
                rows={4}
              />

              <SelectorGroup
                label="Brand Persona"
                value={persona}
                onChange={(value) => setPersona(value as any)}
                options={[
                  { value: "professional", label: "Professional" },
                  { value: "witty", label: "Witty" },
                  { value: "urgent", label: "Urgent" },
                ]}
              />

              <SelectorGroup
                label="Platform"
                value={platform}
                onChange={(value) => setPlatform(value as any)}
                options={[
                  { value: "instagram", label: "Instagram" },
                  { value: "linkedin", label: "LinkedIn" },
                  { value: "facebook", label: "Facebook" },
                ]}
              />

              <SelectorGroup
                label="Number of Variations"
                value={String(variations)}
                onChange={(value) => setVariations(parseInt(value))}
                options={[
                  { value: "1", label: "1" },
                  { value: "3", label: "3" },
                  { value: "5", label: "5" },
                ]}
              />

              <Button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                size="full"
                className="py-3"
              >
                {isLoading ? "Generating..." : "Generate Campaign"}
              </Button>
            </div>
          </div>

          {/* Right Side - Campaign Summary */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 min-h-[720px] rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Campaign Summary
            </h2>

            <div className="space-y-4">
              <SummaryCard
                icon={<Smartphone size={18} />}
                title="Platform"
                value={platform.charAt(0).toUpperCase() + platform.slice(1)}
              />

              <SummaryCard
                icon={<Palette size={18} />}
                title="Brand Persona"
                value={persona.charAt(0).toUpperCase() + persona.slice(1)}
              />

              <SummaryCard
                icon={<Images size={18} />}
                title="Assets"
                value={`${variations} Image${variations > 1 ? "s" : ""} • ${variations} Caption${variations > 1 ? "s" : ""}`}
              />

              <SummaryCard
                icon={<Clock size={18} />}
                title="Estimated Time"
                value="15–20 sec"
              />
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-400" size={18} />

                <h3 className="font-semibold text-white">What Happens Next?</h3>
              </div>

              <div className="space-y-3">
                {[
                  "Prompt Enhancement",
                  "Marketing Copy Generation",
                  "AI Image Generation",
                  "Asset Composition",
                ].map((step) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-lg bg-slate-800/40 p-3"
                  >
                    <CheckCircle2 size={18} className="text-green-400" />

                    <span className="text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
