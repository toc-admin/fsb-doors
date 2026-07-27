import Button from "@/components/ui/Button";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

// Završni poziv u jeziku tehničkog lista: naslov lijevo, mono kontakti desno.
export default function CTA({
  title = "Spremni za sljedeći korak?",
  subtitle = "Kontaktirajte nas danas i zatražite besplatnu ponudu za vaš projekt. Naši stručnjaci stoje vam na raspolaganju.",
  primaryCta = { text: "Zatražite ponudu", href: "/kontakt" },
  secondaryCta,
}: CTAProps) {
  return (
    <section aria-label={title} className={`border-t ${hairline} bg-dark py-20 lg:py-28`}>
      <Reveal className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className={eyebrow}>List Z—01 / Ponuda</p>
            <h2
              className={`${display} mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[0.98] md:text-5xl lg:text-6xl`}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray">{subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={primaryCta.href} variant="primary" size="lg">
                {primaryCta.text} →
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>

          {/* Izravni kontakt — mono lista podataka */}
          <div className="lg:col-span-4 lg:col-start-9">
            <dl className={`border-t ${hairline}`}>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  Telefon
                </dt>
                <dd className="mt-1.5">
                  <a
                    href="tel:+38513496811"
                    className={`${mono} text-base text-foreground transition-colors hover:text-primary`}
                  >
                    +385 1 3496 811
                  </a>
                </dd>
              </div>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  E-mail
                </dt>
                <dd className="mt-1.5">
                  <a
                    href="mailto:info@fsb-zagreb.hr"
                    className={`${mono} text-base text-foreground transition-colors hover:text-primary`}
                  >
                    info@fsb-zagreb.hr
                  </a>
                </dd>
              </div>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  Adresa
                </dt>
                <dd className={`${mono} mt-1.5 text-base text-foreground`}>
                  Samoborska cesta 91B, Zagreb
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
