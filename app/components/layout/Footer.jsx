"use client";

import { Mail, Instagram, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-bg-dark overflow-hidden flex flex-col justify-between min-h-[70vh] pt-24 pb-16 font-sans border-t border-cream-border">
      {/* ── Main Text & CTA Section ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-10 md:mt-16 mb-[10vh]">
        <p className="font-display text-[1.5rem] md:text-3xl lg:text-[2.75rem] tracking-tight text-cream leading-[1.2] max-w-[52rem] mb-10 font-normal">
          Ready to bring your digital ideas to life? Let's collaborate and
          create something amazing together.
        </p>
        <a
          href="mailto:haniparohman@gmail.com"
          className="inline-flex items-center gap-2 justify-center bg-primary hover:bg-primary-hover text-bg-dark px-8 py-3 transition-colors duration-300 text-base md:text-lg rounded-full font-medium transform hover:scale-105"
        >
          <Mail size={18} />
          Let's Connect
        </a>
      </div>

      {/* ── Bottom Section ── */}
      <div className="relative z-10 w-full px-6 md:px-12 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-10 md:gap-0">
          {/* Large Brand Name */}
          <div className="md:col-span-6 text-left md:translate-y-4">
            <h2 className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-bold text-primary leading-[0.75] tracking-tighter">
              haniparr
            </h2>
          </div>

          {/* Right Info Columns */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-between lg:justify-end gap-8 lg:gap-16 text-cream text-sm md:text-base pb-6 md:pb-4">
            <div className="max-w-[200px]">
              <p className="leading-snug text-cream-muted">
                Web developer & UI/UX designer passionate about crafting digital
                experiences that truly connect.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <a
                href="mailto:haniparohman@gmail.com"
                className="text-cream-muted hover:text-primary transition-colors"
              >
                haniparohman@gmail.com
              </a>
              <span className="text-cream-muted tabular-nums">
                Yogyakarta, Indonesia
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cream-muted hover:text-primary transition-colors"
              >
                <Instagram size={14} />
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cream-muted hover:text-primary transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cream-muted hover:text-primary transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-cream-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-cream-muted/50">
            &copy; {new Date().getFullYear()} haniparr. All rights reserved.
          </p>
          <p className="text-xs text-cream-muted/50">
            Crafted with care &amp; creativity
          </p>
        </div>
      </div>
    </footer>
  );
};
