"use client";

import { useEffect, useState, useRef } from "react";

const TABS = [
  { value: "web-development", label: "Web Developer", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { value: "graphic-design", label: "Graphic Design", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { value: "uiux", label: "UI/UX", color: "bg-blue-100 text-blue-700 border-blue-200" },
];

const MAX_FEATURED = 6;

function FeaturedBoard({ category }) {
  const [featured, setFeatured] = useState([]);
  const [available, setAvailable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const dragItem = useRef(null);
  const dragOver = useRef(null);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [featRes, allRes] = await Promise.all([
        fetch(`/api/projects?category=${category}&featured=true&limit=50`),
        fetch(`/api/projects?category=${category}&limit=50`),
      ]);
      const featData = await featRes.json();
      const allData = await allRes.json();

      const featuredList = (featData.projects || []).sort((a, b) => a.order - b.order);
      const featuredIds = new Set(featuredList.map((p) => p.id));
      const restList = (allData.projects || [])
        .filter((p) => !featuredIds.has(p.id))
        .sort((a, b) => a.order - b.order);

      setFeatured(featuredList);
      setAvailable(restList);
    } finally {
      setLoading(false);
    }
  };

  // ── Drag handlers for featured list ──
  const onDragStart = (e, idx) => {
    dragItem.current = idx;
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragEnter = (e, idx) => {
    dragOver.current = idx;
    e.preventDefault();
  };

  const onDragEnd = async () => {
    const from = dragItem.current;
    const to = dragOver.current;
    if (from === null || to === null || from === to) {
      dragItem.current = null;
      dragOver.current = null;
      return;
    }

    const reordered = [...featured];
    const [moved] = reordered.splice(from, 1);
    reordered.splice(to, 0, moved);

    // Assign new order values
    const updated = reordered.map((p, i) => ({ ...p, order: i + 1 }));
    setFeatured(updated);
    dragItem.current = null;
    dragOver.current = null;

    // Persist
    setSaving(true);
    try {
      await Promise.all(
        updated.map((p) =>
          fetch(`/api/projects/${p.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order: p.order }),
          })
        )
      );
    } finally {
      setSaving(false);
    }
  };

  // ── Remove from featured ──
  const removeFromFeatured = async (p) => {
    setSaving(true);
    try {
      await fetch(`/api/projects/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: false }),
      });
      await fetchData();
    } finally {
      setSaving(false);
    }
  };

  // ── Add to featured ──
  const addToFeatured = async (p) => {
    setSaving(true);
    try {
      await fetch(`/api/projects/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: true, order: featured.length + 1 }),
      });
      await fetchData();
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-10 text-center text-slate-400">Loading...</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT: Featured (drag-and-drop) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-900 text-base">
            ⭐ Featured di Homepage
            <span className={`ml-2 text-xs font-normal ${featured.length >= MAX_FEATURED ? "text-amber-600 font-semibold" : "text-slate-400"}`}>
              ({featured.length}/{MAX_FEATURED})
            </span>
          </h3>
          {saving && <span className="text-xs text-blue-500 animate-pulse">Menyimpan...</span>}
        </div>

        {featured.length === 0 ? (
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-10 text-center text-slate-400 text-sm">
            Belum ada project yang difeatured.<br />Tambahkan dari daftar di sebelah kanan.
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {featured.map((p, idx) => (
              <li
                key={p.id}
                draggable
                onDragStart={(e) => onDragStart(e, idx)}
                onDragEnter={(e) => onDragEnter(e, idx)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnd={onDragEnd}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 cursor-grab active:cursor-grabbing hover:border-blue-300 hover:shadow-sm transition-all select-none group"
              >
                <span className="text-slate-300 text-lg leading-none">⠿</span>
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                {p.thumbnail && (
                  <img src={p.thumbnail} alt="" className="w-10 h-7 object-cover rounded border border-gray-200 flex-shrink-0" />
                )}
                <span className="flex-1 text-sm font-medium text-slate-800 truncate">{p.title}</span>
                <button
                  onClick={() => removeFromFeatured(p)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-600 text-lg leading-none cursor-pointer bg-transparent border-0 flex-shrink-0"
                  title="Hapus dari featured"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* RIGHT: Available (not featured) */}
      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-4">
          Semua Project
          <span className="ml-2 text-xs font-normal text-slate-400">({available.length} tidak featured)</span>
        </h3>

        {available.length === 0 ? (
          <div className="text-center text-slate-400 text-sm py-10">Semua project sudah difeatured.</div>
        ) : (
          <ul className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-1">
            {available.map((p) => (
              <li
                key={p.id}
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 hover:bg-white hover:border-slate-300 transition-all group"
              >
                {p.thumbnail && (
                  <img src={p.thumbnail} alt="" className="w-10 h-7 object-cover rounded border border-gray-200 flex-shrink-0" />
                )}
                <span className="flex-1 text-sm text-slate-700 truncate">{p.title}</span>
                <button
                  onClick={() => addToFeatured(p)}
                  disabled={featured.length >= MAX_FEATURED}
                  className={`text-xs font-semibold cursor-pointer bg-transparent border-0 shrink-0 transition-opacity ${
                    featured.length >= MAX_FEATURED
                      ? "text-slate-300 cursor-not-allowed"
                      : "text-blue-600 hover:text-blue-800 opacity-70 group-hover:opacity-100"
                  }`}
                  title={featured.length >= MAX_FEATURED ? `Maksimal ${MAX_FEATURED} featured per kategori` : "Tambah ke featured"}
                >
                  {featured.length >= MAX_FEATURED ? "Limit" : "+ Featured"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function FeaturedPage() {
  const [activeTab, setActiveTab] = useState("web-development");

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
        <p className="text-sm text-slate-400 mt-1">
          Pilih project yang tampil di homepage dan atur urutannya dengan drag & drop.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 mb-8 border-b border-slate-200">
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

      {TABS.map((tab) => (
        <div key={tab.value} className={activeTab === tab.value ? "block" : "hidden"}>
          <FeaturedBoard category={tab.value} />
        </div>
      ))}
    </div>
  );
}
