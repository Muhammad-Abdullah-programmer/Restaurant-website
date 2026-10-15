import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Heart,
  Lightbulb,
  Mail,
  Search,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made With Love",
    text: "Every recipe is created around the idea that good food should feel enjoyable, comforting, and easy to make at home.",
  },
  {
    icon: CheckCircle2,
    title: "Simple & Practical",
    text: "Straightforward ingredients, clear instructions, and practical cooking ideas for everyday cooking.",
  },
  {
    icon: Lightbulb,
    title: "Useful Ideas",
    text: "Discover quick breakfasts, satisfying dinners, delicious desserts, and helpful cooking inspiration.",
  },
  {
    icon: Award,
    title: "Quality First",
    text: "We focus on readable recipes, useful tips, attractive presentation, and a smooth visitor experience.",
  },
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    text: "Explore recipes based on your mood, meal, or occasion.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn",
    text: "Read simple instructions and useful cooking tips.",
  },
  {
    number: "03",
    icon: Utensils,
    title: "Cook",
    text: "Take the recipe into your kitchen and make something delicious.",
  },
];

const faqs = [
  {
    question: "What is Recipe Corner?",
    answer:
      "Recipe Corner is a food and recipe website focused on simple, approachable recipes for breakfast, lunch, dinner, desserts, and everyday cooking inspiration.",
  },
  {
    question: "Are the recipes beginner-friendly?",
    answer:
      "Yes. Our goal is to keep recipes clear and practical so beginners and experienced home cooks can follow them comfortably.",
  },
  {
    question: "Can I suggest a recipe?",
    answer:
      "Absolutely. We love hearing from readers. Visit our Contact page and send us your recipe idea or suggestion.",
  },
  {
    question: "Where can I find different recipe categories?",
    answer:
      "Visit the Categories page or use the navigation menu to explore Breakfast, Lunch, Dinner, and Desserts.",
  },
];

function About() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white">

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="relative isolate bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1900&q=85')",
        }}
      >

        <div className="absolute inset-0 -z-10 bg-gray-950/75" />

        <div className="absolute inset-0 -z-10 bg-orange-950/20" />

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-md">
              <Sparkles size={14} />
              About Recipe Corner
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Good food.
              <span className="block text-orange-400">
                Simple moments.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base sm:leading-8">
              Welcome to Recipe Corner — a place for delicious ideas,
              practical cooking inspiration, and recipes designed to
              make everyday meals feel a little more special.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/categories"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-extrabold text-white shadow-lg shadow-orange-950/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-orange-600 hover:shadow-2xl"
              >
                Explore Recipes

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:text-gray-950"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          STATS
      ================================================== */}

      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">

          {[
            ["100+", "Recipe Ideas"],
            ["4", "Main Categories"],
            ["24/7", "Food Inspiration"],
            ["100%", "Home Cooking"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="group border-b border-gray-100 px-5 py-8 text-center transition-all duration-300 hover:bg-orange-50 sm:border-b-0 sm:border-r last:border-r-0"
            >

              <p className="text-3xl font-black text-gray-950 transition duration-300 group-hover:scale-110 group-hover:text-orange-500 sm:text-4xl">
                {number}
              </p>

              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-400 transition group-hover:text-orange-600">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ==================================================
          STORY
      ================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="group relative">

              <div className="overflow-hidden rounded-[2rem] shadow-xl">

                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85"
                  alt="Home cooking ingredients and kitchen"
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[520px]"
                />

              </div>

              <div className="absolute -bottom-6 right-4 rounded-2xl border border-white bg-white p-5 shadow-2xl transition duration-300 group-hover:-translate-y-2 sm:-right-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Heart size={20} fill="currentColor" />
                  </div>

                  <div>
                    <p className="text-lg font-black text-gray-950">
                      Made for
                    </p>

                    <p className="text-xs font-bold text-gray-500">
                      Home food lovers
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* TEXT */}

            <div>

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                Our Story
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                A little corner of the internet for people who love food.
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">

                <p>
                  Recipe Corner was created with one simple idea:
                  cooking should not feel complicated.
                </p>

                <p>
                  Whether you are preparing breakfast, planning a family
                  dinner, or looking for something sweet, we want to make
                  finding the right recipe easier.
                </p>

                <p>
                  Our content is organized around practical meals,
                  simple ideas, and helpful information.
                </p>

              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="group cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-200 hover:bg-orange-50 hover:shadow-lg">

                  <Users
                    size={22}
                    className="text-orange-500 transition duration-300 group-hover:scale-125 group-hover:rotate-6"
                  />

                  <h3 className="mt-4 text-sm font-black text-gray-950">
                    For Everyone
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-500 group-hover:text-gray-700">
                    Recipes and ideas designed for everyday home cooks.
                  </p>

                </div>

                <div className="group cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-200 hover:bg-orange-50 hover:shadow-lg">

                  <Clock3
                    size={22}
                    className="text-orange-500 transition duration-300 group-hover:scale-125 group-hover:rotate-6"
                  />

                  <h3 className="mt-4 text-sm font-black text-gray-950">
                    Everyday Friendly
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-500 group-hover:text-gray-700">
                    Helpful inspiration for busy days and relaxed weekends.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          VALUES
      ================================================== */}

      <section className="bg-[#fffaf5] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
              What We Believe
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Our kitchen philosophy
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Everything we build around Recipe Corner comes back to
              these simple principles.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <Link
                  to="/categories"
                  key={value.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:border-orange-400 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/20"
                >

                  {/* Decorative circle */}

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-50 transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-orange-400/30" />

                  <div className="relative">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white group-hover:text-orange-500">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-black text-gray-950 transition-colors duration-300 group-hover:text-white">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-orange-50">
                      {value.text}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-orange-500 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                      Explore
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>

                  </div>

                </Link>
              );

            })}

          </div>

        </div>

      </section>

      {/* ==================================================
          HOW IT WORKS
      ================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                How Recipe Corner Works
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                From inspiration to your kitchen.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Finding something delicious should be easy. Our website
                helps you move from browsing to cooking without unnecessary
                complexity.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              {steps.map((step) => {

                const Icon = step.icon;

                return (
                  <Link
                    to="/categories"
                    key={step.number}
                    className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-400 hover:-translate-y-3 hover:scale-[1.03] hover:border-orange-300 hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/20"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-black text-orange-500 transition group-hover:text-white">
                        {step.number}
                      </span>

                      <Icon
                        size={19}
                        className="text-gray-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-white"
                      />

                    </div>

                    <h3 className="mt-7 text-base font-black text-gray-950 transition group-hover:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 transition group-hover:text-orange-50">
                      {step.text}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-orange-500 transition-all group-hover:gap-3 group-hover:text-white">
                      Start here
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>

                  </Link>
                );

              })}

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          IMAGE CTA
      ================================================== */}

      <section className="px-4 sm:px-6 lg:px-8">

        <div
          className="group relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=85')",
          }}
        >

          <div className="absolute inset-0 bg-gray-950/75 transition duration-500 group-hover:bg-gray-950/65" />

          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white transition duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Star size={25} fill="currentColor" />
            </div>

            <blockquote className="mx-auto mt-7 max-w-3xl text-2xl font-black leading-tight text-white sm:text-4xl">
              “The best meals are often the ones that bring people
              together around the same table.”
            </blockquote>

            <p className="mt-5 text-sm font-bold text-orange-300">
              The Recipe Corner Philosophy
            </p>

          </div>

        </div>

      </section>

      {/* ==================================================
          FAQ
      ================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
              Frequently Asked
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Questions about Recipe Corner
            </h2>

          </div>

          <div className="mt-10 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-orange-300 bg-orange-50 shadow-lg shadow-orange-500/5"
                      : "border-gray-100 bg-white hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >

                    <span
                      className={`text-sm font-black transition-colors sm:text-base ${
                        isOpen
                          ? "text-orange-600"
                          : "text-gray-950 group-hover:text-orange-500"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-500 group-hover:scale-110 group-hover:bg-orange-100 group-hover:text-orange-500"
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="px-5 pb-5 text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="bg-[#fffaf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="group mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-12 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 sm:px-10 sm:py-16">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white transition duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Utensils size={25} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
            Ready to find your next favorite recipe?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            Browse our recipe categories and discover something
            delicious for your next breakfast, lunch, dinner, or dessert.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/categories"
              className="group/btn inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-orange-600 hover:shadow-xl"
            >
              Browse Categories

              <ArrowRight
                size={17}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="group/btn inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-700 px-7 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-white hover:bg-white hover:text-gray-950"
            >
              <Mail
                size={17}
                className="transition-transform group-hover/btn:scale-110"
              />
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;