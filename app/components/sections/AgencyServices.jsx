"use client";

import { motion } from "framer-motion";

const services = [
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Branding & Identity",
  "Responsive Websites",
  "WordPress Development",
  "Design Systems",
  "Motion Graphics",
  "Social Media Design",
  "Visual Storytelling",
];

export const AgencyServices = () => {
  return (
    <section className="relative w-full px-6 md:px-12 py-32 bg-bg-dark border-t border-cream/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start lg:gap-32 gap-16">
        {/* Left Side: Red Rectangle */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-48 h-64 md:w-64 md:h-80 bg-primary"></div>
        </motion.div>

        {/* Right Side: Services List */}
        <div className="w-full md:w-2/3 flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`py-6 flex justify-between items-center ${i !== 0 && "border-t border-cream/10"}`}
            >
              <h4 className="text-xl md:text-2xl font-medium text-cream hover:text-primary transition-colors cursor-pointer">
                {service}
              </h4>
              <span className="text-cream/30 text-sm font-serif italic">
                ({String(i + 1).padStart(2, "0")})
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
