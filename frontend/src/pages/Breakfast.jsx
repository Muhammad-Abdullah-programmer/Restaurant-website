import { useMemo, useState } from "react";
import {
  Clock3,
  Heart,
  Search,
  Star,
  ChefHat,
  Flame,
  Utensils,
} from "lucide-react";

const breakfastRecipes = [
  {
    id: 1,
    title: "Classic Pancakes",
    description:
      "Fluffy homemade pancakes served with fresh berries and a drizzle of maple syrup.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=85",
    time: "20 min",
    rating: "4.9",
    difficulty: "Easy",
    type: "Sweet",
  },
  {
    id: 2,
    title: "Avocado Toast",
    description:
      "Crispy toast topped with creamy avocado, herbs and perfectly cooked eggs.",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1200&q=85",
    time: "15 min",
    rating: "4.8",
    difficulty: "Easy",
    type: "Healthy",
  },
  {
    id: 3,
    title: "Fresh Berry Bowl",
    description:
      "A colorful breakfast bowl packed with yogurt, fresh berries, granola and honey.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
    time: "10 min",
    rating: "4.7",
    difficulty: "Easy",
    type: "Healthy",
  },
  {
    id: 4,
    title: "Classic Omelette",
    description:
      "A soft and fluffy omelette loaded with vegetables, herbs and melted cheese.",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=85",
    time: "15 min",
    rating: "4.9",
    difficulty: "Easy",
    type: "Savory",
  },
  {
    id: 5,
    title: "French Toast",
    description:
      "Golden French toast with cinnamon, berries and a generous drizzle of maple syrup.",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=85",
    time: "25 min",
    rating: "4.8",
    difficulty: "Easy",
    type: "Sweet",
  },
  {
    id: 6,
    title: "Healthy Breakfast Bowl",
    description:
      "A nourishing breakfast bowl with fruits, seeds, oats and creamy yogurt.",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=85",
    time: "12 min",
    rating: "4.7",
    difficulty: "Easy",
    type: "Healthy",
  },
  {
    id: 7,
    title: "Breakfast Waffles",
    description:
      "Crispy golden waffles topped with berries, cream and your favorite syrup.",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=85",
    time: "30 min",
    rating: "4.9",
    difficulty: "Medium",
    type: "Sweet",
  },
  {
    id: 8,
    title: "Egg & Toast Plate",
    description:
      "A simple and satisfying breakfast plate with eggs, toast, tomatoes and greens.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
    time: "18 min",
    rating: "4.8",
    difficulty: "Easy",
    type: "Savory",
  },
];

const filters = ["All", "Sweet", "Savory", "Healthy"];

function Breakfast() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const filteredRecipes = useMemo(() => {
    return breakfastRecipes.filter((recipe) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        recipe.title.toLowerCase().includes(searchValue) ||
        recipe.description.toLowerCase().includes(searchValue);

      const matchesFilter =
        activeFilter === "All" || recipe.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative isolate overflow-hidden bg-gray-950">
        <img
          src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=2200&q=90"
          alt="Delicious breakfast"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gray-950/70" />

        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-300 backdrop-blur-xl">
              <ChefHat size={14} />
              Breakfast Collection
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Start Your Day
              <span className="block text-orange-400">
                Deliciously.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              Discover easy, delicious and satisfying breakfast recipes
              designed to make your mornings better.
            </p>

            {/* SEARCH */}

            <div className="mt-8 flex max-w-xl items-center rounded-2xl bg-white p-2 shadow-2xl">
              <Search
                size={20}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search breakfast recipes..."
                className="h-12 min-w-0 flex-1 bg-transparent px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

    {/* ==================================================
    QUICK STATS CARDS
================================================== */}

<section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">

    {/* CARD 1 */}
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl shadow-gray-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
        <Utensils size={21} />
      </div>

      <h3 className="mt-4 text-2xl font-black text-gray-950">
        40+
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-500">
        Breakfast Ideas
      </p>
    </div>

    {/* CARD 2 */}
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl shadow-gray-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
        <Clock3 size={21} />
      </div>

      <h3 className="mt-4 text-2xl font-black text-gray-950">
        30 min
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-500">
        Average Cooking Time
      </p>
    </div>

    {/* CARD 3 */}
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl shadow-gray-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
        <Flame size={21} />
      </div>

      <h3 className="mt-4 text-2xl font-black text-gray-950">
        4.9
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-500">
        Average Rating
      </p>
    </div>

  </div>
</section>

      {/* ==================================================
          RECIPES
      ================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                Morning Favorites
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Breakfast Recipes
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                From quick weekday breakfasts to slow weekend treats,
                find something delicious for every morning.
              </p>
            </div>

            {/* FILTERS */}

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-xs font-black transition-all duration-300 ${
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

          {/* ==================================================
              RESPONSIVE CARDS GRID
          ================================================== */}

          {filteredRecipes.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {filteredRecipes.map((recipe) => (
                <article
                  key={recipe.id}
                  className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10"
                >
                  {/* IMAGE */}

                  <div className="relative h-60 overflow-hidden sm:h-64">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-80" />

                    {/* TYPE */}

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-orange-600 shadow-lg">
                      {recipe.type}
                    </span>

                    {/* FAVORITE */}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(recipe.id)}
                      aria-label={`Favorite ${recipe.title}`}
                      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
                        favorites.includes(recipe.id)
                          ? "bg-orange-500 text-white"
                          : "bg-white/90 text-gray-700 hover:bg-orange-500 hover:text-white"
                      }`}
                    >
                      <Heart
                        size={17}
                        fill={
                          favorites.includes(recipe.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                    {/* TIME */}

                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-gray-950/70 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                      <Clock3 size={12} />
                      {recipe.time}
                    </div>
                  </div>

                  {/* CARD CONTENT */}

                  <div className="p-5">
                    {/* RATING */}

                    <div className="flex items-center gap-1 text-orange-500">
                      <Star
                        size={13}
                        fill="currentColor"
                      />

                      <span className="text-xs font-black">
                        {recipe.rating}
                      </span>

                      <span className="ml-1 text-[10px] text-gray-400">
                        • {recipe.difficulty}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-3 text-xl font-black leading-tight text-gray-950 transition-colors duration-300 group-hover:text-orange-500">
                      {recipe.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-2 line-clamp-3 text-xs leading-6 text-gray-500">
                      {recipe.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* ==================================================
                NO RESULTS
            ================================================== */

            <div className="mt-10 rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                <Search size={25} />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-950">
                No breakfast recipes found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search term or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="mt-6 rounded-xl bg-orange-500 px-5 py-3 text-xs font-black text-white transition hover:bg-orange-600"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ==================================================
          FEATURED CTA
      ================================================== */}

      <section className="bg-[#fffaf5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-950">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1800&q=90"
              alt="Fresh breakfast ingredients"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/50" />

            <div className="relative max-w-2xl px-7 py-16 sm:px-12 sm:py-20 lg:px-16">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                Make mornings better
              </span>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Your perfect breakfast
                <span className="block text-orange-400">
                  is waiting.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Save your favorite recipes, explore new flavors and make
                every morning a little more delicious.
              </p>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20"
                >
                  Explore Breakfast
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Breakfast;