"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { hairline, mono } from "@/components/site/tokens";

const NAV = [
  { label: "Proizvodi", href: "/proizvodi" },
  { label: "Usluge", href: "/usluge" },
  { label: "Projekti", href: "/projekti" },
  { label: "O nama", href: "/o-nama" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${hairline} bg-[#101112]/95 backdrop-blur-sm`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="FSB Doors — početna">
          <Image
            src="/fsb-logo.svg"
            alt="FSB Doors"
            width={66}
            height={33}
            className="brightness-0 invert"
            priority
          />
          <span
            className={`${mono} hidden border-l ${hairline} pl-3 text-[10px] uppercase leading-tight tracking-[0.22em] text-gray md:block`}
          >
            Protupožarna
            <br />
            vrata
          </span>
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${mono} text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-gray"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${mono} flex items-baseline gap-4 py-3.5 text-[13px] uppercase tracking-[0.18em] text-foreground`}
                >
                  <span className="text-[10px] text-gray">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={`border-t ${hairline}`}>
              <Link
                href="/karijera"
                onClick={() => setOpen(false)}
                className={`${mono} flex items-baseline gap-4 py-3.5 text-[13px] uppercase tracking-[0.18em] text-foreground`}
              >
                <span className="text-[10px] text-gray">0{NAV.length + 1}</span>
                Karijera
              </Link>
            </li>
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
