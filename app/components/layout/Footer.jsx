import { Section } from "@/app/components/ui/Section";
import { Text } from "@/app/components/ui/Typography";

export const Footer = () => {
  return (
    <footer className="bg-text-heading dark:bg-dark-bg border-t border-border-light dark:border-dark-border transition-colors duration-300 py-12">
      <Section>
        <div className="text-center">
          <Text className="text-text-muted dark:text-dark-muted">
            © 2024 Your Name. All rights reserved.
          </Text>
        </div>
      </Section>
    </footer>
  );
};
