import type { Metadata } from "next";
import { BlogsHero } from "@/components/blogs/blogs-hero";
import { BlogGrid } from "@/components/blogs/blog-grid";

export const metadata: Metadata = {
  title: "Blog | Danalitic",
  description:
    "Insights on AI, Machine Learning, Cloud Engineering, and Quantum Computing. Stay updated with the latest in enterprise technology.",
};

export default function BlogsPage() {
  return (
    <main>
      <BlogsHero />
      <BlogGrid />
    </main>
  );
}
