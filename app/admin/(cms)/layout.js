"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession, SessionProvider } from "next-auth/react";
import "@/app/admin/admin.css";

const navItems = [
  { href: "/admin", label: "Dashboard", exact: true },
  { section: "Content" },
  { href: "/admin/projects", label: "Projects", exact: false },
  { href: "/admin/featured", label: "Featured", exact: false },
  { href: "/admin/clients", label: "Clients", exact: false },
  { href: "/admin/testimonials", label: "Testimonials", exact: false },
];

function SidebarNav() {
  const pathname = usePathname();
  const isActive = (item) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  return (
    <nav className="flex flex-col gap-1.5 flex-1">
      {navItems.map((item, i) =>
        item.section ? (
          <div key={i} className="text-[11px] uppercase tracking-wider text-slate-400 pt-5 px-3 pb-2 font-semibold">
            {item.section}
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className={`py-3.5 px-5 rounded-xl flex items-center text-[15px] font-medium transition-all duration-200 no-underline
              ${isActive(item)
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:pl-6"
              }`}
          >
            <span>{item.label}</span>
          </Link>
        )
      )}
    </nav>
  );
}

function AdminLayoutContent({ children }) {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen bg-gray-100 font-[Inter,system-ui,-apple-system,sans-serif]">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white text-slate-800 py-8 px-6 fixed h-screen overflow-y-auto border-r border-slate-200 flex flex-col z-10">
        <h2 className="text-lg font-extrabold mb-12 text-slate-900 tracking-tight flex items-center gap-2.5 pl-3">
          CMS Admin
        </h2>
        <SidebarNav />
        <div className="pt-5 px-3 border-t border-slate-200 mt-auto">
          <div className="text-xs text-slate-400 mb-2 overflow-hidden text-ellipsis">
            {session?.user?.email}
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="w-full py-2.5 px-4 bg-slate-100 text-slate-600 border-none rounded-[10px] cursor-pointer text-[13px] font-semibold transition-all duration-200 hover:bg-slate-200 hover:text-slate-900"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-[260px] flex-1 p-10 max-w-[1600px] max-lg:p-5 max-md:ml-0">
        <div className="flex justify-between items-center pb-8 max-md:flex-col max-md:items-start max-md:gap-4">
          <h1 className="text-[28px] font-extrabold text-slate-900 tracking-tight">
            Content Management System
          </h1>
          <div className="flex items-center gap-5 bg-white py-2 px-4 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.03)] border border-slate-200">
            <span className="text-slate-500 text-sm font-medium">{session?.user?.email}</span>
            <span className="bg-blue-50 text-blue-600 py-1 px-2.5 rounded-full text-xs font-semibold uppercase">
              {session?.user?.role || "USER"}
            </span>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-blue-600 no-underline font-medium"
            >
              ↗ View Site
            </a>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-black/[0.02]">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function CMSLayout({ children }) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  );
}
