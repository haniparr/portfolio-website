"use client";

import { motion } from "framer-motion";

const SAMPLE_CLIENTS = [
  { id: 1, name: "VIDI Group" },
  { id: 2, name: "Hacky Bakery" },
  { id: 3, name: "SMKIT Ihsanul Fikri" },
  { id: 4, name: "Sayur Sleman" },
  { id: 5, name: "PT Andara Rejo Makmur" },
];

export const ClientLogos = ({ clients }) => {
  const clientsData = clients?.length ? clients : SAMPLE_CLIENTS;
  return (
    <section className="bg-bg-dark py-24 md:py-32 w-full flex flex-col items-center min-h-[50vh]">
      {/* Title */}
      <div className="w-full mb-16 md:mb-24 px-6 md:px-12 flex justify-center">
        <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[0.9] text-cream text-center">
          People I've <span className="italic">Worked With</span>
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
          {clientsData.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex justify-center items-center relative aspect-3/2 rounded-lg p-6 bg-transparent transition-all duration-300 border border-white/5 hover:bg-white/5 hover:border-white/10"
            >
              <span className="font-display font-bold text-lg md:text-xl text-white/50 transition-colors duration-300 group-hover:text-white text-center leading-tight">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
