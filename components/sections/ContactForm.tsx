"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

// Zajednički stil polja: transparentna pozadina, hairline okvir, kvadratni rubovi.
const fieldStyles = `w-full border ${hairline} bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-[#8a8f98]/60 focus:border-primary focus:outline-none transition-colors`;

const labelStyles = `${mono} mb-3 block text-[11px] uppercase tracking-[0.2em] text-gray`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Hvala na poruci! Ovo je demonstracijska forma - poruka nije poslana.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section aria-labelledby="upit-naslov" className="py-20 lg:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Kontakt podaci — mono lista */}
          <Reveal className="lg:col-span-5">
            <p className={eyebrow}>List KT—02 / Upit</p>
            <h2
              id="upit-naslov"
              className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
            >
              Rado ćemo odgovoriti na{" "}
              <span className="text-primary">vaša pitanja</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray">
              Ispunite obrazac ili nas kontaktirajte direktno. Naš tim stručnjaka
              stoji vam na raspolaganju.
            </p>

            <dl className={`mt-10 max-w-md border-t ${hairline}`}>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  Adrese
                </dt>
                <dd className={`${mono} mt-1.5 text-sm leading-relaxed text-foreground`}>
                  Samoborska Cesta 91B
                  <br />
                  Samoborski Odvojak 1
                  <br />
                  10000 Zagreb, Hrvatska
                </dd>
              </div>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  Telefon
                </dt>
                <dd className="mt-1.5">
                  <a
                    href="tel:+38513496811"
                    className={`${mono} text-sm text-foreground transition-colors hover:text-primary`}
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
                    className={`${mono} text-sm text-foreground transition-colors hover:text-primary`}
                  >
                    info@fsb-zagreb.hr
                  </a>
                </dd>
              </div>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  Radno vrijeme
                </dt>
                <dd className={`${mono} mt-1.5 text-sm leading-relaxed text-foreground`}>
                  Pon — Pet: 08:00 — 16:00
                  <br />
                  Sub — Ned: Zatvoreno
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* Obrazac — tehnički list upita */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`space-y-7 border ${hairline} bg-light p-6 md:p-10`}
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelStyles}>
                    01 / Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={fieldStyles}
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelStyles}>
                    02 / E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldStyles}
                    placeholder="vas@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelStyles}>
                    03 / Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={fieldStyles}
                    placeholder="+385 ..."
                  />
                </div>
                <div>
                  <label htmlFor="company" className={labelStyles}>
                    04 / Tvrtka
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={fieldStyles}
                    placeholder="Naziv tvrtke"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelStyles}>
                  05 / Predmet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${fieldStyles} [&_option]:bg-light [&_option]:text-foreground`}
                >
                  <option value="">Odaberite predmet</option>
                  <option value="ponuda">Zahtjev za ponudu</option>
                  <option value="savjetovanje">Savjetovanje</option>
                  <option value="ugradnja">Ugradnja</option>
                  <option value="odrzavanje">Održavanje</option>
                  <option value="ostalo">Ostalo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelStyles}>
                  06 / Poruka *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldStyles} resize-none`}
                  placeholder="Opišite vaš upit..."
                />
              </div>

              <div
                className={`flex flex-col gap-4 border-t ${hairline} pt-6 sm:flex-row sm:items-center sm:justify-between`}
              >
                <p className={`${mono} text-[10px] uppercase tracking-[0.2em] text-gray`}>
                  * Obavezna polja
                </p>
                <Button type="submit" variant="primary" size="lg">
                  Pošaljite poruku →
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
