const toolsRow1 = [
  "Figma",
  "React",
  "Next.js",
  "WordPress",
  "Tailwind CSS",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "GitHub",
];

const toolsRow2 = [
  "GitHub",
  "Node.js",
  "Framer Motion",
  "TypeScript",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "Tailwind CSS",
  "WordPress",
  "Next.js",
  "React",
  "Figma",
];

const MarqueeRow = ({ tools, reverse = false }) => (
  <div className="relative overflow-hidden py-3">
    <div
      className="animate-marquee"
      style={{
        animationDirection: reverse ? "reverse" : "normal",
        animationDuration: "40s",
      }}
    >
      {/* Duplicate the items for seamless loop */}
      {[...tools, ...tools].map((tool, i) => (
        <span
          key={`${tool}-${i}`}
          className="inline-flex items-center shrink-0 text-cream/20 text-lg md:text-xl font-medium whitespace-nowrap"
        >
          {tool}
          <span className="mx-6 md:mx-8 text-cream/10">&bull;</span>
        </span>
      ))}
    </div>
  </div>
);

export const ClientsMarquee = () => {
  return (
    <section className="bg-bg-dark py-16 md:py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-cream-muted/60 font-medium">
          Tools & Technologies
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-2">
        <MarqueeRow tools={toolsRow1} />
        <MarqueeRow tools={toolsRow2} reverse />
      </div>
    </section>
  );
};
