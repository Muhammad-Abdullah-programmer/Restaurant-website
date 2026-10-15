import { Clock3 } from "lucide-react";

// --------------------------------------------------
// Recipe Card Component
// --------------------------------------------------

function RecipeCard({ recipe }) {
  // Safety check
  if (!recipe) {
    return null;
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* --------------------------------------------------
          Recipe Image
      -------------------------------------------------- */}

      <div className="relative overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
        />

        {/* Image Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Category Badge */}

        {recipe.category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-orange-600 shadow-sm backdrop-blur-sm">
            {recipe.category}
          </span>
        )}

        {/* Difficulty Badge */}

        {recipe.difficulty && (
          <span className="absolute bottom-4 right-4 rounded-full bg-gray-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {recipe.difficulty}
          </span>
        )}

      </div>

      {/* --------------------------------------------------
          Recipe Content
      -------------------------------------------------- */}

      <div className="p-5 sm:p-6">

        {/* Recipe Title */}

        <h3 className="line-clamp-2 text-xl font-extrabold leading-snug text-gray-950 transition group-hover:text-orange-500">
          {recipe.title}
        </h3>

        {/* Description */}

        {recipe.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
            {recipe.description}
          </p>
        )}

        {/* --------------------------------------------------
            Recipe Meta
        -------------------------------------------------- */}

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Clock3
              size={17}
              className="text-orange-500"
            />

            <span>
              {recipe.time ||
                recipe.cookTime ||
                "30 mins"}
            </span>
          </div>

        </div>

      </div>

    </article>
  );
}

export default RecipeCard;