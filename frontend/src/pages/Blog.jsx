import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Search,
  Sparkles,
  User,
  Utensils,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Easy Dinner Ideas for Busy Weeknights",
    excerpt:
      "Simple and delicious dinner ideas that help you prepare satisfying meals without spending hours in the kitchen.",
    category: "Dinner",
    author: "Recipe Corner",
    date: "August 10, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 2,
    title: "A Better Breakfast: Easy Ideas to Start Your Day",
    excerpt:
      "Make your mornings easier with simple breakfast ideas that are delicious, filling, and quick to prepare.",
    category: "Breakfast",
    author: "Recipe Corner",
    date: "August 8, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Fresh Dessert Ideas Everyone Will Love",
    excerpt:
      "From creamy classics to simple baked treats, discover dessert ideas for every kind of sweet craving.",
    category: "Desserts",
    author: "Recipe Corner",
    date: "August 6, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "How to Make Everyday Lunch More Interesting",
    excerpt:
      "Turn ordinary lunch into something exciting with easy combinations, fresh ingredients, and simple techniques.",
    category: "Lunch",
    author: "Recipe Corner",
    date: "August 4, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Kitchen Tips That Make Cooking Easier",
    excerpt:
      "Useful kitchen habits and practical cooking tips that can make your everyday meal preparation smoother.",
    category: "Cooking Tips",
    author: "Recipe Corner",
    date: "August 2, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Simple Ingredients, Big Flavors",
    excerpt:
      "You do not need a complicated pantry to create delicious meals. Here are ways to get more from everyday ingredients.",
    category: "Cooking Tips",
    author: "Recipe Corner",
    date: "July 30, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    title: "Weekend Cooking: Recipes Worth Trying",
    excerpt:
      "Slow down and enjoy your weekend with comforting recipes that are perfect for sharing around the table.",
    category: "Dinner",
    author: "Recipe Corner",
    date: "July 28, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    title: "Quick Meals for Those Extra-Busy Days",
    excerpt:
      "Short on time? These quick meal ideas help you put something tasty on the table without the stress.",
    category: "Lunch",
    author: "Recipe Corner",
    date: "July 25, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Cooking Tips",
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory;

      const query = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <main className="overflow-hidden bg-white">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative isolate overflow-hidden bg-gray-950">

        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gray-950/80" />

        <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-300 backdrop-blur-md">
              <Sparkles size={14} />
              Recipe Corner Journal
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Food stories,
              <span className="block text-orange-400">
                recipes & inspiration.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              Discover cooking ideas, practical kitchen tips, delicious
              recipes, and food inspiration created for everyday home cooks.
            </p>

            {/* SEARCH */}

            <div className="mx-auto mt-8 flex max-w-xl items-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">

              <Search
                size={20}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="h-12 min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={() => document.getElementById("latest-posts")?.scrollIntoView({ behavior: "smooth" })}
                className="hidden h-12 rounded-xl bg-orange-500 px-5 text-sm font-extrabold text-white transition hover:bg-orange-600 sm:block"
              >
                Search
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          CATEGORY BAR
      ================================================== */}

      <section className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-4 scrollbar-hide sm:px-6 lg:px-8">

          <span className="mr-2 hidden shrink-0 text-xs font-black uppercase tracking-wider text-gray-400 lg:block">
            Browse:
          </span>

          {categories.map((category) => {

            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all duration-300 ${
                  active
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-gray-100 text-gray-600 hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

      </section>

      {/* ==================================================
          FEATURED ARTICLE
      ================================================== */}

      {activeCategory === "All" && !searchTerm && (
        <section className="py-14 sm:py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-8 flex items-end justify-between">

              <div>

                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                  Editor's Pick
                </span>

                <h2 className="mt-2 text-2xl font-black text-gray-950 sm:text-3xl">
                  Featured story
                </h2>

              </div>

              <Link
                to="/categories"
                className="hidden items-center gap-2 text-xs font-extrabold text-orange-500 transition hover:gap-3 sm:flex"
              >
                Explore recipes
                <ArrowRight size={15} />
              </Link>

            </div>

            <Link
              to={`/blog/${featuredPost.id}`}
              className="group grid overflow-hidden rounded-[2rem] bg-gray-950 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:grid-cols-2"
            >

              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px]">

                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-black text-white">
                  Featured
                </div>

              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">
                  {featuredPost.category}
                </span>

                <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-4xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-gray-400">

                  <span className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={15} />
                    {featuredPost.readTime}
                  </span>

                </div>

                <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-black text-gray-950 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  Read Full Story
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

              </div>

            </Link>

          </div>

        </section>
      )}

      {/* ==================================================
          LATEST POSTS
      ================================================== */}

      <section
        id="latest-posts"
        className="bg-[#fffaf5] py-16 sm:py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">

            {/* POSTS */}

            <div>

              <div className="mb-8 flex items-end justify-between">

                <div>

                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                    Fresh From The Kitchen
                  </span>

                  <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-950">
                    Latest articles
                  </h2>

                </div>

                <span className="hidden rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-500 shadow-sm sm:block">
                  {filteredPosts.length} articles
                </span>

              </div>

              {filteredPosts.length > 0 ? (

                <div className="grid gap-6 sm:grid-cols-2">

                  {filteredPosts.map((post) => (

                    <Link
                      to={`/blog/${post.id}`}
                      key={post.id}
                      className="group overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10"
                    >

                      {/* IMAGE */}

                      <div className="relative h-56 overflow-hidden">

                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-orange-600 shadow-lg">
                          {post.category}
                        </span>

                        <span className="absolute bottom-4 right-4 flex translate-y-3 items-center gap-1.5 rounded-full bg-gray-950/80 px-3 py-1.5 text-[10px] font-bold text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          Read article
                          <ArrowRight size={12} />
                        </span>

                      </div>

                      {/* CONTENT */}

                      <div className="p-6">

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">

                          <span className="flex items-center gap-1.5">
                            <CalendarDays size={13} />
                            {post.date}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3 size={13} />
                            {post.readTime}
                          </span>

                        </div>

                        <h3 className="mt-4 text-xl font-black leading-tight text-gray-950 transition-colors duration-300 group-hover:text-orange-600">
                          {post.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-500">
                          {post.excerpt}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

                          <span className="flex items-center gap-2 text-xs font-bold text-gray-500">

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                              <User size={13} />
                            </span>

                            {post.author}

                          </span>

                          <span className="flex items-center gap-1 text-xs font-black text-orange-500 transition-all group-hover:gap-2">
                            Read
                            <ChevronRight size={15} />
                          </span>

                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

              ) : (

                <div className="rounded-3xl border border-orange-100 bg-white px-6 py-16 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <Search size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-gray-950">
                    No articles found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-gray-500">
                    Try another search term or choose a different category.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All");
                    }}
                    className="mt-6 rounded-xl bg-orange-500 px-5 py-3 text-xs font-black text-white transition hover:bg-orange-600"
                  >
                    Reset Filters
                  </button>

                </div>

              )}

            </div>

            {/* SIDEBAR */}

            <aside className="space-y-6">

              {/* About Blog */}

              <div className="rounded-[1.5rem] bg-gray-950 p-6 text-white shadow-xl">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500">
                  <Utensils size={20} />
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Welcome to our kitchen.
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Recipe Corner is a place for simple recipes, helpful
                  cooking tips, and food inspiration for everyday life.
                </p>

                <Link
                  to="/about"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-black text-orange-400 transition-all hover:gap-3"
                >
                  Learn more
                  <ArrowRight size={15} />
                </Link>

              </div>

              {/* Popular Categories */}

              <div className="rounded-[1.5rem] border border-orange-100 bg-white p-6">

                <h3 className="text-lg font-black text-gray-950">
                  Popular categories
                </h3>

                <div className="mt-5 space-y-2">

                  {[
                    ["Breakfast", "/recipes/breakfast"],
                    ["Lunch", "/recipes/lunch"],
                    ["Dinner", "/recipes/dinner"],
                    ["Desserts", "/recipes/desserts"],
                  ].map(([name, path]) => (

                    <Link
                      to={path}
                      key={name}
                      className="group flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm font-bold text-gray-600 transition-all duration-300 hover:translate-x-1 hover:bg-orange-500 hover:text-white"
                    >

                      {name}

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />

                    </Link>

                  ))}

                </div>

              </div>

              {/* Newsletter */}

              <div className="rounded-[1.5rem] border border-orange-200 bg-orange-50 p-6">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sparkles size={20} />
                </div>

                <h3 className="mt-5 text-lg font-black text-gray-950">
                  Get fresh ideas.
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Get new recipes and food inspiration in your inbox.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-5 space-y-2"
                >

                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Your email address"
                    className="h-11 w-full rounded-xl border border-orange-200 bg-white px-4 text-xs outline-none transition focus:border-orange-500"
                  />

                  <button
                    type="submit"
                    className="h-11 w-full rounded-xl bg-gray-950 text-xs font-black text-white transition hover:bg-orange-500"
                  >
                    Subscribe
                  </button>

                </form>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* ==================================================
          BOTTOM CTA
      ================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-500">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 transition duration-700 group-hover:scale-150" />

          <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16">

            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Hungry for more?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-orange-50">
              Explore our complete collection of recipes and find
              something delicious to cook today.
            </p>

            <Link
              to="/categories"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-black text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
            >
              Explore All Recipes
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Blog;