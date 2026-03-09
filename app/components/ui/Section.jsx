export const Section = ({ children, className = "", bg = "default" }) => {
  const backgrounds = {
    default: "bg-bg-dark",
    alt: "bg-bg-dark-alt",
  };

  return (
    <section className={`${backgrounds[bg] || backgrounds.default} ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
};
