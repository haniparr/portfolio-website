export const Heading = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}`;
  const styles = {
    1: "text-5xl md:text-7xl font-bold text-text-heading dark:text-dark-heading leading-tight",
    2: "text-4xl md:text-6xl font-bold text-text-heading dark:text-dark-heading leading-tight",
    3: "text-2xl md:text-3xl font-semibold text-text-heading dark:text-dark-heading",
    4: "text-xl md:text-2xl font-semibold text-text-heading dark:text-dark-heading",
  };

  return (
    <Tag
      className={`${styles[level]} ${className} transition-colors duration-300`}
    >
      {children}
    </Tag>
  );
};

export const Text = ({ children, variant = "body", className = "" }) => {
  const variants = {
    body: "text-text-body dark:text-dark-body text-base leading-relaxed",
    muted: "text-text-muted dark:text-dark-muted text-sm",
    small: "text-text-body dark:text-dark-body text-sm",
  };

  return (
    <p
      className={`${variants[variant]} ${className} transition-colors duration-300`}
    >
      {children}
    </p>
  );
};
