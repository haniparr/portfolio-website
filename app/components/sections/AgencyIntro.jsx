"use client";

import { motion } from "framer-motion";

export const AgencyIntro = () => {
  return (
    <section className="relative w-full px-6 md:px-12 py-16 md:py-24 border-t border-cream-border/30 bg-bg-dark-alt">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.1] font-medium text-cream mb-8">
            We are an agile team of thinkers and creators connected by our
            shared sense of style, our far reaching industry knowledge, and our
            unceasing pursuit of innovation.
          </h2>
        </motion.div>
        <motion.div
          className="md:w-1/2 md:mt-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-cream-muted text-lg md:text-xl leading-relaxed">
            Griflan is based out of Philadelphia, but our designs and
            partnerships reach across the globe. Our dynamic team of designers,
            artists and writers is dedicated to working with forward-thinking
            organizations to create custom digital solutions, compelling visual
            content, and indelible brand experiences for clients all over the
            world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
