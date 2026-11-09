import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useSectionNav } from "./useSectionNav.ts";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const goToSection = useSectionNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleSection = (id: string) => {
    goToSection(id);
    setIsOpen(false);
  };

  const linkBase =
    "relative px-1 py-1.5 text-sm font-medium text-neutral-700 hover:text-primary-700 transition-colors duration-200 cursor-pointer";
  const active = (path: string) =>
    location.pathname === path ? "text-primary-700" : "";

  const Underline = ({ on }: { on?: boolean }) => (
    <span
      className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary-600 transition-all duration-300 ${
        on ? "w-full" : "w-0 group-hover/link:w-full"
      }`}
    />
  );

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-soft"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-14 md:h-[60px]">
          <Link to="/" className="flex items-center" aria-label="3Dim Engineering Solutions home">
            <img
              src="/Images/logo2.png"
              alt="3Dim Engineering Solutions"
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            <Link to="/" className={`group/link ${linkBase} ${active("/")}`}>
              Home
              <Underline on={location.pathname === "/"} />
            </Link>
            <button onClick={() => handleSection("services")} className={`group/link ${linkBase}`}>
              Services
              <Underline />
            </button>
            <button onClick={() => handleSection("projects")} className={`group/link ${linkBase}`}>
              Projects
              <Underline />
            </button>
            <Link to="/tools" className={`group/link ${linkBase} ${active("/tools")}`}>
              Buy tools
              <Underline on={location.pathname === "/tools"} />
            </Link>
            <Link to="/about" className={`group/link ${linkBase} ${active("/about")}`}>
              Our Team
              <Underline on={location.pathname === "/about"} />
            </Link>
            <button
              onClick={() => handleSection("contact")}
              className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-primary-700 transition-colors duration-200 cursor-pointer"
            >
              Contact
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors duration-200 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container-custom flex flex-col py-3">
            {[
              { label: "Home", to: "/" },
              { label: "Services", id: "services" },
              { label: "Projects", id: "projects" },
              { label: "Buy tools", to: "/tools" },
              { label: "Our Team", to: "/about" },
            ].map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between min-h-12 px-2 text-base font-medium text-neutral-800 border-b border-neutral-100 hover:text-primary-700"
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleSection(item.id as string)}
                  className="flex items-center justify-between min-h-12 px-2 text-base font-medium text-neutral-800 border-b border-neutral-100 hover:text-primary-700 text-left"
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                </button>
              )
            )}
            <button
              onClick={() => handleSection("contact")}
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Contact us
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
