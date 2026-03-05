export const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <div
      className={`bg-bg-card dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm ${
        hover
          ? "hover:shadow-xl transition-all duration-300"
          : "transition-colors duration-300"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
