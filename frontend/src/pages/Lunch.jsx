import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Flame,
  Heart,
  Search,
  Star,
  Utensils,
} from "lucide-react";

const lunchRecipes = [
  {
    id: 1,
    title: "Mediterranean Chicken Bowl",
    slug: "mediterranean-chicken-bowl",
    description:
      "Tender grilled chicken with colorful vegetables, creamy hummus and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90",
    time: "30 min",
    rating: "4.9",
    type: "Healthy",
    calories: "480 kcal",
  },
  {
    id: 2,
    title: "Creamy Garlic Pasta",
    slug: "creamy-garlic-pasta",
    description:
      "Silky garlic cream sauce tossed with pasta and finished with parmesan and herbs.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=90",
    time: "25 min",
    rating: "4.8",
    type: "Comfort",
    calories: "560 kcal",
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    slug: "grilled-chicken-salad",
    description:
      "Fresh greens, grilled chicken, crunchy vegetables and a bright homemade dressing.",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1200&q=90",
    time: "20 min",
    rating: "4.8",
    type: "Healthy",
    calories: "390 kcal",
  },
  {
    id: 4,
    title: "Classic Beef Burger",
    slug: "classic-beef-burger",
    description:
      "Juicy homemade beef patty layered with fresh lettuce, tomato and melted cheese.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    time: "35 min",
    rating: "4.9",
    type: "Comfort",
    calories: "670 kcal",
  },
  {
    id: 5,
    title: "Fresh Avocado Wrap",
    slug: "fresh-avocado-wrap",
    description:
      "A light and flavorful wrap packed with avocado, vegetables and creamy dressing.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=90",
    time: "15 min",
    rating: "4.7",
    type: "Quick",
    calories: "420 kcal",
  },
  {
    id: 6,
    title: "Spicy Rice Bowl",
    slug: "spicy-rice-bowl",
    description:
      "Fluffy rice served with roasted vegetables, spicy sauce and seasoned protein.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=90",
    time: "30 min",
    rating: "4.8",
    type: "Spicy",
    calories: "510 kcal",
  },
];

const filters = ["All", "Healthy", "Quick", "Comfort", "Spicy"];

function Lunch() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const featuredRecipe = lunchRecipes[0];

  const recipes = useMemo(() => {
    return lunchRecipes.slice(1).filter((recipe) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        recipe.title.toLowerCase().includes(searchValue) ||
        recipe.description.toLowerCase().includes(searchValue);

      const matchesFilter =
        filter === "All" || recipe.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="overflow-hidden bg-[#faf9f6] text-gray-950">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#171714]">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-amber-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">

          {/* HERO TEXT */}

          <div className="relative z-10">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400" />

              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                Midday Collection
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Make Lunch
              <span className="block italic text-orange-400">
                Worth Remembering.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
              Discover satisfying lunch recipes created for busy weekdays,
              relaxed weekends and everything in between.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="#lunch-recipes"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Explore Lunch

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/categories"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-xs font-black text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                All Categories
              </Link>

            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="group relative mx-auto w-full max-w-xl lg:max-w-none">

            <div className="absolute -inset-3 rounded-[2rem] border border-white/5 transition-all duration-500 group-hover:border-orange-400/30 sm:-inset-4" />

            <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] sm:h-[500px] sm:rounded-[2rem]">

              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 transition-all duration-700 group-hover:bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              {/* Hover Center */}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">

                <Link
                  to={`/recipe/${featuredRecipe.slug}`}
                  aria-label={`Open ${featuredRecipe.title}`}
                  className="flex h-14 w-14 translate-y-5 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl transition-all duration-500 group-hover:translate-y-0 hover:scale-110 hover:bg-orange-600 sm:h-16 sm:w-16"
                >
                  <ArrowUpRight size={24} />
                </Link>

              </div>

              {/* Featured Content */}

              <div className="absolute bottom-5 left-5 right-5 translate-y-2 transition-transform duration-500 group-hover:translate-y-0 sm:bottom-6 sm:left-6 sm:right-6">

                <div className="flex items-center gap-2 text-xs font-bold text-orange-300">
                  <Flame size={14} />
                  Featured Lunch
                </div>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  {featuredRecipe.title}
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] font-bold text-gray-200">

                  <span className="flex items-center gap-1">
                    <Clock3 size={13} />
                    {featuredRecipe.time}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-gray-500" />

                  <span className="flex items-center gap-1">
                    <Star size={13} fill="currentColor" />
                    {featuredRecipe.rating}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-gray-500" />

                  <span>{featuredRecipe.calories}</span>

                </div>
              </div>

              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[9px] font-black uppercase tracking-wider text-orange-600 backdrop-blur transition-all duration-500 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white sm:right-5 sm:top-5 sm:px-4">
                Editor's Choice
              </div>

            </div>
          </div>

        </div>
      </section>
{/* ================= STATS ================= */}

<section className="relative z-10 -mt-6 px-4 sm:-mt-8 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">

    {[
      ["30+", "Lunch Recipes"],
      ["25 min", "Average Cooking Time"],
      ["4.9", "Community Rating"],
    ].map(([number, label]) => (

      <div
        key={label}
        className="group rounded-2xl border border-gray-100 bg-white px-5 py-7 text-center shadow-lg shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl hover:shadow-orange-500/10 sm:px-6 sm:py-8"
      >

        {/* NUMBER */}
        <p className="text-3xl font-black tracking-tight text-gray-950 transition-colors duration-300 group-hover:text-orange-500 sm:text-4xl">
          {number}
        </p>

        {/* LABEL */}
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 transition-colors duration-300 group-hover:text-orange-600 sm:text-xs">
          {label}
        </p>

      </div>

    ))}

  </div>
</section>

      {/* ================= RECIPES ================= */}

      <section
        id="lunch-recipes"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}

          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />

                <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Today's Inspiration
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Lunch, your way.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
                Light and healthy, quick and easy, or rich and comforting —
                choose the recipe that matches your mood.
              </p>

            </div>

            {/* SEARCH */}

            <div className="flex w-full items-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 focus-within:border-orange-400 focus-within:shadow-lg lg:w-[320px]">

              <Search
                size={18}
                className="ml-2 shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find a lunch recipe..."
                className="h-10 min-w-0 flex-1 bg-transparent px-3 text-xs font-medium outline-none"
              />

            </div>

          </div>

          {/* FILTERS */}

          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-gray-200 pb-5 sm:mt-9">

            {filters.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2.5 text-xs font-black transition-all duration-300 sm:px-5 ${
                  filter === item
                    ? "bg-gray-950 text-white shadow-lg"
                    : "bg-white text-gray-500 ring-1 ring-gray-200 hover:-translate-y-1 hover:bg-orange-50 hover:text-orange-600 hover:shadow-md"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* ================= RESPONSIVE CARDS ================= */}

          {recipes.length > 0 ? (

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">

              {recipes.map((recipe, index) => (

                <article
                  key={recipe.id}
                  className="group overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-900/10"
                >

                  {/* IMAGE */}

                  <div className="relative h-60 overflow-hidden sm:h-64">

                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* NUMBER */}

                    <span className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-full bg-white px-2 text-[10px] font-black text-gray-700 shadow-lg">
                      0{index + 1}
                    </span>

                    {/* FAVORITE */}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(recipe.id)}
                      aria-label={`Favorite ${recipe.title}`}
                      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                        favorites.includes(recipe.id)
                          ? "bg-orange-500 text-white"
                          : "bg-white/90 text-gray-700 hover:bg-orange-500 hover:text-white"
                      }`}
                    >
                      <Heart
                        size={16}
                        fill={
                          favorites.includes(recipe.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                    {/* TIME */}

                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-gray-950/75 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur">
                      <Clock3 size={12} />
                      {recipe.time}
                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-col p-5 sm:p-6">

                    {/* META */}

                    <div className="flex flex-wrap items-center gap-2.5">

                      <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        {recipe.type}
                      </span>

                      <span className="flex items-center gap-1 text-[11px] font-bold text-orange-500">
                        <Star
                          size={13}
                          fill="currentColor"
                        />
                        {recipe.rating}
                      </span>

                    </div>

                    {/* TITLE */}

                    <h3 className="mt-4 text-xl font-black tracking-tight text-gray-950 transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
                      {recipe.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                      {recipe.description}
                    </p>

                    {/* BOTTOM INFO */}

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">

                      <div className="flex items-center gap-2 text-xs font-bold text-gray-500">

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600 transition-transform duration-300 group-hover:rotate-12">
                          <Check size={13} />
                        </span>

                        Easy to make
                      </div>

                      <span className="text-xs font-bold text-gray-400">
                        {recipe.calories}
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="mt-8 rounded-3xl border border-dashed border-gray-200 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-black">
                Nothing found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another recipe name or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                className="mt-6 rounded-xl bg-gray-950 px-6 py-3 text-xs font-black text-white transition hover:bg-orange-500"
              >
                Reset Search
              </button>

            </div>

          )}

        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}

      <section className="border-y border-gray-200 bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* IMAGE */}

            <div className="group relative">

              <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">

                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90"
                  alt="Healthy lunch bowl"
                  loading="lazy"
                  className="h-[350px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 sm:h-[430px]"
                />

              </div>

              <div className="absolute inset-0 rounded-[1.5rem] bg-black/0 transition-all duration-500 group-hover:bg-black/20 sm:rounded-[2rem]" />

              <div className="absolute -bottom-5 right-3 rounded-2xl bg-gray-950 p-5 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-orange-500 sm:-right-6">

                <p className="text-2xl font-black text-white">
                  25
                </p>

                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-white">
                  Min Average
                </p>

              </div>

            </div>

            {/* TEXT */}

            <div>

              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                The Recipe Corner Way
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Good lunch doesn't

                <span className="block text-orange-500">
                  need to be complicated.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-gray-500">
                We believe the best midday meals balance flavor, simplicity
                and ingredients you can actually find.
              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Simple ingredients",
                  "Straightforward instructions",
                  "Family-friendly flavors",
                  "Perfect for busy weekdays",
                ].map((item) => (

                  <div
                    key={item}
                    className="group/item flex cursor-default items-center gap-3 rounded-xl p-2 transition-all duration-300 hover:translate-x-2 hover:bg-orange-50"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6">
                      <Check size={14} />
                    </span>

                    <span className="text-sm font-bold text-gray-700 transition-colors group-hover/item:text-orange-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#faf9f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-500 hover:rotate-6 hover:scale-110">
            <Utensils size={23} />
          </div>

          <h2 className="mt-6 text-3xl font-black sm:text-5xl">
            What are you having
            <span className="text-orange-500"> for lunch?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Explore more recipes, discover new flavors and turn an ordinary
            lunch into something worth looking forward to.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/categories"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500 hover:shadow-xl"
            >
              Browse Categories

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 text-xs font-black text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
            >
              Visit Food Blog
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Lunch;