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
    <aside className="w-72 h-full shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-7 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-bold">V</span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              ViralGen AI
            </h1>

            <p className="text-sm text-slate-400">Marketing Studio</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        <Link
          href="/dashboard"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 font-medium shadow-lg hover:shadow-purple-600/30 transition-all duration-300"
        >
          <Plus size={18} />
          New Campaign
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
