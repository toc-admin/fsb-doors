import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { BlogPost } from "@/lib/blog";

interface BlogGridProps {
  posts: BlogPost[];
  showHeading?: boolean;
  headingText?: string;
  maxPosts?: number;
}

// Datum u mono zapisu tehničkog lista: 15.03.2024.
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("hr-HR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Članci kao indeks zapisa — dosje-redovi umjesto kartica.
export default function BlogGrid({
  posts,
  showHeading = true,
  headingText = "Najnoviji članci",
  maxPosts,
}: BlogGridProps) {
  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;

  return (
    <section className="py-20 lg:py-28">
      <div className={container}>
        {showHeading && (
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
              <div>
                <p className={eyebrow}>List B—02 / Arhiva zapisa</p>
                <h2
                  className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
                >
                  {headingText}
                </h2>
              </div>
              {maxPosts && posts.length > maxPosts && (
                <Link
                  href="/blog"
                  className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray underline-offset-4 transition-colors hover:text-foreground hover:underline`}
                >
                  Svi članci →
                </Link>
              )}
            </div>
          </Reveal>
        )}

        <Reveal>
          <ul className={`border-b ${hairline}`}>
            {displayPosts.map((post, i) => (
              <li key={post.slug}>
                <article>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`group grid grid-cols-12 items-center gap-x-4 gap-y-3 border-t ${hairline} py-6 transition-colors hover:bg-light md:py-7`}
                  >
                    <span className={`${mono} col-span-2 text-sm text-gray md:col-span-1`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="relative col-span-10 hidden aspect-[4/3] overflow-hidden md:col-span-2 md:block">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="220px"
                        className="object-cover grayscale contrast-[1.05] brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                      />
                    </span>

                    <span className="col-span-10 md:col-span-6 md:pl-2 lg:pl-6">
                      <span
                        className={`${mono} flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-gray`}
                      >
                        <span className="text-primary">{post.category}</span>
                        <span>{formatDate(post.date)}</span>
                        <span>{post.readTime} čitanja</span>
                      </span>
                      <span
                        className={`${display} mt-2 block text-2xl font-medium uppercase leading-tight md:text-3xl`}
                      >
                        {post.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-relaxed text-gray">
                        {post.excerpt}
                      </span>
                    </span>

                    <span
                      className={`${mono} col-span-10 col-start-3 text-[11px] uppercase tracking-[0.18em] text-gray md:col-span-3 md:col-start-auto md:text-right`}
                    >
                      Pročitaj zapis{" "}
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
