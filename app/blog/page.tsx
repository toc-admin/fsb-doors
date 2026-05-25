import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import BlogGrid from "@/components/sections/BlogGrid";
import CTA from "@/components/sections/CTA";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | FSB Doors",
  description: "Najnovije vijesti, savjeti i vodiči iz svijeta protupožarne zaštite. Pratite FSB DOORS blog.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">Blog</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Vijesti i savjeti
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Pratite naš blog za najnovije vijesti iz industrije, stručne savjete
              i vodiče koji će vam pomoći u odabiru i održavanju protupožarnih vrata.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <BlogGrid posts={posts} showHeading={false} />

      <CTA
        title="Trebate stručan savjet?"
        subtitle="Naš tim stoji vam na raspolaganju za sva pitanja vezana uz protupožarnu zaštitu."
      />
    </>
  );
}
