import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Star } from "lucide-react";

// --------------------------------------------------
// Hero Component
// --------------------------------------------------

function Hero() {
  return (
    <section className="relative overflow-hidden bg-orange-50">

      {/* --------------------------------------------------
          Decorative Background
      -------------------------------------------------- */}

      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />

      {/* --------------------------------------------------
          Hero Container
      -------------------------------------------------- */}

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* --------------------------------------------------
              Left Content
          -------------------------------------------------- */}

          <div className="max-w-2xl">

            {/* Small Badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 shadow-sm">
              <Star
                size={15}
                className="fill-orange-500 text-orange-500"
              />

              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 sm:text-sm">
                Delicious Recipes Made Simple
              </span>
            </div>

            {/* Heading */}

            <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">

              Cook Something
              <span className="block text-orange-500">
                Amazing Today.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Discover easy, delicious, and homemade recipes for every
              occasion. From quick breakfasts to satisfying dinners and
              irresistible desserts, find your next favorite recipe here.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 hover:shadow-xl"
              >
                Explore Recipes
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 transition hover:border-orange-300 hover:text-orange-500"
              >
                <PlayCircle size={18} />
                Read Our Blog
              </Link>

            </div>

            {/* Trust Text */}

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">

              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                  ✓
                </span>
                Easy to Follow
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                  ✓
                </span>
                Homemade Ideas
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                  ✓
                </span>
                Fresh Recipes
              </div>

            </div>

          </div>

          {/* --------------------------------------------------
              Right Image
          -------------------------------------------------- */}

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            {/* Main Image */}

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
                alt="Fresh homemade food served on a table"
                className="h-[360px] w-full object-cover sm:h-[450px] lg:h-[520px]"
                fetchPriority="high"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>

            {/* --------------------------------------------------
                Floating Recipe Card
            -------------------------------------------------- */}

            <div className="absolute -bottom-5 left-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-bottom-6 sm:left-6 sm:p-5">

              <div className="flex items-center gap-3">

                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=200&q=80"
                  alt="Fresh homemade pizza"
                  className="h-14 w-14 rounded-xl object-cover"
                  loading="lazy"
                />

                <div>
                  <p className="text-xs font-semibold text-orange-500">
                    Today's Pick
                  </p>

                  <h3 className="mt-1 text-sm font-bold text-gray-900">
                    Homemade Pizza
                  </h3>

                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    4.9 Rating
                  </div>
                </div>

              </div>

            </div>

            {/* --------------------------------------------------
                Floating Time Badge
            -------------------------------------------------- */}

            <div className="absolute right-3 top-4 rounded-xl bg-white px-4 py-3 shadow-lg sm:right-5 sm:top-6">

              <p className="text-xs font-medium text-gray-500">
                Quick Recipe
              </p>

              <p className="mt-1 text-sm font-bold text-gray-900">
                Ready in 30 min
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;