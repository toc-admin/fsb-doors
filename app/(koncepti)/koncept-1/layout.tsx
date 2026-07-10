import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koncept 1 | FSB Doors",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="theme-engineering min-h-screen">{children}</div>;
}
