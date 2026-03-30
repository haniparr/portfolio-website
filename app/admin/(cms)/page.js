"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, clients: 0, testimonials: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const safeJson = async (res) => {
        if (!res.ok) return null;
        try { return await res.json(); } catch { return null; }
      };
      try {
        const [projRes, clientRes, testiRes] = await Promise.all([
          fetch("/api/projects?limit=1"),
          fetch("/api/clients"),
          fetch("/api/testimonials"),
        ]);
        const [proj, clients, testimonials] = await Promise.all([
          safeJson(projRes), safeJson(clientRes), safeJson(testiRes),
        ]);
        setStats({
          projects: proj?.pagination?.total ?? 0,
          clients: Array.isArray(clients) ? clients.length : 0,
          testimonials: Array.isArray(testimonials) ? testimonials.length : 0,
        });
      } catch (e) {
        console.warn("Dashboard stats fetch failed:", e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const statCards = [
    { href: "/admin/projects", label: "Projects", value: stats.projects, accent: "stat-accent-blue" },
    { href: "/admin/clients", label: "Clients", value: stats.clients, accent: "stat-accent-green" },
    { href: "/admin/testimonials", label: "Testimonials", value: stats.testimonials, accent: "stat-accent-purple" },
  ];

  return (
    <div>
      <h2 className="mb-8 text-2xl font-semibold text-slate-900">Dashboard Overview</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 mb-10">
        {statCards.map((s) => (
          <a key={s.label} href={s.href} className="no-underline">
            <div className={`${s.accent} bg-white text-slate-900 p-6 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg`}>
              <h3 className="text-sm text-slate-500 font-semibold mb-3 uppercase tracking-wide">{s.label}</h3>
              <div className="text-[32px] font-extrabold text-slate-900 tracking-tight">{loading ? "—" : s.value}</div>
              <div className="text-[13px] text-slate-400 mt-2">Total {s.label.toLowerCase()}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-5 text-xl font-semibold text-slate-900">Quick Actions</h3>
        <div className="flex gap-3 flex-wrap">
          <Link href="/admin/projects/new" className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm font-semibold no-underline transition-all duration-200 hover:bg-slate-800 hover:-translate-y-px">
            + New Project
          </Link>
          <Link href="/admin/clients/new" className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm font-semibold no-underline transition-all duration-200 hover:bg-slate-800 hover:-translate-y-px">
            + New Client
          </Link>
          <Link href="/admin/testimonials/new" className="inline-flex items-center gap-2 py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm font-semibold no-underline transition-all duration-200 hover:bg-slate-800 hover:-translate-y-px">
            + New Testimonial
          </Link>
        </div>
      </div>
    </div>
  );
}
