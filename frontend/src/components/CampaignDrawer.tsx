"use client";

import { X, Download, Trash2 } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  prompt: string;
  persona: string;
  platform: string;
  date: string;
  image: string;
}

interface Props {
  campaign: Campaign | null;
  open: boolean;
  onClose: () => void;
}

export default function CampaignDrawer({
  campaign,
  open,
  onClose,
}: Props) {
  if (!open || !campaign) return null;

  return (
    <>
      {/* Background */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 h-screen w-[430px] bg-slate-900 border-l border-slate-700 z-50 overflow-y-auto">

        <div className="flex items-center justify-between p-6 border-b border-slate-700">

          <h2 className="text-xl font-semibold text-white">
            Campaign Details
          </h2>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>

        </div>

        <div className="p-6 space-y-6">

          <img
            src={campaign.image}
            className="rounded-xl w-full"
          />

          <div>

            <h3 className="text-sm text-slate-400">
              Campaign
            </h3>

            <p className="text-white font-semibold mt-1">
              {campaign.name}
            </p>

          </div>

          <div>

            <h3 className="text-sm text-slate-400">
              Prompt
            </h3>

            <p className="text-white mt-1">
              {campaign.prompt}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <h3 className="text-sm text-slate-400">
                Persona
              </h3>

              <p className="text-white mt-1">
                {campaign.persona}
              </p>
            </div>

            <div>
              <h3 className="text-sm text-slate-400">
                Platform
              </h3>

              <p className="text-white mt-1">
                {campaign.platform}
              </p>
            </div>

          </div>

          <div>

            <h3 className="text-sm text-slate-400">
              Created
            </h3>

            <p className="text-white mt-1">
              {campaign.date}
            </p>

          </div>

          <div className="flex gap-3">

            <button className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-purple-600 py-3 text-white">

              <Download size={18} />

              Download

            </button>

            <button className="flex justify-center items-center rounded-xl border border-red-500 text-red-400 px-4">

              <Trash2 size={18} />

            </button>

          </div>

        </div>

      </div>
    </>
  );
}