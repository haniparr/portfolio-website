import { Card } from "@/app/components/ui/Card";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const FrameworkSection = () => {
  const frameworks = [
    { name: "Next.js", icon: "⚡", color: "bg-black" },
    { name: "React", icon: "⚛️", color: "bg-blue-500" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-600" },
  ];

  return (
    <Section className="py-32 overflow-hidden bg-bg-section dark:bg-dark-section relative z-30">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative">
          {/* Mobile Mockup */}
          <div className="relative w-64 md:w-80 mx-auto transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-out z-10">
            <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl -m-2"></div>
            <div className="relative bg-black rounded-[2.5rem] border-8 border-gray-800 overflow-hidden shadow-xl aspect-[9/19]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20"></div>

              {/* Screen Content */}
              <div className="h-full w-full bg-white overflow-y-auto no-scrollbar">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
                  alt="Mobile View"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h4 className="font-serif italic text-xl">Rayakan Momen Special</h4>
                    <p className="text-xs mt-2">Bersama VIT Catering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="order-1 md:order-2">
          <Text className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
            Tech Stack
          </Text>
          <Heading level={2} className="mb-8">
            Framework
          </Heading>

          <div className="flex flex-wrap gap-6 mb-12">
            {frameworks.map((fw, i) => (
              <div
                key={i}
                className={`group flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-dark-card border border-border-light dark:border-dark-border shadow-sm hover:shadow-md transition-all cursor-default`}
              >
                <div className={`w-10 h-10 ${fw.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
                  {fw.icon}
                </div>
                <span className="font-semibold text-text-heading dark:text-dark-heading">{fw.name}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Heading level={4}>
              Layanan Professional Kami
            </Heading>
            <Text className="text-text-body dark:text-dark-body leading-relaxed">
              Kami menggunakan teknologi terbaru untuk memastikan website anda cepat, aman, dan mudah dikelola.
              Framework modern memberikan performa terbaik.
            </Text>

            <Button
              variant="primary"
              className="bg-[#FDB022] hover:bg-[#E59E1A] text-white rounded-full px-8 mt-4"
            >
              Go to the website
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
