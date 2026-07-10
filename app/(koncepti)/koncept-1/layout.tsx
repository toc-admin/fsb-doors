import type { Metadata } from "next";
import { IBM_Plex_Mono, Saira_Condensed } from "next/font/google";

const saira = Saira_Condensed({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koncept 1 — Inženjering | FSB Doors",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-engineering min-h-screen ${saira.variable} ${plexMono.variable}`}
    >
      {children}
    </div>
  );
}
