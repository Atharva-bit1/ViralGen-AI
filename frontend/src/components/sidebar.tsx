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
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } h-full shrink-0 border-r border-slate-800 bg-slate-900 transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      {/* Sidebar Header */}

      <div className="h-16 border-b border-slate-800 bg-slate-900">
        <div className="flex h-full items-center justify-between px-4">
          {/* Left Side */}

          <div className="flex items-center gap-3">
            <button className="rounded-lg p-2 transition-colors hover:bg-slate-800">
              <Menu size={20} className="text-slate-300" />
            </button>

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
        <button>
          <Search size={18} />
          Search Campaign
        </button>
      </nav>

      {/* Footer */}
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
