import type { Metadata } from "next";
import { Anton, IBM_Plex_Mono } from "next/font/google";

// Display: teška kondenzirana glava za izjave u mjerilu bloka.
const anton = Anton({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

// Utility: mono za tehničke potpise, indekse i male oznake.
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono-blok",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koncept 3 — Blok | FSB Doors",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-bold min-h-screen ${anton.variable} ${plexMono.variable}`}
    >
      {children}
    </div>
  );
}
