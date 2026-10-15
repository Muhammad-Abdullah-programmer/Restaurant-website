import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  ArrowRight,
  HelpCircle,
  ChefHat,
  Clock3,
  ShieldCheck,
  MessageCircle,
  X,
} from "lucide-react";

const faqData = [
  {
    id: 1,
    category: "Recipes",
    question: "Can I save Recipe Corner recipes for later?",
    answer:
      "Yes. You can bookmark or save your favorite recipes using your browser's bookmark feature. We recommend keeping your favorite recipes organized so you can quickly return to them whenever you want to cook.",
  },
  {
    id: 2,
    category: "Recipes",
    question: "Are the recipes suitable for beginners?",
    answer:
      "Absolutely. Recipe Corner focuses on practical recipes with straightforward instructions. Many recipes are designed to be approachable for beginners while still being enjoyable for experienced home cooks.",
  },
  {
    id: 3,
    category: "Recipes",
    question: "Can I change ingredients in a recipe?",
    answer:
      "Ingredient substitutions are sometimes possible, but results can vary. Ingredients can affect texture, flavor, cooking time, and consistency, so we recommend understanding the role of an ingredient before replacing it.",
  },
  {
    id: 4,
    category: "Cooking",
    question: "How can I get better cooking results?",
    answer:
      "Read the complete recipe before starting, prepare your ingredients in advance, use accurate measurements, follow recommended temperatures, and pay attention to cooking times. Your cookware and ingredients can also affect the final result.",
  },
  {
    id: 5,
    category: "Cooking",
    question: "Why does my recipe sometimes take longer to cook?",
    answer:
      "Cooking time can vary because of ingredient size, cookware, oven performance, starting temperature, quantity, and individual equipment. Recipe times should be treated as useful estimates rather than guaranteed results.",
  },
  {
    id: 6,
    category: "Ingredients",
    question: "Can I use different brands of ingredients?",
    answer:
      "Yes. Different brands can generally be used, but their ingredients, moisture levels, sweetness, salt content, or other characteristics may differ. These differences can occasionally affect the final recipe.",
  },
  {
    id: 7,
    category: "Ingredients",
    question: "Where can I find ingredient quantities?",
    answer:
      "Ingredient quantities are provided within the individual recipe pages. Always review the complete ingredient list before beginning preparation and check whether the recipe has serving-size options.",
  },
  {
    id: 8,
    category: "Food Safety",
    question: "Does Recipe Corner provide food safety advice?",
    answer:
      "Our recipes may include general preparation and cooking guidance, but food safety requirements can vary. Always follow appropriate food-handling practices and official food-safety guidance applicable to your location.",
  },
  {
    id: 9,
    category: "Food Safety",
    question: "What about food allergies?",
    answer:
      "Always check every ingredient and product label carefully if you have an allergy or intolerance. Recipe Corner cannot guarantee that recipes are free from allergens or cross-contact. People with serious allergies should consult an appropriate professional.",
  },
  {
    id: 10,
    category: "Website",
    question: "Is Recipe Corner free to use?",
    answer:
      "Recipe Corner is designed to provide accessible recipe ideas and food-related information. Some website features or future services may have their own terms, but general recipe browsing is intended to be straightforward and easy to access.",
  },
  {
    id: 11,
    category: "Website",
    question: "How often is new content added?",
    answer:
      "We aim to keep Recipe Corner fresh with new recipes, cooking ideas, guides, and blog content. Publishing schedules can vary depending on the type of content being prepared.",
  },
  {
    id: 12,
    category: "Contact",
    question: "How can I contact Recipe Corner?",
    answer:
      "You can reach us through our Contact Us page. If you have feedback, questions, or suggestions about the website, we would be happy to hear from you.",
  },
];

const categories = [
  "All",
  "Recipes",
  "Cooking",
  "Ingredients",
  "Food Safety",
  "Website",
  "Contact",
];

function FAQ() {
  const [openId, setOpenId] = useState(1);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs = useMemo(() => {
    const term = search.trim().toLowerCase();

    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const matchesSearch =
        !term ||
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term) ||
        faq.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const clearSearch = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#21130e]">

        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">

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

            <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-[#21130e] shadow-xl shadow-amber-500/20 transition duration-300 hover:scale-110 hover:rotate-3">
              <HelpCircle size={31} />
            </div>

            <span className="mt-7 block text-xs font-black uppercase tracking-[0.3em] text-amber-300">
              Frequently Asked Questions
            </span>

            <h1 className="mt-3 font-serif text-4xl font-black text-white sm:text-6xl">
              How Can We Help?
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
              Find answers to common questions about our recipes, cooking
              guides, ingredients, food safety, and Recipe Corner.
            </p>

            {/* Search */}

            <div className="relative mx-auto mt-9 max-w-2xl">

              <Search
                size={19}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your question..."
                aria-label="Search frequently asked questions"
                className="h-14 w-full rounded-2xl border border-white/10 bg-white px-12 pr-12 text-sm text-gray-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  <X size={16} />
                </button>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          QUICK FEATURES
      ===================================================== */}

      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: ChefHat,
              title: "Easy Recipes",
              text: "Simple cooking ideas",
            },
            {
              icon: Clock3,
              title: "Helpful Tips",
              text: "Save time in the kitchen",
            },
            {
              icon: ShieldCheck,
              title: "Safety First",
              text: "Cook with confidence",
            },
            {
              icon: MessageCircle,
              title: "Need Help?",
              text: "We're here for you",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#21130e]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.text}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          FAQ CONTENT
      ===================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-5xl">

          {/* Category Filter */}

          <div className="mb-10">

            <div className="mb-4 flex items-center justify-between gap-4">

              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">
                  Browse Topics
                </span>

                <h2 className="mt-2 font-serif text-3xl font-black sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </div>

              <span className="hidden rounded-full bg-stone-100 px-4 py-2 text-xs font-bold text-gray-500 sm:block">
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "Question" : "Questions"}
              </span>

            </div>

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">

              {categories.map((category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-black transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#21130e] text-white shadow-lg"
                      : "border border-stone-200 bg-white text-gray-500 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

          {/* FAQ Accordion */}

          <div className="space-y-4">

            {filteredFAQs.length > 0 ? (

              filteredFAQs.map((faq, index) => {

                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-amber-300 shadow-xl shadow-amber-500/5"
                        : "border-stone-200 shadow-sm hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
                    }`}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenId(isOpen ? null : faq.id)
                      }
                      className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                      aria-expanded={isOpen}
                    >

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-all duration-300 ${
                          isOpen
                            ? "bg-amber-400 text-[#21130e]"
                            : "bg-stone-100 text-gray-500 group-hover:bg-amber-50 group-hover:text-amber-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">

                        <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-amber-600">
                          {faq.category}
                        </span>

                        <span className="block text-sm font-black leading-6 text-gray-900 sm:text-base">
                          {faq.question}
                        </span>

                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#21130e] text-white"
                            : "bg-stone-100 text-gray-500 group-hover:bg-amber-100 group-hover:text-amber-700"
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

                        <div className="border-t border-stone-100 px-5 pb-6 pt-5 pl-[4.5rem] sm:px-6 sm:pb-7 sm:pl-[5.5rem]">

                          <p className="text-sm leading-8 text-gray-600">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })

            ) : (

              /* Empty State */

              <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white px-6 py-16 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-gray-400">
                  <Search size={23} />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-black">
                  No questions found
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                  We couldn't find an FAQ matching your search. Try a
                  different keyword or browse another category.
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                  className="mt-6 rounded-full bg-[#21130e] px-6 py-3 text-xs font-black text-white transition-all hover:-translate-y-1 hover:bg-amber-500"
                >
                  Clear Filters
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-4 pb-20 sm:px-6 lg:px-8">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#21130e] p-8 text-center sm:p-12">

          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-[#21130e]">
              <MessageCircle size={25} />
            </div>

            <span className="mt-6 block text-xs font-black uppercase tracking-[0.25em] text-amber-300">
              Still Need Help?
            </span>

            <h2 className="mt-2 font-serif text-3xl font-black text-white sm:text-4xl">
              Can't Find Your Answer?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-400">
              If your question isn't answered here, send us a message through
              our contact page and we'll be happy to hear from you.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-xs font-black text-[#21130e] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl"
              >
                Contact Us
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/categories"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Explore Categories
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default FAQ;