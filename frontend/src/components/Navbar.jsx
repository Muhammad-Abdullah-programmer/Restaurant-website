import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Utensils,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

// --------------------------------------------------
// Navigation Data
// --------------------------------------------------

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/categories", dropdown: true },
  { name: "Categories", path: "/categories" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const recipeLinks = [
  { name: "All Recipes", path: "/categories" },
  { name: "Breakfast", path: "/recipes/breakfast" },
  { name: "Lunch", path: "/recipes/lunch" },
  { name: "Dinner", path: "/recipes/dinner" },
  { name: "Desserts", path: "/recipes/desserts" },
];

// --------------------------------------------------
// Navbar
// --------------------------------------------------

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [recipeOpen, setRecipeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --------------------------------------------------
  // Scroll Effect
  // --------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------------------------
  // Close Mobile Menu
  // --------------------------------------------------

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setRecipeOpen(false);
  };

  return (
    <>
      {/* ==================================================
          TOP CONTACT / INFO BAR
      ================================================== */}

      <div className="bg-gray-950 text-white">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center px-3 sm:px-6 lg:px-8">

          {/* Desktop / Tablet */}

          <div className="hidden w-full items-center justify-between text-[11px] md:flex">

            {/* Left Information */}

            <div className="flex items-center gap-4 lg:gap-6">

              {/* Phone */}

              <a
                href="tel:+923356481414"
                className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-orange-400"
              >
                <Phone size={13} strokeWidth={2.5} />

                <span>+92 3356481414</span>
              </a>

              {/* Email */}

              <a
                href="mailto:hassanmujtaba0132@gmail.com"
                className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-orange-400"
              >
                <Mail size={13} strokeWidth={2.5} />

                <span>hassanmujtaba0132@gmail.com</span>
              </a>

              {/* Time */}

              <div className="hidden items-center gap-1.5 text-gray-300 lg:flex">
                <Clock size={13} strokeWidth={2.5} />

                <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
              </div>

            </div>

            {/* Right Text */}

            <div className="hidden items-center gap-2 text-gray-400 lg:flex">
              <span>Fresh recipes.</span>

              <span className="text-orange-500">
                Every day.
              </span>
            </div>

          </div>

          {/* ==================================================
              MOBILE TOP BAR
          ================================================== */}

          <div className="flex min-h-10 w-full items-center justify-between gap-3 md:hidden">

            {/* Mobile Phone */}

            <a
              href="tel:+923356481414"
              className="flex min-w-0 items-center gap-1.5 text-[10px] font-semibold text-gray-300 transition-colors hover:text-orange-400"
            >
              <Phone
                size={12}
                strokeWidth={2.5}
                className="shrink-0"
              />

              <span className="truncate">
                +92 3356481414
              </span>
            </a>

            {/* Mobile Email */}

            <a
              href="hassanmujtaba0132@gmail.com"
              className="flex min-w-0 items-center gap-1.5 text-[10px] font-semibold text-gray-300 transition-colors hover:text-orange-400"
            >
              <Mail
                size={12}
                strokeWidth={2.5}
                className="shrink-0"
              />

              <span className="truncate">
                hassanmujtaba0132@gmail.com
              </span>
            </a>

          </div>

        </div>
      </div>

      {/* ==================================================
          MAIN NAVBAR
      ================================================== */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200/80 bg-white/95 shadow-md backdrop-blur-xl"
            : "border-b border-gray-100 bg-white"
        }`}
      >

        {/* ==================================================
            NAVBAR CONTAINER
        ================================================== */}

        <div
          className={`mx-auto max-w-7xl px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <div className="flex h-full items-center justify-between">

            {/* ==================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="group flex shrink-0 items-center gap-3"
            >

              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105">

                <Utensils
                  size={21}
                  strokeWidth={2.5}
                />

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

              </div>

              <div className="hidden leading-none sm:block">

                <span className="block text-[21px] font-black tracking-tight text-gray-950">
                  Recipe
                  <span className="ml-1 text-orange-500">
                    Corner
                  </span>
                </span>

                <span className="mt-1.5 block text-[8px] font-bold uppercase tracking-[0.25em] text-gray-400">
                  Taste • Cook • Enjoy
                </span>

              </div>

            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden items-center gap-7 lg:flex">

              {navLinks.map((link) => {

                // ----------------------------------------------
                // Recipes Dropdown
                // ----------------------------------------------

                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="group relative"
                    >

                      <Link
                        to={link.path}
                        className="relative flex items-center gap-1.5 py-3 text-[13px] font-bold text-gray-700 transition-colors duration-200 hover:text-orange-500"
                      >

                        Recipes

                        <ChevronDown
                          size={14}
                          strokeWidth={2.5}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />

                        {/* Hover Underline */}

                        <span className="absolute bottom-1 left-0 h-[2px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />

                      </Link>

                      {/* Dropdown */}

                      <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-3 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-2xl shadow-gray-900/10 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                        {/* Small Arrow */}

                        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-gray-100 bg-white" />

                        {recipeLinks.map((recipe) => (
                          <Link
                            key={recipe.path}
                            to={recipe.path}
                            className="group/item relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-orange-50 hover:pl-5 hover:text-orange-500"
                          >

                            {recipe.name}

                            <span className="h-1.5 w-1.5 scale-0 rounded-full bg-orange-500 transition-transform duration-200 group-hover/item:scale-100" />

                          </Link>
                        ))}

                      </div>

                    </div>
                  );
                }

                // ----------------------------------------------
                // Normal Nav Links
                // ----------------------------------------------

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `group relative py-3 text-[13px] font-bold transition-colors duration-200 ${
                        isActive
                          ? "text-orange-500"
                          : "text-gray-700 hover:text-orange-500"
                      }`
                    }
                  >

                    {({ isActive }) => (
                      <>
                        {link.name}

                        <span
                          className={`absolute bottom-1 left-0 h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </>
                    )}

                  </NavLink>
                );
              })}

            </nav>

            {/* ==================================================
                DESKTOP ACTIONS
            ================================================== */}

            <div className="hidden items-center gap-2 lg:flex">

              {/* Search */}

              <Link
                to="/search"
                aria-label="Search recipes"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
              >

                <Search
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

              </Link>

              {/* CTA */}

              <Link
                to="/recipes/dinner"
                className="group relative ml-2 inline-flex h-10 items-center justify-center overflow-hidden rounded-xl bg-gray-950 px-5 text-xs font-extrabold text-white transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
              >

                <span className="relative z-10">
                  Explore Recipes
                </span>

                <span className="absolute inset-0 -translate-x-full bg-orange-600 transition-transform duration-300 group-hover:translate-x-0" />

              </Link>

            </div>

            {/* ==================================================
                MOBILE ACTIONS
            ================================================== */}

            <div className="flex items-center gap-2 lg:hidden">

              {/* Mobile Search */}

              <Link
                to="/search"
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500"
              >
                <Search size={19} />
              </Link>

              {/* Mobile Menu */}

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={
                  mobileOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={mobileOpen}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white transition hover:bg-orange-500"
              >

                {mobileOpen ? (
                  <X size={21} />
                ) : (
                  <Menu size={21} />
                )}

              </button>

            </div>

          </div>
        </div>

        {/* ==================================================
            MOBILE MENU
        ================================================== */}

        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

            {/* Mobile Links */}

            <div className="space-y-1">

              {/* Home */}

              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Recipes */}

              <div>

                <button
                  type="button"
                  onClick={() =>
                    setRecipeOpen(!recipeOpen)
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                >

                  Recipes

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      recipeOpen
                        ? "rotate-180 text-orange-500"
                        : ""
                    }`}
                  />

                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    recipeOpen
                      ? "max-h-80 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >

                  <div className="ml-4 mt-1 border-l-2 border-orange-100 pl-3">

                    {recipeLinks.map((recipe) => (
                      <Link
                        key={recipe.path}
                        to={recipe.path}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-orange-50 hover:text-orange-500"
                      >
                        {recipe.name}
                      </Link>
                    ))}

                  </div>

                </div>

              </div>

              {/* Remaining Links */}

              {navLinks
                .filter(
                  (link) =>
                    link.name !== "Home" &&
                    link.name !== "Recipes"
                )
                .map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-bold transition ${
                        isActive
                          ? "bg-orange-50 text-orange-500"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

            </div>

            {/* ==================================================
                MOBILE CONTACT INFO
            ================================================== */}

            <div className="mt-5 space-y-3 rounded-2xl bg-gray-50 p-4">

              {/* Phone */}

              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 text-sm font-semibold text-gray-700 transition hover:text-orange-500"
              >

                <Phone
                  size={16}
                  className="shrink-0 text-orange-500"
                />

                <span>
                  +92 300 1234567
                </span>

              </a>

              {/* Email */}

              <a
                href="mailto:hello@recipecorner.com"
                className="flex items-center gap-3 text-sm font-semibold text-gray-700 transition hover:text-orange-500"
              >

                <Mail
                  size={16}
                  className="shrink-0 text-orange-500"
                />

                <span className="truncate">
                  hello@recipecorner.com
                </span>

              </a>

              {/* Time */}

              <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">

                <Clock
                  size={16}
                  className="shrink-0 text-orange-500"
                />

                <span>
                  Mon - Sun: 9:00 AM - 8:00 PM
                </span>

              </div>

            </div>

            {/* Mobile CTA */}

            <Link
              to="/recipes/dinner"
              onClick={closeMobileMenu}
              className="mt-5 flex h-12 items-center justify-center rounded-xl bg-orange-500 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Explore Recipes
            </Link>

          </nav>

        </div>

      </header>
    </>
  );
}

export default Navbar;