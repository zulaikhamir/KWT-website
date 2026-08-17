import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600">Page not found.</p>

      <Link to="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </main>
    </PageContainer>
  );
}