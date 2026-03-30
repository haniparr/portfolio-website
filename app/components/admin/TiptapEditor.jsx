"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { useState } from "react";

export default function TiptapEditor({ content = "", onChange }) {
  const [isUploading, setIsUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
      Underline,
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    immediatelyRender: false,
  });

  const handleImageUpload = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setIsUploading(true);
      try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (data.success) editor?.chain().focus().setImage({ src: data.url }).run();
      } finally {
        setIsUploading(false);
      }
    };
    input.click();
  };

  const setLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) editor?.chain().focus().setLink({ href: url }).run();
  };

  if (!editor) return <div style={{ padding: "12px", color: "#6b7280" }}>Loading editor...</div>;

  const btn = (label, action, active = false) => (
    <button
      type="button"
      onClick={action}
      style={{
        padding: "4px 8px",
        background: active ? "#1f2937" : "transparent",
        color: active ? "white" : "#374151",
        border: "1px solid #d1d5db",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: "500",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ border: "1px solid #d1d5db", borderRadius: "8px", overflow: "hidden" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "8px", borderBottom: "1px solid #d1d5db", background: "#f9fafb" }}>
        {btn("B", () => editor.chain().focus().toggleBold().run(), editor.isActive("bold"))}
        {btn("I", () => editor.chain().focus().toggleItalic().run(), editor.isActive("italic"))}
        {btn("U", () => editor.chain().focus().toggleUnderline().run(), editor.isActive("underline"))}
        {btn("S", () => editor.chain().focus().toggleStrike().run(), editor.isActive("strike"))}
        <span style={{ width: "1px", background: "#d1d5db", margin: "0 4px" }} />
        {btn("H1", () => editor.chain().focus().toggleHeading({ level: 1 }).run(), editor.isActive("heading", { level: 1 }))}
        {btn("H2", () => editor.chain().focus().toggleHeading({ level: 2 }).run(), editor.isActive("heading", { level: 2 }))}
        {btn("H3", () => editor.chain().focus().toggleHeading({ level: 3 }).run(), editor.isActive("heading", { level: 3 }))}
        <span style={{ width: "1px", background: "#d1d5db", margin: "0 4px" }} />
        {btn("• List", () => editor.chain().focus().toggleBulletList().run(), editor.isActive("bulletList"))}
        {btn("1. List", () => editor.chain().focus().toggleOrderedList().run(), editor.isActive("orderedList"))}
        {btn("Quote", () => editor.chain().focus().toggleBlockquote().run(), editor.isActive("blockquote"))}
        <span style={{ width: "1px", background: "#d1d5db", margin: "0 4px" }} />
        {btn("Link", setLink)}
        <button
          type="button"
          onClick={handleImageUpload}
          disabled={isUploading}
          style={{ padding: "4px 8px", background: "transparent", color: "#374151", border: "1px solid #d1d5db", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}
        >
          {isUploading ? "Uploading..." : "Image"}
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        style={{ minHeight: "150px", padding: "12px", fontSize: "14px", lineHeight: "1.6", color: "#0f172a", backgroundColor: "#ffffff" }}
        className="prose prose-sm max-w-none prose-p:text-slate-900 text-slate-900 tiptap-editor"
      />
    </div>
  );
}
