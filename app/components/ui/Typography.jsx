export const Heading = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}`;
  const styles = {
    1: "font-display text-[clamp(48px,8vw,120px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]",
    2: "font-display text-[clamp(36px,6vw,80px)] font-normal text-cream leading-[0.9] tracking-[-0.02em]",
    3: "text-2xl md:text-3xl font-semibold text-cream",
    4: "text-xl md:text-2xl font-semibold text-cream",
  };

  return (
    <Tag className={`${styles[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export const Text = ({ children, variant = "body", className = "" }) => {
  const variants = {
    body: "text-cream-muted text-base leading-relaxed",
    muted: "text-cream-muted/60 text-sm",
    small: "text-cream-muted text-sm",
    label: "text-cream-muted/60 text-xs uppercase tracking-[0.2em] font-medium",
  };

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};
