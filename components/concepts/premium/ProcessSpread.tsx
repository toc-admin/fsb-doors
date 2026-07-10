import { PROCESS_STEPS } from "@/lib/site-content";
import Folio from "./Folio";
import Reveal from "./Reveal";
import { serif, container, hairline } from "./tokens";

const ROMAN = ["I", "II", "III", "IV", "V"];

// Arak procesa: elegantna okomita pripovijest uz tanku kičmu-liniju,
// rimski brojevi i serifni naslovi koraka — bez kartica.
export default function ProcessSpread() {
  return (
    <section
      id="proces"
      aria-labelledby="proces-naslov"
      className={`${container} scroll-mt-10`}
    >
      <Folio page="03" label="Od izmjere do primopredaje" />

      <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2
            id="proces-naslov"
            className={`${serif} text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-foreground md:sticky md:top-10`}
          >
            Pet koraka, jedan potpis.
          </h2>
        </div>

        <Reveal className="md:col-span-7 md:col-start-6">
          <ol className={`border-l ${hairline}`}>
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.id}
                data-reveal
                className="relative py-9 pl-8 first:pt-1 last:pb-1 sm:pl-12"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 h-px w-5 bg-primary/70 sm:w-7 ${
                    index === 0 ? "top-[0.9rem]" : "top-[2.9rem]"
                  }`}
                />
                <p
                  className={`${serif} text-lg italic text-primary`}
                  aria-hidden="true"
                >
                  {ROMAN[index]}.
                </p>
                <h3
                  className={`${serif} mt-1.5 text-2xl font-normal leading-snug text-foreground`}
                >
                  {step.title}
                </h3>
                <p className="mt-3 max-w-prose leading-relaxed text-gray">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
