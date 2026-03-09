"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const roles = ["Web Developer", "UI/UX Designer", "Graphic Designer"];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && window.lenis) window.lenis.scrollTo(el);
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="h-screen relative flex items-center bg-bg-dark overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,253,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,253,216,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Main heading */}
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]">
              Crafting
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <h1 className="font-display text-[clamp(48px,8vw,120px)] font-normal leading-[0.9] tracking-[-0.02em]">
              <span className="text-cream">Digital </span>
              <span className="italic text-primary">Experiences</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]">
              &amp; Visual Stories.
            </h1>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.div
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>
            <div className="h-8 mb-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  className="text-lg md:text-xl text-primary font-medium"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="text-cream-muted text-base md:text-lg">
              Based in Yogyakarta, Indonesia
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("portfolio")}
              className="rounded-full bg-primary px-8 py-4 font-medium text-bg-dark transition-colors hover:bg-primary-hover cursor-pointer"
            >
              See My Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-cream-border px-8 py-4 font-medium text-cream transition-colors hover:bg-cream-card hover:border-cream-muted/30 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 cursor-pointer"
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
};
