import PageContainer from "@/components/layout/PageContainer";


export default function Home() {
  return (
    <PageContainer>
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6 py-16 text-center">
      <section className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
          KWT
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-5xl">
          Kashmiri Women in Tech
        </h1>
        <p className="mt-4 text-lg leading-8 text-[var(--color-secondary)]">
          A welcoming community for women in Kashmir building their future in technology.
        </p>
      </section>
    </main>
      </PageContainer>
  );
}