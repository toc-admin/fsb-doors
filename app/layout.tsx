import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="hr" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
