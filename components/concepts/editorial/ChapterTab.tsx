import { display, mono, hairline } from "./tokens";

// Potpisni element koncepta: svaka cjelina otvara se kataloškom karticom —
// broj poglavlja, tekući naslov i mono oznaka u stilu šifre proizvoda.
export default function ChapterTab({
  number,
  title,
  tag,
}: {
  number: string;
  title: string;
  tag: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-baseline gap-x-5 gap-y-1 border-t pt-4 ${hairline}`}
    >
      <span className={`${mono} text-sm font-medium text-primary`}>
        {number}
      </span>
      <h2
        className={`${display} text-sm font-bold uppercase tracking-[0.18em] text-foreground`}
      >
        {title}
      </h2>
      <span
        className={`${mono} w-full text-[11px] uppercase tracking-[0.08em] text-gray sm:ml-auto sm:w-auto`}
      >
        {tag}
      </span>
    </div>
  );
}
