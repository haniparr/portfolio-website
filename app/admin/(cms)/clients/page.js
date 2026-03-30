"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ConfirmDialog from "@/app/components/admin/ConfirmDialog";

const btn = "inline-flex items-center gap-2 border-none cursor-pointer no-underline font-semibold transition-all duration-200";
const btnPrimary = `${btn} py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 hover:-translate-y-px`;
const btnSecSm = `${btn} py-1.5 px-3.5 rounded-lg bg-slate-100 text-slate-600 text-xs hover:bg-slate-200 hover:text-slate-900`;
const btnDangerSm = `${btn} py-1.5 px-3.5 rounded-lg bg-red-50 text-red-500 text-xs hover:bg-red-100 hover:text-red-600`;

export default function ClientsListPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState({ open: false, id: null });

  useEffect(() => { fetchClients(); }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/clients");
      const data = await res.json();
      setClients(Array.isArray(data) ? data : []);
    } finally { setLoading(false); }
  };

  const handleDelete = async () => {
    if (!confirm.id) return;
    await fetch(`/api/clients/${confirm.id}`, { method: "DELETE" });
    setConfirm({ open: false, id: null });
    fetchClients();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Clients</h2>
        <Link href="/admin/clients/new" className={btnPrimary}>+ Add Client</Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-slate-400">Loading...</div>
        ) : (
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide w-[60px]">Order</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide w-[80px]">Logo</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Name</th>
                <th className="p-4 text-left border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Status</th>
                <th className="p-4 text-right border-b-2 border-slate-200 text-slate-500 font-semibold text-[13px] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr><td colSpan={5} className="text-center text-slate-400 p-10">Belum ada client</td></tr>
              ) : clients.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="py-5 px-4 border-b border-slate-100 text-slate-400 text-[13px]">{c.order}</td>
                  <td className="py-5 px-4 border-b border-slate-100">
                    {c.logo ? (
                      <img src={c.logo} alt={c.name} className="w-11 h-8 object-contain rounded border border-gray-200" />
                    ) : (
                      <div className="w-11 h-8 bg-gray-100 rounded flex items-center justify-center text-[10px] text-gray-400">No logo</div>
                    )}
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-slate-700 text-sm font-medium">{c.name}</td>
                  <td className="py-5 px-4 border-b border-slate-100 text-sm">
                    <span className={`inline-block py-1 px-2.5 rounded-full text-xs font-semibold ${c.published ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                      {c.published ? "Published" : "Hidden"}
                    </span>
                  </td>
                  <td className="py-5 px-4 border-b border-slate-100 text-right">
                    <div className="flex gap-1.5 justify-end">
                      <Link href={`/admin/clients/${c.id}/edit`} className={btnSecSm}>Edit</Link>
                      <button onClick={() => setConfirm({ open: true, id: c.id })} className={btnDangerSm}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ConfirmDialog isOpen={confirm.open} title="Hapus Client" message="Yakin ingin menghapus client ini?" confirmText="Hapus" onConfirm={handleDelete} onCancel={() => setConfirm({ open: false, id: null })} />
    </div>
  );
}
