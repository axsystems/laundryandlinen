import Link from "next/link";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";
import type { BlogPost } from "@/lib/constants/blog-posts";
import { BLOG_CATEGORIES } from "@/lib/constants/blog-posts";

interface BlogHeroProps {
  post: BlogPost;
}

export function BlogHero({ post }: BlogHeroProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryName =
    BLOG_CATEGORIES[post.category as keyof typeof BLOG_CATEGORIES] ??
    post.category;

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="absolute inset-0 gradient-hero opacity-5" />

      <div className="container-custom relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Category badge */}
          <div className="mb-4">
            <Link
              href={`/blog/category/${post.category}`}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              {categoryName}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-muted-foreground mb-8">
            {post.excerpt}
          </p>

          {/* Author and meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author.name}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
