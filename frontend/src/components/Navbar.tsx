"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Moon, Sun, Menu } from "lucide-react";
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
    <header
      className=" h-16
  border-b
  border-slate-800
  bg-slate-900
  px-6
  flex
  items-center
  justify-end
  transition-all
  duration-300"
    >
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}

        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-slate-300" />
          ) : (
            <Moon className="h-5 w-5 text-slate-300" />
          )}
        </button>

        {/* Notification */}

        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
          <Bell size={18} className="text-slate-300" />
        </button>

        {/* User */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-700 px-3 py-2 hover:bg-slate-800 transition-colors">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 font-semibold text-white">
            A
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-white">Atharva</p>

            <p className="text-xs text-slate-400">Developer</p>
          </div>
        </button>
      </div>
    </header>
  );
}
