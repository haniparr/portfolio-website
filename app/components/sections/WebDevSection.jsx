"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Heading, Text } from "@/app/components/ui/Typography";
import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";
import { TextReveal } from "@/app/components/ui/TextReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Primary filter tabs
const PRIMARY_FILTERS = ["all", "react", "wordpress", "uiux"];

export const WebDevSection = ({
  portfolioItems = [],
  uiuxItems = [],
  marqueeImages = [],
}) => {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedType, setSelectedType] = useState("desktop");

  // Items for web dev platforms (react / wordpress)
  const filteredWebItems = useMemo(() => {
    if (selectedPlatform === "uiux" || selectedPlatform === "all") return [];
    let items = portfolioItems.filter(
      (item) => item.platform === selectedPlatform,
    );
    if (selectedPlatform === "wordpress") {
      items = items.filter((item) => item.type === selectedType);
    }
    return items;
  }, [portfolioItems, selectedPlatform, selectedType]);

  // Items for UI/UX
  const filteredUiuxItems = useMemo(() => {
    if (selectedPlatform !== "uiux") return [];
    return uiuxItems;
  }, [selectedPlatform, uiuxItems]);

  const currentItems = useMemo(() => {
    let activeItems = [];
    if (selectedPlatform === "all") {
      activeItems = [...portfolioItems, ...uiuxItems];
    } else if (selectedPlatform === "uiux") {
      activeItems = filteredUiuxItems;
    } else {
      activeItems = filteredWebItems;
    }

    return activeItems
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .slice(0, 6);
  }, [selectedPlatform, filteredUiuxItems, filteredWebItems, portfolioItems, uiuxItems]);

  const handleCardClick = (item) => {
    if (item.caseStudyUrl) {
      window.open(item.caseStudyUrl, "_blank");
    } else if (item.slug) {
      router.push(`/work/${item.slug}`);
    }
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const labelMap = {
    all: "All",
    react: "React / Next.js",
    wordpress: "WordPress",
    uiux: "UI/UX Design",
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
              <div className="flex flex-col">
                <Heading
                  level={1}
                  className="text-start text-[15vw] md:text-[140px] leading-none tracking-tighter"
                >
                  web
                </Heading>
                <Heading
                  level={1}
                  className="text-start text-[15vw] md:text-[140px] leading-none -mt-[2vw] md:-mt-6 tracking-tighter"
                >
                  development.
                </Heading>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <TextReveal
                  as="h3"
                  className="font-plusJakarta text-[clamp(16px,4vw,20px)] font-normal text-cream leading-[1.19] tracking-[-0.02em]"
                >
                  It's not enough to just write clean code or build fast
                  websites. The real work is understanding the nuance. The
                  empathy behind every click, scroll, and interaction. From
                  local startups in Indonesia to global tech brands, I help
                  businesses stop building websites that talk at users and start
                  creating digital experiences that speak with them.
                </TextReveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SUB-SECTION B: Portfolio List ===== */}
      <section className="bg-bg-dark py-20 relative z-40">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Primary Filter */}
          <div className="flex flex-wrap justify-start gap-3 mb-6">
            {PRIMARY_FILTERS.map((platform) => (
              <button
                key={platform}
                className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedPlatform === platform
                    ? "bg-primary text-bg-dark"
                    : "border border-cream-border text-cream hover:bg-cream-card"
                }`}
                onClick={() => handlePlatformChange(platform)}
              >
                {labelMap[platform]}
              </button>
            ))}
          </div>

          {/* Sub Filter (WordPress only) */}
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
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group cursor-pointer bg-bg-dark-card rounded-lg overflow-hidden border border-cream-border hover:border-cream-muted/20 hover:bg-cream-card transition-all duration-300 flex flex-col aspect-4/5"
                  onClick={() => handleCardClick(item)}
                >
                  <div className="relative overflow-hidden bg-bg-dark-alt h-[55%] shrink-0">
                    {(item.thumbnail || item.image) && (
                      <Image
                        src={item.thumbnail || item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg-dark/60 backdrop-blur-sm border border-cream-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={18} className="text-cream" />
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs uppercase tracking-[0.15em] text-primary mb-2">
                      {item.category}
                    </p>
                    <h4 className="font-display text-xl text-cream mb-1 group-hover:-translate-y-0.5 transition-transform">
                      {item.title}
                    </h4>
                    <p className="text-sm text-cream-muted line-clamp-2">
                      {item.excerpt}
                    </p>
                    {/* Tools / Frameworks pills */}
                    {(item.tools || item.frameworks) && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(item.tools || item.frameworks.map((f) => f.name)).map(
                          (tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs border border-cream-border text-cream-muted/60"
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* See All Work */}
          <div className="flex justify-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-cream-border px-8 py-4 font-medium text-cream transition-colors hover:bg-cream-card hover:border-cream-muted/30 group"
            >
              <span>See All Work</span>
              <ArrowUpRight
                size={18}
                className="text-cream-muted group-hover:text-cream group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
