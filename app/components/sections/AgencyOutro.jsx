"use client";

import { motion } from "framer-motion";

export const AgencyOutro = () => {
  return (
    <section className="relative w-full bg-bg-dark pt-32 overflow-hidden flex flex-col">
      {/* Top Graphic / Wireframe sphere representation */}
      <div className="w-full h-48 md:h-64 flex justify-center mb-16 overflow-hidden">
        <div className="w-[150%] sm:w-full h-64 border border-primary/20 rounded-[50%] -translate-y-32 bg-gradient-to-t from-bg-dark to-primary/5"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center mb-48 text-balance">
        <motion.p
          className="text-xl md:text-3xl font-medium text-cream leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          I'm a creative at the intersection of design, code, and storytelling —
          helping brands craft digital experiences and visual identities that
          people genuinely connect with.
        </motion.p>

        <motion.a
          href="/contact"
          className="bg-primary text-cream font-medium px-8 py-3 rounded-sm transition-transform hover:scale-105 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Create Something Together
        </motion.a>
      </div>
    </section>
  );
};
