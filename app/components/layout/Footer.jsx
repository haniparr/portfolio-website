export const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-cream-border py-12">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/30 text-sm">
            &copy; 2024 Vidi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" className="text-cream/30 hover:text-cream transition-colors text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-cream/30 hover:text-cream transition-colors text-sm">
              LinkedIn
            </a>
            <a href="https://dribbble.com" className="text-cream/30 hover:text-cream transition-colors text-sm">
              Dribbble
            </a>
            <a href="https://instagram.com" className="text-cream/30 hover:text-cream transition-colors text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
