"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sparkles, Moon, Sun, Menu } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { user, logout } = useAuthStore();
  const { isDark, setIsDark } = useAppStore();
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  const handleLogout = () => {
    logout();
    window.location.href = "/";
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

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-3 rounded-xl border border-slate-700 px-3 py-2 hover:bg-slate-800 transition-colors"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 font-semibold text-white">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="text-left">
              <p className="text-sm font-medium text-white">
                {user?.name || "User"}
              </p>

              <p className="text-xs text-slate-400">Member</p>
            </div>
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-700 bg-slate-900 shadow-xl z-50">
              <button
                className="w-full px-4 py-3 text-left text-sm text-white hover:bg-slate-800"
                onClick={() => router.push("/profile")}
              >
                Profile
              </button>

              <button
                className="w-full px-4 py-3 text-left text-sm text-white hover:bg-slate-800"
                onClick={toggleTheme}
              >
                {isDark ? "Light Theme" : "Dark Theme"}
              </button>

              <button
                className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-slate-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
