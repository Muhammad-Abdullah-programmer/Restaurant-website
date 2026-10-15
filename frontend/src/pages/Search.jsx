import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Search as SearchIcon,
  SlidersHorizontal,
  Star,
  X,
  ChefHat,
} from "lucide-react";

import { recipes } from "../data/recipes";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desserts",
  ];

  const filteredRecipes = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    let results = recipes.filter((recipe) => {
      const title = recipe.title?.toLowerCase() || "";
      const description = recipe.description?.toLowerCase() || "";
      const type = recipe.type?.toLowerCase() || "";
      const categoryName = recipe.category?.toLowerCase() || "";
      const slug = recipe.slug?.toLowerCase() || "";

      const matchesSearch =
        !searchText ||
        title.includes(searchText) ||
        description.includes(searchText) ||
        type.includes(searchText) ||
        categoryName.includes(searchText) ||
        slug.includes(searchText);

      const matchesCategory =
        category === "All" ||
        type === category.toLowerCase() ||
        categoryName === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "rating") {
      results = [...results].sort(
        (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
      );
    }

    if (sortBy === "name") {
      results = [...results].sort((a, b) =>
        (a.title || "").localeCompare(b.title || "")
      );
    }

    return results;
  }, [query, category, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      setSearchParams({ q: trimmedQuery });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setQuery("");
    setCategory("All");
    setSortBy("default");
    setSearchParams({});
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#21130e]">

        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-500/20">
            <SearchIcon size={28} />
          </div>

          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
            Recipe Corner
          </p>

          <h1 className="mt-3 font-serif text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Find Your Next
            <span className="text-orange-400"> Favorite Recipe</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-400 sm:text-base">
            Search delicious recipes, discover new flavors, and find the
            perfect dish for any occasion.
          </p>

          {/* Search Form */}

          <form
            onSubmit={handleSearch}
            className="mx-auto mt-9 flex w-full max-w-3xl flex-col gap-3 sm:flex-row"
          >

            <div className="relative flex-1">

              <SearchIcon
                size={19}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400"
              />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search chicken, pasta, dessert..."
                className="h-14 w-full rounded-2xl border border-white/10 bg-white px-12 pr-12 text-sm font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-orange-100 hover:text-orange-600"
                >
                  <X size={15} />
                </button>
              )}

            </div>

            <button
              type="submit"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
            >
              Search

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </form>

        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-7xl">

          {/* Filter Bar */}

          <div className="rounded-[1.7rem] border border-stone-200 bg-white p-4 shadow-sm sm:p-5">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              {/* Categories */}

              <div className="flex flex-wrap items-center gap-2">

                <div className="mr-1 flex items-center gap-2 text-xs font-black text-gray-500">
                  <SlidersHorizontal size={15} />
                  Filter:
                </div>

                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-4 py-2.5 text-xs font-black transition-all duration-300 ${
                      category === item
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "bg-stone-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

              {/* Sort */}

              <div className="flex items-center gap-3">

                <label
                  htmlFor="sort"
                  className="text-xs font-black text-gray-500"
                >
                  Sort:
                </label>

                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-xs font-bold outline-none transition focus:border-orange-400"
                >
                  <option value="default">Recommended</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>

              </div>

            </div>

          </div>

          {/* Result Header */}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
                Search Results
              </p>

              <h2 className="mt-2 font-serif text-3xl font-black sm:text-4xl">
                {query
                  ? `Results for "${query}"`
                  : "Explore Our Recipes"}
              </h2>

            </div>

            <div className="flex items-center gap-3">

              <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-orange-600">
                {filteredRecipes.length}{" "}
                {filteredRecipes.length === 1 ? "Recipe" : "Recipes"}
              </span>

              {(query || category !== "All" || sortBy !== "default") && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="text-xs font-black text-gray-500 transition hover:text-orange-600"
                >
                  Clear All
                </button>
              )}

            </div>

          </div>

          {/* ================= RESULTS ================= */}

          {filteredRecipes.length > 0 ? (

            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredRecipes.map((recipe) => (

                <Link
                  key={recipe.id}
                  to={`/recipe/${recipe.slug}`}
                  className="group overflow-hidden rounded-[1.8rem] border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
                >

                  {/* Image */}

                  <div className="relative overflow-hidden">

                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Category */}

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-gray-900 backdrop-blur">
                      {recipe.type || recipe.category || "Recipe"}
                    </span>

                    {/* Rating */}

                    <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-gray-900 shadow-lg">

                      <Star
                        size={13}
                        fill="currentColor"
                        className="text-amber-500"
                      />

                      {recipe.rating || "4.8"}

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-5">

                    <h3 className="font-serif text-xl font-black leading-tight transition-colors duration-300 group-hover:text-orange-600">
                      {recipe.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-xs leading-6 text-gray-500">
                      {recipe.description || "A delicious recipe from Recipe Corner."}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">

                      <div className="flex items-center gap-2 text-xs font-bold text-gray-500">

                        <Clock3
                          size={15}
                          className="text-orange-500"
                        />

                        {recipe.time || "30 min"}

                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-black text-orange-600">

                        View Recipe

                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            /* ================= NO RESULTS ================= */

            <div className="mt-10 rounded-[2rem] border border-dashed border-stone-300 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-50 text-orange-500">
                <ChefHat size={32} />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-black">
                No recipes found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                We couldn't find a recipe matching your search. Try another
                keyword or browse all of our recipes.
              </p>

              <button
                type="button"
                onClick={clearSearch}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#21130e] px-6 py-3.5 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                View All Recipes
                <ArrowRight size={15} />
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Search;