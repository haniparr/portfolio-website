"use client";

import { motion } from "framer-motion";

export const HoverButton = ({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
}) => {
  const variants = {
    primary: "bg-primary text-bg-dark",
    secondary: "border border-cream-border text-cream",
    ghost: "text-cream",
  };

  const Tag = href ? "a" : "button";
  const linkProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-medium cursor-pointer transition-colors duration-300 ${variants[variant]} ${className}`}
      onClick={onClick}
      {...linkProps}
    >
      <span className="relative block overflow-hidden h-[1.2em]">
        <motion.span
          className="block"
          initial={false}
          whileHover={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute top-full left-0 block"
          initial={false}
          whileHover={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-hidden
        >
          {children}
        </motion.span>
      </span>
    </Tag>
  );
};
