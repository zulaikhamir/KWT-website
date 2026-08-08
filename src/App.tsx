import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar      from "./components/layout/Navbar";
import Footer      from "./components/layout/Footer";
import Home        from "./pages/Home";
import About       from "./pages/About";
import Events      from "./pages/Events";
import Contact     from "./pages/Contact";
import Opportunities from "./pages/Opportunities";
import NotFound    from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar persists across all pages */}
      <Navbar />

      {/* pt-16 offsets the fixed 64px header */}
      <div className="pt-16 flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
            <Route path="/"              element={<Home />}          />
            <Route path="/about"         element={<About />}         />
            <Route path="/events"        element={<Events />}        />
            <Route path="/contact"       element={<Contact />}       />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="*"              element={<NotFound />}      />
          </Routes>
        </div>

        {/* Footer persists across all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;