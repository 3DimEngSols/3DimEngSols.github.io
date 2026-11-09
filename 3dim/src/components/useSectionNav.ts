import { useLocation, useNavigate } from "react-router-dom";

/** Scrolls to a section on the home page, navigating there first from other pages. */
export const useSectionNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (id: string) => {
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 150);
    } else {
      setTimeout(scroll, 50);
    }
  };
};
