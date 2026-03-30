"use client";

import { SessionProvider } from "next-auth/react";

export default function AdminAuthLayout({ children }) {
  return (
    <SessionProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-[Inter,system-ui,-apple-system,sans-serif]">
        <div className="w-full max-w-[450px] p-5">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}
