"use client";

import Link from "next/link";
import {
  Sparkles,
  History,
  Palette,
  BarChart3,
  Settings,
  Plus,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white">ViralGen AI</h1>

        <p className="text-sm text-slate-400 mt-1">Marketing Studio</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600/20 text-purple-400"
        >
          <Plus size={18} />
          New Campaign
        </Link>

        <Link
          href="/history"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800"
        >
          <History size={18} />
          Campaign History
        </Link>

        <Link
          href="/personas"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800"
        >
          <Palette size={18} />
          Personas
        </Link>

        <Link
          href="/analytics"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800"
        >
          <BarChart3 size={18} />
          Analytics
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800"
        >
          <Settings size={18} />
          Settings
        </Link>
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
            A
          </div>

          <div>
            <p className="text-white text-sm font-medium">Atharva</p>

            <p className="text-slate-400 text-xs">Creator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
