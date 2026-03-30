import { notFound } from "next/navigation";
import { getProjectBySlug, getCaseStudy, getAllProjectSlugs } from "@/lib/data";
import { WorkDetailClient } from "./WorkDetailClient";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = await getProjectBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} — haniparr`,
    description: item.showcaseDescription || item.description,
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const item = await getProjectBySlug(slug);
  if (!item) notFound();

  const caseStudy = getCaseStudy(item);

  return (
    <main className="bg-bg-dark min-h-screen">
      <Navbar />
      <WorkDetailClient item={item} caseStudy={caseStudy} />
      <Footer />
    </main>
  );
}
