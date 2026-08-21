import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="kwt-page-bg flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
