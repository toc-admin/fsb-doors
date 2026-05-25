import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { BlogPost } from "@/lib/blog";

interface ArticleDetailProps {
  post: BlogPost;
}

export default function ArticleDetail({ post }: ArticleDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span>{post.category}</span>
            </nav>

            <span className="inline-flex px-3 py-1 text-sm font-semibold bg-primary text-white rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <span>
                  {new Date(post.date).toLocaleDateString("hr-HR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{post.readTime} čitanja</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-gray max-w-none
                prose-headings:text-dark prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray prose-p:leading-relaxed
                prose-li:text-gray
                prose-strong:text-dark
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray/10">
              <p className="text-sm font-semibold text-dark mb-4">
                Podijelite članak
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://fsb-doors.hr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-light text-gray hover:bg-primary hover:text-white transition-colors"
                  aria-label="Podijeli na LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://fsb-doors.hr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-light text-gray hover:bg-primary hover:text-white transition-colors"
                  aria-label="Podijeli na Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Povratak na blog
              </Link>
            </div>
          </div>
        </Container>
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
