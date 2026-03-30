"use client";

export default function ConfirmDialog({ isOpen, title, message, confirmText = "Delete", cancelText = "Cancel", onConfirm, onCancel, type = "danger" }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Backdrop */}
      <div onClick={onCancel} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
      {/* Dialog */}
      <div style={{ position: "relative", background: "white", borderRadius: "12px", padding: "28px", maxWidth: "420px", width: "90%", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px", color: "#111" }}>{title}</h3>
        <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>{message}</p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={{ padding: "8px 16px", background: "#f3f4f6", border: "1px solid #d1d5db", borderRadius: "6px", cursor: "pointer", fontSize: "14px" }}>
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            style={{ padding: "8px 16px", background: type === "danger" ? "#dc2626" : "#2563eb", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
