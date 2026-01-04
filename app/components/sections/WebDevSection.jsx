import { Card } from "@/app/components/ui/Card";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";

export const WebDevSection = () => {
  return (
    <>
      {/* 1. Title Section */}
      <section className="min-h-screen bg-[#F8F9FA] dark:bg-dark-section flex items-center justify-center p-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-6xl text-[#C7B9DA] font-bold">h</span>
          </div>
          <Heading level={1} className="text-center text-[15vw] md:text-[120px] leading-[0.8] tracking-tighter text-text-heading dark:text-dark-heading">
            web
            <br />
            development.
          </Heading>
        </div>
      </section>

      {/* 2. Project Showcase Section */}
      <section className="min-h-screen bg-bg-main dark:bg-dark-bg relative overflow-hidden flex items-center justify-center py-20">

        {/* Scrolling Background Text */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none">
          <div className="animate-marquee">
            {/* Group 1 */}
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span key={`1-${i}`} className="text-[20vw] font-semibold text-black/20 dark:text-white/20 px-8">
                  vidicatering.com
                </span>
              ))}
            </div>
            {/* Group 2 (Duplicate) */}
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span key={`2-${i}`} className="text-[20vw] font-semibold text-black/20 dark:text-white/20 px-8">
                  vidicatering.com
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center z-10">
          {/* Top Left Description */}
          <div className="absolute top-0 left-6 md:left-12 max-w-xs">
            <Text className="text-sm text-text-body dark:text-dark-body">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.
            </Text>
          </div>

          {/* Laptop Center */}
          <div className="relative transform transition-transform">
            {/* Laptop Frame */}
            <img
              src="/images/laptop.png"
              alt="Project Showcase"
              className="w-full h-auto object-contain mx-auto max-w-[90%]"
              style={{ maxHeight: "485px" }}
            />
          </div>

          {/* Bottom Right Description */}
          <div className="absolute bottom-0 right-6 md:right-12 max-w-xs text-right">
            <Text className="text-sm text-text-body dark:text-dark-body">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.
            </Text>
          </div>
        </div>
      </section>
    </>
  );
};
