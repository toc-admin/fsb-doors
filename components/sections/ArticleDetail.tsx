import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { container, display, hairline, mono } from "@/components/site/tokens";
import { BlogPost } from "@/lib/blog";

interface ArticleDetailProps {
  post: BlogPost;
}

export default function ArticleDetail({ post }: ArticleDetailProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("hr-HR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      {/* Zaglavlje članka — tamna traka s tehničkim metapodacima */}
      <section className={`border-b ${hairline} bg-dark py-16 lg:py-24`}>
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              {/* Navigacijska staza */}
              <nav
                aria-label="Navigacijska staza"
                className={`${mono} flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gray`}
              >
                <Link href="/blog" className="transition-colors hover:text-foreground">
                  List B—01 / Blog
                </Link>
                <span aria-hidden>/</span>
                <span className="text-primary">{post.category}</span>
              </nav>

              <h1
                className={`${display} mt-6 max-w-3xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                {post.title}
              </h1>

              {/* Metapodaci zapisa */}
              <dl className={`mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t ${hairline} pt-5`}>
                <div>
                  <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                    Autor
                  </dt>
                  <dd className={`${mono} mt-1 text-sm text-foreground`}>{post.author}</dd>
                </div>
                <div>
                  <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                    Datum
                  </dt>
                  <dd className={`${mono} mt-1 text-sm text-foreground`}>{formattedDate}</dd>
                </div>
                <div>
                  <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                    Čitanje
                  </dt>
                  <dd className={`${mono} mt-1 text-sm text-foreground`}>{post.readTime}</dd>
                </div>
              </dl>
            </div>

            {/* Naslovna fotografija zapisa */}
            <figure className="lg:col-span-4 lg:self-end">
              <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  priority
                  className="object-cover grayscale contrast-[1.05] brightness-[0.85]"
                />
                <span aria-hidden className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
              </div>
              <figcaption
                className={`${mono} mt-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
              >
                Zapis / {post.category}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Sadržaj članka */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <Reveal className="mx-auto max-w-3xl">
            <div
              className="text-base leading-relaxed text-gray
                [&_p]:mt-5 [&_p]:leading-relaxed
                [&_h2]:[font-family:var(--font-display)] [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:uppercase [&_h2]:leading-tight [&_h2]:text-foreground md:[&_h2]:text-3xl
                [&_h3]:[font-family:var(--font-display)] [&_h3]:mt-9 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:uppercase [&_h3]:leading-tight [&_h3]:text-foreground md:[&_h3]:text-2xl
                [&_strong]:font-semibold [&_strong]:text-foreground
                [&_ul]:mt-5 [&_ul]:space-y-2 [&_ul]:pl-5
                [&_li]:list-[square] [&_li]:marker:text-primary
                [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* Dijeljenje */}
            <div className={`mt-14 border-t ${hairline} pt-8`}>
              <p className={`${mono} mb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Podijelite članak
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://fsb-doors.hr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center border ${hairline} text-gray transition-colors hover:border-primary hover:text-primary`}
                  aria-label="Podijeli na LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://fsb-doors.hr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center border ${hairline} text-gray transition-colors hover:border-primary hover:text-primary`}
                  aria-label="Podijeli na Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Povratak */}
            <div className="mt-8">
              <Link
                href="/blog"
                className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray underline-offset-4 transition-colors hover:text-foreground hover:underline`}
              >
                ← Povratak na blog
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function formatContent(content: string): string {
  // Simple markdown-like parsing
  let html = content
    // Headers
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br/>');

  // Wrap list items in ul
  html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
  // Clean up consecutive ul tags
  html = html.replace(/<\/ul><br\/><ul>/g, '');
  html = html.replace(/<\/ul><ul>/g, '');

  return `<p>${html}</p>`;
}
