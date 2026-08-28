import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageContainerProps {
  children: ReactNode;
  /** Render on a plain solid background, without the dotted texture and decorative orbs. */
  plain?: boolean;
}

export default function PageContainer({ children, plain = false }: PageContainerProps) {
  return (
    <div className={`${plain ? "kwt-page-plain" : "kwt-page-bg"} flex min-h-screen flex-col`}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
