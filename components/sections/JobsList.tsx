import Button from "@/components/ui/Button";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { JobPosition } from "@/lib/jobs";

interface JobsListProps {
  jobs: JobPosition[];
}

// Pozicije kao dosje-listovi: mono zaglavlje, display naslov, zahtjevi kao indeks.
export default function JobsList({ jobs }: JobsListProps) {
  if (jobs.length === 0) {
    return (
      <section className="py-20 lg:py-28">
        <div className={container}>
          <Reveal className={`border ${hairline} bg-light p-8 md:p-12`}>
            <p className={eyebrow}>List K—02 / Otvorene pozicije</p>
            <h2 className={`${display} mt-4 text-3xl font-semibold uppercase leading-none md:text-4xl`}>
              Trenutno nemamo otvorenih pozicija
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray">
              No i dalje možete poslati otvorenu prijavu na{" "}
              <a
                href="mailto:hr@fsb-zagreb.hr"
                className={`${mono} text-primary underline-offset-4 hover:underline`}
              >
                hr@fsb-zagreb.hr
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="pozicije-naslov" className="py-20 lg:py-28">
      <div className={container}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
            <div>
              <p className={eyebrow}>List K—02 / Otvorene pozicije</p>
              <h2
                id="pozicije-naslov"
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
              >
                Otvorene pozicije
              </h2>
            </div>
            <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
              {jobs.length} {jobs.length === 1 ? "pozicija" : "pozicije"} — prijava e-mailom
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <Reveal key={job.id} delay={index * 0.08}>
              <article className={`border ${hairline} bg-light`}>
                {/* Zaglavlje dosjea */}
                <div
                  className={`${mono} flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b ${hairline} px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-gray md:px-10`}
                >
                  <span className="text-foreground">
                    Pozicija {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{job.department}</span>
                  <span>{job.type}</span>
                  <span className="ml-auto border border-[#b3223d66] px-2.5 py-1 text-[10px] tracking-[0.16em] text-primary">
                    Aktivno
                  </span>
                </div>

                <div className="px-6 py-8 md:px-10 md:py-10">
                  <h3 className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}>
                    {job.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray md:text-base">
                    {job.description}
                  </p>

                  {/* Zahtjevi — numerirani indeks */}
                  <h4 className={`${mono} mt-8 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                    Zahtjevi
                  </h4>
                  <ul className={`mt-4 border-b ${hairline} sm:grid sm:grid-cols-2 sm:gap-x-10`}>
                    {job.requirements.map((req, i) => (
                      <li
                        key={req}
                        className={`flex items-baseline gap-4 border-t ${hairline} py-3`}
                      >
                        <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                          Z.{i + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href={`mailto:hr@fsb-zagreb.hr?subject=Prijava za poziciju: ${job.title}`}
                      variant="primary"
                      size="md"
                    >
                      Prijavi se →
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Otvorena prijava */}
        <Reveal>
          <div className={`mt-14 border ${hairline} p-8 md:p-12`}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  Otvorena prijava
                </p>
                <h3 className={`${display} mt-3 text-2xl font-medium uppercase leading-tight md:text-3xl`}>
                  Ne pronalazite odgovarajuću poziciju?
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray md:text-base">
                  Pošaljite nam otvorenu prijavu i javit ćemo vam se kada se otvori pozicija
                  koja odgovara vašim kvalifikacijama.
                </p>
              </div>
              <Button
                href="mailto:hr@fsb-zagreb.hr?subject=Otvorena prijava"
                variant="outline"
                size="md"
              >
                Pošalji otvorenu prijavu →
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
