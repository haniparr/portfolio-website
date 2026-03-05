"use client";
import { useState, useRef, useMemo } from "react";
import { Card } from "@/app/components/ui/Card";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";
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
  const [selectedPlatform, setSelectedPlatform] = useState("react");
  const [selectedType, setSelectedType] = useState("desktop");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const showcaseRef = useRef(null);
  const itemsPerPage = 4;

  // Filter items based on platform and type
  const filteredItems = useMemo(() => {
    let items = portfolioItems.filter(
      (item) => item.platform === selectedPlatform
    );
    if (selectedPlatform === "wordpress") {
      items = items.filter((item) => item.type === selectedType);
    }
    return items;
  }, [portfolioItems, selectedPlatform, selectedType]);

  // Set default selected item when filter changes
  const activeItem = useMemo(() => {
    if (selectedItem && filteredItems.find((i) => i.id === selectedItem.id)) {
      return selectedItem;
    }
    return filteredItems[0] || null;
  }, [filteredItems, selectedItem]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCardClick = (item) => {
    setSelectedItem(item);
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
    setCurrentPage(1);
    setSelectedItem(null);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
    setSelectedItem(null);
  };

  return (
    <div className="relative">
      {/* ===== SUB-SECTION A: 3D Marquee Header (unchanged) ===== */}
      <div className="sticky top-0 z-10">
        <section className="h-screen relative overflow-hidden bg-[#F8F9FA] dark:bg-dark-section">
          <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
            <ThreeDMarquee images={marqueeImages} className="w-full h-full" />
          </div>
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-[#F8F9FA]/80 via-transparent to-[#F8F9FA]/80 dark:from-dark-section/80 dark:via-transparent dark:to-dark-section/80 pointer-events-none" />
          <div className="relative z-10 h-full w-full max-w-6xl mx-auto px-6 md:px-12 flex items-center">
            <div className="max-w-4xl flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-6xl text-[#C7B9DA] font-bold">h</span>
              </div>
              <div className="flex flex-col">
                <Heading
                  level={1}
                  className="text-start text-[15vw] md:text-[140px] leading-[0.6] tracking-tighter text-text-heading dark:text-dark-heading"
                >
                  web
                </Heading>
                <Heading
                  level={1}
                  className="text-start text-[15vw] md:text-[140px] leading-[0.6] -mt-[2vw] md:-mt-6 tracking-tighter text-text-heading dark:text-dark-heading"
                >
                  development.
                </Heading>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SUB-SECTION B: Portfolio List ===== */}
      <Section bg="gray" className="py-20 relative z-40">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          <Heading level={2}>portfolio</Heading>
          <Text className="max-w-xs">
            Kumpulan website yang telah kami bangun menggunakan berbagai
            teknologi modern.
          </Text>
        </div>

        {/* Primary Filter: React / WordPress */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedPlatform === "react"
                ? "bg-primary text-white"
                : "bg-white text-text-body dark:bg-dark-card dark:text-dark-body"
            }`}
            onClick={() => handlePlatformChange("react")}
          >
            React
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedPlatform === "wordpress"
                ? "bg-primary text-white"
                : "bg-white text-text-body dark:bg-dark-card dark:text-dark-body"
            }`}
            onClick={() => handlePlatformChange("wordpress")}
          >
            WordPress
          </button>
        </div>

        {/* Sub Filter: Desktop / Mobile (WordPress only) */}
        {selectedPlatform === "wordpress" && (
          <div className="flex justify-center gap-3 mb-12">
            <button
              className={`px-5 py-1.5 rounded-full text-sm transition-colors ${
                selectedType === "desktop"
                  ? "bg-primary/80 text-white"
                  : "bg-white/80 text-text-body dark:bg-dark-card/80 dark:text-dark-body"
              }`}
              onClick={() => handleTypeChange("desktop")}
            >
              Desktop
            </button>
            <button
              className={`px-5 py-1.5 rounded-full text-sm transition-colors ${
                selectedType === "mobile"
                  ? "bg-primary/80 text-white"
                  : "bg-white/80 text-text-body dark:bg-dark-card/80 dark:text-dark-body"
              }`}
              onClick={() => handleTypeChange("mobile")}
            >
              Mobile
            </button>
          </div>
        )}

        {/* No sub-filter spacer for React */}
        {selectedPlatform !== "wordpress" && <div className="mb-12" />}

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentItems.map((item) => (
            <Card
              key={item.id}
              hover={true}
              className={`group cursor-pointer ${
                activeItem?.id === item.id
                  ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-dark-bg"
                  : ""
              }`}
              onClick={() => handleCardClick(item)}
            >
              <div className="aspect-video relative overflow-hidden bg-gray-800">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 rounded-full transition-colors ${
                  num === currentPage
                    ? "bg-primary text-white"
                    : "bg-white text-text-body hover:bg-primary hover:text-white dark:bg-dark-card dark:text-dark-body"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        )}
      </Section>

      {/* ===== SUB-SECTION C: Progress Showcase ===== */}
      <section
        ref={showcaseRef}
        className="min-h-screen bg-bg-main dark:bg-dark-bg relative overflow-hidden flex items-center justify-center py-20 z-20"
      >
        {/* Scrolling Background Text */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none">
          <div className="animate-marquee">
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span
                  key={`1-${i}`}
                  className="text-[20vw] font-semibold text-black/20 dark:text-white/20 px-8"
                >
                  {activeItem?.marqueeText || "website.com"}
                </span>
              ))}
            </div>
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span
                  key={`2-${i}`}
                  className="text-[20vw] font-semibold text-black/20 dark:text-white/20 px-8"
                >
                  {activeItem?.marqueeText || "website.com"}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center z-10">
          {/* Top Left Description */}
          <div className="absolute top-0 left-6 md:left-12 max-w-xs">
            <Text className="text-sm text-text-body dark:text-dark-body">
              {activeItem?.showcaseDescription ||
                "Pilih salah satu website dari daftar di atas untuk melihat detail showcase."}
            </Text>
          </div>

          {/* Laptop Center */}
          <div className="relative transform transition-transform">
            <img
              src="/images/laptop.png"
              alt="Project Showcase"
              className="w-full h-auto object-contain mx-auto max-w-[90%]"
              style={{ maxHeight: "485px" }}
            />
          </div>

          {/* Bottom Right Description */}
          <div className="absolute bottom-0 right-6 md:right-12 max-w-xs text-right">
            <Text className="text-sm text-text-body dark:text-dark-body">
              {activeItem?.description ||
                "Detail project akan muncul di sini."}
            </Text>
          </div>
        </div>
      </section>

      {/* ===== SUB-SECTION D: Framework Section ===== */}
      <Section className="py-32 overflow-hidden bg-bg-section dark:bg-dark-section relative z-30">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Mobile Mockup */}
            <div className="relative w-64 md:w-80 mx-auto transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-out z-10">
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl -m-2"></div>
              <div className="relative bg-black rounded-[2.5rem] border-8 border-gray-800 overflow-hidden shadow-xl aspect-[9/19]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20"></div>
                {/* Screen Content */}
                <div className="h-full w-full bg-white overflow-y-auto no-scrollbar">
                  <img
                    src={
                      activeItem?.image ||
                      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
                    }
                    alt="Mobile View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h4 className="font-serif italic text-xl">
                        {activeItem?.title || "Project Preview"}
                      </h4>
                      <p className="text-xs mt-2">
                        {activeItem?.subtitle || ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="order-1 md:order-2">
            <Text className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
              Tech Stack
            </Text>
            <Heading level={2} className="mb-8">
              Framework
            </Heading>

            <div className="flex flex-wrap gap-6 mb-12">
              {(activeItem?.frameworks || []).map((fw, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-dark-card border border-border-light dark:border-dark-border shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div
                    className={`w-10 h-10 ${fw.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner`}
                  >
                    {fw.icon}
                  </div>
                  <span className="font-semibold text-text-heading dark:text-dark-heading">
                    {fw.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <Heading level={4}>
                {activeItem?.title || "Pilih Project"}
              </Heading>
              <Text className="text-text-body dark:text-dark-body leading-relaxed">
                {activeItem?.showcaseDescription ||
                  "Pilih salah satu website dari daftar portfolio untuk melihat tech stack yang digunakan."}
              </Text>

              {activeItem?.url && (
                <Button
                  variant="primary"
                  className="bg-[#FDB022] hover:bg-[#E59E1A] text-white rounded-full px-8 mt-4"
                  onClick={() => window.open(activeItem.url, "_blank")}
                >
                  Go to the website
                </Button>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
