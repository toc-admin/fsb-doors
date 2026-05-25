"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navigation: { name: string; href: string }[];
}

export default function MobileMenu({ open, onClose, navigation }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex h-20 items-center justify-between px-6 border-b border-gray/10">
          <Link href="/" onClick={onClose}>
            <Image
              src="/fsb-logo.svg"
              alt="FSB Doors"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            className="p-2 rounded-lg text-dark hover:bg-light transition-colors"
            onClick={onClose}
            aria-label="Zatvori izbornik"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-8">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-lg font-medium text-dark hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-gray/10">
            <Link
              href="/kontakt"
              onClick={onClose}
              className="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              Zatražite ponudu
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray/10 space-y-4 text-sm text-gray">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>+385 1 3496 811</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>info@fsb-zagreb.hr</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
