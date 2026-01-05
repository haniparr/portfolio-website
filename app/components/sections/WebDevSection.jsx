"use client";
import { Card } from "@/app/components/ui/Card";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";
import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";

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

export const WebDevSection = () => {
  return (
    <div className="relative">
      {/* Sticky container - stays fixed while scrolling */}
      <div className="sticky top-0 z-10">
        {/* 1. Title Section with 3D Marquee Background */}
        <section className="h-screen relative overflow-hidden bg-[#F8F9FA] dark:bg-dark-section">
          {/* 3D Marquee Background */}
          <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
            <ThreeDMarquee images={marqueeImages} className="w-full h-full" />
          </div>

          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 z-5 bg-gradient-to-b from-[#F8F9FA]/80 via-transparent to-[#F8F9FA]/80 dark:from-dark-section/80 dark:via-transparent dark:to-dark-section/80 pointer-events-none" />

          {/* Content - aligned with HeroSection */}
          <div className="relative z-10 h-full w-full max-w-6xl mx-auto px-6 md:px-12 flex items-center">
            <div className="max-w-4xl flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-6xl text-[#C7B9DA] font-bold">h</span>
              </div>
              <div className="flex flex-col">
                <Heading level={1} className="text-start text-[15vw] md:text-[140px] leading-[0.6] tracking-tighter text-text-heading dark:text-dark-heading">
                  web
                </Heading>
                <Heading level={1} className="text-start text-[15vw] md:text-[140px] leading-[0.6] -mt-[2vw] md:-mt-6 tracking-tighter text-text-heading dark:text-dark-heading">
                  development.
                </Heading>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Project Showcase Section - scrolls over sticky section */}
      <section className="min-h-screen bg-bg-main dark:bg-dark-bg relative overflow-hidden flex items-center justify-center py-20 z-20">

        {/* Scrolling Background Text */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none">
          <div className="animate-marquee">
            {/* Group 1 */}
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span key={`1-${i}`} className="text-[20vw] font-semibold text-black/20 dark:text-white/20 px-8">
                  vidicatering.com
                </span>
              ))}
            </div>
            {/* Group 2 (Duplicate) */}
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span key={`2-${i}`} className="text-[20vw] font-semibold text-black/20 dark:text-white/20 px-8">
                  vidicatering.com
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center z-10">
          {/* Top Left Description */}
          <div className="absolute top-0 left-6 md:left-12 max-w-xs">
            <Text className="text-sm text-text-body dark:text-dark-body">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.
            </Text>
          </div>

          {/* Laptop Center */}
          <div className="relative transform transition-transform">
            {/* Laptop Frame */}
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
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.
            </Text>
          </div>
        </div>
      </section>
    </div>
  );
};
