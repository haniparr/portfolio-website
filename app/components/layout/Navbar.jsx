"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-8 px-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo - kept for context but can be transparent or adjusted */}
        <div className="w-10 h-10 bg-primary dark:bg-dark-primary rounded-lg pointer-events-auto opacity-0 md:opacity-100 transition-opacity"></div>

        {/* Toggle Button */}
        <button
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-sm text-text-heading dark:text-dark-heading hover:scale-110 transition-transform z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-visibility duration-500 ${isOpen ? "visible" : "invisible delay-500"
          }`}
      >
        {/* Backdrop - Transparent as requested but handles clicks */}
        <div
          className={`absolute inset-0 bg-transparent transition-opacity duration-300 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white/70 dark:bg-black/70 backdrop-blur-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-2xl flex flex-col justify-center items-start pl-12 gap-8 pointer-events-auto ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-bold text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors hover:translate-x-2 duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
