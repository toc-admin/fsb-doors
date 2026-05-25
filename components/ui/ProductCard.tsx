import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/proizvodi/${product.categorySlug}/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden card-lift border border-gray/10"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover img-zoom"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold bg-primary text-white rounded-full">
            {product.badge}
          </span>
        )}
        {/* Fire rating badges */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {product.fireRating.slice(0, 3).map((rating, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-semibold text-white bg-dark/70 backdrop-blur-sm rounded"
            >
              {rating}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-3 text-gray text-sm line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="mt-5 inline-flex items-center text-primary font-semibold text-sm">
          <span>Pogledaj detalje</span>
          <svg
            className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
