"use client";

import { motion } from "framer-motion";

const newsItems = [
  {
    company: "VIDI Group",
    title:
      "Built a full-stack Next.js website and designed marketing materials for a leading catering company with 40+ years of history",
    url: "#",
  },
  {
    company: "VIDI Catering",
    title:
      "Designed and developed a conversion-driven Meta Ads landing page that boosted campaign performance during Ramadan",
    url: "#",
  },
  {
    company: "Hacky Bakery",
    title:
      "Created a complete brand identity — from logo and social media content to a printed menu catalog",
    url: "#",
  },
  {
    company: "Sayur Sleman",
    title:
      "Designed and built a WordPress marketplace connecting local farmers with customers across Yogyakarta",
    url: "#",
  },
  {
    company: "PT Andara Rejo Makmur",
    title:
      "Led UI/UX design for a property platform using Design Thinking — from user flows to design system documentation",
    url: "#",
  },
  {
    company: "SMKIT Ihsanul Fikri",
    title:
      "Spearheaded end-to-end website development and social media design for a vocational boarding school",
    url: "#",
  },
  {
    company: "VIDI Group",
    title:
      "Designed a premium 40th anniversary invitation card and event materials with an elegant black and gold theme",
    url: "#",
  },
  {
    company: "Multiple Clients",
    title:
      "Delivered 20+ projects across web development, UI/UX design, and graphic design since 2021",
    url: "#",
  },
];

export const YouWinWeGrin = () => {
  return (
    <section className="relative w-full px-6 md:px-12 py-32 bg-bg-dark border-t border-cream/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.h2
          className="font-display text-[clamp(40px,5vw,72px)] leading-none text-cream text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Your win is my win<span className="text-primary">.</span>
        </motion.h2>

        {/* List Items */}
        <div className="w-full flex flex-col border-t border-cream/10">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col md:flex-row items-start md:items-center py-6 border-b border-cream/10 hover:bg-cream-card/50 transition-colors cursor-pointer"
            >
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <span className="text-sm font-bold uppercase tracking-wider text-cream/70 group-hover:text-primary transition-colors">
                  {item.company}
                </span>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg md:text-xl text-cream font-medium group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </div>
              <div className="w-full md:w-auto mt-2 md:mt-0 md:ml-auto">
                <span className="text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
