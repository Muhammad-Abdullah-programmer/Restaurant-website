import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  ChefHat,
  Clock3,
  Flame,
  Heart,
  Printer,
  Share2,
  Star,
  Users,
  Utensils,
} from "lucide-react";

import { recipes } from "../data/recipes";

function RecipeDetails() {
  const { slug } = useParams();

  const recipe = recipes.find((item) => item.slug === slug);

  const relatedRecipes = useMemo(() => {
    if (!recipe) return [];

    return recipes
      .filter((item) => item.id !== recipe.id)
      .slice(0, 3);
  }, [recipe]);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: recipe?.title || "Recipe Corner",
      text: recipe?.description || "Check out this recipe.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Recipe link copied!");
      }
    } catch {
      // User cancelled sharing.
    }
  };

  /* =====================================================
     404 / RECIPE NOT FOUND
  ===================================================== */

  if (!recipe) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#fffaf5] px-4">
        <div className="max-w-xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-50 text-orange-500">
            <ChefHat size={34} />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-orange-500">
            Recipe Not Found
          </p>

          <h1 className="mt-3 font-serif text-4xl font-black text-gray-900">
            Sorry, this recipe doesn't exist.
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            The recipe may have been removed, renamed, or the URL may be
            incorrect.
          </p>

          <Link
            to="/categories"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#21130e] px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Browse Recipes
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>
      </main>
    );
  }

  /*
    These fallback values keep the page working even if your
    recipes.js currently has only basic recipe fields.
  */

  const ingredients = recipe.ingredients || [
    "Main ingredients according to the recipe",
    "Fresh herbs and seasonings",
    "Salt and black pepper to taste",
    "Cooking oil as required",
  ];

  const instructions = recipe.instructions || [
    "Prepare and measure all ingredients before starting.",
    "Season the ingredients according to the recipe.",
    "Cook using the recommended temperature and timing.",
    "Check that everything is properly cooked before serving.",
    "Serve immediately and enjoy.",
  ];

  const prepTime = recipe.prepTime || "15 min";
  const cookTime = recipe.cookTime || recipe.time || "30 min";
  const servings = recipe.servings || "4";
  const calories = recipe.calories || "450 kcal";
  const rating = recipe.rating || "4.8";
  const type = recipe.type || "Easy";

  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#21130e]">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-stone-400">

            <Link
              to="/"
              className="transition hover:text-amber-300"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/categories"
              className="transition hover:text-amber-300"
            >
              Recipes
            </Link>

            <span>/</span>

            <span className="max-w-[220px] truncate text-stone-500">
              {recipe.title}
            </span>

          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Hero Image */}

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">

              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-[360px] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[450px] lg:h-[540px]"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-gray-900 backdrop-blur">
                  {type}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-amber-400 px-4 py-2 text-[10px] font-black text-[#21130e]">
                  <Star size={12} fill="currentColor" />
                  {rating}
                </span>

              </div>

            </div>

            {/* Hero Content */}

            <div>

              <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">
                Recipe Corner
              </span>

              <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {recipe.title}
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
                {recipe.description}
              </p>

              {/* Rating */}

              <div className="mt-6 flex flex-wrap items-center gap-4">

                <div className="flex items-center gap-1 text-amber-400">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <span className="text-sm font-black text-white">
                  {rating}
                </span>

                <span className="text-xs text-stone-500">
                  Highly Rated Recipe
                </span>

              </div>

              {/* Quick Info */}

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                <InfoBox
                  icon={Clock3}
                  label="Prep"
                  value={prepTime}
                />

                <InfoBox
                  icon={Flame}
                  label="Cook"
                  value={cookTime}
                />

                <InfoBox
                  icon={Users}
                  label="Serves"
                  value={servings}
                />

                <InfoBox
                  icon={Flame}
                  label="Calories"
                  value={calories}
                />

              </div>

              {/* Actions */}

              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={handlePrint}
                  className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-xs font-black text-[#21130e] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl"
                >
                  <Printer size={16} />
                  Print Recipe
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <Share2 size={16} />
                  Share
                </button>

                <button
                  type="button"
                  aria-label="Save recipe"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-[#21130e]"
                >
                  <Bookmark size={17} />
                </button>

                <button
                  type="button"
                  aria-label="Favorite recipe"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:bg-red-400"
                >
                  <Heart size={17} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RECIPE CONTENT
      ===================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_320px]">

          {/* =================================================
              MAIN COLUMN
          ================================================= */}

          <div>

            {/* Ingredients */}

            <section className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-9">

              <div className="flex flex-col gap-4 border-b border-stone-100 pb-6 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
                    What You Need
                  </span>

                  <h2 className="mt-2 font-serif text-3xl font-black">
                    Ingredients
                  </h2>

                </div>

                <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-orange-600">
                  {ingredients.length} Items
                </span>

              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {ingredients.map((ingredient, index) => (

                  <div
                    key={`${ingredient}-${index}`}
                    className="group flex items-start gap-3 rounded-2xl border border-stone-100 bg-stone-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
                  >

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Check size={14} />
                    </div>

                    <span className="text-sm font-medium leading-6 text-gray-700">
                      {ingredient}
                    </span>

                  </div>

                ))}

              </div>

            </section>

            {/* Instructions */}

            <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-9">

              <div className="border-b border-stone-100 pb-6">

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
                  Step By Step
                </span>

                <h2 className="mt-2 font-serif text-3xl font-black">
                  How To Make It
                </h2>

              </div>

              <div className="mt-8 space-y-7">

                {instructions.map((instruction, index) => (

                  <div
                    key={`${instruction}-${index}`}
                    className="group flex gap-5"
                  >

                    <div className="relative">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#21130e] text-sm font-black text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                        {index + 1}
                      </div>

                      {index !== instructions.length - 1 && (
                        <div className="absolute left-1/2 top-12 h-[calc(100%+1.75rem)] w-px -translate-x-1/2 bg-stone-200" />
                      )}

                    </div>

                    <div className="pb-2">

                      <h3 className="text-sm font-black text-gray-900">
                        Step {index + 1}
                      </h3>

                      <p className="mt-2 text-sm leading-8 text-gray-600">
                        {instruction}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </section>

            {/* Cooking Tips */}

            <section className="mt-8 overflow-hidden rounded-[2rem] bg-orange-500 p-7 text-white sm:p-9">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <ChefHat size={20} />
                </div>

                <div>

                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-100">
                    Chef's Note
                  </span>

                  <h2 className="mt-2 font-serif text-2xl font-black">
                    A Little Tip
                  </h2>

                  <p className="mt-3 text-sm leading-8 text-orange-50">
                    For the best results, prepare all ingredients before
                    cooking. Follow the cooking times as a guide and always
                    check your food as equipment and ingredients can vary.
                  </p>

                </div>

              </div>

            </section>

          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">

            {/* Recipe Summary */}

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Utensils size={19} />
                </div>

                <div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">
                    Recipe Overview
                  </span>

                  <h3 className="font-serif text-xl font-black">
                    Quick Details
                  </h3>

                </div>

              </div>

              <div className="mt-6 divide-y divide-stone-100">

                <SummaryRow
                  label="Recipe Type"
                  value={type}
                />

                <SummaryRow
                  label="Prep Time"
                  value={prepTime}
                />

                <SummaryRow
                  label="Cooking Time"
                  value={cookTime}
                />

                <SummaryRow
                  label="Servings"
                  value={servings}
                />

                <SummaryRow
                  label="Calories"
                  value={calories}
                />

                <SummaryRow
                  label="Rating"
                  value={`★ ${rating}`}
                />

              </div>

            </div>

            {/* Categories */}

            <div className="rounded-[2rem] bg-[#21130e] p-7 text-white">

              <ChefHat
                size={25}
                className="text-amber-400"
              />

              <h3 className="mt-5 font-serif text-2xl font-black">
                More Recipes
              </h3>

              <p className="mt-3 text-xs leading-7 text-stone-400">
                Discover more delicious recipes and cooking inspiration from
                Recipe Corner.
              </p>

              <Link
                to="/categories"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-black text-amber-400"
              >
                Browse Categories
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </aside>

        </div>

      </section>

      {/* =====================================================
          RELATED RECIPES
      ===================================================== */}

      {relatedRecipes.length > 0 && (
        <section className="border-t border-stone-200 bg-white px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
                  You May Also Like
                </span>

                <h2 className="mt-2 font-serif text-3xl font-black sm:text-4xl">
                  More Delicious Recipes
                </h2>

              </div>

              <Link
                to="/categories"
                className="group inline-flex items-center gap-2 text-xs font-black text-orange-600"
              >
                View All
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {relatedRecipes.map((item) => (

                <Link
                  key={item.id}
                  to={`/recipe/${item.slug}`}
                  className="group overflow-hidden rounded-[1.7rem] border border-stone-200 bg-[#fffaf5] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
                >

                  <div className="relative overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                    <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black text-gray-900 backdrop-blur">
                      {item.type || "Recipe"}
                    </span>

                  </div>

                  <div className="p-5">

                    <div className="flex items-center gap-1 text-amber-500">

                      <Star
                        size={13}
                        fill="currentColor"
                      />

                      <span className="text-xs font-black">
                        {item.rating || "4.8"}
                      </span>

                    </div>

                    <h3 className="mt-2 font-serif text-xl font-black transition-colors group-hover:text-orange-600">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-gray-500">
                      {item.description}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-black text-orange-600">
                      View Recipe
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function InfoBox({ icon: Icon, label, value }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/10">

      <Icon
        size={17}
        className="text-amber-400 transition-transform group-hover:scale-110"
      />

      <p className="mt-2 text-[9px] font-black uppercase tracking-widest text-stone-500">
        {label}
      </p>

      <p className="mt-1 text-xs font-black text-white">
        {value}
      </p>

    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">

      <span className="text-xs font-medium text-gray-500">
        {label}
      </span>

      <span className="text-right text-xs font-black text-gray-900">
        {value}
      </span>

    </div>
  );
}

export default RecipeDetails;