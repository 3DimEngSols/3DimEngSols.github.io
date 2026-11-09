import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import DigitalTools from "./pages/tools.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import { scrollToSection } from "./components/useSectionNav.ts";

// Scroll to the #section on navigation, or to the top of a new page
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(
        () => scrollToSection(hash.slice(1)),
        150
      );
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<DigitalTools/>} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
