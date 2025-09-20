import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
  if (location.pathname !== "/") {
    navigate("/"); // go home first
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  } else {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
  setIsOpen(false); // close menu on mobile
};


  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-green-400">
        3Dim Engineering
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-white font-medium">
        <button onClick={() => handleNavClick("services")} className="hover:text-green-400">
          Services
        </button>
        <button onClick={() => handleNavClick("projects")} className="hover:text-green-400">
          Projects
        </button>
        <Link to="/tools" className="hover:text-green-400">
          Buy tools
        </Link>
        <Link to="/about" className="hover:text-green-400">
          About
        </Link>
        <button onClick={() => handleNavClick("contact")} className="hover:text-green-400">
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-6 text-white font-medium md:hidden">
          <button onClick={() => handleNavClick("services")} className="hover:text-green-400">
            Services
          </button>
          <button onClick={() => handleNavClick("projects")} className="hover:text-green-400">
            Projects
          </button>
          <Link to="/tools" className="hover:text-green-400">
          Buy tools
        </Link>
          <Link to="/about" className="hover:text-green-400" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <button onClick={() => handleNavClick("contact")} className="hover:text-green-400">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
