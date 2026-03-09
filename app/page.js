"use client";

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { WebDevSection } from "@/app/components/sections/WebDevSection";
import { UIUXSection } from "@/app/components/sections/UIUXSection";
import { GraphicDesignSection } from "@/app/components/sections/GraphicDesignSection";
import { ServicesSection } from "@/app/components/sections/ServicesSection";
import { ClientsMarquee } from "@/app/components/sections/ClientsMarquee";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="bg-bg-dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WebDevSection portfolioItems={portfolioData} />
      <UIUXSection />
      <GraphicDesignSection />
      <ServicesSection />
      <ClientsMarquee />
      <ContactSection />
      <Footer />
    </main>
  );
}
