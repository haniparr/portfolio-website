"use client";

import { useState } from "react";
import { Card } from "@/app/components/ui/Card";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";
import Image from "next/image";

export const WordPressSection = ({ portfolioItems }) => {
  const [activeTab, setActiveTab] = useState("desktop");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter berdasarkan tab
  const filteredItems = portfolioItems.filter(
    (item) => item.type === activeTab || !item.type
  );

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Section bg="gray" className="py-20 relative z-40">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <Heading level={2}>wordpress</Heading>
        <Text className="max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio.
        </Text>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          className={`px-6 py-2 rounded-full transition-colors ${activeTab === "desktop"
              ? "bg-primary text-white"
              : "bg-white text-text-body"
            }`}
          onClick={() => {
            setActiveTab("desktop");
            setCurrentPage(1);
          }}
        >
          Desktop
        </button>
        <button
          className={`px-6 py-2 rounded-full transition-colors ${activeTab === "mobile"
              ? "bg-primary text-white"
              : "bg-white text-text-body"
            }`}
          onClick={() => {
            setActiveTab("mobile");
            setCurrentPage(1);
          }}
        >
          Mobile
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {currentItems.map((item) => (
          <Card key={item.id} hover={true} className="group cursor-pointer">
            <div className="aspect-video relative overflow-hidden bg-gray-800">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.subtitle}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-8 h-8 rounded-full transition-colors ${num === currentPage
                  ? "bg-primary text-white"
                  : "bg-white text-text-body hover:bg-primary hover:text-white"
                }`}
            >
              {num}
            </button>
          ))}
        </div>
      )}
    </Section>
  );
};
