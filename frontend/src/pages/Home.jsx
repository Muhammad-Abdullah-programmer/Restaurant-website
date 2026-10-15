import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Flame,
  Heart,
  Play,
  Search,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

const categories = [
  {
    name: "Breakfast",
    path: "/recipes/breakfast",
    count: "24 Recipes",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Lunch",
    path: "/recipes/lunch",
    count: "32 Recipes",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dinner",
    path: "/recipes/dinner",
    count: "41 Recipes",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Desserts",
    path: "/recipes/desserts",
    count: "28 Recipes",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
  },
];

const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    category: "Dinner",
    time: "30 min",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Fresh Garden Salad",
    category: "Lunch",
    time: "15 min",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Classic Pancake Stack",
    category: "Breakfast",
    time: "20 min",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Chocolate Dessert",
    category: "Desserts",
    time: "35 min",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Healthy Avocado Toast",
    category: "Breakfast",
    time: "10 min",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Homemade Pizza",
    category: "Dinner",
    time: "45 min",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85",
  },
];

const features = [
  {
    icon: Utensils,
    title: "Easy Recipes",
    text: "Simple recipes made for everyday home cooking.",
  },
  {
    icon: Flame,
    title: "Fresh Ideas",
    text: "Discover new flavors and creative meal inspiration.",
  },
  {
    icon: Clock3,
    title: "Quick Meals",
    text: "Delicious meals without spending all day cooking.",
  },
];

function Home() {
  return (
    <main className="overflow-hidden bg-white">

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-gray-950">

        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=2200&q=90"
          alt="Fresh food ingredients"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gray-950/70" />

        <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

            {/* HERO CONTENT */}

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-300 backdrop-blur-xl">

                <Sparkles size={14} />

                Welcome to Recipe Corner

              </div>

              {/* HERO HEADING */}

              <h1 className="mt-6 text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">

                Cook something

                <span className="block text-orange-400">
                  unforgettable.
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">

                Discover delicious recipes, smart cooking tips, and inspiring
                food ideas created to make everyday cooking easier and more
                enjoyable.

              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/categories"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 hover:shadow-2xl"
                >

                  Explore Recipes

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

                <Link
                  to="/blog"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-950"
                >

                  Read Our Blog

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </Link>

              </div>

              {/* HERO STATS */}

              <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

                <div>

                  <strong className="text-2xl font-black text-white">
                    125+
                  </strong>

                  <p className="mt-1 text-xs text-gray-400">
                    Recipes
                  </p>

                </div>

                <div>

                  <strong className="text-2xl font-black text-white">
                    50K+
                  </strong>

                  <p className="mt-1 text-xs text-gray-400">
                    Food Lovers
                  </p>

                </div>

                <div>

                  <strong className="text-2xl font-black text-white">
                    4.9
                  </strong>

                  <p className="mt-1 text-xs text-gray-400">
                    Average Rating
                  </p>

                </div>

              </div>

            </div>

            {/* HERO FEATURE CARD */}

            <div className="hidden lg:block [perspective:1200px]">

              <div className="group relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out [transform-style:preserve-3d] hover:-translate-y-8 hover:rotateX-3 hover:scale-[1.02] hover:shadow-[0_35px_70px_rgba(0,0,0,0.5)]">

                <div className="relative h-[480px] overflow-hidden rounded-[1.5rem]">

                  <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=90"
                    alt="Featured recipe"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-orange-600 shadow-xl">

                    Recipe of the Week

                  </div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <div className="flex items-center gap-1 text-orange-400">

                      {[1, 2, 3, 4, 5].map((item) => (

                        <Star
                          key={item}
                          size={14}
                          fill="currentColor"
                        />

                      ))}

                      <span className="ml-1 text-xs font-bold text-white">
                        4.9
                      </span>

                    </div>

                    <h2 className="mt-3 text-3xl font-black text-white">
                      Fresh & Delicious
                    </h2>

                    <p className="mt-2 text-sm text-gray-300">
                      Simple ingredients. Big flavor.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          FEATURES
      ================================================== */}

      <section className="relative z-10 -mt-6 px-4 sm:-mt-8 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[1.5rem] bg-white p-6 shadow-xl shadow-gray-900/10 transition-all duration-300 hover:-translate-y-2 hover:bg-orange-500 hover:text-white sm:p-7"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:rotate-6 group-hover:bg-white group-hover:text-orange-500">
                    <Icon size={21} />
                  </div>

                  <div>

                    <h3 className="font-black text-gray-950 transition group-hover:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 transition group-hover:text-orange-50">
                      {feature.text}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* ==================================================
          CATEGORIES
      ================================================== */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                Find your favorite
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Explore by category
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                From quick breakfasts to indulgent desserts, find exactly what
                you want to cook today.
              </p>

            </div>

            <Link
              to="/categories"
              className="group inline-flex items-center gap-2 text-xs font-black text-orange-500 transition-all hover:gap-3"
            >
              View all categories
              <ArrowRight size={15} />
            </Link>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category) => (

              <Link
                to={category.path}
                key={category.name}
                className="group relative h-80 overflow-hidden rounded-[1.5rem] shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition duration-500 group-hover:from-orange-950/80" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <span className="text-xs font-bold text-orange-300">
                    {category.count}
                  </span>

                  <h3 className="mt-1 text-2xl font-black text-white">
                    {category.name}
                  </h3>

                  <div className="mt-4 flex translate-y-3 items-center gap-2 text-xs font-black text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore recipes

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* ==================================================
          POPULAR RECIPES
      ================================================== */}

      <section className="bg-[#fffaf5] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                Most loved
              </span>

              <h2 className="mt-2 text-3xl font-black text-gray-950 sm:text-4xl">
                Popular recipes
              </h2>

            </div>

            <Link
              to="/categories"
              className="group inline-flex items-center gap-2 text-xs font-black text-orange-500 hover:gap-3"
            >
              See all recipes
              <ArrowRight size={15} />
            </Link>

          </div>

          {/* POPULAR RECIPE CARDS - NOT CLICKABLE */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {recipes.map((recipe) => (

              <article
                key={recipe.id}
                className="group overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.015] hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >

                {/* IMAGE */}

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-orange-600 shadow-lg">
                    {recipe.category}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`Save ${recipe.title}`}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-600 opacity-0 shadow-xl transition-all duration-300 hover:bg-orange-500 hover:text-white group-hover:opacity-100"
                  >
                    <Heart size={17} />
                  </button>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-gray-950/75 px-3 py-1.5 text-[10px] font-bold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                    <Clock3 size={13} />
                    {recipe.time}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-6">

                  <div className="flex items-center gap-1 text-orange-500">

                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={13}
                        fill="currentColor"
                      />
                    ))}

                    <span className="ml-1 text-[11px] font-black text-gray-500">
                      {recipe.rating}
                    </span>

                  </div>

                  <h3 className="mt-3 text-xl font-black text-gray-950 transition-colors duration-300 group-hover:text-orange-600">
                    {recipe.title}
                  </h3>

                  <div className="mt-5 border-t border-gray-100 pt-5">

                    <span className="text-xs font-bold text-gray-400">
                      Easy to make
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ==================================================
          SEARCH / DISCOVER CTA
      ================================================== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gray-950">

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative grid items-center gap-10 px-6 py-14 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-20">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black text-orange-400">
                <Search size={14} />
                Find your next favorite
              </div>

              <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">
                What are you craving today?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
                Search our growing collection of recipes and discover something
                delicious for your next meal.
              </p>

            </div>

            <div className="lg:justify-self-end">

              <Link
                to="/search"
                className="group inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                Search Recipes

                <Search
                  size={18}
                  className="transition-transform group-hover:scale-110"
                />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          BLOG CTA
      ================================================== */}

      <section className="pb-20 sm:pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="group relative overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=85"
              alt="Cooking in a kitchen"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gray-950/75" />

            <div className="relative px-6 py-20 text-center sm:px-12">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl">
                <Play size={22} fill="currentColor" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black text-white sm:text-5xl">
                More than recipes.

                <span className="block text-orange-400">
                  A whole food experience.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300">
                Read our latest cooking stories, kitchen guides, food tips, and
                inspiration on the Recipe Corner blog.
              </p>

              <Link
                to="/blog"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-xs font-black text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500 hover:text-white hover:shadow-2xl"
              >
                Explore Our Blog

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;