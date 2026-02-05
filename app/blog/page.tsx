import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  getFeaturedPosts,
} from "@/lib/constants/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Laundry Tips, Guides & Industry Insights",
  description:
    "Expert laundry tips, stain removal guides, fabric care advice, and commercial laundry insights from the Laundry & Linen team in Phoenix, AZ.",
  openGraph: {
    title: "Blog | Laundry Tips, Guides & Industry Insights",
    description:
      "Expert laundry tips, stain removal guides, fabric care advice, and commercial laundry insights from the Laundry & Linen team.",
    url: "/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const featuredPosts = getFeaturedPosts(3);
  const categories = Object.entries(BLOG_CATEGORIES);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-wave/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Blog</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Laundry Tips & Guides
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert advice on stain removal, fabric care, Arizona-specific
              laundry tips, and commercial laundry insights from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(([slug, name]) => {
              const count = BLOG_POSTS.filter(
                (p) => p.category === slug
              ).length;
              return (
                <a
                  key={slug}
                  href={`#${slug}`}
                  className="px-4 py-2 rounded-full bg-white border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors text-sm"
                >
                  {name}{" "}
                  <span className="text-muted-foreground">({count})</span>
                </a>
              );
            })}
          </div>

          {categories.map(([slug, name]) => {
            const posts = BLOG_POSTS.filter((p) => p.category === slug);
            if (posts.length === 0) return null;
            return (
              <div key={slug} id={slug} className="mb-12 last:mb-0">
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  {name}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Skip the Laundry, Read the Tips
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let us handle the laundry while you enjoy your free time. Schedule a
            pickup in under 2 minutes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/order" className="group">
              Schedule Free Pickup
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
