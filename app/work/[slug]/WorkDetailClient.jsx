"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Helper: render as HTML if string contains tags, otherwise plain text
const RichText = ({ content, className }) => {
  if (!content) return null;
  const hasHtml = /<[a-z][\s\S]*>/i.test(content);
  if (hasHtml) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  return <p className={className}>{content}</p>;
};

export const WorkDetailClient = ({ item, caseStudy }) => {
  const router = useRouter();
  const sections = caseStudy.sections || [];
  const credits = Array.isArray(caseStudy.credits) ? caseStudy.credits : [];
  const frameworks = item.frameworks || [];

  // Determine what goes where
  const sidebarDescription = item.description; // short blurb for sidebar
  const mainDescription = item.showcaseDescription || caseStudy.description; // long text for right side

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: SHOWCASE MARQUEE
          ══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen bg-bg-dark relative overflow-hidden flex flex-col">
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <button
            onClick={() => router.push("/work")}
            className="flex items-center gap-2 text-cream-muted hover:text-cream transition-colors group cursor-pointer"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm uppercase tracking-[0.15em]">
              Back to Work
            </span>
          </button>
        </div>

        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none">
          <div className="animate-marquee">
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span
                  key={`1-${i}`}
                  className="text-[20vw] font-semibold text-cream-subtle px-8"
                >
                  {item.marqueeText || "project"}
                </span>
              ))}
            </div>
            <div className="flex shrink-0">
              {[...Array(2)].map((_, i) => (
                <span
                  key={`2-${i}`}
                  className="text-[20vw] font-semibold text-cream-subtle px-8"
                >
                  {item.marqueeText || "project"}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex items-center justify-center z-10 px-6">
          <div className="relative w-full max-w-4xl">
            <img
              src={item.image || "/images/placeholder.png"}
              alt={item.title}
              className="w-full h-auto object-contain mx-auto max-w-[90%]"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: TWO-COLUMN
          ══════════════════════════════════════════════════════════════ */}
      <article className="bg-bg-dark text-cream border-t border-cream-border">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] min-h-screen relative w-full max-w-7xl mx-auto">
          {/* ───── LEFT SIDEBAR ───── */}
          <aside
            className="
              lg:sticky lg:top-0 lg:h-screen
              px-6 md:px-12
              lg:border-r lg:border-cream-border
              flex flex-col justify-between
            "
          >
            <div className="flex flex-col gap-5 pt-12 lg:pt-20">
              {/* Category + Year */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
                  {item.dbCategory === "web-development"
                    ? "Web Development"
                    : item.dbCategory === "uiux"
                      ? "UI/UX Design"
                      : item.dbCategory === "graphic-design"
                        ? "Graphic Design"
                        : item.category}
                </span>
                {item.year && (
                  <>
                    <span className="text-cream-muted/30">·</span>
                    <span className="text-xs text-cream-muted/60">
                      {item.year}
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[0.9] tracking-[-0.02em] text-cream">
                {item.title}
              </h1>

              {/* Subtitle */}
              {item.subtitle && (
                <p className="text-cream-muted text-base md:text-lg -mt-1">
                  {item.subtitle}
                </p>
              )}

              {/* Description (short) */}
              {sidebarDescription && (
                <RichText
                  content={sidebarDescription}
                  className="text-cream-muted/70 text-sm leading-[1.6]"
                />
              )}

              {/* Tech Stack Pills */}
              {frameworks.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-cream-muted/40 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {frameworks.map((fw) => (
                      <span
                        key={fw.name}
                        className="px-3 py-1.5 rounded-full border border-cream-border text-cream-muted text-xs hover:border-cream-muted/30 hover:bg-cream-card transition-all"
                      >
                        {fw.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {item.services && item.services.length > 0 && (
                <div className="border-t border-cream-border/50 pt-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-cream-muted/40 mb-3">
                    Services
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {item.services.map((service, i) => (
                      <span key={i} className="text-sm text-cream/70">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Visit Website */}
              {item.url && item.url !== "#" && (
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-cream-border text-cream px-6 py-3 rounded-full hover:bg-cream-card hover:border-cream-muted/30 transition-colors text-sm w-fit"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>

            {/* Credits */}
            {credits.length > 0 && (
              <div className="border-t border-cream-border/50 pt-5 pb-8 lg:pb-12 mt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-cream-muted/40 mb-3">
                  Credits
                </p>
                <div className="flex flex-col gap-2">
                  {credits.map((credit, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-baseline gap-4"
                    >
                      <span className="text-sm text-cream/80 font-medium">
                        {credit.name}
                      </span>
                      <span className="text-xs text-cream-muted/50 italic text-right">
                        {credit.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* ───── RIGHT CONTENT ───── */}
          <div className="px-6 md:px-12 pt-12 lg:pt-20 pb-10">
            {/* Showcase description (long) */}
            {mainDescription && (
              <div className="mb-16 lg:mb-20 max-w-2xl">
                <RichText
                  content={mainDescription}
                  className="text-cream-muted/80 text-base md:text-lg leading-[1.8] [&>p]:mb-4 last:[&>p]:mb-0"
                />
              </div>
            )}

            {/* Case study sections */}
            {sections.map((section, sectionIdx) => (
              <section
                key={section.id}
                id={`cs-${section.id}`}
                data-cs-section={section.id}
                className={`${sectionIdx < sections.length - 1 ? "mb-[15vh]" : "mb-[5vh]"} min-h-[50vh]`}
              >
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary/70 mb-3">
                    {String(sectionIdx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
                    {section.title}
                  </h3>
                  {section.description && (
                    <RichText
                      content={section.description}
                      className="text-cream-muted/80 text-[0.9rem] md:text-base leading-[1.7] max-w-2xl [&>p]:mb-4 last:[&>p]:mb-0"
                    />
                  )}
                </div>

                {section.images && section.images.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {section.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="w-full rounded-lg overflow-hidden bg-bg-dark-card"
                      >
                        <Image
                          src={img}
                          alt={`${section.title} — image ${imgIdx + 1}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto block"
                          sizes="(max-width: 768px) 100vw, 60vw"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {(!section.images || section.images.length === 0) &&
                  section.description && (
                    <div className="border-l-2 border-primary/20 pl-6 py-2">
                      <p className="text-cream-muted/60 text-sm italic">
                        Project images coming soon
                      </p>
                    </div>
                  )}
              </section>
            ))}

            {/* Fallback: no sections and no showcase description */}
            {sections.length === 0 && !mainDescription && (
              <div className="min-h-[50vh] flex items-center">
                <RichText
                  content={item.description}
                  className="text-cream-muted/80 text-base leading-[1.7] max-w-2xl [&>p]:mb-4 last:[&>p]:mb-0"
                />
              </div>
            )}

            <div className="h-[10vh]" />
          </div>
        </div>
      </article>
    </>
  );
};
