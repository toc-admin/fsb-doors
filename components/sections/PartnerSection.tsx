import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function PartnerSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-accent to-accent/80 p-10 lg:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/90 bg-white/10 backdrop-blur-sm rounded-full mb-6">
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
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
                Partner
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Kompletna protupožarna zaštita
              </h2>
              <p className="mt-4 text-xl text-white/80">
                Više od samih vrata
              </p>
              <p className="mt-6 text-white/70 leading-relaxed">
                FSB DOORS surađuje s protupozarna-zastita.com za kompletne projekte protupožarne zaštite.
                Od savjetovanja i planiranja do implementacije i certifikacije - pružamo cjelovito rješenje
                za sigurnost vašeg objekta.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://protupozarna-zastita.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-accent bg-white hover:bg-white/90 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  Posjetite protupozarna-zastita.com
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
                <Button
                  href="/kontakt"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-accent"
                  size="lg"
                >
                  Kontaktirajte nas
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 text-white mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Savjetovanje</h3>
                  <p className="mt-2 text-white/70 text-sm">
                    Stručna pomoć u odabiru optimalnih rješenja
                  </p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 text-white mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Planiranje</h3>
                  <p className="mt-2 text-white/70 text-sm">
                    Projektiranje sustava protupožarne zaštite
                  </p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 text-white mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Implementacija</h3>
                  <p className="mt-2 text-white/70 text-sm">
                    Profesionalna ugradnja i montaža
                  </p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 text-white mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Certifikacija</h3>
                  <p className="mt-2 text-white/70 text-sm">
                    Ispitivanje i certificiranje sustava
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
