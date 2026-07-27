import { Metadata } from "next";
import BlogGrid from "@/components/sections/BlogGrid";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | FSB Doors",
  description: "Najnovije vijesti, savjeti i vodiči iz svijeta protupožarne zaštite. Pratite FSB DOORS blog.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Zaglavlje lista */}
      <section className={`border-b ${hairline} bg-dark py-16 lg:py-24`}>
        <Reveal className={container}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className={eyebrow}>List B—01 / Blog</p>
              <h1
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Vijesti i savjeti
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg">
                Pratite naš blog za najnovije vijesti iz industrije, stručne savjete
                i vodiče koji će vam pomoći u odabiru i održavanju protupožarnih vrata.
              </p>
            </div>
            <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
              {posts.length} {posts.length === 1 ? "zapis" : "zapisa"} u arhivi
            </p>
          </div>
        </Reveal>
      </section>

      {/* Indeks članaka */}
      <BlogGrid posts={posts} showHeading={false} />

      <CTA
        title="Trebate stručan savjet?"
        subtitle="Naš tim stoji vam na raspolaganju za sva pitanja vezana uz protupožarnu zaštitu."
      />
    </>
  );
}
