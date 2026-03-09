"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Section } from "@/app/components/ui/Section";
import { TextReveal } from "@/app/components/ui/TextReveal";
import { Text } from "@/app/components/ui/Typography";
import { uiuxPortfolioData } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Mobile App", "Web App", "Dashboard"];

export const UIUXSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredData = useMemo(() => {
    if (activeFilter === "All") return uiuxPortfolioData;
    return uiuxPortfolioData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="uiux" className="bg-bg-dark py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <TextReveal
            as="h2"
            className="font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]"
          >
            ui/ux design.
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

        {/* Portfolio Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredData.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  layout: { duration: 0.4 },
                }}
                className="group block bg-bg-dark-card rounded-lg overflow-hidden border border-cream-border hover:border-cream-muted/20 hover:bg-cream-card transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden bg-bg-dark-alt">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg-dark/60 backdrop-blur-sm border border-cream-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={18} className="text-cream" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-[0.15em] text-cream-muted/60 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {!project.tags && (
                      <span className="text-[11px] uppercase tracking-[0.15em] text-cream-muted/60 font-medium">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-cream mb-2 group-hover:text-primary-hover transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <Text variant="muted" className="mb-4 line-clamp-2">
                    {project.description}
                  </Text>

                  {/* Tools */}
                  {project.tools && (
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-full text-xs border border-cream-border text-cream-muted/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <Text variant="muted">No projects found in this category.</Text>
          </div>
        )}
      </div>
    </section>
  );
};
