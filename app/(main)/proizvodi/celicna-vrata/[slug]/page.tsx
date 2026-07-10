import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/sections/ProductDetail";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getProductsByCategory("celicna-vrata");
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug("celicna-vrata", slug);

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
  const { slug } = await params;
  const product = getProductBySlug("celicna-vrata", slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
