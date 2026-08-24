import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";

export default function NotFound() {
  return (
    <PageContainer>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist or may have been moved."
        noTitleSuffix
      />
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16">
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
