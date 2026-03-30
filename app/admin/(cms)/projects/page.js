"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ConfirmDialog from "@/app/components/admin/ConfirmDialog";

// Shared button styles
const btn = "inline-flex items-center gap-2 border-none cursor-pointer no-underline font-semibold transition-all duration-200";
const btnPrimary = `${btn} py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 hover:-translate-y-px`;
const btnSecSm = `${btn} py-1.5 px-3.5 rounded-lg bg-slate-100 text-slate-600 text-xs hover:bg-slate-200 hover:text-slate-900`;
const btnDangerSm = `${btn} py-1.5 px-3.5 rounded-lg bg-red-50 text-red-500 text-xs hover:bg-red-100 hover:text-red-600`;

const TABS = [
  { value: "web-development", label: "Web Developer", badge: "bg-purple-100 text-purple-700" },
  { value: "graphic-design", label: "Graphic Design", badge: "bg-orange-100 text-orange-700" },
  { value: "uiux", label: "UI/UX", badge: "bg-blue-100 text-blue-700" },
];

function ProjectTable({ category }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [confirm, setConfirm] = useState({ open: false, id: null });

  useEffect(() => { fetchProjects(); }, [search, page]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page, limit: 12, category, ...(search && { search }) });
      const res = await fetch(`/api/projects?${params}`);
      const data = await res.json();
      setProjects(data.projects || []);
      setTotalPages(data.pagination?.totalPages || 1);
    } finally { setLoading(false); }
  };

  const handleDelete = async () => {
    if (!confirm.id) return;
    await fetch(`/api/projects/${confirm.id}`, { method: "DELETE" });
    setConfirm({ open: false, id: null });
    fetchProjects();
  };

  const toggleFeatured = async (p) => {
    await fetch(`/api/projects/${p.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ featured: !p.featured }),
    });
    fetchProjects();
  };

  return (
    <div>
      <div className="flex gap-2.5 mb-4">
        <input
          placeholder="Cari project..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="flex-1 py-2.5 px-4 border border-slate-200 rounded-[10px] text-sm bg-slate-50 text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-[3px] focus:ring-blue-500/10"
        />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-slate-400">Loading...</div>
        ) : (
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Project</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Year</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Status</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Homepage</th>
                <th className="p-4 text-right border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr><td colSpan={5} className="text-center text-slate-400 p-10">Belum ada project</td></tr>
              ) : projects.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50">
                  <td className="py-5 px-4 border-b border-slate-100 text-slate-700 text-sm">
                    <div className="flex items-center gap-3">
                      {p.thumbnail && <img src={p.thumbnail} alt="" className="w-11 h-8 object-cover rounded border border-gray-200" />}
                      <div>
                        <div className="font-medium text-slate-900">{p.title}</div>
                        <div className="text-xs text-slate-400 font-mono">{p.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-slate-700 text-sm">{p.year}</td>
                  <td className="py-5 px-4 border-b border-slate-100 text-sm">
                    <span className={`inline-block py-1 px-2.5 rounded-full text-xs font-semibold ${p.published ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                      {p.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-sm">
                    <button
                      onClick={() => toggleFeatured(p)}
                      title={p.featured ? "Tampil di Homepage — klik untuk sembunyikan" : "Tidak tampil di Homepage — klik untuk tampilkan"}
                      className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold cursor-pointer border transition-all duration-200 ${
                        p.featured
                          ? "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200"
                          : "bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200 hover:text-slate-600"
                      }`}
                    >
                      <span>{p.featured ? "★" : "☆"}</span>
                      <span>{p.featured ? "Featured" : "Hidden"}</span>
                    </button>
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-right">
                    <div className="flex gap-1.5 justify-end">
                      <Link href={`/admin/projects/${p.id}/edit`} className={btnSecSm}>Edit</Link>
                      <button onClick={() => setConfirm({ open: true, id: p.id })} className={btnDangerSm}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-4">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className={btnSecSm}>← Prev</button>
          <span className="py-1.5 px-3 text-[13px] text-slate-500">Page {page} / {totalPages}</span>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className={btnSecSm}>Next →</button>
        </div>
      )}

      <ConfirmDialog isOpen={confirm.open} title="Hapus Project" message="Yakin ingin menghapus project ini? Tindakan tidak dapat dibatalkan." confirmText="Hapus" onConfirm={handleDelete} onCancel={() => setConfirm({ open: false, id: null })} />
    </div>
  );
}

export default function ProjectsListPage() {
  const [activeTab, setActiveTab] = useState("web-development");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Projects</h2>
        <Link href="/admin/projects/new" className={btnPrimary}>+ New Project</Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 mb-6 border-b border-slate-200">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`py-2.5 px-6 text-[14px] font-semibold cursor-pointer transition-all duration-200 border-b-2 -mb-px bg-transparent
              ${activeTab === tab.value
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-400 hover:text-slate-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Per-tab table — each tab has isolated state, hidden when inactive */}
      {TABS.map((tab) => (
        <div key={tab.value} className={activeTab === tab.value ? "block" : "hidden"}>
          <ProjectTable category={tab.value} />
        </div>
      ))}
    </div>
  );
}
