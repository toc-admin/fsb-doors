"use client";

import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
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
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg
              className="w-8 h-8"
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
          </div>
          <h3 className="text-lg font-semibold text-dark mb-2">
            Upit uspješno poslan!
          </h3>
          <p className="text-gray">Kontaktirat ćemo vas u najkraćem roku.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Info */}
          <div className="p-4 bg-light rounded-lg">
            <p className="text-sm text-gray">Proizvod</p>
            <p className="font-semibold text-dark">{productName}</p>
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-dark mb-1"
            >
              Ime i prezime *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Vaše ime i prezime"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-dark mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="vas@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-dark mb-1"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="+385 xx xxx xxxx"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-dark mb-1"
            >
              Tvrtka
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Naziv tvrtke"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-dark mb-1"
            >
              Poruka / Zahtjevi
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Opišite svoje potrebe, dimenzije, količine..."
            />
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Odustani
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
            >
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
