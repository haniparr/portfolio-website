"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Hanif handled everything from our website to our marketing materials. His ability to bridge design and code is exactly what we needed.",
    author: "Management, VIDI Group",
    color: "bg-primary text-cream",
    rotate: -2,
    yOffset: 10,
  },
  {
    text: "The brand identity and catalog he created really elevated our bakery's look. Customers always compliment how professional everything feels.",
    author: "Owner, Hacky Bakery",
    color: "bg-cream text-bg-dark",
    rotate: 3,
    yOffset: -30,
  },
  {
    text: "From the school website to our social media, Hanif delivered consistently great work. He truly understands how to tell a story visually.",
    author: "Administration, SMKIT Ihsanul Fikri",
    color: "bg-primary text-cream",
    rotate: -1,
    yOffset: 40,
  },
  {
    text: "His design thinking approach made a real difference. He didn't just make things look good — he made sure everything worked for our users.",
    author: "Project Lead, PT Andara Rejo Makmur",
    color: "bg-cream text-bg-dark",
    rotate: 2,
    yOffset: -10,
  },
  {
    text: "Super collaborative and easy to work with. He built us a website that our farmers and customers actually enjoy using.",
    author: "Founder, Sayur Sleman",
    color: "bg-primary text-cream",
    rotate: -3,
    yOffset: 20,
  },
];

const COLORS = ["bg-primary text-cream", "bg-cream text-bg-dark"];
const ROTATIONS = [-2, 3, -1, 2, -3, 1];
const Y_OFFSETS = [10, -30, 40, -10, 20, -20];

export const ClientConfessions = ({ testimonials: dbTestimonials }) => {
  // Map DB testimonials to card format, or fall back to static
  const source = dbTestimonials?.length
    ? dbTestimonials.map((t, i) => ({
        text: t.content?.replace(/<[^>]*>/g, "") || t.content,
        author: t.company ? `${t.role ? t.role + ", " : ""}${t.company}` : t.author,
        color: COLORS[i % COLORS.length],
        rotate: ROTATIONS[i % ROTATIONS.length],
        yOffset: Y_OFFSETS[i % Y_OFFSETS.length],
      }))
    : testimonials;
  const duplicatedTestimonials = [...source, ...source];

  return (
    <section className="relative w-full bg-bg-dark py-32 overflow-hidden">
      {/* Title */}
      <div className="w-full mb-32 px-6 md:px-12 flex justify-center">
        <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[0.9] text-cream text-center">
          Kind Words
          <br />
          <span className="italic">from Clients</span>
        </h2>
      </div>

      {/* Auto-scrolling Marquee Cards Wrapper */}
      <div className="relative w-full flex items-center py-10">
        {/* Marquee Animation Container */}
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-12 md:gap-24 items-center px-6">
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className={`relative flex-shrink-0 w-[280px] md:w-[350px] p-8 md:p-12 shadow-xl transition-transform hover:scale-105 hover:z-10 ${t.color}`}
              style={{
                transform: `translateY(${t.yOffset}px) rotate(${t.rotate}deg)`,
                clipPath: "polygon(0 1%, 100% 0, 99% 100%, 1% 99%)",
              }}
            >
              <div className="text-4xl md:text-5xl font-serif mb-6 leading-none select-none opacity-40">
                &ldquo;
              </div>
              <p className="text-xl md:text-2xl font-medium mb-12 leading-tight pointer-events-none">
                {t.text}
              </p>
              <div className="w-full border-t border-current opacity-20 mb-4 pointer-events-none"></div>
              <p
                className={`text-sm tracking-wider font-bold pointer-events-none ${t.color === "bg-primary text-cream" ? "text-cream/90" : "text-bg-dark/80"}`}
              >
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
