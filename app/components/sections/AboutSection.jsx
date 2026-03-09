"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/app/components/ui/Section";
import { TextReveal } from "@/app/components/ui/TextReveal";

const tools = [
  "Figma", "React", "Next.js", "WordPress", "Tailwind CSS",
  "Photoshop", "Illustrator", "After Effects", "TypeScript", "Framer Motion",
];

const stats = [
  { number: "3+", label: "Years\nExperience" },
  { number: "20+", label: "Projects\nCompleted" },
  { number: "15+", label: "Happy\nClients" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="bg-bg-dark py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Big statement */}
        <div ref={ref} className="max-w-4xl mb-20">
          <TextReveal
            as="h2"
            className="font-display text-[clamp(28px,4vw,56px)] font-normal text-cream leading-[1.15] tracking-[-0.02em]"
            staggerDelay={0.05}
          >
            A multi-disciplinary creative who turns ideas into functional websites, intuitive interfaces, and memorable visual identities.
          </TextReveal>
        </div>

        {/* Sub description + CTA */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-cream-muted text-base md:text-lg leading-relaxed mb-6">
              Saya menggabungkan keahlian di web development, UI/UX design, dan graphic
              design untuk menciptakan digital experiences yang holistik. Dari konsep
              visual hingga implementasi teknis, semuanya saya tangani.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-cream hover:text-primary-hover transition-colors group"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("portfolio");
                if (el && window.lenis) window.lenis.scrollTo(el);
                else if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Lihat Portfolio</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cream-muted/60 mb-6">
              Tools & Technologies
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-cream-border text-cream-muted text-sm hover:border-cream-muted/30 hover:bg-cream-card transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-8 border-t border-cream-border pt-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <p className="font-display text-[clamp(36px,5vw,72px)] text-cream leading-none">
                {stat.number}
              </p>
              <p className="text-cream-muted/60 text-sm mt-2 whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
