import { hairline, mono } from "@/components/site/tokens";

interface BadgeProps {
  children: string;
  variant?: "primary" | "accent" | "dark" | "light";
}

// Tehnički čip — kvadratna mono oznaka kao na kataloškom listu.
export default function Badge({ children, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "border-[#b3223d66] text-primary",
    accent: "border-[#c4704a66] text-accent",
    dark: `${hairline} text-gray`,
    light: `${hairline} text-foreground`,
  };

  return (
    <span
      className={`${mono} inline-flex items-center border px-2.5 py-1.5 text-[11px] tracking-[0.08em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
