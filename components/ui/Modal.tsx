"use client";

import { ReactNode, useEffect } from "react";
import { display, hairline, mono } from "@/components/site/tokens";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

// Modal kao tehnički list: tamni kvadratni panel s tankim okvirom,
// bez sjena i zaobljenja — samo hairline rub i mono zaglavlje.
export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Zatamnjenje pozadine */}
      <div
        className="fixed inset-0 bg-[#0a0b0c]/80 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full max-w-lg border ${hairline} bg-[#101112] p-6 md:p-8 transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gumb za zatvaranje */}
          <button
            type="button"
            onClick={onClose}
            className={`${mono} absolute top-4 right-4 p-2 text-gray transition-colors hover:text-foreground`}
            aria-label="Zatvori"
          >
            <svg
              className="h-5 w-5"
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

          {/* Zaglavlje lista */}
          {title && (
            <div className={`mb-6 border-b ${hairline} pb-4 pr-8`}>
              <p className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                Obrazac / Upit
              </p>
              <h2
                className={`${display} mt-2 text-2xl font-medium uppercase leading-tight text-foreground`}
              >
                {title}
              </h2>
            </div>
          )}

          {/* Sadržaj */}
          {children}
        </div>
      </div>
    </div>
  );
}
