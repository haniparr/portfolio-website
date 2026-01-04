import { Card } from "@/app/components/ui/Card";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";

<Section className="py-20 overflow-hidden">
  <div className="flex flex-col items-center mb-16">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-4xl text-[#C7B9DA] font-bold">h</span>
    </div>
    <Heading level={1} className="text-center leading-[0.8] tracking-tighter">
      web
      <br />
      development.
    </Heading>
  </div>

  <div className="relative w-full max-w-6xl mx-auto">
    {/* Large background text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center -z-10  opacity-10 dark:opacity-5">
      <span className="text-[12vw] font-bold whitespace-nowrap text-text-heading dark:text-dark-heading">
        vidicatering.com
      </span>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="hidden md:block">
        <Text className="text-sm max-w-xs ml-auto text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
        </Text>
      </div>

      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-2xl transform transition-transform hover:scale-105 duration-500">
          {/* Laptop Frame approximation */}
          <div className="bg-[#1a1a1a] rounded-t-xl p-2 pb-0 shadow-2xl mx-auto w-3/4 md:w-full">
            <div className="bg-black rounded-t-lg overflow-hidden aspect-[16/10] relative">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80"
                alt="VIT Catering Website"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
                <h3 className="text-white text-xl md:text-3xl font-serif italic mb-2">
                  Rayakan Momen Spesial Anda
                </h3>
                <p className="text-white text-sm md:text-base font-light">
                  Bersama VIT Catering
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#2a2a2a] h-4 w-4/5 mx-auto rounded-b-xl shadow-lg"></div>
          <div className="bg-[#e5e5e5] h-1 w-12 mx-auto mt-1 rounded-full"></div>
        </div>
      </div>
    </div>

    <div className="md:hidden mt-8 text-center">
      <Text className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
      </Text>
    </div>
  </div>
</Section>
