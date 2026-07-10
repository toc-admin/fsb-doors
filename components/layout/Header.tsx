"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Proizvodi", href: "/proizvodi" },
  { name: "Projekti", href: "/projekti" },
  { name: "Usluge", href: "/usluge" },
  { name: "Blog", href: "/blog" },
  { name: "O nama", href: "/o-nama" },
  { name: "Kontakt", href: "/kontakt" },
];

// Pages with full-height dark hero sections
const pagesWithDarkHero = [
  "/",
  "/proizvodi",
  "/proizvodi/celicna-vrata",
  "/proizvodi/ostakljena-vrata",
  "/proizvodi/fiksne-ostakljene-stijene",
  "/proizvodi/revizijska-vrata",
  "/usluge",
  "/o-nama",
  "/kontakt",
  "/blog",
  "/projekti",
  "/karijera",
];

// Pages with light background (show solid header immediately)
const pagesWithLightHero = [
  "/usluge/savjetovanje-o-protupozarnoj-zastiti",
  "/usluge/planiranje-protupozarne-zastite",
  "/usluge/ugradnja-protupozarnih-vrata",
  "/usluge/odrzavanje-protupozarnih-vrata",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if current page has a dark hero
  const hasDarkHero = pagesWithDarkHero.includes(pathname) && !pagesWithLightHero.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show solid header if scrolled OR if page doesn't have a dark hero
  const showSolid = scrolled || !hasDarkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/fsb-logo.svg"
              alt="FSB Doors"
              width={130}
              height={52}
              className={`h-12 w-auto transition-all duration-300 ${
                showSolid ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  showSolid
                    ? "text-dark hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/kontakt"
              className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                showSolid
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Zatražite ponudu
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center p-2 rounded-lg transition-colors ${
              showSolid ? "text-dark hover:bg-light" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Otvori izbornik"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  );
}
