"use client";

import { motion } from "framer-motion";

export const PartneringBanner = () => {
  return (
    <section className="relative w-full px-6 md:px-12 py-32 bg-bg-dark border-y border-cream/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="font-display text-[clamp(36px,5vw,72px)] leading-none text-cream mb-8 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Working with <br />
          people who care <br />
          about their craft<span className="text-primary">.</span>
        </motion.h2>

        <div className="w-8 h-px bg-primary mb-8"></div>

        <motion.p
          className="text-lg md:text-xl text-cream-muted max-w-2xl mb-12 text-balance leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From local startups in Indonesia to global brands, I love
          collaborating with anyone who's passionate about creating something
          meaningful — and having fun while doing it.
        </motion.p>

        <motion.a
          href="/contact"
          className="bg-primary text-cream font-medium px-8 py-3 rounded-sm transition-transform hover:scale-105 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Let's Talk
        </motion.a>
      </div>
    </section>
  );
};
