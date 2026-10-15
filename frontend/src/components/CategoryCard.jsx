import { Link } from "react-router-dom";
import { ArrowRight, Utensils } from "lucide-react";

// --------------------------------------------------
// Category Card Component
// --------------------------------------------------

function CategoryCard({ category }) {
  // Safety check
  if (!category) {
    return null;
  }

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* --------------------------------------------------
          Category Image
      -------------------------------------------------- */}

      <Link
        to={category.path}
        className="relative block h-64 overflow-hidden sm:h-72"
      >
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* --------------------------------------------------
            Content
        -------------------------------------------------- */}

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

          {/* Icon */}

          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
            <Utensils size={18} />
          </div>

          {/* Category Name */}

          <h3 className="text-2xl font-extrabold text-white">
            {category.name}
          </h3>

          {/* Description */}

          {category.description && (
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-200">
              {category.description}
            </p>
          )}

          {/* Recipe Count + Arrow */}

          <div className="mt-4 flex items-center justify-between">

            <span className="text-xs font-semibold text-gray-200">
              {category.count || 0} Recipes
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-900 transition group-hover:bg-orange-500 group-hover:text-white">
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>

          </div>

        </div>

      </Link>

    </article>
  );
}

export default CategoryCard;