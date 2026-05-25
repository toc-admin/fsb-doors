import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function CareerHero() {
  return (
    <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Badge variant="light">Karijera</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Želiš se pridružiti našem timu?
          </h1>
          <p className="mt-6 text-xl text-white/80 leading-relaxed">
            Tražimo talentirane i motivirane ljude koji dijele našu strast za sigurnost i kvalitetu.
            Pridruži nam se i gradi karijeru u vodećoj tvrtki za protupožarnu zaštitu.
          </p>

          {/* Benefits */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Razvoj karijere</h3>
              <p className="mt-2 text-white/60 text-sm">
                Kontinuirano usavršavanje i mogućnost napredovanja
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Sjajan tim</h3>
              <p className="mt-2 text-white/60 text-sm">
                Rad u dinamičnom timu iskusnih stručnjaka
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Stabilnost</h3>
              <p className="mt-2 text-white/60 text-sm">
                Siguran posao u stabilnoj i rastućoj tvrtki
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
