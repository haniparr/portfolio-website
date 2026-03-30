"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });
      if (result?.error) {
        setError("Email atau password salah");
      } else {
        router.push("/admin");
      }
    } catch {
      setError("Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-md w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-sm">
          Sign in to access your dashboard
        </p>
      </div>

      {registered && (
        <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg mb-5 text-sm text-center">
          Account created successfully! Please login.
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-800 p-3 rounded-lg mb-5 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700 text-sm">
            Email Address
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            placeholder="name@company.com"
            className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700 text-sm">
            Password
          </label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            placeholder="••••••••"
            className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10 text-gray-900"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-gray-900 text-white border-none rounded-lg text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
