"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/app/components/ui/TextReveal";
import { Text } from "@/app/components/ui/Typography";
import { Heading } from "@/app/components/ui/Typography";
import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Branding", "Print", "Social Media"];

export const GraphicDesignSection = ({
  items: graphicDesignData = [],
  marqueeImages = [],
}) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredData = useMemo(() => {
    let items = graphicDesignData;
    if (activeFilter !== "All") {
      items = graphicDesignData.filter((item) =>
        (item.services || []).includes(activeFilter),
      );
    }
    return [...items]
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .slice(0, 6);
  }, [activeFilter, graphicDesignData]);

  return (
    <div id="graphic-design" className="relative">
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
                  graphic
                </Heading>
                <Heading
                  level={1}
                  className="text-start text-[15vw] md:text-[140px] leading-none tracking-tighter"
                >
                  design.
                </Heading>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <TextReveal
                  as="h3"
                  className="font-plusJakarta text-[clamp(16px,4vw,20px)] font-normal text-cream leading-[1.19] tracking-[-0.02em]"
                >
                  I turn complex ideas into clear visual language. It's not
                  enough to just master the tools or manage the pixels. The real
                  work is understanding what a brand truly needs to say and how
                  an audience actually receives it. From local startups in
                  Indonesia to global tech brands, I help brands bridge that gap
                  through purposeful visual communication that connects, not
                  just impresses.
                </TextReveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SUB-SECTION B: Portfolio List ===== */}
      <section className="bg-bg-dark py-20 relative z-40">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? "bg-primary text-bg-dark"
                    : "border border-cream-border text-cream-muted hover:border-cream-muted/30 hover:text-cream"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout (3x2) */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredData.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    layout: { duration: 0.4 },
                  }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  {/* Image */}
                  <Link href={`/work/${project.slug}`} className="block relative w-full overflow-hidden bg-bg-dark-alt aspect-4/5">
                    {(project.thumbnail || project.image) && (
                      <Image
                        src={project.thumbnail || project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                        <span className="text-[11px] uppercase tracking-[0.15em] text-cream-muted/60 font-medium block mb-2">
                          {project.category}
                        </span>
                        <h3 className="font-display text-xl text-cream">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <Text variant="muted">No designs found in this category.</Text>
            </div>
          )}

          {/* See All Work */}
          {filteredData.length > 0 && (
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
          )}
        </div>
      </section>
    </div>
  );
};
