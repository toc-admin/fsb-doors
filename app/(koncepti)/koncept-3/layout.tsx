import type { Metadata } from "next";
import { Fraunces } from "next/font/google";

// Display: ekspresivni uređivački serif s optičkim rezovima — nosi cijeli
// "Revija" slog: velike glave, kurzivne izvučene rečenice, inicijal.
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-revija",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koncept 3 — Revija | FSB Doors",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-premium min-h-screen ${fraunces.variable} selection:bg-primary selection:text-background`}
    >
      {children}
    </div>
  );
}
