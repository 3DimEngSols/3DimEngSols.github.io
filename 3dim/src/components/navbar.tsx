import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-green-400">
        3Dim Engineering
      </Link>

      {/* Links */}
      <div className="flex gap-6 text-white font-medium">
        <button onClick={() => scrollToSection("services")} className="hover:text-green-400">
          Services
        </button>
        <button onClick={() => scrollToSection("projects")} className="hover:text-green-400">
          Projects
        </button>
        <Link to="/about" className="hover:text-green-400">
          About
        </Link>
        <button onClick={() => scrollToSection("contact")} className="hover:text-green-400">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
