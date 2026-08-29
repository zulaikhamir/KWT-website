import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home        from "./pages/Home";
import About       from "./pages/About";
import Events      from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import GetInvolved from "./pages/GetInvolved";
import FAQ         from "./pages/FAQ";
import Privacy     from "./pages/Privacy";
import NotFound    from "./pages/NotFound";

/**
 * Wall of Gratitude is a development-only route. `import.meta.env.DEV` is
 * statically `false` in the production build, so this whole branch — including
 * the dynamic import — is dead-code-eliminated: the page component, its cards,
 * and src/data/wall-of-gratitude.ts never enter the production bundle. In
 * production /wall-of-gratitude matches nothing and falls through to <NotFound>
 * (served as dist/404.html with a real 404 status).
 */
const WallOfGratitude = import.meta.env.DEV
  ? lazy(() => import("./pages/WallOfGratitude"))
  : null;

/**
 * The route table, extracted from App so it can be rendered under either
 * <BrowserRouter> (client, see App.tsx) or <StaticRouter> (build-time
 * prerender, see entry-server.tsx).
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"              element={<Home />}        />
      <Route path="/about"         element={<About />}       />
      <Route path="/events"        element={<Events />}      />
      <Route path="/events/:slug"  element={<EventDetail />} />
      <Route path="/get-involved"  element={<GetInvolved />} />
      <Route path="/faq"           element={<FAQ />}         />
      <Route path="/privacy"       element={<Privacy />}     />
      {import.meta.env.DEV && WallOfGratitude && (
        <Route
          path="/wall-of-gratitude"
          element={
            <Suspense fallback={null}>
              <WallOfGratitude />
            </Suspense>
          }
        />
      )}
      <Route path="*"              element={<NotFound />}    />
    </Routes>
  );
}
