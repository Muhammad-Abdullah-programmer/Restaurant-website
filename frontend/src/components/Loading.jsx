import { LoaderCircle } from "lucide-react";

// --------------------------------------------------
// Loading Component
// --------------------------------------------------

function Loading({
  text = "Loading...",
  fullScreen = false,
}) {
  return (
    <div
      className={`flex w-full items-center justify-center ${
        fullScreen
          ? "min-h-[60vh]"
          : "min-h-[220px]"
      }`}
      role="status"
      aria-live="polite"
    >

      {/* --------------------------------------------------
          Loading Content
      -------------------------------------------------- */}

      <div className="flex flex-col items-center justify-center text-center">

        {/* Spinner */}

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
          <LoaderCircle
            size={25}
            className="animate-spin"
          />
        </div>

        {/* Loading Text */}

        <p className="mt-4 text-sm font-semibold text-gray-600">
          {text}
        </p>

      </div>

    </div>
  );
}

export default Loading;