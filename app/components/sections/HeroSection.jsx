"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import { Heading, Text } from "@/app/components/ui/Typography";

export const HeroSection = ({ darkMode, setDarkMode }) => {
  return (
    <Section className="pt-32 pb-20">
      <div className="max-w-2xl">
        <Heading level={1} className="mb-6">
          hello
          <br />
          world!
        </Heading>
        <Text className="mb-2 text-text-muted dark:text-dark-muted text-xs uppercase tracking-wider">
          From Indonesia Deliver to World Wide
        </Text>
        <Text className="mb-8 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio.
        </Text>
        <div className="flex items-center gap-4">
          <Button variant="primary">Get In touch</Button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 rounded-full bg-white dark:bg-dark-card hover:bg-primary-tint dark:hover:bg-dark-tint border border-border-light dark:border-dark-border flex items-center justify-center text-primary dark:text-dark-primary transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </Section>
  );
};
