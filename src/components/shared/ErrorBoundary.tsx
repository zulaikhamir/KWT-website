import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

/**
 * Top-level error boundary. Catches render-time errors anywhere below it and
 * shows a branded fallback instead of a blank white page. There is no external
 * error-reporting service wired up, so the error is logged to the console.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled rendering error:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="kwt-page-bg flex min-h-screen flex-col items-center justify-center gap-5 px-6 py-16 text-center">
        <h1 className="heading text-[var(--color-primary)]">Something went wrong</h1>
        <p className="lede max-w-md text-[var(--color-secondary)]">
          An unexpected error stopped this page from loading. Reloading usually fixes it.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium tracking-[-0.005em] text-white transition-all duration-200 hover:bg-[var(--color-primary)]/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2"
          >
            Reload page
          </button>
          <a
            href="/"
            className="text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Go back home
          </a>
        </div>
      </div>
    );
  }
}
