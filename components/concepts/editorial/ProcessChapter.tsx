import { PROCESS_STEPS } from "@/lib/site-content";
import ChapterTab from "./ChapterTab";
import Reveal from "./Reveal";
import { display, mono, hairline, container } from "./tokens";

export default function ProcessChapter() {
  return (
    <section id="proces" className="scroll-mt-28">
      <div className={`${container} pb-20 md:pb-28`}>
        <ChapterTab
          number="03"
          title="Proces"
          tag={`Postupak u ${PROCESS_STEPS.length} koraka`}
        />

        <Reveal className="mt-10 md:mt-14">
          <ol>
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.id}
                data-reveal
                className={`grid gap-3 border-t py-7 md:grid-cols-12 md:gap-8 md:py-9 ${hairline}`}
              >
                <span
                  className={`${mono} text-sm font-medium text-primary md:col-span-2 md:pt-1`}
                >
                  {step.number}
                </span>
                <h3
                  className={`${display} text-xl font-bold tracking-[-0.01em] md:col-span-4 md:text-2xl`}
                >
                  {step.title}
                </h3>
                <p className="max-w-prose text-sm leading-relaxed text-gray md:col-span-6 md:text-base">
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
