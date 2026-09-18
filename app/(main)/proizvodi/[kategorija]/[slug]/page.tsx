import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/sections/ProductDetail";
import { getProductBySlug, products } from "@/lib/products";

interface Props {
  params: Promise<{ kategorija: string; slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    kategorija: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorija, slug } = await params;
  const product = getProductBySlug(kategorija, slug);

  if (!product) {
    return {
      title: "Proizvod nije pronađen | FSB Doors",
    };
  }

  return {
    title: `${product.name} | FSB Doors`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { kategorija, slug } = await params;
  const product = getProductBySlug(kategorija, slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
