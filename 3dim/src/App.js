import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import DigitalTools from "./pages/tools.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<DigitalTools/>} />
      </Routes>
    </Router>
  );
}

export default App;
