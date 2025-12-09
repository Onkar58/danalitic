"use client";

import { useState } from "react";
import { BlogCard } from "./blog-card";

const categories = [
  "All",
  "AI & ML",
  "Cloud Engineering",
  "Data Science",
  "Quantum Computing",
  "Agentic AI",
  "Case Studies",
];

const blogPosts = [
  {
    id: 1,
    title: "Building Production-Ready RAG Pipelines: A Complete Guide",
    excerpt:
      "Learn how to architect Retrieval-Augmented Generation systems that scale, with best practices for vector databases, embedding strategies, and context window optimization.",
    category: "AI & ML",
    author: "Danalitic AI Labs",
    readTime: "12 min read",
    date: "Dec 5, 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Multi-Cloud FinOps: Reducing Cloud Spend by 40% with AI",
    excerpt:
      "How we helped a retail chain achieve 38% cost savings across AWS, Azure, and GCP using AI-driven workload optimization.",
    category: "Cloud Engineering",
    author: "Cloud Architecture Team",
    readTime: "8 min read",
    date: "Dec 2, 2025",
    featured: false,
  },
  {
    id: 3,
    title: "Agentic AI Systems: From Theory to Production",
    excerpt:
      "A deep dive into multi-agent architectures that reason, plan, and execute complex enterprise workflows autonomously.",
    category: "Agentic AI",
    author: "Danalitic AI Labs",
    readTime: "15 min read",
    date: "Nov 28, 2025",
    featured: true,
  },
  {
    id: 4,
    title: "Quantum-Inspired Optimization for Financial Portfolios",
    excerpt:
      "Exploring hybrid classical-quantum algorithms that achieve 1.8x faster convergence for portfolio balancing.",
    category: "Quantum Computing",
    author: "Quantum Research Team",
    readTime: "10 min read",
    date: "Nov 25, 2025",
    featured: false,
  },
  {
    id: 5,
    title: "Healthcare LLMs: Navigating PHI Protection and Compliance",
    excerpt:
      "Best practices for deploying Large Language Models in healthcare settings while maintaining HIPAA compliance.",
    category: "AI & ML",
    author: "Healthcare AI Team",
    readTime: "9 min read",
    date: "Nov 20, 2025",
    featured: false,
  },
  {
    id: 6,
    title: "Predictive Maintenance with Edge-to-Cloud ML",
    excerpt:
      "How LSTM-based anomaly detection on IoT streams can reduce equipment downtime by 37% in manufacturing.",
    category: "Data Science",
    author: "Industrial AI Team",
    readTime: "11 min read",
    date: "Nov 15, 2025",
    featured: false,
  },
  {
    id: 7,
    title: "The Future of Enterprise AI: Trends for 2026",
    excerpt:
      "Our predictions for how AI will transform enterprise operations, from autonomous agents to quantum-enhanced models.",
    category: "AI & ML",
    author: "Danalitic Leadership",
    readTime: "7 min read",
    date: "Nov 10, 2025",
    featured: false,
  },
  {
    id: 8,
    title: "Building Explainable AI for Regulated Industries",
    excerpt:
      "How to create model interpretability dashboards that satisfy audit requirements while maintaining AI performance.",
    category: "Data Science",
    author: "Compliance AI Team",
    readTime: "13 min read",
    date: "Nov 5, 2025",
    featured: false,
  },
];

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "gradient-button"
                  : "bg-muted/10 text-muted-foreground hover:cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
