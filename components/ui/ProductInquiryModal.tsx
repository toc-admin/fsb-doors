"use client";

import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { hairline, mono } from "@/components/site/tokens";

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

// Klase polja obrasca — transparentna podloga, hairline rub, primarni fokus.
const inputStyles = `w-full border ${hairline} bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-gray/60 outline-none transition-colors focus:border-primary`;

const labelStyles = `${mono} mb-2 block text-[11px] uppercase tracking-[0.2em] text-gray`;

export default function ProductInquiryModal({
  isOpen,
  onClose,
  productName,
}: ProductInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulacija slanja obrasca
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Nakon prikaza potvrde vrati obrazac u početno stanje
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Zatražite ponudu">
      {isSubmitted ? (
        <div className="py-8 text-center">
          <div
            className={`mb-5 inline-flex h-14 w-14 items-center justify-center border border-[#b3223d66] text-primary`}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3
            className={`${mono} mb-2 text-sm uppercase tracking-[0.16em] text-foreground`}
          >
            Upit uspješno poslan
          </h3>
          <p className="text-sm text-gray">Kontaktirat ćemo vas u najkraćem roku.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Podaci o proizvodu */}
          <div className={`border ${hairline} bg-light p-4`}>
            <p className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
              Proizvod
            </p>
            <p className="mt-1.5 text-sm font-medium text-foreground">{productName}</p>
          </div>

          {/* Ime i prezime */}
          <div>
            <label htmlFor="name" className={labelStyles}>
              Ime i prezime *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputStyles}
              placeholder="Vaše ime i prezime"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelStyles}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputStyles}
              placeholder="vas@email.com"
            />
          </div>

          {/* Telefon */}
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputStyles}
              placeholder="+385 xx xxx xxxx"
            />
          </div>

          {/* Tvrtka */}
          <div>
            <label htmlFor="company" className={labelStyles}>
              Tvrtka
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputStyles}
              placeholder="Naziv tvrtke"
            />
          </div>

          {/* Poruka */}
          <div>
            <label htmlFor="message" className={labelStyles}>
              Poruka / Zahtjevi
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputStyles} resize-none`}
              placeholder="Opišite svoje potrebe, dimenzije, količine..."
            />
          </div>

          {/* Slanje */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Odustani
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Slanje...
                </>
              ) : (
                "Pošalji upit"
              )}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
