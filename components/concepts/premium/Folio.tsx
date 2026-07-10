import { caps, hairline } from "./tokens";

// Folio-redak revije: svaki arak otvara tanka linija s paginacijom lijevo
// i naslovom rubrike desno — kičma cijelog koncepta.
export default function Folio({
  page,
  label,
}: {
  page: string;
  label: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t pt-3 ${hairline}`}
    >
      <p className={`${caps} text-accent`}>FSB Doors — Revija · Str. {page}</p>
      <p className={`${caps} text-primary`}>{label}</p>
    </div>
  );
}
