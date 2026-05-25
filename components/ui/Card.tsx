import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

export default function Card({ title, description, image, href, badge }: CardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-gray text-sm line-clamp-2">{description}</p>
          <div className="mt-4 flex items-center text-primary font-medium text-sm">
            <span>Saznajte više</span>
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
      </div>
    </Link>
  );
}
