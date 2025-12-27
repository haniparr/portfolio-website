export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon: Icon,
}) => {
  const baseStyles =
    "font-medium rounded-full transition-all duration-300 flex items-center gap-2 justify-center";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-hover dark:bg-dark-primary dark:hover:bg-dark-hover text-white",
    secondary:
      "bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-border text-text-heading dark:text-dark-heading border border-border-light dark:border-dark-border",
    icon: "bg-white dark:bg-dark-card hover:bg-primary-tint dark:hover:bg-dark-tint text-primary dark:text-dark-primary w-10 h-10 rounded-full",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};
