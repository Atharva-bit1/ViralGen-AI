"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Moon, Sun } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { isDark, setIsDark } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(darkMode);
    applyTheme(darkMode);
  }, []);

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    applyTheme(newDarkMode);
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  if (!mounted) return null;

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      
        <header className="h-20 border-b border-slate-800 bg-slate-950 px-8 flex items-center justify-between">
          {/* Left */}

          <div>
            <h1 className="text-2xl font-bold text-white">New Campaign</h1>

            <p className="text-sm text-slate-400 mt-1">
              Create AI-powered marketing assets
            </p>
          </div>

          {/* Right */}

          <div className="flex items-center gap-4">
            {/* Theme */}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* Notification */}

            <button
              className="w-11 h-11 rounded-xl border border-slate-800
      hover:bg-slate-800 transition"
            >
              <Bell size={20} />
            </button>

            {/* User */}

            <button
              className="flex items-center gap-3 rounded-xl
      border border-slate-800 px-3 py-2
      hover:bg-slate-800 transition"
            >
              <div
                className="w-9 h-9 rounded-full bg-gradient-to-br
      from-purple-500 to-violet-600
      flex items-center justify-center
      text-white font-semibold"
              >
                A
              </div>

              <div className="text-left">
                <p className="text-sm text-white font-medium">Atharva</p>

                <p className="text-xs text-slate-400">Creator</p>
              </div>
            </button>
          </div>
        </header>
      
    </nav>
  );
}
