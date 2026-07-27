import Image from "next/image";
import Link from "next/link";
import { display, hairline, mono } from "@/components/site/tokens";

interface CardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

// Kartica kao kataloški list: fotografija u sivim tonovima s bordo pranjem,
// naslov u display pismu, mono akcija.
export default function Card({ title, description, image, href, badge }: CardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className={`border ${hairline} bg-light transition-colors duration-300 hover:border-[#8a8f98]`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale contrast-[1.05] brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-primary/25 mix-blend-multiply"
          />
          {badge && (
            <span
              className={`${mono} absolute left-4 top-4 bg-primary px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#f5f0ea]`}
            >
              {badge}
            </span>
          )}
        </div>

        <div className="p-6">
          <h3
            className={`${display} text-2xl font-medium uppercase leading-tight text-foreground transition-colors group-hover:text-primary`}
          >
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray line-clamp-2">
            {description}
          </p>
          <div
            className={`${mono} mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gray transition-colors group-hover:text-foreground`}
          >
            <span>Saznajte više</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
