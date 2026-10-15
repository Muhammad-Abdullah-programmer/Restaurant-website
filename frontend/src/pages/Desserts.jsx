import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CakeSlice,
  Clock3,
  Heart,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

const desserts = [
  {
    id: 1,
    title: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    category: "Chocolate",
    time: "25 min",
    rating: "4.9",
    calories: "420 kcal",
    description:
      "Rich chocolate cake with a warm, gooey center and an irresistible chocolate finish.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Strawberry Cheesecake",
    slug: "strawberry-cheesecake",
    category: "Cakes",
    time: "45 min",
    rating: "4.9",
    calories: "390 kcal",
    description:
      "Creamy cheesecake topped with fresh strawberries and a beautiful berry glaze.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Classic Tiramisu",
    slug: "classic-tiramisu",
    category: "Classic",
    time: "35 min",
    rating: "4.8",
    calories: "360 kcal",
    description:
      "Coffee-soaked biscuits layered with creamy mascarpone and finished with cocoa.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Blueberry Pancakes",
    slug: "blueberry-pancakes",
    category: "Quick",
    time: "20 min",
    rating: "4.8",
    calories: "340 kcal",
    description:
      "Fluffy golden pancakes packed with blueberries and served with sweet maple syrup.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "French Macarons",
    slug: "french-macarons",
    category: "Elegant",
    time: "50 min",
    rating: "4.7",
    calories: "280 kcal",
    description:
      "Delicate almond cookies with a smooth filling, perfect for special occasions.",
    image:
      "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Chocolate Brownies",
    slug: "chocolate-brownies",
    category: "Chocolate",
    time: "30 min",
    rating: "4.9",
    calories: "450 kcal",
    description:
      "Fudgy chocolate brownies with a rich texture and deep chocolate flavor.",
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Vanilla Panna Cotta",
    slug: "vanilla-panna-cotta",
    category: "Classic",
    time: "30 min",
    rating: "4.7",
    calories: "310 kcal",
    description:
      "Silky smooth Italian panna cotta infused with vanilla and fresh berries.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Apple Cinnamon Tart",
    slug: "apple-cinnamon-tart",
    category: "Baked",
    time: "55 min",
    rating: "4.8",
    calories: "370 kcal",
    description:
      "Buttery pastry topped with thinly sliced apples, cinnamon and caramelized sugar.",
    image:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "Chocolate Donuts",
    slug: "chocolate-donuts",
    category: "Chocolate",
    time: "30 min",
    rating: "4.8",
    calories: "390 kcal",
    description:
      "Soft chocolate donuts covered with a glossy chocolate topping.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 10,
    title: "Fresh Berry Dessert",
    slug: "fresh-berry-dessert",
    category: "Quick",
    time: "15 min",
    rating: "4.7",
    calories: "250 kcal",
    description:
      "Fresh seasonal berries combined with creamy layers for a light sweet treat.",
    image:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 11,
    title: "Caramel Dessert",
    slug: "caramel-dessert",
    category: "Classic",
    time: "35 min",
    rating: "4.8",
    calories: "410 kcal",
    description:
      "A creamy caramel dessert with a smooth texture and rich buttery flavor.",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 12,
    title: "Chocolate Mousse",
    slug: "chocolate-mousse",
    category: "Chocolate",
    time: "20 min",
    rating: "4.9",
    calories: "320 kcal",
    description:
      "Light and creamy chocolate mousse that makes an elegant ending to any meal.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "All",
  "Chocolate",
  "Cakes",
  "Classic",
  "Quick",
  "Elegant",
  "Baked",
];

function Desserts() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const filteredDesserts = useMemo(() => {
    return desserts.filter((dessert) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        dessert.title.toLowerCase().includes(searchText) ||
        dessert.description.toLowerCase().includes(searchText);

      const matchesCategory =
        activeCategory === "All" ||
        dessert.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#24140f]">

        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=90"
          alt="Delicious chocolate dessert"
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-[1500ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#24140f] via-[#24140f]/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#24140f] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-[#24140f]">
                <CakeSlice size={20} />
              </span>

              <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                Recipe Corner Desserts
              </span>

            </div>

            <h1 className="font-serif text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              Sweet
              <span className="block italic text-amber-300">
                Moments.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
              Discover homemade cakes, chocolate treats, creamy desserts,
              elegant pastries and easy sweet recipes for every occasion.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#dessert-list"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-xs font-black text-[#24140f] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-2xl"
              >
                Explore Desserts

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/categories"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs font-black text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                View Categories
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-7">

              <div>
                <p className="text-2xl font-black text-white">50+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Dessert Recipes
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">4.9</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Average Rating
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">30 min</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Average Time
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-600">
                Our Sweet Collection
              </span>

              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                Dessert makes every day a little better.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-gray-500">
                Whether you love chocolate, cheesecake, fresh fruit or
                classic baked treats, our dessert collection has something
                delicious waiting for you.
              </p>

            </div>

            <div className="grid grid-cols-3 gap-3">

              {[
                ["12+", "Recipes"],
                ["7", "Categories"],
                ["4.8", "Rating"],
              ].map(([number, label]) => (

                <div
                  key={label}
                  className="group rounded-3xl border border-stone-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:bg-amber-50 hover:shadow-xl"
                >

                  <p className="text-2xl font-black text-amber-600 transition-transform duration-300 group-hover:scale-110">
                    {number}
                  </p>

                  <p className="mt-2 text-[10px] font-black uppercase tracking-wider text-gray-400">
                    {label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}

      <section
        id="dessert-list"
        className="scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-600">
                Dessert Library
              </span>

              <h2 className="mt-3 font-serif text-4xl font-black">
                Find your favorite sweet
              </h2>

            </div>

            <div className="flex w-full items-center rounded-2xl border border-stone-200 bg-white p-2 shadow-sm transition-all focus-within:border-amber-400 focus-within:shadow-lg lg:w-[360px]">

              <Search
                size={18}
                className="ml-2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search desserts..."
                className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
              />

            </div>

          </div>

          {/* Categories */}

          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-black transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#24140f] text-white shadow-lg"
                    : "border border-stone-200 bg-white text-gray-500 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* =================================================
              CARDS
          ================================================= */}

          {filteredDesserts.length > 0 ? (

            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredDesserts.map((dessert) => (

                <article
                  key={dessert.id}
                  className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-900/10"
                >

                  {/* IMAGE */}

                  <div className="relative h-64 overflow-hidden bg-stone-100">

                    <img
                      src={dessert.image}
                      alt={dessert.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* Category */}

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-gray-800 shadow-lg">
                      {dessert.category}
                    </span>

                    {/* Favorite */}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(dessert.id)}
                      aria-label={`Favorite ${dessert.title}`}
                      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                        favorites.includes(dessert.id)
                          ? "bg-amber-500 text-white"
                          : "bg-white/95 text-gray-700 hover:bg-amber-500 hover:text-white"
                      }`}
                    >
                      <Heart
                        size={16}
                        fill={
                          favorites.includes(dessert.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                  </div>

                  {/* CONTENT */}

                  <div className="p-5">

                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">

                      <span className="flex items-center gap-1">
                        <Clock3 size={13} />
                        {dessert.time}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-300" />

                      <span className="flex items-center gap-1">
                        <Star
                          size={13}
                          className="text-amber-500"
                          fill="currentColor"
                        />
                        {dessert.rating}
                      </span>

                    </div>

                    <h3 className="mt-3 font-serif text-xl font-black leading-tight transition-colors duration-300 group-hover:text-amber-600">
                      {dessert.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-xs leading-6 text-gray-500">
                      {dessert.description}
                    </p>

                    <div className="mt-5 border-t border-stone-100 pt-4">

                      <span className="text-[10px] font-bold text-gray-400">
                        {dessert.calories}
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="mt-10 rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Search size={25} />
              </div>

              <h3 className="mt-5 text-xl font-black">
                No desserts found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or select another category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-full bg-[#24140f] px-6 py-3 text-xs font-black text-white transition hover:bg-amber-500 hover:text-[#24140f]"
              >
                Reset Search
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          FEATURE SECTION
      ===================================================== */}

      <section className="bg-[#24140f] py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="group relative overflow-hidden rounded-[2rem]">

              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=90"
                alt="Beautiful dessert collection"
                loading="lazy"
                className="h-[450px] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur-md">

                <p className="text-xs font-black uppercase tracking-widest text-amber-600">
                  Sweet Tip
                </p>

                <p className="mt-2 text-sm font-bold leading-6 text-gray-800">
                  Presentation matters. Add fresh berries, chocolate curls
                  or a light dusting of powdered sugar before serving.
                </p>

              </div>

            </div>

            <div>

              <div className="flex items-center gap-3">

                <Sparkles
                  size={18}
                  className="text-amber-300"
                />

                <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                  Dessert Inspiration
                </span>

              </div>

              <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-white sm:text-6xl">
                A little sweetness
                <span className="block italic text-amber-300">
                  goes a long way.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-stone-400">
                From quick weeknight treats to impressive celebration
                desserts, find recipes that make every table feel special.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                {[
                  ["Easy", "Beginner friendly"],
                  ["Fresh", "Simple ingredients"],
                  ["Beautiful", "Great presentation"],
                  ["Delicious", "Family favorites"],
                ].map(([title, text]) => (

                  <div
                    key={title}
                    className="group rounded-2xl border border-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/5"
                  >

                    <p className="font-black text-white transition-colors group-hover:text-amber-300">
                      {title}
                    </p>

                    <p className="mt-1 text-[11px] text-stone-500">
                      {text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-4 py-24 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-amber-400 px-6 py-16 text-center shadow-2xl shadow-amber-900/10 sm:px-12">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#24140f] text-amber-300">
            <CakeSlice size={25} />
          </div>

          <h2 className="mt-7 font-serif text-4xl font-black leading-tight text-[#24140f] sm:text-6xl">
            Ready for something delicious?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#5b3427]">
            Explore our complete recipe collection and discover your next
            favorite meal.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/categories"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#24140f] px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#24140f]"
            >
              Browse Categories

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-full border border-[#24140f]/20 px-7 py-4 text-xs font-black text-[#24140f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#24140f] hover:text-white"
            >
              Read Our Blog
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Desserts;