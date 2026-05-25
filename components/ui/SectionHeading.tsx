interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {label && (
        <p
          className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
