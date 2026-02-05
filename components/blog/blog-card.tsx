import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/constants/blog-posts";
import { BLOG_CATEGORIES } from "@/lib/constants/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryName =
    BLOG_CATEGORIES[post.category as keyof typeof BLOG_CATEGORIES] ??
    post.category;

  return (
    <article className="card-elevated group overflow-hidden h-full flex flex-col">
      {/* Featured image placeholder */}
      <div className="relative aspect-[16/9] bg-primary/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl text-primary/30 font-display font-bold select-none">
            L&amp;L
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
            {categoryName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <Link href={`/blog/${post.slug}`} className="group/title">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover/title:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min read
          </span>
        </div>
      </div>
    </article>
  );
}
