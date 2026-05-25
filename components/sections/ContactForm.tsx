"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
              Kontaktirajte nas
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-dark leading-tight">
              Rado ćemo odgovoriti na{" "}
              <span className="text-primary">vaša pitanja</span>
            </h2>
            <p className="mt-6 text-xl text-gray leading-relaxed">
              Ispunite obrazac ili nas kontaktirajte direktno. Naš tim stručnjaka
              stoji vam na raspolaganju.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Adrese</h3>
                  <p className="mt-1 text-gray">
                    Samoborska Cesta 91B<br />
                    Samoborski Odvojak 1<br />
                    10000 Zagreb, Hrvatska
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Telefon</h3>
                  <a href="tel:+38513496811" className="mt-1 text-gray hover:text-primary transition-colors block">
                    +385 1 3496 811
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Email</h3>
                  <a href="mailto:info@fsb-zagreb.hr" className="mt-1 text-gray hover:text-primary transition-colors block">
                    info@fsb-zagreb.hr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Radno vrijeme</h3>
                  <p className="mt-1 text-gray">
                    Pon - Pet: 08:00 - 16:00<br />
                    Sub - Ned: Zatvoreno
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-light rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-3">
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-primary transition-all text-dark"
                      placeholder="Vaše ime"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-primary transition-all text-dark"
                      placeholder="vas@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-3">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-primary transition-all text-dark"
                      placeholder="+385 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark mb-3">
                      Tvrtka
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-primary transition-all text-dark"
                      placeholder="Naziv tvrtke"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-3">
                    Predmet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-primary transition-all text-dark"
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
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-3">
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-primary transition-all resize-none text-dark"
                    placeholder="Opišite vaš upit..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                  <p className="text-sm text-gray">* Obavezna polja</p>
                  <Button type="submit" variant="primary" size="lg" className="px-10">
                    Pošaljite poruku
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
