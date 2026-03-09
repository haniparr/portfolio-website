export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon: Icon,
  href,
}) => {
  const baseStyles =
    "font-medium rounded-full flex items-center gap-2 justify-center cursor-pointer";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-hover text-bg-dark",
    secondary:
      "border border-cream-border text-cream hover:bg-cream-card hover:border-cream-muted/30",
    ghost:
      "text-cream hover:text-primary-hover",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const Tag = href ? "a" : "button";
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Tag
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} transition-all duration-300`}
      onClick={onClick}
      {...linkProps}
    >
      {children}
      {Icon && <Icon size={20} />}
    </Tag>
  );
};
