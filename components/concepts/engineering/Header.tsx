"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { hairline, mono } from "./tokens";

const NAV = [
  { label: "Proizvodi", href: "#proizvodi" },
  { label: "Proces", href: "#proces" },
  { label: "Razvoj", href: "#razvoj" },
  { label: "Projekti", href: "#projekti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${hairline} bg-[#101112]/95 backdrop-blur-sm`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/koncepti"
            className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray transition-colors hover:text-foreground`}
          >
            ← Koncepti
          </Link>
          <span aria-hidden="true" className={`h-5 w-px border-l ${hairline}`} />
          <a href="#top" className="flex items-center" aria-label="FSB Doors — na vrh stranice">
            <Image
              src="/fsb-logo.svg"
              alt="FSB Doors"
              width={66}
              height={33}
              className="brightness-0 invert"
              priority
            />
          </a>
        </div>

        <nav aria-label="Navigacija koncepta" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${mono} text-[12px] uppercase tracking-[0.18em] text-gray transition-colors hover:text-foreground`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className={`${mono} hidden bg-primary px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-[#f5f0ea] transition-colors hover:bg-[#9e1b33] sm:block`}
          >
            Zatražite ponudu
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilni-izbornik"
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobilni-izbornik"
          aria-label="Mobilna navigacija"
          className={`border-t ${hairline} bg-[#101112] lg:hidden`}
        >
          <ul className="px-5 py-4 md:px-8">
            {NAV.map((item, i) => (
              <li key={item.href} className={i > 0 ? `border-t ${hairline}` : ""}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${mono} flex items-baseline gap-4 py-3.5 text-[13px] uppercase tracking-[0.18em] text-foreground`}
                >
                  <span className="text-[10px] text-gray">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li className={`border-t ${hairline} pt-4`}>
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className={`${mono} block bg-primary px-4 py-3 text-center text-[12px] font-medium uppercase tracking-[0.16em] text-[#f5f0ea]`}
              >
                Zatražite ponudu
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
