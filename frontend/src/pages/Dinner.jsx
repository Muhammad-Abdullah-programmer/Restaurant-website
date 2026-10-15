import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChefHat,
  Clock3,
  Flame,
  Heart,
  Search,
  Star,
  Utensils,
} from "lucide-react";

const dinnerRecipes = [
  {
    id: 1,
    title: "Creamy Tuscan Chicken",
    slug: "creamy-tuscan-chicken",
    description:
      "Juicy chicken breasts simmered in a creamy garlic sauce with spinach, tomatoes and parmesan.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1400&q=90",
    time: "35 min",
    rating: "4.9",
    type: "Popular",
    calories: "540 kcal",
  },
  {
    id: 2,
    title: "Garlic Butter Steak",
    slug: "garlic-butter-steak",
    description:
      "Tender steak cooked to perfection and finished with fragrant garlic butter and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=90",
    time: "30 min",
    rating: "4.9",
    type: "Special",
    calories: "620 kcal",
  },
  {
    id: 3,
    title: "Creamy Mushroom Pasta",
    slug: "creamy-mushroom-pasta",
    description:
      "Comforting pasta coated in a rich mushroom cream sauce with parmesan and herbs.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=90",
    time: "25 min",
    rating: "4.8",
    type: "Comfort",
    calories: "570 kcal",
  },
  {
    id: 4,
    title: "Honey Garlic Salmon",
    slug: "honey-garlic-salmon",
    description:
      "Flaky salmon glazed with honey, garlic and soy for a delicious sweet and savory dinner.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=90",
    time: "25 min",
    rating: "4.8",
    type: "Healthy",
    calories: "430 kcal",
  },
  {
    id: 5,
    title: "Chicken Tikka Rice",
    slug: "chicken-tikka-rice",
    description:
      "Spiced chicken tikka served over aromatic rice with fresh herbs and cooling yogurt.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=90",
    time: "40 min",
    rating: "4.9",
    type: "Family",
    calories: "590 kcal",
  },
  {
    id: 6,
    title: "Classic Chicken Roast",
    slug: "classic-chicken-roast",
    description:
      "Golden roasted chicken seasoned with herbs and spices for a comforting family dinner.",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=90",
    time: "55 min",
    rating: "4.8",
    type: "Family",
    calories: "510 kcal",
  },
  {
    id: 7,
    title: "Spicy Beef Noodles",
    slug: "spicy-beef-noodles",
    description:
      "Savory noodles tossed with tender beef, vegetables and a bold spicy sauce.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=90",
    time: "30 min",
    rating: "4.7",
    type: "Spicy",
    calories: "610 kcal",
  },
  {
    id: 8,
    title: "Vegetable Curry Bowl",
    slug: "vegetable-curry-bowl",
    description:
      "A fragrant vegetable curry packed with warming spices and served with fluffy rice.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=90",
    time: "35 min",
    rating: "4.7",
    type: "Healthy",
    calories: "410 kcal",
  },
];

const filters = [
  "All",
  "Popular",
  "Special",
  "Comfort",
  "Healthy",
  "Family",
  "Spicy",
];

function Dinner() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const featuredRecipe = dinnerRecipes[0];

  const recipes = useMemo(() => {
    return dinnerRecipes.slice(1).filter((recipe) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        recipe.title.toLowerCase().includes(searchText) ||
        recipe.description.toLowerCase().includes(searchText);

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
    <main className="overflow-hidden bg-[#f7f5f0] text-gray-950">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#151412]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={featuredRecipe.image}
            alt=""
            className="h-full w-full object-cover opacity-30 transition duration-[1500ms] hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#11100f] via-[#11100f]/90 to-[#11100f]/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#11100f] via-transparent to-transparent" />
        </div>

        {/* Decorative Circles */}
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full border border-orange-400/10" />

        <div className="absolute -right-20 top-40 h-[300px] w-[300px] rounded-full border border-orange-400/10" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <ChefHat size={19} />
              </span>

              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
                The Dinner Collection
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Slow Down.
              <span className="block text-orange-400">
                Dinner Is Served.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-sm leading-8 text-gray-300 sm:text-base">
              End your day with recipes made for long conversations,
              hungry families and those evenings when food deserves
              a little extra attention.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#dinner-recipes"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/30"
              >
                Explore Dinner

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/categories"
                className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-xs font-black text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Browse All Recipes
              </Link>

            </div>

            {/* Hero Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

              <div>
                <p className="text-2xl font-black text-white">
                  40+
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Dinner Ideas
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">
                  4.9
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Average Rating
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">
                  35 min
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Average Time
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED RECIPE
      ===================================================== */}

      <section className="relative -mt-20 px-4 sm:px-6 lg:px-8">

        <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* Featured Image */}
            <div className="group/image relative h-[350px] overflow-hidden sm:h-[430px] lg:h-[500px]">

              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover/image:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover/image:bg-black/30" />

              <div className="absolute left-6 top-6 rounded-full bg-orange-500 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white">
                Tonight's Pick
              </div>

              <Link
                to={`/recipe/${featuredRecipe.slug}`}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-[35%] items-center justify-center rounded-full bg-white text-gray-950 opacity-0 shadow-2xl transition-all duration-500 group-hover/image:-translate-y-1/2 group-hover/image:opacity-100 hover:scale-110 hover:bg-orange-500 hover:text-white"
              >
                <ArrowUpRight size={25} />
              </Link>

            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-500">
                <Flame size={15} />
                Editor's Favorite
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {featuredRecipe.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                {featuredRecipe.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-600">
                  <Clock3 size={14} />
                  {featuredRecipe.time}
                </span>

                <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-600">
                  <Star
                    size={14}
                    className="text-orange-500"
                    fill="currentColor"
                  />
                  {featuredRecipe.rating}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-600">
                  {featuredRecipe.calories}
                </span>

              </div>

              <Link
                to={`/recipe/${featuredRecipe.slug}`}
                className="group/link mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-gray-950 px-6 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl"
              >
                See Full Recipe

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RECIPE COLLECTION
      ===================================================== */}

      <section
        id="dinner-recipes"
        className="scroll-mt-20 py-24 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-orange-500" />

                <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
                  Dinner Table
                </span>

              </div>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Recipes for your evening.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                From impressive date-night dishes to comforting family
                favorites, find something everyone will love.
              </p>

            </div>

            {/* Search */}
            <div className="flex w-full items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 focus-within:border-orange-400 focus-within:shadow-xl lg:w-[330px]">

              <Search
                size={18}
                className="ml-2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dinner recipes..."
                className="h-10 min-w-0 flex-1 bg-transparent px-3 text-xs font-medium outline-none"
              />

            </div>

          </div>


          {/* Filters */}
          <div className="mt-9 flex gap-2 overflow-x-auto border-b border-gray-200 pb-5">

            {filters.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-black transition-all duration-300 ${
                  filter === item
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-white text-gray-500 ring-1 ring-gray-200 hover:-translate-y-1 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {item}
              </button>

            ))}

          </div>


          {/* =====================================================
              RECIPE CARDS
          ===================================================== */}

          {recipes.length > 0 ? (

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {recipes.map((recipe) => (

                <article
                  key={recipe.id}
                  className="group overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-900/10"
                >

                  {/* Image */}
                  <div className="group/image relative h-64 overflow-hidden">

                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover/image:bg-black/35" />

                    {/* Hover Arrow */}
                    <Link
                      to={`/recipe/${recipe.slug}`}
                      aria-label={`View ${recipe.title}`}
                      className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-[30%] items-center justify-center rounded-full bg-orange-500 text-white opacity-0 shadow-2xl transition-all duration-500 group-hover/image:-translate-y-1/2 group-hover/image:opacity-100 hover:scale-110 hover:bg-orange-600"
                    >
                      <ArrowUpRight size={21} />
                    </Link>

                    {/* Type */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-gray-800 shadow-lg backdrop-blur">
                      {recipe.type}
                    </span>

                    {/* Favorite */}
                    <button
                      type="button"
                      onClick={() => toggleFavorite(recipe.id)}
                      aria-label={`Favorite ${recipe.title}`}
                      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                        favorites.includes(recipe.id)
                          ? "bg-orange-500 text-white"
                          : "bg-white/95 text-gray-700 hover:bg-orange-500 hover:text-white"
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

                  </div>


                  {/* Content */}
                  <div className="p-6">

                    {/* Time + Rating */}
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">

                      <span className="flex items-center gap-1">
                        <Clock3 size={13} />
                        {recipe.time}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-300" />

                      <span className="flex items-center gap-1">
                        <Star
                          size={13}
                          className="text-orange-500"
                          fill="currentColor"
                        />
                        {recipe.rating}
                      </span>

                    </div>


                    {/* Title */}
                    <h3 className="mt-3 text-xl font-black leading-tight transition-colors duration-300 group-hover:text-orange-500">
                      {recipe.title}
                    </h3>


                    {/* Description */}
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                      {recipe.description}
                    </p>


                    {/* Calories Only */}
                    <div className="mt-5 border-t border-gray-100 pt-5">

                      <span className="text-xs font-bold text-gray-400">
                        {recipe.calories}
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="mt-10 rounded-3xl border border-dashed border-gray-200 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-black">
                No dinner found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or choose a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                className="mt-6 rounded-xl bg-gray-950 px-6 py-3 text-xs font-black text-white transition hover:bg-orange-500"
              >
                Reset Filters
              </button>

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          DINNER EXPERIENCE
      ===================================================== */}

      <section className="overflow-hidden bg-[#171614] py-24 sm:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Image */}
            <div className="group relative">

              <div className="absolute -inset-3 rounded-[2rem] border border-orange-400/10 transition duration-500 group-hover:border-orange-400/30" />

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=90"
                  alt="Dinner table"
                  loading="lazy"
                  className="h-[450px] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/40" />

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition duration-500 group-hover:bg-orange-500/80">

                    <p className="text-xs font-black uppercase tracking-wider text-orange-300 group-hover:text-white">
                      Dinner Tip
                    </p>

                    <p className="mt-2 text-sm font-bold leading-6 text-white">
                      Set the table, slow down and make tonight's meal feel special.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                Make It An Evening
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Dinner is more than
                <span className="block text-orange-400">
                  just another meal.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-gray-400">
                Our dinner recipes are designed around the moments that
                happen around the table. Choose something quick for a
                busy evening or take your time with a recipe worth sharing.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Comforting family favorites",
                  "Date-night worthy recipes",
                  "Fresh and balanced meals",
                  "Easy step-by-step instructions",
                ].map((item) => (

                  <div
                    key={item}
                    className="group/item flex items-center gap-3 rounded-xl p-2 transition-all duration-300 hover:translate-x-2 hover:bg-white/5"
                  >

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-orange-500 group-hover/item:text-white">
                      <Check size={15} />
                    </span>

                    <span className="text-sm font-bold text-gray-300 transition-colors group-hover/item:text-white">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                to="/blog"
                className="group mt-8 inline-flex items-center gap-2 text-xs font-black text-orange-400 transition hover:text-orange-300"
              >
                Read Our Food Stories

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK DINNER IDEAS
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
              Choose Your Mood
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              What's for dinner tonight?
            </h2>

          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Quick & Easy",
                text: "Under 30 minutes",
                icon: Clock3,
              },
              {
                title: "Comfort Food",
                text: "Warm & satisfying",
                icon: Utensils,
              },
              {
                title: "Healthy",
                text: "Fresh & balanced",
                icon: Check,
              },
              {
                title: "Special Night",
                text: "Worth celebrating",
                icon: Star,
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    setFilter(
                      item.title === "Quick & Easy"
                        ? "All"
                        : item.title === "Comfort Food"
                        ? "Comfort"
                        : item.title === "Healthy"
                        ? "Healthy"
                        : "Special"
                    )
                  }
                  className="group rounded-2xl border border-gray-200 bg-[#faf9f6] p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
                >

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={19} />
                  </span>

                  <h3 className="mt-5 text-base font-black transition-colors group-hover:text-orange-600">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-gray-400">
                    {item.text}
                  </p>

                </button>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#f7f5f0] px-4 py-24 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition duration-500 hover:rotate-6 hover:scale-110">
            <ChefHat size={25} />
          </div>

          <h2 className="mt-7 text-4xl font-black leading-tight sm:text-6xl">
            Your perfect dinner
            <span className="block text-orange-500">
              is waiting.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Find a recipe, gather your ingredients and make tonight's
            dinner something everyone remembers.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/categories"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl"
            >
              Explore Categories

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 text-xs font-black text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Dinner;