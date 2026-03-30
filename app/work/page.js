import { getAllWorkProjects } from "@/lib/data";
import { WorkListClient } from "./WorkListClient";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Work — Vidi Portfolio",
  description:
    "A collection of web development, UI/UX, and graphic design projects.",
};

export default async function WorkPage() {
  const items = await getAllWorkProjects();

  return (
    <main className="bg-bg-dark min-h-screen">
      <Navbar />
      <WorkListClient items={items} />
      <Footer />
    </main>
  );
}
