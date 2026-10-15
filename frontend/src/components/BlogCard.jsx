import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays } from "lucide-react";

// --------------------------------------------------
// Blog Card Component
// --------------------------------------------------

function BlogCard({ blog }) {
  // Safety check
  if (!blog) {
    return null;
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* --------------------------------------------------
          Blog Image
      -------------------------------------------------- */}

      <Link
        to={`/blog/${blog.slug}`}
        className="relative block overflow-hidden"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
        />

        {/* Image Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Category */}

        {blog.category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-orange-600 shadow-sm backdrop-blur-sm">
            {blog.category}
          </span>
        )}
      </Link>

      {/* --------------------------------------------------
          Blog Content
      -------------------------------------------------- */}

      <div className="p-5 sm:p-6">

        {/* Date */}

        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <CalendarDays
            size={15}
            className="text-orange-500"
          />

          <span>
            {blog.date || "August 12, 2026"}
          </span>
        </div>

        {/* Title */}

        <Link to={`/blog/${blog.slug}`}>
          <h3 className="mt-3 line-clamp-2 text-xl font-extrabold leading-snug text-gray-950 transition group-hover:text-orange-500">
            {blog.title}
          </h3>
        </Link>

        {/* Excerpt */}

        {blog.excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {blog.excerpt}
          </p>
        )}

        {/* Read More */}

        <div className="mt-5 border-t border-gray-100 pt-4">

          <Link
            to={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 transition hover:text-orange-600"
          >
            Read Article

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>

      </div>

    </article>
  );
}

export default BlogCard;