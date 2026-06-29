"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [theme, setTheme] = useState("dark");
  const [persona, setPersona] = useState("Professional");
  const [platform, setPlatform] = useState("Instagram");
  const [variation, setVariation] = useState("3");
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      <div className="space-y-8">
        <div className="rounded-xl bg-slate-900 border border-slate-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-5">
            Default Campaign
          </h2>

          <select
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white"
          >
            <option>Professional</option>
            <option>Witty</option>
            <option>Urgent</option>
          </select>

          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white"
          >
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Facebook</option>
          </select>

          <select
            value={variation}
            onChange={(e) => setVariation(e.target.value)}
            className="w-full rounded-lg bg-slate-800 p-3 text-white"
          >
            <option>1</option>
            <option>3</option>
            <option>5</option>
          </select>
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-5">Appearance</h2>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg bg-purple-600 px-6 py-3 text-white"
          >
            Current Theme : {theme}
          </button>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => router.push("/dashboard")}
          className="rounded-xl bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
