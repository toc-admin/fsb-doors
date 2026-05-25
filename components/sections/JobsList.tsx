import Container from "@/components/ui/Container";
import { JobPosition } from "@/lib/jobs";

interface JobsListProps {
  jobs: JobPosition[];
}

export default function JobsList({ jobs }: JobsListProps) {
  if (jobs.length === 0) {
    return (
      <section className="py-20 lg:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-dark">
              Trenutno nemamo otvorenih pozicija
            </h2>
            <p className="mt-4 text-gray max-w-xl mx-auto">
              No i dalje možete poslati otvorenu prijavu na{" "}
              <a
                href="mailto:hr@fsb-zagreb.hr"
                className="text-primary hover:underline"
              >
                hr@fsb-zagreb.hr
              </a>
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Otvorene pozicije
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            Pregledajte dostupne pozicije i prijavite se putem emaila.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-dark">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-gray">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                        />
                      </svg>
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gray">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <span className="px-4 py-1.5 text-sm font-semibold bg-green-100 text-green-700 rounded-full">
                  Aktivno
                </span>
              </div>

              <p className="text-gray leading-relaxed">{job.description}</p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-3">
                  Zahtjevi
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray">
                      <svg
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray/10">
                <a
                  href={`mailto:hr@fsb-zagreb.hr?subject=Prijava za poziciju: ${job.title}`}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  Prijavi se
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Open Application */}
        <div className="mt-16 text-center p-10 bg-light rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-dark">
            Ne pronalazite odgovarajuću poziciju?
          </h3>
          <p className="mt-3 text-gray">
            Pošaljite nam otvorenu prijavu i javit ćemo vam se kada se otvori pozicija
            koja odgovara vašim kvalifikacijama.
          </p>
          <a
            href="mailto:hr@fsb-zagreb.hr?subject=Otvorena prijava"
            className="inline-flex items-center justify-center mt-6 px-6 py-3 text-sm font-semibold text-primary bg-white border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
          >
            Pošalji otvorenu prijavu
          </a>
        </div>
      </Container>
    </section>
  );
}
