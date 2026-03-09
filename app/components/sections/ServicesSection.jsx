"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TextReveal } from "@/app/components/ui/TextReveal";
import { ChevronDown } from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Web Development",
    description:
      "Building fast, responsive, and modern websites using the latest technologies. From simple landing pages to complex web applications, I craft digital experiences that perform beautifully across all devices.",
    tools: ["React", "Next.js", "WordPress", "Tailwind CSS"],
  },
  {
    id: 2,
    number: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive and user-centered digital experiences. I combine research-driven insights with clean aesthetics to create interfaces that users love to interact with.",
    tools: ["Figma", "User Research", "Prototyping", "Wireframing"],
  },
  {
    id: 3,
    number: "03",
    title: "Graphic Design",
    description:
      "Creating compelling visual identities and marketing materials that communicate your brand story. From logos to print collateral, every design is crafted with purpose and precision.",
    tools: ["Adobe Illustrator", "Photoshop", "InDesign", "Branding"],
  },
];

export const ServicesSection = () => {
  const [openId, setOpenId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="bg-bg-dark py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <TextReveal
            as="h2"
            className="font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]"
          >
            What I Do.
          </TextReveal>
        </div>

        {/* Accordion */}
        <div ref={ref} className="border-t border-cream-border">
          {services.map((service, i) => {
            const isOpen = openId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border-b border-cream-border"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggle(service.id)}
                  className="w-full py-8 md:py-10 flex items-center justify-between gap-6 cursor-pointer group"
                >
                  {/* Left: Number */}
                  <span className="font-display text-2xl md:text-4xl text-cream-muted/40 shrink-0 w-16 md:w-20 text-left">
                    {service.number}
                  </span>

                  {/* Center: Title */}
                  <h3 className="font-display text-2xl md:text-4xl lg:text-5xl text-cream flex-1 text-left group-hover:text-primary-hover transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Right: Arrow */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={28}
                      className="text-cream-muted group-hover:text-primary-hover transition-colors duration-300"
                    />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-16 md:pl-20 pr-4">
                        <p className="text-cream-muted text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                          {service.description}
                        </p>

                        {/* Tools List */}
                        <div className="flex flex-wrap gap-3">
                          {service.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-4 py-2 rounded-full border border-cream-border text-cream-muted text-sm hover:border-cream-muted/30 hover:bg-cream-card transition-all duration-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
