"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ALL = "All";

// Griflan staircase pattern — cycles every 6 items:
// Row 0: tall, medium, short  (staircase ↘)
// Row 1: short, medium, tall  (staircase ↗)
const ASPECT_PATTERN = [
  "aspect-[9/10]",   // tall   ~497px
  "aspect-[19/18]",  // medium ~421px
  "aspect-[4/3]",    // short  ~333px
  "aspect-[4/3]",    // short
  "aspect-[19/18]",  // medium
  "aspect-[9/10]",   // tall
];

export const WorkListClient = ({ items }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(ALL);
  const [filterOpen, setFilterOpen] = useState(false);

  const filterOptions = useMemo(() => {
    const cats = new Set();
    items.forEach((item) => {
      cats.add(item.platform === "react" ? "React" : "WordPress");
      cats.add(item.category);
    });
    return [ALL, ...Array.from(cats).sort()];
  }, [items]);

  const filtered = useMemo(() => {
    if (selected === ALL) return items;
    return items.filter(
      (item) =>
        item.category === selected ||
        (selected === "React" && item.platform === "react") ||
        (selected === "WordPress" && item.platform === "wordpress")
    );
  }, [items, selected]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
      {/* Hero + Filter Row */}
      <div className="flex items-end justify-between mb-20 gap-8 flex-wrap">
        {/* Filter */}
        <div className="relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-primary text-sm uppercase tracking-[0.15em] hover:text-primary-hover transition-colors cursor-pointer"
          >
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${filterOpen ? "rotate-180" : ""}`}
            />
            {selected === ALL ? "Industry: All" : selected}
          </button>

          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="absolute top-8 left-0 z-30 bg-bg-dark-alt border border-cream-border rounded-xl py-2 min-w-[180px] shadow-xl"
              >
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSelected(opt);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2.5 text-sm transition-colors cursor-pointer ${
                      selected === opt
                        ? "text-primary"
                        : "text-cream-muted hover:text-cream"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Heading */}
        <h1 className="font-display text-[clamp(60px,10vw,140px)] leading-[0.85] tracking-[-0.03em] text-cream">
          <em className="not-italic font-display italic text-cream">My</em>{" "}
          Work
        </h1>

        {/* Spacer to balance layout */}
        <div className="hidden md:block w-[140px]" />
      </div>

      {/* Flat 3-Column Grid — staircase pattern from varying image heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-24 items-start">
        {filtered.map((item, i) => (
          <WorkCard
            key={item.id}
            item={item}
            aspectClass={ASPECT_PATTERN[i % 6]}
            onClick={() => router.push(`/work/${item.slug}`)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-cream-muted">
          No projects found.
        </div>
      )}
    </div>
  );
};

const WorkCard = ({ item, onClick, aspectClass }) => (
  <motion.article
    onClick={onClick}
    className="cursor-pointer group"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {/* Image — no border-radius, varying aspect ratio per position */}
    <div className={`relative ${aspectClass} overflow-hidden`}>
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-bg-dark-card" />
      )}
    </div>

    {/* Text — sans-serif ~18px title, ~12px tags */}
    <div className="mt-4">
      <h3 className="text-lg font-normal text-cream">
        {item.title}
      </h3>
      <p className="text-xs text-cream/50 mt-1">
        {[item.platform === "react" ? "React" : "WordPress", item.category]
          .filter(Boolean)
          .join(", ")}
      </p>
    </div>
  </motion.article>
);
