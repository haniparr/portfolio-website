"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";

export const HeroSection = ({ darkMode, setDarkMode }) => {
  return (
    <Section className="h-screen pt-32 md:pt-64">
      <div className="max-w-4xl flex flex-col justify-center h-full">
        <h1 className="text-6xl md:text-[140px] font-semibold tracking-tight leading-none text-text-heading dark:text-dark-heading">
          hello
        </h1>
        <h1 className="text-6xl md:text-[140px] font-semibold tracking-tight leading-none text-text-heading dark:text-dark-heading mb-6">
          world!
        </h1>
        <Text className="mb-2 text-text-muted dark:text-dark-muted text-xs uppercase tracking-wider pl-2">
          From Indonesia Deliver to World Wide
        </Text>
        <Text className="mb-8 max-w-lg pl-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio.
        </Text>
        <div className="flex items-center gap-4 pl-2">
          <Button variant="primary" className="rounded-full px-8">
            Start a project
          </Button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 rounded-full bg-white dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-dark-border border border-border-light dark:border-dark-border flex items-center justify-center text-primary dark:text-dark-primary transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </Section>
  );
};
