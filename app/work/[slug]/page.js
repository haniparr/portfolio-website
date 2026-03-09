import { notFound } from "next/navigation";
import { portfolioData } from "@/lib/portfolio-data";
import { WorkDetailClient } from "./WorkDetailClient";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export async function generateStaticParams() {
  return portfolioData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = portfolioData.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Vidi Portfolio`,
    description: item.showcaseDescription,
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const item = portfolioData.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <main className="bg-bg-dark min-h-screen">
      <Navbar />
      <WorkDetailClient item={item} />
      <Footer />
    </main>
  );
}
