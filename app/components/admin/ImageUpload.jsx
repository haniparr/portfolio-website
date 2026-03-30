"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageUpload({ value, onChange, label = "Image", folder = "portfolio" }) {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) onChange(data.url);
      else alert("Upload gagal. Coba lagi.");
    } catch {
      alert("Upload gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      {label && <label style={{ display: "block", fontWeight: "500", marginBottom: "6px", fontSize: "14px", color: "#374151" }}>{label}</label>}
      <input type="file" accept="image/*" onChange={handleFileChange} disabled={loading} style={{ fontSize: "13px" }} />
      {loading && <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>Uploading...</p>}
      {value && (
        <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={value} alt="Preview" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px", border: "1px solid #e5e7eb" }} />
          <button type="button" onClick={() => onChange("")} style={{ fontSize: "12px", color: "#dc2626", background: "none", border: "none", cursor: "pointer" }}>
            Hapus
          </button>
        </div>
      )}
    </div>
  );
}
