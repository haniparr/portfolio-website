import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { WebDevSection } from "@/app/components/sections/WebDevSection";
import { GraphicDesignSection } from "@/app/components/sections/GraphicDesignSection";
import { ServicesSection } from "@/app/components/sections/ServicesSection";
import { ClientsMarquee } from "@/app/components/sections/ClientsMarquee";
import { getWebProjects, getUiuxProjects, getGraphicDesignProjects, getMarqueeImages } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [portfolioItems, uiuxItems, graphicItems, webMarquee, graphicMarquee] = await Promise.all([
    getWebProjects(),
    getUiuxProjects(),
    getGraphicDesignProjects(),
    getMarqueeImages("web-development", 32),
    getMarqueeImages("graphic-design", 32),
  ]);

  return (
    <main className="bg-bg-dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WebDevSection portfolioItems={portfolioItems} uiuxItems={uiuxItems} marqueeImages={webMarquee} />
      <GraphicDesignSection items={graphicItems} marqueeImages={graphicMarquee} />
      <ServicesSection />
      <ClientsMarquee />
      <Footer />
    </main>
  );
}
