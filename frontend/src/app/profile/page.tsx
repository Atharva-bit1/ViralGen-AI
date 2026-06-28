"use client";

import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const { user, login } = useAuthStore();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/auth");
      return;
    }

    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
    setMobile(user.mobile);
  }, [user, router]);

  if (!user) return null;

  const handleSave = () => {
    login({
      ...user,
      name,
      username,
      email,
      mobile,
    });

    router.push("/dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">My Profile</h1>

        <div className="flex flex-col items-center mb-8">
          <div className="w-28 h-28 rounded-full bg-purple-600 flex items-center justify-center text-4xl font-bold">
            {name.charAt(0).toUpperCase()}
          </div>

          <button className="mt-4 text-sm text-purple-400">
            Change Photo (Coming Soon)
          </button>
        </div>

        <div className="grid gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 rounded-lg bg-slate-800 p-3 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 rounded-lg bg-slate-800 p-3 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 rounded-lg bg-slate-800 p-3 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Mobile Number
            </label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full mt-2 rounded-lg bg-slate-800 p-3 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <Button className="mt-8 w-full" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}
