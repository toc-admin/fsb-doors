import type { Metadata } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";

// Display: karakterističan grotesk za kataloški naslovni slog.
const displayFont = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

// Mono: oznake proizvoda, klase otpornosti, kolofonski podaci.
const monoFont = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono-cat",
});

export const metadata: Metadata = {
  title: "Koncept 2 — Katalog | FSB Doors",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-editorial min-h-screen ${displayFont.variable} ${monoFont.variable}`}
    >
      {children}
    </div>
  );
}
