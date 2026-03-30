import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "Contact — Haniparr",
  description:
    "Get in touch for web development, UI/UX design, or graphic design projects. Let's create something great together.",
};

export default function ContactPage() {
  return (
    <main className="bg-bg-dark min-h-screen">
      <Navbar />
      <ContactClient />
      <Footer />
    </main>
  );
}
