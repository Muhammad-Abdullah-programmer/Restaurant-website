import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  Heart,
  Share2,
  Sparkles,
  User,
} from "lucide-react";

// =====================================================
// Blog Details
// =====================================================

const blogPosts = [
  {
    slug: "easy-breakfast-ideas",
    title: "10 Easy Breakfast Ideas for Busy Mornings",
    category: "Breakfast",
    author: "Recipe Corner",
    date: "August 10, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=90",
    excerpt:
      "Start your day with simple, delicious breakfast ideas that are quick to prepare and full of flavor.",
    content: [
      "Busy mornings do not mean you have to skip a delicious breakfast. With a few simple ingredients and a little preparation, you can create satisfying meals in minutes.",
      "From creamy eggs and crispy toast to fresh fruit bowls and comforting pancakes, breakfast can be both simple and exciting.",
      "The key is to keep a few versatile ingredients ready in your kitchen. Eggs, bread, yogurt, oats, fresh fruit, and seasonal vegetables can become the foundation of countless breakfast combinations.",
    ],
  },

  {
    slug: "perfect-home-cooking",
    title: "Simple Secrets for Better Home Cooking",
    category: "Cooking Tips",
    author: "Recipe Corner",
    date: "August 7, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=90",
    excerpt:
      "Learn practical kitchen techniques that can instantly make your everyday cooking more enjoyable.",
    content: [
      "Great home cooking is not always about complicated recipes. Small techniques can make a huge difference in the final taste and texture of your food.",
      "Always taste your food while cooking. Seasoning gradually allows you to build flavor instead of adding too much salt or spice at once.",
      "Another important habit is preparing your ingredients before turning on the stove. Having everything measured and ready makes cooking smoother and more enjoyable.",
    ],
  },

  {
    slug: "healthy-dinner-recipes",
    title: "Healthy Dinner Recipes Everyone Will Love",
    category: "Dinner",
    author: "Recipe Corner",
    date: "August 4, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90",
    excerpt:
      "Discover balanced dinner ideas packed with fresh ingredients and comforting flavors.",
    content: [
      "A healthy dinner can still be delicious, filling, and comforting. The secret is balancing vegetables, protein, healthy fats, and satisfying carbohydrates.",
      "Roasted vegetables, grilled chicken, rice bowls, colorful salads, and homemade sauces can create a dinner that feels special without requiring hours in the kitchen.",
      "Try experimenting with herbs, spices, citrus, and fresh ingredients to keep your meals interesting throughout the week.",
    ],
  },
];

// =====================================================
// Component
// =====================================================

function BlogDetails() {
  const { slug } = useParams();

  const post =
    blogPosts.find((item) => item.slug === slug) || blogPosts[0];

  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch {
        // User closed share menu
      }
    } else {
      handleCopy();
    }
  };

  return (
    <main className="min-h-screen bg-[#fffaf6] text-gray-900">

      {/* =================================================
          Hero
      ================================================= */}

      <section className="relative overflow-hidden bg-[#1b100b]">

        <div className="absolute inset-0">

          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1b100b] via-transparent to-transparent" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">

          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-400">

            <Link
              to="/"
              className="transition hover:text-orange-400"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/blog"
              className="transition hover:text-orange-400"
            >
              Blog
            </Link>

            <span>/</span>

            <span className="text-orange-400">
              {post.category}
            </span>

          </div>

          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-orange-300">

              <Sparkles size={14} />

              {post.category}

            </div>

            <h1 className="font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
              {post.excerpt}
            </p>

            {/* Meta */}

            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-gray-300">

              <div className="flex items-center gap-2">
                <User size={15} className="text-orange-400" />
                {post.author}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays
                  size={15}
                  className="text-orange-400"
                />
                {post.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3
                  size={15}
                  className="text-orange-400"
                />
                {post.readTime}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          Article Area
      ================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* =================================================
              Article
          ================================================= */}

          <article className="min-w-0">

            {/* Featured Image */}

            <div className="group overflow-hidden rounded-[2rem] bg-gray-100 shadow-xl">

              <img
                src={post.image}
                alt={post.title}
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px] lg:h-[520px]"
              />

            </div>

            {/* Actions */}

            <div className="my-7 flex flex-wrap items-center justify-between gap-4 border-y border-gray-200 py-4">

              <div className="flex flex-wrap gap-2">

                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all ${
                    liked
                      ? "border-red-200 bg-red-50 text-red-500"
                      : "border-gray-200 bg-white text-gray-600 hover:border-red-200 hover:text-red-500"
                  }`}
                >
                  <Heart
                    size={16}
                    fill={liked ? "currentColor" : "none"}
                  />

                  {liked ? "Liked" : "Like"}
                </button>

                <button
                  type="button"
                  onClick={() => setSaved(!saved)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all ${
                    saved
                      ? "border-orange-200 bg-orange-50 text-orange-500"
                      : "border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:text-orange-500"
                  }`}
                >
                  <Bookmark
                    size={16}
                    fill={saved ? "currentColor" : "none"}
                  />

                  {saved ? "Saved" : "Save"}
                </button>

              </div>

              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 transition hover:border-orange-300 hover:text-orange-500"
                >
                  <Share2 size={16} />
                  Share
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 transition hover:border-orange-300 hover:text-orange-500"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy Link
                    </>
                  )}
                </button>

              </div>

            </div>

            {/* Article Content */}

            <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-9 lg:p-12">

              <div className="mb-8 border-l-4 border-orange-500 bg-orange-50 p-5 sm:p-6">

                <p className="font-serif text-lg font-bold leading-8 text-gray-800">
                  {post.excerpt}
                </p>

              </div>

              <div className="space-y-7">

                {post.content.map((paragraph, index) => (

                  <p
                    key={index}
                    className="text-[15px] leading-8 text-gray-600 sm:text-base"
                  >
                    {paragraph}
                  </p>

                ))}

              </div>

              {/* Extra Content */}

              <div className="my-10 rounded-2xl border border-orange-100 bg-orange-50 p-6">

                <h2 className="font-serif text-2xl font-black text-gray-900">
                  Kitchen Tip
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Keep your ingredients organized before you start cooking.
                  This simple habit saves time and helps you enjoy the process
                  instead of rushing through the recipe.
                </p>

              </div>

              <h2 className="font-serif text-2xl font-black text-gray-900 sm:text-3xl">
                Make It Your Own
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-gray-600 sm:text-base">
                Recipes are a starting point. Feel free to adjust herbs,
                spices, vegetables, and toppings according to your personal
                taste. Cooking becomes more enjoyable when you make each dish
                your own.
              </p>

              {/* Tags */}

              <div className="mt-10 flex flex-wrap gap-2">

                {[
                  "Recipes",
                  "Cooking",
                  "Food",
                  "Kitchen Tips",
                  post.category,
                ].map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-600 transition hover:bg-orange-500 hover:text-white"
                  >
                    #{tag.replace(/\s+/g, "")}
                  </span>

                ))}

              </div>

            </div>

            {/* Back to Blog */}

            <div className="mt-8">

              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all hover:-translate-x-1 hover:border-orange-300 hover:text-orange-500"
              >

                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-1"
                />

                Back to Blog

              </Link>

            </div>

          </article>

          {/* =================================================
              Sidebar
          ================================================= */}

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">

            {/* Author Card */}

            <div className="rounded-[2rem] bg-[#1b100b] p-7 text-white shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">

                <UtensilsIcon />

              </div>

              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">
                About The Author
              </p>

              <h3 className="mt-2 font-serif text-2xl font-black">
                Recipe Corner
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                We share practical recipes, helpful cooking tips, and food
                inspiration designed for everyday home cooks.
              </p>

              <Link
                to="/about"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-black text-orange-400"
              >
                Learn More

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

            {/* Categories */}

            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="font-serif text-xl font-black text-gray-900">
                Explore Recipes
              </h3>

              <div className="mt-5 space-y-2">

                {[
                  ["Breakfast", "/recipes/breakfast"],
                  ["Lunch", "/recipes/lunch"],
                  ["Dinner", "/recipes/dinner"],
                  ["Desserts", "/recipes/desserts"],
                ].map(([name, path]) => (

                  <Link
                    key={path}
                    to={path}
                    className="group flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm font-bold text-gray-600 transition-all hover:bg-orange-500 hover:text-white"
                  >

                    {name}

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </Link>

                ))}

              </div>

            </div>

            {/* Newsletter */}

            <div className="rounded-[2rem] border border-orange-100 bg-orange-50 p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
                <Sparkles size={18} />
              </div>

              <h3 className="mt-5 font-serif text-xl font-black text-gray-900">
                More Food Inspiration
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explore more recipes and discover something delicious for your
                next meal.
              </p>

              <Link
                to="/categories"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-xs font-black text-white transition hover:bg-orange-500"
              >
                Browse Categories
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}

// =====================================================
// Small Icon
// =====================================================

function UtensilsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7a4 4 0 0 0 4 4h1V2" />
      <path d="M7 2v20" />
      <path d="M3 6h5" />
      <path d="M16 2v20" />
      <path d="M16 2c3 0 5 2 5 5v2h-5" />
    </svg>
  );
}

export default BlogDetails;