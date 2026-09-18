import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { display, hairline, mono } from "@/components/site/tokens";

interface ProductCardProps {
  product: Product;
}

// Kartica proizvoda kao kataloški list: kvadratni tamni panel, fotografija
// u sivim tonovima s bordo pranjem, mono oznake i EI čipovi.
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/proizvodi/${product.categorySlug}/${product.slug}`}
      className="group block"
    >
      <div className={`border ${hairline} bg-light transition-colors duration-300 hover:border-[#8a8f98]`}>
        {/* Fotografija */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale contrast-[1.05] brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-primary/25 mix-blend-multiply"
          />
          {product.badge && (
            <span
              className={`${mono} absolute left-4 top-4 bg-primary px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#f5f0ea]`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Sadržaj */}
        <div className="p-6">
          <div className={`${mono} mb-3 text-[10px] uppercase tracking-[0.24em] text-gray`}>
            {product.category}
          </div>
          <h3
            className={`${display} text-2xl font-medium uppercase leading-tight text-foreground transition-colors group-hover:text-primary line-clamp-2`}
          >
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Razredi vatrootpornosti */}
          <div className="mt-5 flex flex-wrap gap-2">
            {product.fireRating.slice(0, 3).map((rating) => (
              <span
                key={rating}
                className={`${mono} border border-[#b3223d66] px-2.5 py-1.5 text-[11px] tracking-[0.08em] text-primary`}
              >
                {rating}
              </span>
            ))}
          </div>

          <div
            className={`${mono} mt-6 flex items-center gap-2 border-t ${hairline} pt-4 text-[11px] uppercase tracking-[0.18em] text-gray transition-colors group-hover:text-foreground`}
          >
            <span>Pogledaj detalje</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
