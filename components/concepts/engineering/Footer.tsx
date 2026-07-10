import Image from "next/image";
import Link from "next/link";
import { container, hairline, mono } from "./tokens";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t ${hairline} py-8`}>
      <div
        className={`${container} flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between`}
      >
        <div className="flex items-center gap-5">
          <Image
            src="/fsb-logo.svg"
            alt="FSB Doors"
            width={56}
            height={28}
            className="brightness-0 invert opacity-80"
          />
          <p className={`${mono} text-[11px] tracking-[0.14em] text-gray`}>
            © {year} FSB DOORS d.o.o.
          </p>
        </div>

        <address
          className={`${mono} flex flex-col gap-2 text-[11px] not-italic tracking-[0.12em] text-gray sm:flex-row sm:flex-wrap sm:items-center sm:gap-5`}
        >
          <span>Samoborska cesta 91B, Zagreb</span>
          <a href="tel:+38513496811" className="transition-colors hover:text-foreground">
            +385 1 3496 811
          </a>
          <a
            href="mailto:info@fsb-zagreb.hr"
            className="transition-colors hover:text-foreground"
          >
            info@fsb-zagreb.hr
          </a>
        </address>

        <Link
          href="/koncepti"
          className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray transition-colors hover:text-foreground`}
        >
          ← Svi koncepti
        </Link>
      </div>
    </footer>
  );
}
