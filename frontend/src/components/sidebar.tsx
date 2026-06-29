"use client";

import Link from "next/link";
import {
  Sparkles,
  History,
  Palette,
  BarChart3,
  Settings,
  Search,
  Plus,
  Menu,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";
type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const { user } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const recentCampaigns = [
    { id: "1", name: "Nike Shoes" },
    { id: "2", name: "Summer Sale" },
    { id: "3", name: "Protein Shake" },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } flex h-full shrink-0 flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      {/* Sidebar Header */}

      <div className="h-16 border-b border-slate-800 ">
        <div className="flex h-full items-center gap-3 px-4">
          {/* Left Side */}

          <div
            className={`flex w-full ${
              collapsed
                ? "flex-col items-center justify-center gap-3"
                : "items-center "
            }`}
          >
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="rounded-lg p-2 transition hover:bg-slate-800"
            >
              <Menu size={20} className="text-slate-300" />
            </button>

            {!collapsed ? (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
                  <span className="text-lg font-bold text-white">V</span>
                </div>

                <div>
                  <h1 className="text-base font-semibold text-white">
                    ViralGen AI
                  </h1>

                  <p className="text-xs text-slate-400">Marketing Studio</p>
                </div>
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
                <span className="text-lg font-bold text-white">V</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-3 space-y-2">
        {/* New Campaign */}

        <Link
          href="/dashboard"
          className={`flex items-center rounded-xl px-3 py-3 transition-all duration-300
    ${
      collapsed
        ? "justify-center"
        : "gap-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white"
    }
    hover:bg-slate-800`}
        >
          <Plus size={18} />

          {!collapsed && <span>New Campaign</span>}
        </Link>

        {/* Search */}

        <button
          className={`w-full flex items-center rounded-xl px-3 py-3
      hover:bg-slate-800 transition-all
      ${collapsed ? "justify-center" : "gap-3"}`}
        >
          <Search size={18} className="text-slate-300" />

          {!collapsed && (
            <span className="text-slate-300">Search Campaign</span>
          )}
        </button>
      </nav>
      {!collapsed && (
        <>
          <div className="my-5 border-t border-slate-800" />

          <p className="px-3 mb-2 text-[11px] uppercase tracking-widest text-slate-500">
            Recent Campaigns
          </p>

          <div className="mt-3 space-y-1">
            {recentCampaigns.map((campaign) => (
              <Link
                key={campaign.id}
                href={`/campaign/${campaign.id}`}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-slate-300 transition hover:bg-slate-800"
              >
                <History size={16} />
                <span className="truncate">{campaign.name}</span>
              </Link>
            ))}
          </div>
        </>
      )}
      <div className="my-5 border-t border-slate-800" />
      <div className="px-3 pb-3">
        <Link
          href="/settings"
          className={`flex w-full items-center rounded-xl px-3 py-3 transition hover:bg-slate-800 ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <Settings size={18} className="text-slate-300" />

          {!collapsed && <span className="text-slate-300">Settings</span>}
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-slate-800 p-5">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
            {mounted ? user?.name?.charAt(0).toUpperCase() || "U" : "U"}
          </div>

          {!collapsed && (
            <div>
              <p className="font-medium text-white">
                {mounted ? user?.name || "User" : "User"}
              </p>

              <p className="text-sm text-slate-400">
                {mounted ? `@${user?.username || "username"}` : "@username"}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
