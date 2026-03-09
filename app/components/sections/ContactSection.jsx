"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextReveal } from "@/app/components/ui/TextReveal";
import { Button } from "@/app/components/ui/Button";
import { Github, Linkedin, Dribbble, Instagram, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-bg-dark py-32 md:py-40">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Big Heading */}
        <div className="mb-12">
          <TextReveal
            as="h2"
            className="font-display text-[clamp(36px,6vw,80px)] font-normal text-cream leading-[1.05] tracking-[-0.02em]"
          >
            Let's create something great.
          </TextReveal>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            href="mailto:hello@vidi.dev"
            icon={Mail}
          >
            Let's Connect
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
        >
          <a
            href="mailto:hello@vidi.dev"
            className="flex items-center gap-2 text-cream-muted hover:text-cream transition-colors duration-300"
          >
            <Mail size={16} className="text-primary" />
            <span className="text-sm">hello@vidi.dev</span>
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-cream-border" />
          <div className="flex items-center gap-2 text-cream-muted">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Yogyakarta, Indonesia</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-cream-border flex items-center justify-center text-cream-muted hover:text-cream hover:border-cream-muted/30 hover:bg-cream-card transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
