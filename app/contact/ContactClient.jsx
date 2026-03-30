"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Mail, Instagram, Send, ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/app/components/ui/TextReveal";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer:
      "For a WordPress landing page, I can usually get it done in about 2 days. For everything else, it really depends on the scope and complexity of the project — a standard website might take a few weeks, while a more complex build could take 1–3 months. I'll give you a clear timeline after we talk through your needs.",
  },
  {
    id: 2,
    question: "Can I request revisions after the project is done?",
    answer:
      "Of course! Every project includes 2–3 rounds of revisions. After launch, I also provide a free support period for bug fixes and minor adjustments.",
  },
  {
    id: 3,
    question: "What technologies do you work with?",
    answer:
      "For web development, I use React, Next.js, Tailwind CSS, and WordPress. For design, I work with Figma, Adobe Illustrator, and Photoshop. The stack is always tailored to what your project actually needs.",
  },
  {
    id: 4,
    question: "What does the process look like from start to finish?",
    answer:
      "It usually goes like this: discovery call → proposal & timeline → design mockup → development → testing → launch. You'll get regular updates at every stage so there are no surprises.",
  },
  {
    id: 5,
    question: "Do you work with clients outside of Indonesia?",
    answer:
      "Absolutely! I work with clients remotely from anywhere in the world. We can communicate via email, WhatsApp, or video call. Time zones are never a problem — I'm flexible with scheduling.",
  },
  {
    id: 6,
    question: "How much does a website cost?",
    answer:
      "It varies depending on the scope and features. Feel free to reach out for a free consultation — I'll give you an estimate once I understand what you need.",
  },
];

/* ─── Contact Methods ─── */
const contactMethods = [
  {
    label: "Email",
    value: "haniparohman@gmail.com",
    href: "mailto:haniparohman@gmail.com",
    icon: Mail,
    description: "Best for project discussions and proposals",
  },
  {
    label: "Instagram",
    value: "@haniparr",
    href: "https://instagram.com/haniparr",
    icon: Instagram,
    description: "Drop a DM for a casual chat",
  },
];

export const ContactClient = () => {
  const [openId, setOpenId] = useState(null);
  const heroRef = useRef(null);
  const faqRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-bg-dark">
        <div ref={heroRef} className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-primary mb-6"
          >
            Get in Touch
          </motion.p>

          {/* Heading */}
          <div className="mb-12">
            <TextReveal
              as="h1"
              className="font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]"
            >
              Let's Talk.
            </TextReveal>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cream-muted text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Got an exciting project in mind, or just want to chat about design &
            development? I'd love to hear your ideas. Don't hesitate to reach
            out through any of the channels below.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ CONTACT CARDS ═══════════ */}
      <section className="bg-bg-dark pb-24 md:pb-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative p-8 md:p-10 rounded-2xl border border-cream-border bg-cream-card hover:border-cream-muted/30 transition-all duration-300"
              >
                {/* Icon + Arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <method.icon size={22} className="text-primary" />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-cream-muted/40 group-hover:text-cream group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>

                {/* Label */}
                <p className="text-xs uppercase tracking-[0.15em] text-cream-muted/60 mb-2">
                  {method.label}
                </p>

                {/* Value */}
                <h3 className="text-xl md:text-2xl font-semibold text-cream mb-2 group-hover:text-primary-hover transition-colors duration-300">
                  {method.value}
                </h3>

                {/* Description */}
                <p className="text-sm text-cream-muted">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ SECTION ═══════════ */}
      <section className="bg-bg-dark py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-20">
            <TextReveal
              as="h2"
              className="font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]"
            >
              FAQ.
            </TextReveal>
          </div>

          {/* Accordion */}
          <div ref={faqRef} className="border-t border-cream-border">
            {faqItems.map((item, i) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-b border-cream-border"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full py-7 md:py-8 flex items-center justify-between gap-6 cursor-pointer group text-left"
                  >
                    {/* Number */}
                    <span className="font-display text-xl md:text-2xl text-cream-muted/40 shrink-0 w-12 md:w-16">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl lg:text-2xl text-cream flex-1 font-medium group-hover:text-primary-hover transition-colors duration-300">
                      {item.question}
                    </h3>

                    {/* Arrow */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        size={24}
                        className="text-cream-muted group-hover:text-primary-hover transition-colors duration-300"
                      />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-12 md:pl-16">
                          <p className="text-cream-muted text-base leading-relaxed">
                            {item.answer}
                          </p>
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
    </>
  );
};
