interface BadgeProps {
  children: string;
  variant?: "primary" | "accent" | "dark" | "light";
}

export default function Badge({ children, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    dark: "bg-dark/10 text-dark",
    light: "bg-white/20 text-white",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
