import type { BlogPost } from "@/lib/constants/blog-posts";
import { BlogCard } from "./blog-card";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
          Related Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
