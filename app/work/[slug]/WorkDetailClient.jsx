"use client";
import { useRouter } from "next/navigation";
import { Heading, Text } from "@/app/components/ui/Typography";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const WorkDetailClient = ({ item }) => {
  const router = useRouter();

  return (
    <>
      {/* Back + Project Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <button
          onClick={() => router.push("/#portfolio")}
          className="flex items-center gap-2 text-cream-muted hover:text-cream transition-colors mb-12 group cursor-pointer"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm uppercase tracking-[0.15em]">Back to Portfolio</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {item.category}
            </p>
            <Heading level={1} className="leading-[0.85]">
              {item.title}
            </Heading>
          </div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream-border text-cream px-6 py-3 rounded-full hover:bg-cream-card transition-colors text-sm w-fit"
            >
              Visit Website <ExternalLink size={14} />
            </a>
          )}
        </div>
      </section>

      {/* Section C: Showcase Marquee + Laptop */}
      <section className="min-h-screen bg-bg-dark relative overflow-hidden flex items-center justify-center py-20">
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none">
          <div className="animate-marquee">
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span
                  key={`1-${i}`}
                  className="text-[20vw] font-semibold text-cream-subtle px-8"
                >
                  {item.marqueeText || "website.com"}
                </span>
              ))}
            </div>
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span
                  key={`2-${i}`}
                  className="text-[20vw] font-semibold text-cream-subtle px-8"
                >
                  {item.marqueeText || "website.com"}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center z-10">
          <div className="absolute top-0 left-6 md:left-12 max-w-xs">
            <Text className="text-sm text-cream-muted">
              {item.showcaseDescription}
            </Text>
          </div>

          <div className="relative">
            <img
              src="/images/laptop.png"
              alt={item.title}
              className="w-full h-auto object-contain mx-auto max-w-[90%]"
              style={{ maxHeight: "485px" }}
            />
          </div>

          <div className="absolute bottom-0 right-6 md:right-12 max-w-xs text-right">
            <Text className="text-sm text-cream-muted">{item.description}</Text>
          </div>
        </div>
      </section>

      {/* Section D: Framework + Mobile Mockup */}
      <section className="py-32 overflow-hidden bg-bg-dark-alt">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Mobile Mockup */}
            <div className="order-2 md:order-1 relative">
              <div className="relative w-64 md:w-80 mx-auto transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl -m-2"></div>
                <div className="relative bg-black rounded-[2.5rem] border-8 border-gray-800 overflow-hidden shadow-xl aspect-[9/19]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20"></div>
                  <div className="h-full w-full bg-bg-dark overflow-y-auto no-scrollbar">
                    <img
                      src={item.image}
                      alt="Mobile View"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-cream text-center p-4">
                        <h4 className="font-display italic text-xl">{item.title}</h4>
                        <p className="text-xs mt-2 text-cream-muted">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Tech Stack */}
            <div className="order-1 md:order-2">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                Tech Stack
              </p>
              <Heading level={2} className="mb-8">
                Framework
              </Heading>

              <div className="flex flex-wrap gap-4 mb-12">
                {(item.frameworks || []).map((fw, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-bg-dark-card border border-cream-border hover:border-cream-muted/20 transition-all"
                  >
                    <div
                      className={`w-10 h-10 ${fw.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {fw.icon}
                    </div>
                    <span className="font-medium text-cream">{fw.name}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Heading level={4}>{item.title}</Heading>
                <Text>{item.showcaseDescription}</Text>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 rounded-full bg-primary px-8 py-3.5 font-medium text-bg-dark transition-colors hover:bg-primary-hover"
                  >
                    Go to the website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
