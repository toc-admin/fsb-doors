import { PROCESS_STEPS } from "@/lib/site-content";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

// Proces kao mjerna traka: stanice 01–05 na zajedničkoj liniji.
export default function Process() {
  return (
    <section id="proces" aria-labelledby="proces-naslov" className="scroll-mt-24 py-20 lg:py-28">
      <div className={container}>
        <Reveal>
          <div className="pb-12 lg:pb-16">
            <p className={eyebrow}>List 03 / Proces</p>
            <h2
              id="proces-naslov"
              className={`${display} mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              Od izmjere do primopredaje
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <ol className={`relative lg:grid lg:grid-cols-5 lg:border-t ${hairline}`}>
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={step.id}
                className={`relative border-l ${hairline} py-6 pl-6 lg:border-l-0 lg:py-0 lg:pl-0 lg:pt-8 ${
                  i > 0 ? `lg:border-l lg:pl-8 ${hairline}` : ""
                }`}
              >
                {/* Stanica — oznaka na mjernoj traci */}
                <span
                  aria-hidden="true"
                  className="absolute -left-px top-9 hidden h-px w-4 bg-[#8a8f98] lg:-top-px lg:left-0 lg:block lg:h-2.5 lg:w-px"
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-[3px] top-[34px] block h-[7px] w-[7px] bg-[#8a8f98] lg:hidden"
                />

                <span className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  Stanica {step.number}
                </span>
                <h3
                  className={`${display} mt-3 pr-4 text-2xl font-medium uppercase leading-tight`}
                >
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs pr-4 text-sm leading-relaxed text-gray">
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
