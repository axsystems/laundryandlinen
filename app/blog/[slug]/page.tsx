import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BlogHero,
  TableOfContents,
  RelatedPosts,
  AuthorBox,
} from "@/components/blog";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getAllBlogSlugs,
} from "@/lib/constants/blog-posts";
import { BUSINESS_INFO } from "@/lib/constants/service-areas";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  const schemas = [
    generateArticleSchema(post),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* Hero */}
      <BlogHero post={post} />

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 max-w-5xl mx-auto">
            {/* Main Content */}
            <article
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={post.toc} />

                {/* CTA Card */}
                <div className="card-elevated p-5">
                  <h3 className="font-display font-semibold text-foreground text-sm mb-3">
                    Skip the Laundry
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Let us handle it. Free pickup & delivery on orders over $35.
                  </p>
                  <Button asChild variant="accent" size="sm" className="w-full">
                    <Link href="/order">Schedule Pickup</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AuthorBox author={post.author} />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Professional laundry service with free pickup and delivery. Schedule
            in under 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}>
                <Phone className="w-5 h-5 mr-2" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
