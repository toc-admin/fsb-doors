import { display, eyebrow } from "@/components/site/tokens";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  light?: boolean;
}

// Naslov sekcije u jeziku tehničkog lista: mono eyebrow + display naslov.
// `light` je zadržan radi kompatibilnosti poziva — cijela je stranica tamna.
export default function SectionHeading({
  title,
  subtitle,
  label,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {label && <p className={`${eyebrow} mb-4`}>{label}</p>}
      <h2
        className={`${display} text-4xl font-semibold uppercase leading-none text-foreground md:text-5xl lg:text-6xl`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-gray md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
