"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Heading, Text } from "@/app/components/ui/Typography";
import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";
import { TextReveal } from "@/app/components/ui/TextReveal";
import Image from "next/image";

const marqueeImages = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
];

export const WebDevSection = ({ portfolioItems = [] }) => {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState("react");
  const [selectedType, setSelectedType] = useState("desktop");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredItems = useMemo(() => {
    let items = portfolioItems.filter(
      (item) => item.platform === selectedPlatform
    );
    if (selectedPlatform === "wordpress") {
      items = items.filter((item) => item.type === selectedType);
    }
    return items;
  }, [portfolioItems, selectedPlatform, selectedType]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleCardClick = (item) => {
    router.push(`/work/${item.slug}`);
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
    setCurrentPage(1);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  return (
    <div id="portfolio" className="relative">
      {/* ===== SUB-SECTION A: 3D Marquee Header ===== */}
      <div className="sticky top-0 z-10">
        <section className="h-screen relative overflow-hidden bg-bg-dark">
          <div className="absolute inset-0 z-0 opacity-15">
            <ThreeDMarquee images={marqueeImages} className="w-full h-full" />
          </div>
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-bg-dark/80 via-transparent to-bg-dark/80 pointer-events-none" />
          <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
            <div className="max-w-4xl flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-6xl text-primary/50 font-bold">h</span>
              </div>
              <div className="flex flex-col">
                <Heading
                  level={1}
                  className="text-start text-[15vw] md:text-[140px] leading-[0.6] tracking-tighter"
                >
                  web
                </Heading>
                <Heading
                  level={1}
                  className="text-start text-[15vw] md:text-[140px] leading-[0.6] -mt-[2vw] md:-mt-6 tracking-tighter"
                >
                  development.
                </Heading>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SUB-SECTION B: Portfolio List ===== */}
      <section className="bg-bg-dark py-20 relative z-40">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <TextReveal
              as="h2"
              className="font-display text-[clamp(36px,6vw,80px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]"
            >
              portfolio
            </TextReveal>
            <Text className="max-w-xs">
              Kumpulan website yang telah kami bangun menggunakan berbagai
              teknologi modern.
            </Text>
          </div>

          {/* Primary Filter */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${
                selectedPlatform === "react"
                  ? "bg-primary text-bg-dark"
                  : "border border-cream-border text-cream hover:bg-cream-card"
              }`}
              onClick={() => handlePlatformChange("react")}
            >
              React
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${
                selectedPlatform === "wordpress"
                  ? "bg-primary text-bg-dark"
                  : "border border-cream-border text-cream hover:bg-cream-card"
              }`}
              onClick={() => handlePlatformChange("wordpress")}
            >
              WordPress
            </button>
          </div>

          {/* Sub Filter */}
          {selectedPlatform === "wordpress" && (
            <div className="flex justify-center gap-3 mb-12">
              <button
                className={`px-5 py-1.5 rounded-full text-sm transition-colors cursor-pointer ${
                  selectedType === "desktop"
                    ? "bg-primary/70 text-bg-dark"
                    : "border border-cream-border/50 text-cream-muted hover:bg-cream-card"
                }`}
                onClick={() => handleTypeChange("desktop")}
              >
                Desktop
              </button>
              <button
                className={`px-5 py-1.5 rounded-full text-sm transition-colors cursor-pointer ${
                  selectedType === "mobile"
                    ? "bg-primary/70 text-bg-dark"
                    : "border border-cream-border/50 text-cream-muted hover:bg-cream-card"
                }`}
                onClick={() => handleTypeChange("mobile")}
              >
                Mobile
              </button>
            </div>
          )}

          {selectedPlatform !== "wordpress" && <div className="mb-12" />}

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer rounded-lg overflow-hidden border border-cream-border hover:border-primary/50 transition-all duration-300"
                onClick={() => handleCardClick(item)}
              >
                <div className="aspect-video relative overflow-hidden">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-5 bg-bg-dark-card">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary mb-2">
                    {item.category}
                  </p>
                  <h4 className="font-display text-xl text-cream mb-1 group-hover:-translate-y-0.5 transition-transform">
                    {item.title}
                  </h4>
                  <p className="text-sm text-cream-muted">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-8 h-8 rounded-full transition-colors cursor-pointer ${
                    num === currentPage
                      ? "bg-primary text-bg-dark"
                      : "border border-cream-border text-cream-muted hover:bg-primary hover:text-bg-dark"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
