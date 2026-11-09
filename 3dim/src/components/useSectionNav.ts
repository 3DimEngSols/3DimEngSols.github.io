import { useLocation, useNavigate } from "react-router-dom";

const NAV_OFFSET = 60;

const targetTop = (el: HTMLElement) =>
  Math.max(0, el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET);

/** Smooth-scrolls to a home-page section. */
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: targetTop(el), behavior: reduce ? "auto" : "smooth" });
};

/**
 * After arriving from another page the layout (fonts, images, pinned sections)
 * is still settling, so jump to the section, then re-check and correct a few
 * times until it sits under the navbar.
 */
export const settleOnSection = (id: string) => {
  const timers: number[] = [];
  [80, 400, 900, 1600].forEach((ms) =>
    timers.push(
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const off = el.getBoundingClientRect().top - NAV_OFFSET;
        if (Math.abs(off) > 4) window.scrollTo({ top: targetTop(el), behavior: "auto" });
      }, ms)
    )
  );
  return () => timers.forEach((t) => window.clearTimeout(t));
};

export const useSectionNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`); // ScrollManager settles on the section once the page has rendered
    } else {
      scrollToSection(id);
    }
  };
};
