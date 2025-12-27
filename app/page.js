"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { WebDevSection } from "@/app/components/sections/WebDevSection";
import { FrameworkSection } from "@/app/components/sections/FrameworkSection";
import { WordPressSection } from "@/app/components/sections/WordPressSection";
import { portfolioData } from "@/lib/portofolio-data";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load dari localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(saved === "true");
    }
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (!mounted) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode, mounted]);

  if (!mounted) {
    return null; // Prevent flash
  }

  return (
    <main className="font-sans">
      <Navbar />
      <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
      <WebDevSection />
      <FrameworkSection />
      <WordPressSection portfolioItems={portfolioData} />
      <Footer />
    </main>
  );
}
