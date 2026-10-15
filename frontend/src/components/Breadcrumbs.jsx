import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// --------------------------------------------------
// Breadcrumbs Component
// --------------------------------------------------

function Breadcrumbs({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      {/* --------------------------------------------------
          Breadcrumb Wrapper
      -------------------------------------------------- */}

      <ol className="flex flex-wrap items-center gap-1.5 py-5 text-sm">

        {/* Home */}
        <li className="flex items-center">

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-medium text-gray-500 transition hover:text-orange-500"
          >
            <Home size={15} />
            <span>Home</span>
          </Link>

        </li>

        {/* --------------------------------------------------
            Dynamic Breadcrumb Items
        -------------------------------------------------- */}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center"
            >

              {/* Separator */}

              <ChevronRight
                size={15}
                className="mx-1 text-gray-300"
              />

              {isLast || !item.path ? (
                <span
                  className="max-w-[180px] truncate font-semibold text-gray-900 sm:max-w-xs"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="font-medium text-gray-500 transition hover:text-orange-500"
                >
                  {item.label}
                </Link>
              )}

            </li>
          );
        })}

      </ol>
    </nav>
  );
}

export default Breadcrumbs;