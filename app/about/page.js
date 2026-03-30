// Server component — fetches DB data at request time
import { Navbar } from "@/app/components/layout/Navbar";
import { AgencyHero } from "@/app/components/sections/AgencyHero";
import { GuidingPrinciples } from "@/app/components/sections/GuidingPrinciples";
import { AgencyServices } from "@/app/components/sections/AgencyServices";
import { PartneringBanner } from "@/app/components/sections/PartneringBanner";
import { ClientLogos } from "@/app/components/sections/ClientLogos";
import { ClientConfessions } from "@/app/components/sections/ClientConfessions";
import { YouWinWeGrin } from "@/app/components/sections/YouWinWeGrin";
import { AgencyOutro } from "@/app/components/sections/AgencyOutro";
import { Footer } from "@/app/components/layout/Footer";

async function getData() {
  try {
    // Dynamic import so we don't crash if DB is not yet connected
    const { prisma } = await import("@/lib/prisma");
    const [clients, testimonials] = await Promise.all([
      prisma.client.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
      prisma.testimonial.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
    ]);
    return { clients, testimonials };
  } catch (e) {
    console.warn("DB not connected, using static data:", e.message);
    return { clients: [], testimonials: [] };
  }
}

export default async function AboutPage() {
  const { clients, testimonials } = await getData();

  return (
    <main className="bg-bg-dark text-cream min-h-screen">
      <Navbar />
      <div className="flex flex-col w-full overflow-hidden">
        <AgencyHero />
        <GuidingPrinciples />
        {/* <AgencyServices /> */}
        <PartneringBanner />
        <ClientLogos clients={clients} />
        <ClientConfessions testimonials={testimonials} />
        <YouWinWeGrin />
        {/* <AgencyOutro /> */}
        <Footer />
      </div>
    </main>
  );
}
