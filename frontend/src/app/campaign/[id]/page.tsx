"use client";

import { useParams } from "next/navigation";
import { Download, RotateCcw, Trash2 } from "lucide-react";

export default function CampaignDetailsPage() {
  const { id } = useParams();

  const campaign = {
    id,
    title: "Nike Shoes Campaign",
    prompt:
      "Create a premium Instagram campaign for Nike running shoes with cinematic lighting.",
    enhancedPrompt:
      "Photorealistic Nike running shoes on wet asphalt, commercial photography, dramatic lighting, ultra detailed, 8K.",
    persona: "Professional",
    platform: "Instagram",
    caption:
      "Run faster. Train harder. Unlock your next personal best with Nike.",
    hashtags:
      "#nike #running #fitness #sports #viral #marketing",
    created: "20 June 2026",
    status: "Completed",
    image: "https://picsum.photos/900/600",
  };

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-3xl font-bold text-white mb-8">
        Campaign Details
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        <img
          src={campaign.image}
          className="rounded-2xl border border-slate-700"
        />

        <div className="space-y-6">

          <div>
            <h2 className="text-slate-400">Campaign</h2>
            <p className="text-white text-xl font-semibold">
              {campaign.title}
            </p>
          </div>

          <div>
            <h2 className="text-slate-400">Prompt</h2>
            <p className="text-white">{campaign.prompt}</p>
          </div>

          <div>
            <h2 className="text-slate-400">
              Enhanced Prompt
            </h2>
            <p className="text-white">
              {campaign.enhancedPrompt}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <h2 className="text-slate-400">
                Persona
              </h2>

              <p className="text-white">
                {campaign.persona}
              </p>
            </div>

            <div>
              <h2 className="text-slate-400">
                Platform
              </h2>

              <p className="text-white">
                {campaign.platform}
              </p>
            </div>

          </div>

          <div>

            <h2 className="text-slate-400">
              Caption
            </h2>

            <p className="text-white">
              {campaign.caption}
            </p>

          </div>

          <div>

            <h2 className="text-slate-400">
              Hashtags
            </h2>

            <p className="text-purple-400">
              {campaign.hashtags}
            </p>

          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 bg-purple-600 px-5 py-3 rounded-xl text-white">

              <Download size={18}/>

              Download

            </button>

            <button className="flex items-center gap-2 border border-slate-600 px-5 py-3 rounded-xl text-white">

              <RotateCcw size={18}/>

              Regenerate

            </button>

            <button className="flex items-center gap-2 border border-red-600 px-5 py-3 rounded-xl text-red-400">

              <Trash2 size={18}/>

              Delete

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}