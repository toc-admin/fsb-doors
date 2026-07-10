import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { RND_CERTIFICATION } from "@/lib/site-content";

export default function RndCertification() {
  return (
    <section className="py-24 lg:py-32 bg-light relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal direction="right">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
              {RND_CERTIFICATION.label}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              {RND_CERTIFICATION.title}
            </h2>
            <div className="mt-6 space-y-4">
              {RND_CERTIFICATION.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-xl text-gray leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-8 space-y-4">
              {RND_CERTIFICATION.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/kontakt" variant="primary" size="lg">
                Razgovarajte s našim timom
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/planiranje-protupozarne-zastite.webp"
                  alt="Razvoj i ispitivanje protupožarnih rješenja"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-sm uppercase tracking-wider text-white/60">
                  Ispitano u akreditiranim institucijama
                </p>
                <p className="mt-2 text-2xl font-bold">LTM · Institut IGH</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
