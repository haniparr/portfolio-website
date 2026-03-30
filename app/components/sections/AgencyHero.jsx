"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AgencyHero = () => {
  return (
    <section className="relative w-full px-6 md:px-12 pt-32 pb-16 min-h-[90vh] flex items-center bg-bg-dark">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Main Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl flex flex-col items-center"
        >
          <h1 className="font-display text-[clamp(44px,7vw,100px)] leading-[0.9] tracking-tight text-cream relative inline-block">
            I craft with <br />
            empathy{" "}
            <span className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 hidden sm:block"></span>{" "}
            and <br />
            intention<span className="text-primary">.</span>
          </h1>

          <div className="my-10 h-px w-6 bg-primary"></div>

          <p className="text-base md:text-xl font-medium text-cream max-w-xl text-center leading-relaxed">
            I'm Hanif — a multi-disciplinary creative who bridges the gap
            between design thinking and technical execution, turning ideas into
            experiences people actually enjoy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
