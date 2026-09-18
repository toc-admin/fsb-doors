"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProductInquiryModal from "@/components/ui/ProductInquiryModal";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { Product } from "@/lib/products";

interface ProductDetailProps {
  product: Product;
}

// Stranica proizvoda kao tehnički list: mono breadcrumb, galerija u boji
// (kupac mora vidjeti stvarni proizvod), specifikacije kao definicijske
// tablice s hairline linijama.
export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Breadcrumb — mono navigacijska linija */}
      <div className={`border-b ${hairline}`}>
        <Container>
          <nav
            aria-label="Breadcrumb"
            className={`${mono} flex flex-wrap items-center gap-2 py-4 text-[11px] uppercase tracking-[0.16em]`}
          >
            <Link href="/proizvodi" className="text-gray transition-colors hover:text-foreground">
              Proizvodi
            </Link>
            <span aria-hidden="true" className="text-gray">/</span>
            <Link
              href={`/proizvodi/${product.categorySlug}`}
              className="text-gray transition-colors hover:text-foreground"
            >
              {product.category}
            </Link>
            <span aria-hidden="true" className="text-gray">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Osnovni podaci proizvoda */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Galerija — fotografije u punoj boji */}
            <Reveal className="space-y-4">
              <div className={`relative aspect-[4/3] overflow-hidden border ${hairline} bg-light`}>
                <Image
                  src={product.gallery[selectedImage]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                {product.badge && (
                  <span
                    className={`${mono} absolute left-4 top-4 bg-primary px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#f5f0ea]`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              {product.gallery.length > 1 && (
                <div className="flex gap-3">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      aria-label={`Fotografija ${i + 1}`}
                      className={`relative aspect-square w-20 overflow-hidden border transition-colors ${
                        selectedImage === i ? "border-primary" : `${hairline} hover:border-[#8a8f98]`
                      }`}
                    >
                      <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </Reveal>

            {/* Podaci */}
            <Reveal delay={0.08}>
              <p className={eyebrow}>Tehnički list / {product.category}</p>
              <h1
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
              >
                {product.name}
              </h1>

              {/* Razredi vatrootpornosti */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.fireRating.map((rating) => (
                  <span
                    key={rating}
                    className={`${mono} border border-[#b3223d66] px-2.5 py-1.5 text-[11px] tracking-[0.08em] text-primary`}
                  >
                    {rating}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-gray">
                {product.description}
              </p>

              {/* Značajke — numerirani redovi kao stavke lista */}
              <div className="mt-10">
                <h3 className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  Značajke
                </h3>
                <ul className={`mt-4 border-b ${hairline}`}>
                  {product.features.map((feature, i) => (
                    <li
                      key={feature}
                      className={`flex items-baseline gap-4 border-t ${hairline} py-3`}
                    >
                      <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                        Z.{i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Akcije */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button onClick={() => setIsModalOpen(true)} variant="primary" size="lg">
                  Zatražite ponudu
                  <span aria-hidden="true" className="ml-3">→</span>
                </Button>
                <Button href="tel:+38513496811" variant="outline" size="lg">
                  Nazovite nas
                </Button>
              </div>

              {/* Modal za upit o proizvodu */}
              <ProductInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.name}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <SectionRule code="P—P / 01" />

      {/* Tehničke specifikacije — datasheet tablica */}
      <section className="py-16 lg:py-24">
        <Container>
          <Reveal>
            <p className={eyebrow}>Specifikacija / {product.name}</p>
            <h2
              className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
            >
              Tehničke specifikacije
            </h2>
          </Reveal>
          <Reveal>
            <div className="mt-10 max-w-4xl">
              <dl className={`border-b ${hairline}`}>
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className={`grid gap-2 border-t ${hairline} py-4 sm:grid-cols-2 sm:gap-6`}
                  >
                    <dt className={`${mono} text-[11px] uppercase tracking-[0.2em] text-gray sm:pt-0.5`}>
                      {spec.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground sm:text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Ostali proizvodi / prilagođeno rješenje */}
      <section className="bg-dark py-16 lg:py-24">
        <Container>
          <Reveal>
            <p className={eyebrow}>Napomena / Ostala rješenja</p>
            <h2
              className={`${display} mt-4 max-w-2xl text-4xl font-semibold uppercase leading-none md:text-5xl`}
            >
              Trebate drugačije rješenje?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray">
              Pogledajte ostale proizvode u kategoriji {product.category} ili nas
              kontaktirajte za prilagođeno rješenje.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={`/proizvodi/${product.categorySlug}`} variant="primary" size="lg">
                Svi proizvodi u kategoriji
              </Button>
              <Button href="/kontakt" variant="outline" size="lg">
                Kontaktirajte nas
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
