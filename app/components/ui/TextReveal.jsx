"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const TextReveal = ({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  staggerDelay = 0.08,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  // Split text into words if children is a string
  const words =
    typeof children === "string" ? children.split(" ") : [children];

  return (
    <Tag ref={ref} className={`${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: delay + i * staggerDelay,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const LineReveal = ({
  children,
  className = "",
  delay = 0,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
