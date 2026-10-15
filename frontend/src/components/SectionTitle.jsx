// --------------------------------------------------
// Section Title Component
// --------------------------------------------------

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`mx-auto flex max-w-2xl flex-col ${alignment}`}>

      {/* --------------------------------------------------
          Eyebrow
      -------------------------------------------------- */}

      {eyebrow && (
        <span className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
          {eyebrow}
        </span>
      )}

      {/* --------------------------------------------------
          Main Title
      -------------------------------------------------- */}

      <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
        {title}
      </h2>

      {/* --------------------------------------------------
          Description
      -------------------------------------------------- */}

      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;