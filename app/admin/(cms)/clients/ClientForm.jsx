"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/app/components/admin/ImageUpload";

const btn = "inline-flex items-center gap-2 border-none cursor-pointer no-underline font-semibold transition-all duration-200";
const btnPrimary = `${btn} py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 hover:-translate-y-px`;
const btnSecondary = `${btn} py-2.5 px-6 rounded-xl bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 hover:text-slate-900`;
const inputClass = "w-full py-3 px-4 border border-slate-200 rounded-[10px] text-sm bg-slate-50 text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-[3px] focus:ring-blue-500/10";

const DEFAULT = { name: "", order: 0, published: true, logo: "" };

export default function ClientForm({ clientId }) {
  const router = useRouter();
  const isEdit = Boolean(clientId);
  const [form, setForm] = useState(DEFAULT);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  useEffect(() => {
    if (!isEdit) return;
    fetch(`/api/clients`)
      .then((r) => r.json())
      .then((clients) => {
        const found = clients.find((c) => c.id === clientId);
        if (found) setForm({ name: found.name, order: found.order, published: found.published, logo: found.logo || "" });
      })
      .finally(() => setFetching(false));
  }, [clientId]);

  const field = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(isEdit ? `/api/clients/${clientId}` : "/api/clients", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push("/admin/clients");
      else alert("Gagal menyimpan.");
    } finally { setLoading(false); }
  };

  if (fetching) return <div className="p-10 text-slate-400">Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{isEdit ? "Edit Client" : "New Client"}</h2>
        <button className={btnSecondary} onClick={() => router.push("/admin/clients")}>← Back</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl border border-slate-200 p-7">
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-slate-700 text-sm">Client Name *</label>
            <input value={form.name} onChange={(e) => field("name", e.target.value)} required placeholder="e.g. Google" className={inputClass} />
          </div>
          <ImageUpload label="Logo (PNG/SVG recommended)" value={form.logo} onChange={(url) => field("logo", url)} />
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Display Order</label>
              <input type="number" value={form.order} onChange={(e) => field("order", parseInt(e.target.value) || 0)} className={inputClass} />
              <div className="text-xs text-slate-400 mt-1">Lower number = show first</div>
            </div>
            <div className="mb-5 flex items-end pb-4">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" checked={form.published} onChange={(e) => field("published", e.target.checked)} className="w-4 h-4 cursor-pointer" />
                Published (tampil di website)
              </label>
            </div>
          </div>
          <div className="flex gap-2.5 pt-5 border-t border-slate-100 mt-5">
            <button type="submit" className={btnPrimary} disabled={loading}>{loading ? "Menyimpan..." : isEdit ? "Update Client" : "Add Client"}</button>
            <button type="button" className={btnSecondary} onClick={() => router.push("/admin/clients")}>Batal</button>
          </div>
        </div>
      </form>
    </div>
  );
}
