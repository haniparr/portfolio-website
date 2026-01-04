export const Section = ({ children, className = "", bg = "white" }) => {
  const backgrounds = {
    white: "bg-bg-main dark:bg-dark-bg",
    gray: "bg-bg-section dark:bg-dark-section",
  };

  return (
    <section
      className={`${backgrounds[bg]} ${className} transition-colors duration-300`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
};
