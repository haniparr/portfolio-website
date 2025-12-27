"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md z-50 border-b border-border-light dark:border-dark-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary dark:bg-dark-primary rounded-lg transition-colors duration-300"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-heading dark:text-dark-heading"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#home"
              className="block py-2 text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block py-2 text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block py-2 text-text-heading dark:text-dark-heading hover:text-primary dark:hover:text-dark-primary transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
