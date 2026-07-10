import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koncept 3 | FSB Doors",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="theme-bold min-h-screen">{children}</div>;
}
