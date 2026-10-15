import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileWarning,
  Info,
  ShieldCheck,
} from "lucide-react";

function Disclaimer() {
  const sections = [
    {
      title: "General Information",
      text: "The information published on Recipe Corner is provided for general informational and educational purposes. We aim to keep our recipes, cooking tips, ingredient information, and food-related content useful and accurate, but we do not guarantee that every piece of information will always be complete, current, or error-free.",
    },
    {
      title: "Recipe Information",
      text: "Recipes on Recipe Corner are provided as guidance and inspiration. Cooking results can vary depending on ingredients, equipment, measurements, cooking temperatures, preparation methods, and individual preferences. Always use your own judgment when preparing and serving food.",
    },
    {
      title: "Nutritional Information",
      text: "Any nutritional information, including calories, protein, carbohydrates, fats, or serving estimates, is provided for general informational purposes only. Actual nutritional values may vary depending on ingredients, brands, quantities, preparation methods, and portion sizes.",
    },
    {
      title: "Food Allergies & Dietary Requirements",
      text: "Recipe Corner does not guarantee that recipes are suitable for people with allergies, intolerances, or specific dietary requirements. Always check ingredient labels and verify ingredients yourself. If you have a serious food allergy or dietary restriction, consult an appropriate qualified professional before consuming any recipe.",
    },
    {
      title: "Health & Wellness",
      text: "Food and wellness information published on this website is not intended to replace professional medical, nutritional, or healthcare advice. Do not rely on website content as a substitute for advice from a qualified healthcare professional.",
    },
    {
      title: "External Links",
      text: "Our website may occasionally contain links to external websites or third-party resources. These websites are not controlled by Recipe Corner, and we are not responsible for their content, privacy practices, availability, or policies.",
    },
    {
      title: "Advertising & Affiliates",
      text: "Recipe Corner may display advertisements or participate in affiliate programs in the future. If affiliate links are used, we may receive a commission when a visitor makes a qualifying purchase through an applicable link, without necessarily increasing the visitor's cost.",
    },
    {
      title: "Changes to This Disclaimer",
      text: "We may update or modify this Disclaimer when necessary to reflect changes to our website, content, services, or applicable requirements. Any updated version will be published on this page.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#21130e]">

        {/* Background Decorations */}

        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute right-[25%] top-1/2 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="max-w-3xl">

            {/* Breadcrumb */}

            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs font-bold text-stone-400 transition hover:text-amber-300"
            >
              Home
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            {/* Heading */}

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-[#21130e] shadow-lg shadow-amber-500/20 transition duration-300 hover:scale-110 hover:rotate-3">
                <FileWarning size={27} />
              </div>

              <div>

                <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                  Important Information
                </span>

                <h1 className="mt-1 font-serif text-4xl font-black text-white sm:text-6xl">
                  Disclaimer
                </h1>

              </div>

            </div>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
              Please read this disclaimer carefully to understand the purpose
              and limitations of the information published on Recipe Corner.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold text-stone-300 backdrop-blur">
                Last Updated: August 2026
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold text-stone-300 backdrop-blur">
                Recipe Corner
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_300px]">

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">

            {/* Important Notice */}

            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <AlertTriangle size={19} />
                </div>

                <div>

                  <h2 className="font-serif text-xl font-black text-gray-900">
                    Important Notice
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    The content on Recipe Corner is intended for general
                    informational purposes. Please use your own judgment and,
                    where appropriate, seek advice from a qualified
                    professional.
                  </p>

                </div>

              </div>

            </div>

            {/* Sections */}

            <div className="mt-12 space-y-12">

              {sections.map((section, index) => (

                <section
                  key={section.title}
                  className="group"
                >

                  <div className="flex gap-4">

                    {/* Number */}

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-xs font-black text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>

                      <h2 className="font-serif text-2xl font-black transition-colors duration-300 group-hover:text-orange-600">
                        {section.title}
                      </h2>

                      <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                        {section.text}
                      </p>

                    </div>

                  </div>

                </section>

              ))}

            </div>

            {/* User Responsibility */}

            <div className="mt-14 border-t border-stone-100 pt-12">

              <h2 className="font-serif text-3xl font-black">
                Your Responsibility
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                When using recipes or information from Recipe Corner, you are
                responsible for checking ingredients, following appropriate
                food-safety practices, using suitable equipment, and making
                decisions that are appropriate for your individual
                circumstances.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {[
                  "Check ingredients before preparing recipes.",
                  "Follow safe food preparation practices.",
                  "Verify allergens and dietary requirements.",
                  "Use professional advice when necessary.",
                ].map((item) => (

                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
                  >

                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-xs font-bold leading-6 text-gray-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Liability Notice */}

            <div className="mt-12 rounded-3xl bg-[#21130e] p-7 text-white sm:p-9">

              <div className="flex items-start gap-4">

                <ShieldCheck
                  size={24}
                  className="mt-1 shrink-0 text-amber-400"
                />

                <div>

                  <h2 className="font-serif text-2xl font-black">
                    No Professional Advice
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    Nothing on Recipe Corner should be considered medical,
                    nutritional, legal, financial, or other professional
                    advice. If you require professional assistance, consult
                    an appropriately qualified professional.
                  </p>

                </div>

              </div>

            </div>

            {/* Contact CTA */}

            <div className="mt-12 rounded-3xl border border-stone-200 bg-stone-50 p-7 sm:p-9">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="flex items-center gap-2 text-orange-600">

                    <Info size={17} />

                    <span className="text-xs font-black uppercase tracking-widest">
                      Have Questions?
                    </span>

                  </div>

                  <h2 className="mt-3 font-serif text-2xl font-black">
                    Want to contact Recipe Corner?
                  </h2>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-gray-500">
                    If you have any questions about this Disclaimer or our
                    website content, you can reach us through our contact page.
                  </p>

                </div>

                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#21130e] px-6 py-3 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl"
                >
                  Contact Us
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

          </article>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">

            {/* Legal Navigation */}

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <ShieldCheck size={18} />
                </div>

                <h3 className="font-serif text-xl font-black">
                  Legal Pages
                </h3>

              </div>

              <nav className="mt-6 space-y-2">

                {[
                  ["Privacy Policy", "/privacy-policy"],
                  ["Terms & Conditions", "/terms-and-conditions"],
                  ["Cookie Policy", "/cookie-policy"],
                  ["Disclaimer", "/disclaimer"],
                ].map(([name, path]) => (

                  <Link
                    key={path}
                    to={path}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${
                      path === "/disclaimer"
                        ? "bg-orange-50 text-orange-700"
                        : "text-gray-500 hover:bg-stone-50 hover:text-orange-600"
                    }`}
                  >

                    {name}

                    <ArrowRight
                      size={14}
                      className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />

                  </Link>

                ))}

              </nav>

            </div>

            {/* Quick Summary */}

            <div className="rounded-[2rem] bg-orange-500 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <FileWarning
                size={26}
                className="text-white"
              />

              <h3 className="mt-5 font-serif text-2xl font-black text-white">
                Keep It In Mind
              </h3>

              <p className="mt-3 text-xs leading-7 text-orange-50">
                Recipe Corner provides useful food content for general
                information. Always consider your own needs and circumstances
                before following advice or recipes.
              </p>

              <Link
                to="/privacy-policy"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-black text-white"
              >
                View Privacy Policy
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
          BOTTOM CTA
      ===================================================== */}

      <section className="px-4 pb-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-12">

          <ShieldCheck
            size={28}
            className="mx-auto text-orange-500"
          />

          <h2 className="mt-5 font-serif text-3xl font-black sm:text-4xl">
            Cook With Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Explore delicious recipes and useful cooking inspiration from
            Recipe Corner.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#21130e] px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
            >
              Explore Recipes
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-200 px-7 py-4 text-xs font-black text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Disclaimer;