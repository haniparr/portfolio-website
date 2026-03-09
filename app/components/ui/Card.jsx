export const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <div
      className={`bg-bg-dark-card rounded-lg overflow-hidden border border-cream-border ${
        hover
          ? "hover:border-cream-muted/20 hover:bg-cream-card transition-all duration-300"
          : "transition-colors duration-300"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
