import { portfolioData } from "@/lib/portfolio-data";
import { WorkListClient } from "./WorkListClient";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export const metadata = {
  title: "Work — Vidi Portfolio",
  description: "A collection of web development, UI/UX, and graphic design projects.",
};

export default function WorkPage() {
  return (
    <main className="bg-bg-dark min-h-screen">
      <Navbar />
      <WorkListClient items={portfolioData} />
      <Footer />
    </main>
  );
}
