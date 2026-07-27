import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Saira_Condensed } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

// Potpisna tipografija smjera "Inženjering" — dostupna na cijeloj stranici.
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
  title: "FSB Doors | Protupožarna vrata za budućnost",
  description: "FSB DOORS d.o.o. - Vaš partner za protupožarna vrata. Čelična vrata, ostakljena vrata, fiksne ostakljene stijene i revizijska vrata vrhunske kvalitete.",
  keywords: "protupožarna vrata, čelična vrata, ostakljena vrata, FSB Doors, Zagreb, Hrvatska",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${manrope.variable} ${saira.variable} ${plexMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
