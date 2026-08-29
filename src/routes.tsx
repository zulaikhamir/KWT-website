import { Routes, Route } from "react-router-dom";

import Home        from "./pages/Home";
import About       from "./pages/About";
import Events      from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import GetInvolved from "./pages/GetInvolved";
import FAQ         from "./pages/FAQ";
import Privacy     from "./pages/Privacy";
import NotFound    from "./pages/NotFound";
import WallOfGratitude from "./pages/WallOfGratitude";

/**
 * The route table, extracted from App so it can be rendered under either
 * <BrowserRouter> (client, see App.tsx) or <StaticRouter> (build-time
 * prerender, see entry-server.tsx). Route definitions are unchanged.
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
      <Route path="wall-of-gratitude" element={<WallOfGratitude/>}/>
      <Route path="*"              element={<NotFound />}    />
    </Routes>
  );
}
