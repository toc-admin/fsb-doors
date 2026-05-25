"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProductInquiryModal from "@/components/ui/ProductInquiryModal";
import { Product } from "@/lib/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-light">
        <Container>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/proizvodi" className="text-gray hover:text-primary transition-colors">
              Proizvodi
            </Link>
            <span className="text-gray">/</span>
            <Link href={`/proizvodi/${product.categorySlug}`} className="text-gray hover:text-primary transition-colors">
              {product.category}
            </Link>
            <span className="text-gray">/</span>
            <span className="text-dark font-medium">{product.name}</span>
          </nav>
        </Container>
      </section>

      {/* Product Info */}
      <section className="py-12 lg:py-20 bg-light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <Image
                  src={product.gallery[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-4 py-2 text-sm font-bold bg-primary text-white rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              {product.gallery.length > 1 && (
                <div className="flex gap-4">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === i ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                {product.category}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                {product.name}
              </h1>

              {/* Fire ratings */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.fireRating.map((rating, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-bold text-primary bg-primary/10 rounded-lg"
                  >
                    {rating}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-lg text-gray leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-dark mb-4">Značajke</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button onClick={() => setIsModalOpen(true)} variant="primary" size="lg">
                  Zatražite ponudu
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
                <Button href="tel:+38513496811" variant="outline" size="lg">
                  <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Nazovite nas
                </Button>
              </div>

              {/* Product Inquiry Modal */}
              <ProductInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.name}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-10">
            Tehničke specifikacije
          </h2>
          <div className="max-w-4xl">
            <div className="bg-light rounded-2xl overflow-hidden">
              {product.specifications.map((spec, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center p-6 ${
                    i !== product.specifications.length - 1 ? "border-b border-gray/10" : ""
                  }`}
                >
                  <span className="font-semibold text-dark">{spec.label}</span>
                  <span className="text-gray text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related products hint */}
      <section className="py-16 lg:py-24 bg-light">
        <Container>
          <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Trebate drugačije rješenje?
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
              Pogledajte ostale proizvode u kategoriji {product.category} ili nas kontaktirajte za prilagođeno rješenje.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href={`/proizvodi/${product.categorySlug}`}
                variant="white"
                size="lg"
              >
                Svi proizvodi u kategoriji
              </Button>
              <Button
                href="/kontakt"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
                size="lg"
              >
                Kontaktirajte nas
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
