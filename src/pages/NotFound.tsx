import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      {/* A <div>, not a <main> — PageContainer already renders the page's
          <main>, and nesting a second one is invalid HTML. */}
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16">
        {/* The illustration already says "404" in its speech bubble, so the
            heading below drops to a visually-hidden label rather than
            repeating the number on screen. Decorative: no alt text. */}
        <img
          src="/illustrations/404.png"
          alt=""
          aria-hidden="true"
          width={572}
          height={556}
          loading="eager"
          decoding="async"
          className="h-auto w-full max-w-xs"
        />
        <h1 className="sr-only">404 — page not found</h1>
        <p className="lede text-[var(--color-secondary)]">Page not found.</p>
        <Link
          to="/"
          className="text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Go back home
        </Link>
      </div>
    </PageContainer>
  );
}
