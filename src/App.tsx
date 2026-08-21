import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home        from "./pages/Home";
import About       from "./pages/About";
import Events      from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import FAQ         from "./pages/FAQ";
import Privacy     from "./pages/Privacy";
import NotFound    from "./pages/NotFound";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"            element={<Home />}        />
        <Route path="/about"       element={<About />}       />
        <Route path="/events"      element={<Events />}      />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/faq"         element={<FAQ />}         />
        <Route path="/privacy"     element={<Privacy />}     />
        <Route path="*"            element={<NotFound />}    />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
