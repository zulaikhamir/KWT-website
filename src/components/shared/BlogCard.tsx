import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────
export interface BlogCardData {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  href: string;
}

interface BlogCardProps {
  post: BlogCardData;
  /** "featured" = full width with larger type, "compact" = standard card */
  variant?: "featured" | "compact";
  className?: string;
}

/**
 * Reusable blog/article card.
 * Used on the homepage and can be reused on the /blog page.
 */
export default function BlogCard({ post, variant = "compact", className }: BlogCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(
        "group flex flex-col",
        "rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden",
        "hover:shadow-[0_6px_28px_-6px_rgba(27,42,82,0.11)]",
        "hover:border-[var(--color-primary)]/20",
        "transition-all duration-200",
        isFeatured && "lg:flex-row",
        className,
      )}
    >
      {/* Featured: left colour band */}
      {isFeatured && (
        <div
          aria-hidden="true"
          className="lg:w-2 bg-[var(--color-primary)] flex-shrink-0"
        />
      )}

      <div
        className={cn(
          "flex flex-col flex-1 p-6",
          isFeatured && "lg:p-8",
        )}
      >
        {/* Category */}
        <span
          className={cn(
            "self-start inline-flex items-center mb-3",
            "rounded-full border border-[var(--color-accent)]",
            "bg-[var(--color-accent)]/60 px-2.5 py-0.5",
            "text-[10px] font-semibold tracking-[0.14em] uppercase",
            "text-[var(--color-primary)]",
          )}
        >
          {post.category}
        </span>

        {/* Title */}
        <h3
          className={cn(
            "font-bold leading-snug tracking-tight text-[var(--color-primary)]",
            "group-hover:text-[var(--color-primary)]",
            isFeatured
              ? "text-xl sm:text-2xl mb-3"
              : "text-base mb-2",
          )}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={cn(
            "text-sm leading-6 text-[var(--color-secondary)] flex-1",
            isFeatured ? "mb-6" : "mb-4",
          )}
        >
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            {/* Author avatar placeholder */}
            <div
              aria-hidden="true"
              className="w-6 h-6 rounded-full bg-[var(--color-accent)] border border-[var(--color-primary)]/20 flex-shrink-0"
            />
            <span className="text-xs font-medium text-[var(--color-secondary)]">
              {post.author}
            </span>
            <span aria-hidden="true" className="text-[var(--color-secondary)]/30 text-xs">·</span>
            <time
              dateTime={post.date}
              className="text-xs text-[var(--color-secondary)] opacity-70"
            >
              {post.date}
            </time>
          </div>

          <Link
            to={post.href}
            className={cn(
              "inline-flex items-center gap-1",
              "text-xs font-semibold text-[var(--color-primary)]",
              "border-b border-[var(--color-primary)]/25 pb-px",
              "hover:border-[var(--color-primary)]",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
            )}
          >
            Read Article
            <ArrowRight size={11} strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </article>
  );
}
