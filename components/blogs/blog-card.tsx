"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Clock, User } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  featured: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Featured badge */}
      {post.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-1 rounded text-xs font-medium gradient-bg text-white">
            Featured
          </span>
        </div>
      )}

      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-muted/50 to-muted/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF0066]/10 to-[#FFBB33]/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[family-name:var(--font-space)] text-4xl font-bold text-muted-foreground/40">
            {post.category.split(" ")[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="text-xs font-medium text-[#FF0066]">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-[#FF0066] transition-colors">
          <Link href={`/blogs/${post.id}`} className="relative">
            {post.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full" />
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
      </div>

      {/* Read more hover state */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </article>
  );
}
