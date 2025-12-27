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
    <Section className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Heading level={3} className="mb-4">
            Framework
          </Heading>

          <div className="flex gap-4 mb-6">
            {frameworks.map((fw, i) => (
              <div
                key={i}
                className={`w-12 h-12 ${fw.color} rounded-xl flex items-center justify-center text-white font-bold`}
              >
                {fw.icon}
              </div>
            ))}
          </div>

          <Heading level={4} className="mb-4">
            Framework
          </Heading>
          <Text className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio.
          </Text>

          <Button
            variant="primary"
            className="bg-[#FDB022] hover:bg-[#E59E1A] text-white"
          >
            Go to the website
          </Button>
        </div>

        <div className="relative">
          <Card className="shadow-2xl transform rotate-3 hover:rotate-0 transition-transform overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              alt="Framework Project"
              className="w-full aspect-3/4 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2">
                  Rayakan Momen Spesial Anda
                </h4>
                <p className="text-sm opacity-90">Bersama VIT Catering</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
