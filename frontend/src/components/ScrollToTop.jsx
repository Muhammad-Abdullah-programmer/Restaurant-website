import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// --------------------------------------------------
// Scroll To Top Component
// --------------------------------------------------

function ScrollToTop() {
  const { pathname } = useLocation();

  // --------------------------------------------------
  // Scroll to top whenever route changes
  // --------------------------------------------------

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;