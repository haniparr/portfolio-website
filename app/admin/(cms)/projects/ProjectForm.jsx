"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TiptapEditor from "@/app/components/admin/TiptapEditor";
import ImageUpload from "@/app/components/admin/ImageUpload";

const btn = "inline-flex items-center gap-2 border-none cursor-pointer no-underline font-semibold transition-all duration-200";
const btnPrimary = `${btn} py-2.5 px-6 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 hover:-translate-y-px`;
const btnSecondary = `${btn} py-2.5 px-6 rounded-xl bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 hover:text-slate-900`;
const btnSecSm = `${btn} py-1.5 px-3.5 rounded-lg bg-slate-100 text-slate-600 text-xs hover:bg-slate-200 hover:text-slate-900`;
const btnDangerSm = `${btn} py-1.5 px-3.5 rounded-lg bg-red-50 text-red-500 text-xs hover:bg-red-100 hover:text-red-600`;
const inputClass = "w-full py-3 px-4 border border-slate-200 rounded-[10px] text-sm bg-slate-50 text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-[3px] focus:ring-blue-500/10";

const CATEGORIES = [
  { value: "web-development", label: "Web Development" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "uiux", label: "UI/UX" },
];

const DEFAULT_FORM = {
  title: "", slug: "", subtitle: "", description: "", showcaseDescription: "", category: "web-development",
  platform: "", type: "",
  year: new Date().getFullYear().toString(), services: "", thumbnail: "",
  image: "", marqueeText: "", url: "", featured: false, published: true, order: 0,
};

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ProjectForm({ projectId }) {
  const router = useRouter();
  const isEdit = Boolean(projectId);
  const [form, setForm] = useState(DEFAULT_FORM);
  const [sections, setSections] = useState([]);
  const [credits, setCredits] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [uploadingSection, setUploadingSection] = useState(null);
  const [slugManual, setSlugManual] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    fetch(`/api/projects/${projectId}`)
      .then((r) => r.json())
      .then((data) => {
        setForm({
          title: data.title || "", slug: data.slug || "", subtitle: data.subtitle || "",
          description: data.description || "", showcaseDescription: data.showcaseDescription || "", category: data.category || "web-development",
          platform: data.platform || "", type: data.type || "",
          year: data.year || "", services: (data.services || []).join(", "),
          thumbnail: data.thumbnail || "", image: data.image || "",
          marqueeText: data.marqueeText || "", url: data.url || "",
          featured: data.featured || false, published: data.published ?? true, order: data.order || 0,
        });
        setSections(data.sections || []);
        setCredits(data.credits || []);
        setFrameworks(data.frameworks ? JSON.parse(data.frameworks) : []);
        setSlugManual(true);
      })
      .finally(() => setFetching(false));
  }, [projectId]);

  const field = (key, val, extra = {}) => setForm((f) => ({ ...f, [key]: val, ...extra }));
  const handleTitleChange = (val) => {
    if (!slugManual) field("title", val, { slug: slugify(val) });
    else field("title", val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        ...form,
        services: form.services.split(",").map((s) => s.trim()).filter(Boolean),
        frameworks: frameworks.length ? JSON.stringify(frameworks) : null,
        sections: sections.map((s, i) => ({ title: s.title, description: s.description, images: s.images || [], order: i })),
        credits: credits.map((c) => ({ name: c.name, role: c.role })),
      };
      const res = await fetch(isEdit ? `/api/projects/${projectId}` : "/api/projects", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) router.push("/admin/projects");
      else alert("Gagal menyimpan. Coba lagi.");
    } finally { setLoading(false); }
  };

  const uploadSectionImages = async (e, idx) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploadingSection(idx);
    try {
      const urls = [];
      for (const file of files) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (data.success) urls.push(data.url);
      }
      setSections((prev) => {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], images: [...(updated[idx].images || []), ...urls] };
        return updated;
      });
    } finally { setUploadingSection(null); }
  };

  if (fetching) return <div className="p-10 text-slate-400">Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{isEdit ? "Edit Project" : "New Project"}</h2>
        <button className={btnSecondary} onClick={() => router.push("/admin/projects")}>← Back</button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-4">
          <div className="text-base font-semibold text-slate-900 mb-4">Basic Info</div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Title *</label>
              <input value={form.title} onChange={(e) => handleTitleChange(e.target.value)} required className={inputClass} />
            </div>
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Category *</label>
              <select value={form.category} onChange={(e) => field("category", e.target.value)} className={inputClass}>
                {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Slug *</label>
              <input value={form.slug} onChange={(e) => { setSlugManual(true); field("slug", e.target.value); }} required className={`${inputClass} font-mono`} />
            </div>
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Year *</label>
              <input value={form.year} onChange={(e) => field("year", e.target.value)} required className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Platform</label>
              <input value={form.platform} onChange={(e) => field("platform", e.target.value)} placeholder="Misal: React, WordPress" className={inputClass} />
            </div>
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-slate-700 text-sm">Type</label>
              <select value={form.type} onChange={(e) => field("type", e.target.value)} className={inputClass}>
                <option value="">(None)</option>
                <option value="desktop">Desktop</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-slate-700 text-sm">Subtitle</label>
            <input value={form.subtitle} onChange={(e) => field("subtitle", e.target.value)} className={inputClass} />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-slate-700 text-sm">Services <span className="font-normal text-slate-400">(pisahkan dengan koma)</span></label>
            <input value={form.services} onChange={(e) => field("services", e.target.value)} placeholder="Branding, Web Design, UI/UX" className={inputClass} />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-slate-700 text-sm">Live URL</label>
            <input type="url" value={form.url} onChange={(e) => field("url", e.target.value)} placeholder="https://..." className={inputClass} />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-slate-700 text-sm">Showcase Description</label>
            <textarea value={form.showcaseDescription} onChange={(e) => field("showcaseDescription", e.target.value)} rows="2" className={inputClass} />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-slate-700 text-sm">Marquee Text</label>
            <input value={form.marqueeText} onChange={(e) => field("marqueeText", e.target.value)} className={inputClass} />
          </div>
        </div>

        {/* Images */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-4">
          <div className="text-base font-semibold text-slate-900 mb-4">Images</div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <ImageUpload label="Thumbnail (List Card)" value={form.thumbnail} onChange={(url) => field("thumbnail", url)} />
            <ImageUpload label="Hero Image (Detail Page)" value={form.image} onChange={(url) => field("image", url)} />
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-4">
          <div className="text-base font-semibold text-slate-900 mb-4">Description</div>
          <TiptapEditor content={form.description} onChange={(html) => field("description", html)} />
        </div>

        {/* Sections */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-base font-semibold text-slate-900">Sections (Case Study)</div>
            <button type="button" className={btnSecSm} onClick={() => setSections((s) => [...s, { title: "", description: "", images: [] }])}>+ Add Section</button>
          </div>
          {sections.map((sec, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5 mb-3 bg-gray-50/80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-700">Section {i + 1}</h4>
                <button type="button" className={btnDangerSm} onClick={() => setSections((s) => s.filter((_, j) => j !== i))}>Remove</button>
              </div>
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-slate-700 text-sm">Title</label>
                <input value={sec.title} onChange={(e) => setSections((s) => { const u = [...s]; u[i] = { ...u[i], title: e.target.value }; return u; })} className={inputClass} />
              </div>
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-slate-700 text-sm">Description</label>
                <TiptapEditor content={sec.description} onChange={(html) => setSections((s) => { const u = [...s]; u[i] = { ...u[i], description: html }; return u; })} />
              </div>
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-slate-700 text-sm">Images</label>
                <input type="file" accept="image/*" multiple disabled={uploadingSection === i} onChange={(e) => uploadSectionImages(e, i)} className="text-sm" />
                {uploadingSection === i && <p className="text-xs text-slate-400 mt-1">Uploading...</p>}
                {(sec.images || []).length > 0 && (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2 mt-2">
                    {sec.images.map((url, j) => (
                      <div key={j} className="relative aspect-square rounded-lg overflow-hidden">
                        <img src={url} alt="" className="w-full h-full object-cover" />
                        <button type="button" className="absolute top-1 right-1 bg-red-600/85 text-white border-none rounded-md px-1.5 py-0.5 text-[11px] cursor-pointer" onClick={() => setSections((s) => { const u = [...s]; u[i] = { ...u[i], images: u[i].images.filter((_, k) => k !== j) }; return u; })}>×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks / Tech Stack */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-base font-semibold text-slate-900">Frameworks / Tech Stack</div>
            <button type="button" className={btnSecSm} onClick={() => setFrameworks((f) => [...f, { name: "", icon: "", color: "" }])}>+ Add Framework</button>
          </div>
          {frameworks.map((fw, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-2.5 mb-2">
              <input placeholder="Name (ex: React)" value={fw.name} onChange={(e) => setFrameworks((f) => { const u = [...f]; u[i] = { ...u[i], name: e.target.value }; return u; })} className="py-2 px-3 border border-gray-300 rounded-md text-sm text-slate-900 bg-white placeholder-slate-400" />
              <input placeholder="Icon (ex: SiReact)" value={fw.icon} onChange={(e) => setFrameworks((f) => { const u = [...f]; u[i] = { ...u[i], icon: e.target.value }; return u; })} className="py-2 px-3 border border-gray-300 rounded-md text-sm text-slate-900 bg-white placeholder-slate-400" />
              <input placeholder="Color (ex: #61DAFB)" value={fw.color} onChange={(e) => setFrameworks((f) => { const u = [...f]; u[i] = { ...u[i], color: e.target.value }; return u; })} className="py-2 px-3 border border-gray-300 rounded-md text-sm text-slate-900 bg-white placeholder-slate-400" />
              <button type="button" className={btnDangerSm} onClick={() => setFrameworks((f) => f.filter((_, j) => j !== i))}>×</button>
            </div>
          ))}
        </div>

        {/* Credits */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-base font-semibold text-slate-900">Credits</div>
            <button type="button" className={btnSecSm} onClick={() => setCredits((c) => [...c, { name: "", role: "" }])}>+ Add Credit</button>
          </div>
          {credits.map((cr, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2.5 mb-2">
              <input placeholder="Name" value={cr.name} onChange={(e) => setCredits((c) => { const u = [...c]; u[i] = { ...u[i], name: e.target.value }; return u; })} className="py-2 px-3 border border-gray-300 rounded-md text-sm text-slate-900 bg-white placeholder-slate-400" />
              <input placeholder="Role" value={cr.role} onChange={(e) => setCredits((c) => { const u = [...c]; u[i] = { ...u[i], role: e.target.value }; return u; })} className="py-2 px-3 border border-gray-300 rounded-md text-sm text-slate-900 bg-white placeholder-slate-400" />
              <button type="button" className={btnDangerSm} onClick={() => setCredits((c) => c.filter((_, j) => j !== i))}>×</button>
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 mb-4">
          <div className="text-base font-semibold text-slate-900 mb-4">Settings</div>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={form.published} onChange={(e) => field("published", e.target.checked)} className="w-4 h-4 cursor-pointer" />
              Published
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => field("featured", e.target.checked)} className="w-4 h-4 cursor-pointer" />
              Featured (Homepage)
            </label>
          </div>
        </div>

        <div className="flex gap-2.5 pt-5 border-t border-slate-100 mt-5">
          <button type="submit" className={btnPrimary} disabled={loading}>{loading ? "Menyimpan..." : isEdit ? "Update Project" : "Create Project"}</button>
          <button type="button" className={btnSecondary} onClick={() => router.push("/admin/projects")}>Batal</button>
        </div>
      </form>
    </div>
  );
}
