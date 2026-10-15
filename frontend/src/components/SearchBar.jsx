import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

// --------------------------------------------------
// Search Bar Component
// --------------------------------------------------

function SearchBar({
  placeholder = "Search for recipes, ingredients, or ideas...",
  className = "",
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // --------------------------------------------------
  // Submit Search
  // --------------------------------------------------

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchValue = query.trim();

    if (!searchValue) {
      return;
    }

    navigate(`/search?q=${encodeURIComponent(searchValue)}`);
  };

  // --------------------------------------------------
  // Clear Search
  // --------------------------------------------------

  const handleClear = () => {
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full ${className}`}
      role="search"
    >
      {/* --------------------------------------------------
          Search Input Wrapper
      -------------------------------------------------- */}

      <div className="relative flex items-center">

        {/* Search Icon */}

        <Search
          size={20}
          className="pointer-events-none absolute left-4 text-gray-400"
        />

        {/* Input */}

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          aria-label="Search recipes"
          className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-28 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
        />

        {/* Clear Button */}

        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-20 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={17} />
          </button>
        )}

        {/* Search Button */}

        <button
          type="submit"
          className="absolute right-2 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 text-sm font-bold text-white transition hover:bg-orange-600 sm:px-5"
        >
          <Search size={17} />

          <span className="hidden sm:inline">
            Search
          </span>
        </button>

      </div>
    </form>
  );
}

export default SearchBar;