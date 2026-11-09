import { useLocation, useNavigate } from "react-router-dom";

const NAV_OFFSET = 60;

/** Smooth-scrolls to a home-page section (navigating home first from other pages). */
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
};

export const useSectionNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 200);
    } else {
      scrollToSection(id);
    }
  };
};
