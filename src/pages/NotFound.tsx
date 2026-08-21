import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">404</h1>
        <p className="text-[var(--color-secondary)]">Page not found.</p>
        <Link
          to="/"
          className="text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Go back home
        </Link>
      </main>
    </PageContainer>
  );
}
