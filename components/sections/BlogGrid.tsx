import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { BlogPost } from "@/lib/blog";

interface BlogGridProps {
  posts: BlogPost[];
  showHeading?: boolean;
  headingText?: string;
  maxPosts?: number;
}

export default function BlogGrid({
  posts,
  showHeading = true,
  headingText = "Najnoviji članci",
  maxPosts,
}: BlogGridProps) {
  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        {showHeading && (
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                {headingText}
              </h2>
              <p className="mt-4 text-gray max-w-2xl">
                Pratite naš blog za najnovije vijesti, savjete i vodiče iz svijeta
                protupožarne zaštite.
              </p>
            </div>
            {maxPosts && posts.length > maxPosts && (
              <Link
                href="/blog"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Svi članci
                <svg
                  className="ml-2 w-4 h-4"
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
              </Link>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-gray/10 hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray mb-3">
                    <span>
                      {new Date(post.date).toLocaleDateString("hr-HR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="w-1 h-1 bg-gray rounded-full" />
                    <span>{post.readTime} čitanja</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center text-primary font-semibold">
                    Pročitaj više
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
