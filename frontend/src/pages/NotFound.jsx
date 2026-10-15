import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="text-center">

        <p className="text-7xl font-black text-orange-500">
          404
        </p>

        <h1 className="mt-4 text-3xl font-black text-gray-950">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          Sorry, the page you are looking  for does not exist.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}

export default NotFound;