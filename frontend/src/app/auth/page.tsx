"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function AuthPage() {
  const router = useRouter();

  const { login } = useAuthStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    if (isLogin) {
      login({
        name: identifier || "User",
        email: "demo@viralgen.ai",
        mobile: "9999999999",
      });

      router.push("/dashboard");
    } else {
      login({
        name,
        email,
        mobile,
      });

      router.push("/dashboard");
    }
  };
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-[#111827] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#1F2937] rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          ViralGen AI
        </h1>

        <p className="text-gray-400 text-center mt-2">
          {isLogin ? "Welcome Back" : "Create your account"}
        </p>

        {/* Tabs */}

        <div className="flex mt-8 bg-[#111827] rounded-xl p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg transition ${
              isLogin ? "bg-purple-600 text-white" : "text-gray-400"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg transition ${
              !isLogin ? "bg-purple-600 text-white" : "text-gray-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {!isLogin && (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
              />

              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile Number"
                className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
              />
            </>
          )}

          {isLogin && (
            <input
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Email / Mobile / Username"
              className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
            />
          )}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
          />

          {!isLogin && (
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none"
            />
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-lg py-3 text-white font-semibold"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </div>
      </div>
    </main>
  );
}
