import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#proizvodi", label: "Proizvodi" },
  { href: "#proces", label: "Proces" },
  { href: "#razvoj", label: "Razvoj" },
  { href: "#projekti", label: "Projekti" },
];

export default function BoldFooter() {
  return (
    <footer className="border-t-4 border-primary bg-dark text-light">
      <div className="grid gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fsb-logo.svg"
            alt="FSB Doors"
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-light/70">
            Protupožarna vrata po mjeri — razvoj, proizvodnja i ugradnja.
          </p>
        </div>

        <address className="not-italic md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-light/50 [font-family:var(--font-mono-blok)]">
            Kontakt
          </p>
          <p className="mt-3 text-sm text-light/85">
            Samoborska cesta 91B, Zagreb
          </p>
          <p className="mt-1 text-sm">
            <a
              href="tel:+38513496811"
              className="text-light/85 underline-offset-4 transition-colors hover:text-light hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
            >
              +385 1 3496 811
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href="mailto:info@fsb-zagreb.hr"
              className="text-light/85 underline-offset-4 transition-colors hover:text-light hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
            >
              info@fsb-zagreb.hr
            </a>
          </p>
        </address>

        <nav aria-label="Navigacija podnožja" className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-light/50 [font-family:var(--font-mono-blok)]">
            Sadržaj
          </p>
          <ul className="mt-3 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-light/85 underline-offset-4 transition-colors hover:text-light hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/koncepti"
                className="text-sm text-light/85 underline-offset-4 transition-colors hover:text-light hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
              >
                &larr; Svi koncepti
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-light/15 px-5 py-5 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-light/50 [font-family:var(--font-mono-blok)]">
          &copy; FSB DOORS d.o.o.
        </p>
      </div>
    </footer>
  );
}
