import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/sections/ArticleDetail";
import BlogGrid from "@/components/sections/BlogGrid";
import CTA from "@/components/sections/CTA";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Članak nije pronađen | FSB Doors",
    };
  }

  return {
    title: `${post.title} | FSB Doors Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <ArticleDetail post={post} />

      {relatedPosts.length > 0 && (
        <section className="bg-light">
          <BlogGrid
            posts={relatedPosts}
            headingText="Povezani članci"
            showHeading={true}
          />
        </section>
      )}

      <CTA
        title="Trebate protupožarna vrata?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i ponudu prilagođenu vašim potrebama."
      />
    </>
  );
}
