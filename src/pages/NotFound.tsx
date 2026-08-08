import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-4xl font-bold text-[var(--color-primary)]">404</h1>
      <p className="text-[var(--color-secondary)]">Page not found.</p>
      <Link
        to="/"
        className="text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        Go back home
      </Link>
    </main>
  );
}
