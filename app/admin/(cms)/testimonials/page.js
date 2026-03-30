"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ConfirmDialog from "@/app/components/admin/ConfirmDialog";

const btn = "inline-flex items-center gap-2 border-none cursor-pointer no-underline font-semibold transition-all duration-200";
const btnPrimary = `${btn} py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 hover:-translate-y-px`;
const btnSecSm = `${btn} py-1.5 px-3.5 rounded-lg bg-slate-100 text-slate-600 text-xs hover:bg-slate-200 hover:text-slate-900`;
const btnDangerSm = `${btn} py-1.5 px-3.5 rounded-lg bg-red-50 text-red-500 text-xs hover:bg-red-100 hover:text-red-600`;

export default function TestimonialsListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState({ open: false, id: null });

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } finally { setLoading(false); }
  };

  const handleDelete = async () => {
    if (!confirm.id) return;
    await fetch(`/api/testimonials/${confirm.id}`, { method: "DELETE" });
    setConfirm({ open: false, id: null });
    fetchItems();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Testimonials</h2>
        <Link href="/admin/testimonials/new" className={btnPrimary}>+ Add Testimonial</Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-slate-400">Loading...</div>
        ) : (
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Author</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Company</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Content</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Status</th>
                <th className="p-4 text-right border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr><td colSpan={5} className="text-center text-slate-400 p-10">Belum ada testimonial</td></tr>
              ) : items.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50">
                  <td className="py-5 px-4 border-b border-slate-100 text-sm">
                    <div className="flex items-center gap-2.5">
                      {t.avatar && <img src={t.avatar} alt="" className="w-9 h-9 object-cover rounded-full border border-gray-200" />}
                      <div>
                        <div className="font-medium text-slate-700">{t.author}</div>
                        <div className="text-xs text-slate-400">{t.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-slate-500 text-sm">{t.company}</td>
                  <td className="py-5 px-4 border-b border-slate-100 max-w-[280px]">
                    <p className="text-[13px] text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap max-w-[260px]">
                      {t.content?.replace(/<[^>]*>/g, "").slice(0, 80)}...
                    </p>
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-sm">
                    <span className={`inline-block py-1 px-2.5 rounded-full text-xs font-semibold ${t.published ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                      {t.published ? "Published" : "Hidden"}
                    </span>
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-right">
                    <div className="flex gap-1.5 justify-end">
                      <Link href={`/admin/testimonials/${t.id}/edit`} className={btnSecSm}>Edit</Link>
                      <button onClick={() => setConfirm({ open: true, id: t.id })} className={btnDangerSm}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ConfirmDialog isOpen={confirm.open} title="Hapus Testimonial" message="Yakin ingin menghapus testimonial ini?" confirmText="Hapus" onConfirm={handleDelete} onCancel={() => setConfirm({ open: false, id: null })} />
    </div>
  );
}
