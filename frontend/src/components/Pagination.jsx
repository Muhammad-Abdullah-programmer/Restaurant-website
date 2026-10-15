import { ChevronLeft, ChevronRight } from "lucide-react";

// --------------------------------------------------
// Pagination Component
// --------------------------------------------------

function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  // --------------------------------------------------
  // Don't render if only one page exists
  // --------------------------------------------------

  if (totalPages <= 1) {
    return null;
  }

  // --------------------------------------------------
  // Page Change Handler
  // --------------------------------------------------

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    if (onPageChange) {
      onPageChange(page);
    }
  };

  // --------------------------------------------------
  // Generate Page Numbers
  // --------------------------------------------------

  const getPages = () => {
    const pages = [];

    // Show all pages if total is small
    if (totalPages <= 7) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }

      return pages;
    }

    // Always show first page
    pages.push(1);

    // Left dots
    if (currentPage > 4) {
      pages.push("left-dots");
    }

    // Middle pages
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    // Right dots
    if (currentPage < totalPages - 3) {
      pages.push("right-dots");
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center"
    >
      {/* --------------------------------------------------
          Pagination Wrapper
      -------------------------------------------------- */}

      <div className="flex items-center gap-1.5 sm:gap-2">

        {/* --------------------------------------------------
            Previous Button
        -------------------------------------------------- */}

        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:text-gray-600 sm:h-11 sm:w-11"
        >
          <ChevronLeft size={18} />
        </button>

        {/* --------------------------------------------------
            Page Numbers
        -------------------------------------------------- */}

        {pages.map((page, index) => {
          // Dots
          if (typeof page !== "number") {
            return (
              <span
                key={`${page}-${index}`}
                className="flex h-10 w-8 items-center justify-center text-sm font-semibold text-gray-400 sm:h-11"
              >
                ...
              </span>
            );
          }

          // Page button
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? "page" : undefined}
              className={`hidden h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-bold transition sm:flex sm:h-11 ${
                isActive
                  ? "bg-orange-500 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* --------------------------------------------------
            Mobile Current Page
        -------------------------------------------------- */}

        <span className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-orange-500 px-3 text-sm font-bold text-white sm:hidden">
          {currentPage}
        </span>

        {/* --------------------------------------------------
            Next Button
        -------------------------------------------------- */}

        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:text-gray-600 sm:h-11 sm:w-11"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </nav>
  );
}

export default Pagination;