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
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-secondary-200 shadow-soft">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/Images/logo2.png"
                alt="3Dim Engineering Solutions"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* <span className="hidden sm:block text-xl font-bold text-gradient">3Dim Engineering</span> */}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-neutral-700 font-medium">
            <button onClick={() => handleNavClick("services")} className="relative group/link hover:text-primary-600 transition-colors duration-300">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-600 group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavClick("projects")} className="relative group/link hover:text-primary-600 transition-colors duration-300">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-600 group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <Link to="/tools" className="relative group/link hover:text-primary-600 transition-colors duration-300">
              Buy tools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-600 group-hover/link:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="relative group/link hover:text-primary-600 transition-colors duration-300">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-600 group-hover/link:w-full transition-all duration-300"></span>
            </Link>
            <button onClick={() => handleNavClick("contact")} className="relative group/link hover:text-primary-600 transition-colors duration-300">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-600 group-hover/link:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 focus:outline-none hover:text-primary-600 transition-colors duration-300 p-2 rounded-lg hover:bg-secondary-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-secondary-200 shadow-soft-lg">
            <div className="flex flex-col items-center gap-6 py-6 text-neutral-700 font-medium">
              <button onClick={() => handleNavClick("services")} className="hover:text-primary-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-secondary-50">
                Services
              </button>
              <button onClick={() => handleNavClick("projects")} className="hover:text-primary-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-secondary-50">
                Projects
              </button>
              <Link to="/tools" className="hover:text-primary-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-secondary-50">
                Buy tools
              </Link>
              <Link to="/about" className="hover:text-primary-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-secondary-50" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <button onClick={() => handleNavClick("contact")} className="hover:text-primary-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-secondary-50">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
