"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TiptapEditor from "@/app/components/admin/TiptapEditor";
import ImageUpload from "@/app/components/admin/ImageUpload";

const btn = "inline-flex items-center gap-2 border-none cursor-pointer no-underline font-semibold transition-all duration-200";
const btnPrimary = `${btn} py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 hover:-translate-y-px`;
const btnSecondary = `${btn} py-2.5 px-6 rounded-xl bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 hover:text-slate-900`;
const inputClass = "w-full py-3 px-4 border border-slate-200 rounded-[10px] text-sm bg-slate-50 text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-[3px] focus:ring-blue-500/10";

const DEFAULT = { author: "", role: "", company: "", content: "", avatar: "", published: true, order: 0 };

export default function TestimonialForm({ testimonialId }) {
  const router = useRouter();
  const isEdit = Boolean(testimonialId);
  const [form, setForm] = useState(DEFAULT);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  useEffect(() => {
    if (!isEdit) return;
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((items) => {
        const found = items.find((t) => t.id === testimonialId);
        if (found) setForm({ author: found.author, role: found.role || "", company: found.company || "", content: found.content, avatar: found.avatar || "", published: found.published, order: found.order });
      })
      .finally(() => setFetching(false));
  }, [testimonialId]);

  const field = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(isEdit ? `/api/testimonials/${testimonialId}` : "/api/testimonials", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push("/admin/testimonials");
      else alert("Gagal menyimpan.");
    } finally { setLoading(false); }
  };

  if (fetching) return <div className="p-10 text-slate-400">Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{isEdit ? "Edit Testimonial" : "New Testimonial"}</h2>
        <button className={btnSecondary} onClick={() => router.push("/admin/testimonials")}>← Back</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl border border-slate-200 p-7">
          <div className="text-base font-semibold text-slate-900 mb-4">Author Info</div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Name *</label>
              <input value={form.author} onChange={(e) => field("author", e.target.value)} required placeholder="Nama client" className={inputClass} />
            </div>
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Role / Position</label>
              <input value={form.role} onChange={(e) => field("role", e.target.value)} placeholder="CEO, Designer, dll" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Company</label>
              <input value={form.company} onChange={(e) => field("company", e.target.value)} className={inputClass} />
            </div>
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Display Order</label>
              <input type="number" value={form.order} onChange={(e) => field("order", parseInt(e.target.value) || 0)} className={inputClass} />
            </div>
          </div>

          <ImageUpload label="Avatar / Photo" value={form.avatar} onChange={(url) => field("avatar", url)} />

          <div className="text-base font-semibold text-slate-900 mb-4 mt-5">Testimonial Content</div>
          <TiptapEditor content={form.content} onChange={(html) => field("content", html)} />

          <div className="mt-5">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={form.published} onChange={(e) => field("published", e.target.checked)} className="w-4 h-4 cursor-pointer" />
              Published (tampil di website)
            </label>
          </div>

          <div className="flex gap-2.5 pt-5 border-t border-slate-100 mt-5">
            <button type="submit" className={btnPrimary} disabled={loading}>{loading ? "Menyimpan..." : isEdit ? "Update" : "Add Testimonial"}</button>
            <button type="button" className={btnSecondary} onClick={() => router.push("/admin/testimonials")}>Batal</button>
          </div>
        </div>
      </form>
    </div>
  );
}
