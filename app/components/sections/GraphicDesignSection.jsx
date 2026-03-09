"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TextReveal } from "@/app/components/ui/TextReveal";
import { Text } from "@/app/components/ui/Typography";
import { graphicDesignData } from "@/lib/portfolio-data";

const categories = ["All", "Branding", "Print", "Social Media"];

export const GraphicDesignSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredData = useMemo(() => {
    if (activeFilter === "All") return graphicDesignData;
    return graphicDesignData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="graphic-design" className="bg-bg-dark py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <TextReveal
            as="h2"
            className="font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]"
          >
            graphic design.
          </TextReveal>
        </div>

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

        {/* Masonry Grid using CSS columns */}
        <div
          ref={ref}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  layout: { duration: 0.4 },
                }}
                className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
              >
                {/* Image */}
                <div
                  className="relative w-full overflow-hidden bg-bg-dark-alt"
                  style={{ aspectRatio: project.aspectRatio || "4/5" }}
                >
                  {project.image && (
                    <Image
                      src={project.image}
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
                </div>
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
      </div>
    </section>
  );
};
