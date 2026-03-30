"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Empathy First",
    description:
      "Every click, scroll, and interaction has a person behind it. I design and build with their perspective in mind — not just what looks good, but what truly works for them.",
  },
  {
    title: "Start with Truth",
    description:
      "Great work begins with understanding what a brand truly needs to say and how an audience actually receives it. No fluff — just honest, purposeful design.",
  },
  {
    title: "Take the Time",
    description:
      "Meaningful ideas don't happen in a rush. I invest the time to explore, iterate, and refine until the result feels just right.",
  },
  {
    title: "Think Beyond",
    description:
      "Being multi-disciplinary means I don't stay in one lane. I blend code, design, and visual storytelling to create holistic digital experiences.",
  },
  {
    title: "Less is More",
    description:
      "Good design gets out of the way. Clean layouts, clear messaging, and purposeful visuals — no unnecessary noise.",
  },
];

export const GuidingPrinciples = () => {
  return (
    <section className="relative w-full px-6 md:px-12 py-32 bg-bg-dark flex flex-col items-center">
      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-24"
      >
        <div className="w-16 h-16 rounded-full border border-cream/20 flex items-center justify-center mb-6">
          <div className="text-2xl">✦</div>
        </div>
        <h2 className="font-display text-[clamp(40px,6vw,64px)] leading-[1.1] text-cream text-center text-balance max-w-2xl">
          How I <br />
          Approach My Work
        </h2>
      </motion.div>

      {/* Principles List */}
      <div className="w-full max-w-4xl flex flex-col">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col md:flex-row items-start md:items-center py-10 border-t border-cream/10"
          >
            <h3 className="w-full md:w-1/3 text-xl md:text-2xl font-medium text-cream mb-4 md:mb-0">
              {p.title}
            </h3>
            <p className="w-full md:w-2/3 text-lg md:text-xl text-cream-muted leading-relaxed max-w-lg">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
