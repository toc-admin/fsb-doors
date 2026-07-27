import Link from "next/link";
import { ReactNode } from "react";
import { hairline, mono } from "@/components/site/tokens";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = `${mono} inline-flex items-center justify-center font-medium uppercase tracking-[0.16em] transition-colors duration-200`;

  const variants = {
    primary: "bg-primary text-[#f5f0ea] hover:bg-[#9e1b33]",
    secondary: "bg-accent text-[#f5f0ea] hover:bg-[#a85c3b]",
    outline: `border ${hairline} bg-transparent text-foreground hover:border-[#8a8f98]`,
    white: "bg-foreground text-[#101112] hover:bg-[#d9d5cd]",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-[11px]",
    md: "px-6 py-3.5 text-[12px]",
    lg: "px-8 py-4 text-[13px]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
