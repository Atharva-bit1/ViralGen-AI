"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppStore } from "@/store/appStore";
import { Button } from "@/components/Button";
import { FormTextarea } from "@/components/FormInput";
import { SelectorGroup } from "@/components/SelectorGroup";

export default function Dashboard() {
  const router = useRouter();
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          New Campaign
        </h1>
        <p className="text-gray-500 mt-2">
          Create high-converting marketing content in seconds with AI.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Campaign Settings */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Campaign Settings
            </h2>

            <div className="space-y-6">
              <FormTextarea
                label="Product/Campaign Prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your product, offer, or campaign idea..."
                rows={6}
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
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Campaign Summary
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <p className="text-sm text-gray-500">Platform</p>
                <p className="font-medium capitalize">{platform}</p>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <p className="text-sm text-gray-500">Persona</p>
                <p className="font-medium capitalize">{persona}</p>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <p className="text-sm text-gray-500">Variations</p>
                <p className="font-medium">{variations}</p>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <p className="text-sm text-gray-500">Estimated Assets</p>
                <p className="font-medium">
                  {variations} Images • {variations} Captions
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <p className="text-sm text-gray-500">Estimated Time</p>
                <p className="font-medium">~15-20 seconds</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                What Happens Next?
              </h3>

              <div className="space-y-3 text-sm">
                <div>✓ Prompt Enhancement</div>

                <div>✓ Marketing Copy Generation</div>

                <div>✓ AI Image Generation</div>

                <div>✓ Asset Composition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
