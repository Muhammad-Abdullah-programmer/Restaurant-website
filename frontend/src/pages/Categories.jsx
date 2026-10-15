import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChefHat,
  Clock3,
  Flame,
  Search,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

const categories = [
  {
    name: "Breakfast",
    slug: "breakfast",
    count: 24,
    time: "15–30 min",
    description:
      "Start your morning with delicious, simple and satisfying breakfast recipes.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Lunch",
    slug: "lunch",
    count: 32,
    time: "20–40 min",
    description:
      "Fresh and flavorful lunch ideas perfect for busy days and relaxed meals.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Dinner",
    slug: "dinner",
    count: 41,
    time: "30–60 min",
    description:
      "Make dinner special with comforting meals, family favorites and new ideas.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Desserts",
    slug: "desserts",
    count: 28,
    time: "20–50 min",
    description:
      "Sweet treats, cakes and irresistible desserts for every occasion.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Healthy Food",
    slug: "healthy-food",
    count: 36,
    time: "15–35 min",
    description:
      "Wholesome recipes packed with fresh ingredients and delicious flavor.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Quick Meals",
    slug: "quick-meals",
    count: 29,
    time: "10–25 min",
    description:
      "Fast recipes designed for those days when you need something delicious quickly.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Pasta",
    slug: "pasta",
    count: 21,
    time: "20–45 min",
    description:
      "Creamy, cheesy, saucy and comforting pasta recipes everyone will love.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Pizza",
    slug: "pizza",
    count: 18,
    time: "30–60 min",
    description:
      "Homemade pizza inspiration with crispy crusts and delicious toppings.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85",
  },
];

const popularCategories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
];

function Categories() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        category.name.toLowerCase().includes(searchText) ||
        category.description.toLowerCase().includes(searchText);

      const matchesFilter =
        activeFilter === "All" || category.name === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <main className="overflow-hidden bg-white">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative isolate overflow-hidden bg-gray-950">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2200&q=90"
          alt="Cooking and food"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gray-950/75" />

        <div className="absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-300 backdrop-blur-xl">
              <Sparkles size={14} />
              Recipe Collection
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Explore Our
              <span className="block text-orange-400">
                Categories
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              Browse our hand-picked collection of recipes and discover
              delicious ideas for breakfast, lunch, dinner, desserts and more.
            </p>

            {/* SEARCH */}

            <div className="mx-auto mt-9 flex max-w-2xl items-center rounded-2xl border border-white/10 bg-white p-2 shadow-2xl">
              <Search
                size={20}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a category..."
                className="h-12 min-w-0 flex-1 bg-transparent px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                className="hidden rounded-xl bg-orange-500 px-6 py-3 text-xs font-black text-white transition hover:bg-orange-600 sm:block"
              >
                Search
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          STATS
      ================================================== */}

      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">

          {/* CARD 1 */}

          <div className="group rounded-2xl bg-white p-6 text-center shadow-xl shadow-gray-900/10 transition-all duration-300 hover:-translate-y-2 hover:bg-orange-500 sm:p-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-white">
              <ChefHat size={20} />
            </div>

            <h3 className="mt-3 text-2xl font-black text-gray-950 group-hover:text-white">
              8+
            </h3>

            <p className="text-xs font-medium text-gray-500 group-hover:text-orange-50">
              Food Categories
            </p>
          </div>

          {/* CARD 2 */}

          <div className="group rounded-2xl bg-white p-6 text-center shadow-xl shadow-gray-900/10 transition-all duration-300 hover:-translate-y-2 hover:bg-orange-500 sm:p-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-white">
              <Utensils size={20} />
            </div>

            <h3 className="mt-3 text-2xl font-black text-gray-950 group-hover:text-white">
              200+
            </h3>

            <p className="text-xs font-medium text-gray-500 group-hover:text-orange-50">
              Delicious Recipes
            </p>
          </div>

          {/* CARD 3 */}

          <div className="group rounded-2xl bg-white p-6 text-center shadow-xl shadow-gray-900/10 transition-all duration-300 hover:-translate-y-2 hover:bg-orange-500 sm:p-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-white">
              <Flame size={20} />
            </div>

            <h3 className="mt-3 text-2xl font-black text-gray-950 group-hover:text-white">
              4.9
            </h3>

            <p className="text-xs font-medium text-gray-500 group-hover:text-orange-50">
              Average Rating
            </p>
          </div>

        </div>
      </section>

      {/* ==================================================
          CATEGORY SECTION
      ================================================== */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                Find something delicious
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Browse by category
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                Choose a category and discover recipes made for every mood,
                meal and occasion.
              </p>
            </div>

            {/* FILTERS */}

            <div className="flex flex-wrap gap-2">

              {popularCategories.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-xs font-black transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "bg-gray-100 text-gray-600 hover:-translate-y-0.5 hover:bg-orange-100 hover:text-orange-600"
                  }`}
                >
                  {filter}
                </button>
              ))}

            </div>
          </div>

          {/* CATEGORY GRID */}

          {filteredCategories.length > 0 ? (

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {filteredCategories.map((category) => (

                <Link
                  key={category.slug}
                  to={`/recipes/${category.slug}`}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/15"
                >

                  {/* IMAGE */}

                  <div className="relative h-72 overflow-hidden">

                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent transition-all duration-500 group-hover:from-orange-950/85" />

                    {/* TOP BADGE */}

                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-orange-600 shadow-lg">
                      {category.count} Recipes
                    </div>

                    {/* HOVER ICON */}

                    <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-orange-500 text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>

                    {/* CONTENT */}

                    <div className="absolute bottom-0 left-0 right-0 p-5">

                      <h3 className="text-2xl font-black text-white transition-transform duration-300 group-hover:-translate-y-1">
                        {category.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-xs font-bold text-gray-200">
                        <Clock3 size={13} />
                        {category.time}
                      </div>

                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <div className="p-5">

                    <p className="min-h-[72px] text-xs leading-6 text-gray-500">
                      {category.description}
                    </p>

                    {/* 
                      VIEW RECIPES BUTTON/TEXT REMOVED
                      CARD STILL OPENS CATEGORY PAGE
                    */}

                  </div>

                </Link>
              ))}

            </div>

          ) : (

            /* EMPTY SEARCH STATE */

            <div className="mt-10 rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                <Search size={25} />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-950">
                No categories found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching with another keyword.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="mt-6 rounded-xl bg-orange-500 px-5 py-3 text-xs font-black text-white transition hover:bg-orange-600"
              >
                Clear Search
              </button>

            </div>
          )}

        </div>
      </section>

      {/* ==================================================
          FEATURED CATEGORY
      ================================================== */}

      <section className="bg-[#fffaf5] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-[2rem] bg-gray-950 lg:grid-cols-2">

            <div className="relative min-h-[400px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=90"
                alt="Healthy food"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/30 to-gray-950/70" />

              <div className="absolute bottom-6 left-6 rounded-full bg-orange-500 px-4 py-2 text-xs font-black text-white">
                Editor's Pick
              </div>

            </div>

            <div className="flex items-center p-8 sm:p-12 lg:p-16">

              <div>

                <div className="flex items-center gap-1 text-orange-400">

                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={15}
                      fill="currentColor"
                    />
                  ))}

                  <span className="ml-2 text-xs font-bold text-gray-400">
                    4.9 / 5
                  </span>

                </div>

                <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                  Healthy recipes,
                  <span className="block text-orange-400">
                    incredible flavor.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  Eating well does not have to mean boring food. Explore
                  colorful, wholesome and satisfying recipes designed for
                  everyday life.
                </p>

                <Link
                  to="/categories"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20"
                >
                  Discover More

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <Sparkles size={23} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-gray-950 sm:text-5xl">
            Ready to cook something amazing?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
            Explore our recipes and find your next favorite dish today.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/recipes/breakfast"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 hover:shadow-xl"
            >
              Start Exploring

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 text-xs font-black text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
            >
              Read Food Stories
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Categories;