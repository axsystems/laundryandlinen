import type { BlogAuthor } from "@/lib/constants/blog-posts";
import { User } from "lucide-react";

interface AuthorBoxProps {
  author: BlogAuthor;
}

export function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <div className="card-elevated p-6 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <User className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="font-display font-semibold text-foreground">
          {author.name}
        </p>
        <p className="text-sm text-primary mb-2">{author.role}</p>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </div>
    </div>
  );
}
