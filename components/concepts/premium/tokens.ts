// Zajednički slovni i kompozicijski tokeni koncepta "Revija".

// Uređivački serif (Fraunces) — naslovi, izvučene rečenice, inicijal.
export const serif = "[font-family:var(--font-revija)]";

// Tanka linija revije — rubovi araka, potpisi, indeksi.
export const hairline = "[border-color:var(--line)]";

// Verzalne oznake s prorijeđenim slogom — folio, potpisi fotografija, sitni podaci.
export const caps = "font-sans text-[11px] uppercase tracking-[0.22em]";

// Format arka — širina tiskovne forme.
export const container = "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-14";

// Vidljiv fokus za tipkovnicu — jednak na cijeloj stranici.
export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

// Topla, prirodna obrada fotografija — bez tamnih preklopa.
export const photo = "[filter:sepia(0.05)_saturate(0.94)_contrast(1.02)]";
