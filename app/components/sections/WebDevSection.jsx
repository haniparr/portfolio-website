import { Card } from "@/app/components/ui/Card";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";

export const WebDevSection = () => {
  return (
    <Section bg="gray" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-[#957BAC] rounded-lg flex items-center justify-center">
          <span className="text-white text-2xl">💻</span>
        </div>
        <Heading level={2}>
          web
          <br />
          development.
        </Heading>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Text className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio.
          </Text>
        </div>

        <div className="relative">
          <Card className="shadow-2xl">
            <div className="aspect-video bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                alt="VIT Catering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Rayakan Momen Spesial Anda
                  </h3>
                  <p className="text-sm">Bersama VIT Catering</p>
                </div>
              </div>
            </div>
          </Card>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#F4F0F7] rounded-full -z-10"></div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block max-w-xs text-[#868E96] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio.
        </div>
      </div>
    </Section>
  );
};
