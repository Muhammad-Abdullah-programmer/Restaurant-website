import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FileText,
  Home,
  Info,
  Mail,
  Map,
  ShieldCheck,
  Utensils,
} from "lucide-react";

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Home,
    description: "Explore the main sections of Recipe Corner.",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
      { name: "Categories", path: "/categories" },
      { name: "Search Recipes", path: "/search" },
    ],
  },
  {
    title: "Recipes",
    icon: Utensils,
    description: "Find recipes for every meal and occasion.",
    links: [
      { name: "Breakfast Recipes", path: "/recipes/breakfast" },
      { name: "Lunch Recipes", path: "/recipes/lunch" },
      { name: "Dinner Recipes", path: "/recipes/dinner" },
      { name: "Dessert Recipes", path: "/recipes/desserts" },
    ],
  },
  {
    title: "Blog",
    icon: BookOpen,
    description: "Cooking tips, food inspiration and helpful guides.",
    links: [
      { name: "Recipe Blog", path: "/blog" },
    ],
  },
  {
    title: "Legal & Policies",
    icon: ShieldCheck,
    description: "Important information about using our website.",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
      { name: "Cookie Policy", path: "/cookie-policy" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
  },
];

function Sitemap() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#21130e]">

        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          {/* Breadcrumb */}

          <div className="mb-10 flex items-center gap-2 text-xs font-bold text-stone-400">

            <Link
              to="/"
              className="transition hover:text-orange-400"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <span className="text-stone-500">
              Sitemap
            </span>

          </div>

          <div className="max-w-3xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-500/20">
              <Map size={28} />
            </div>

            <p className="mt-7 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
              Recipe Corner
            </p>

            <h1 className="mt-3 font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our
              <span className="text-orange-400"> Sitemap</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-stone-400 sm:text-base">
              Find all the important pages, recipe categories, blog content,
              and helpful resources available throughout Recipe Corner.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          SITEMAP CONTENT
      ===================================================== */}

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          {/* Intro */}

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">
              Website Navigation
            </span>

            <h2 className="mt-3 font-serif text-3xl font-black sm:text-4xl">
              Everything In One Place
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Quickly navigate through Recipe Corner and discover recipes,
              articles, categories, and useful website information.
            </p>

          </div>

          {/* Sitemap Cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {sitemapSections.map((section) => {

              const Icon = section.icon;

              return (
                <div
                  key={section.title}
                  className="group rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl sm:p-8"
                >

                  {/* Card Header */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/20">
                      <Icon size={21} />
                    </div>

                    <div>

                      <h3 className="font-serif text-2xl font-black">
                        {section.title}
                      </h3>

                      <p className="mt-1 text-xs leading-6 text-gray-500">
                        {section.description}
                      </p>

                    </div>

                  </div>

                  {/* Links */}

                  <div className="mt-7 space-y-2">

                    {section.links.map((link) => (

                      <Link
                        key={link.path}
                        to={link.path}
                        className="group/link flex items-center justify-between rounded-xl border border-transparent bg-stone-50 px-4 py-3.5 transition-all duration-300 hover:border-orange-100 hover:bg-orange-50"
                      >

                        <span className="flex items-center gap-3 text-sm font-bold text-gray-700 transition-colors group-hover/link:text-orange-600">

                          <span className="h-1.5 w-1.5 rounded-full bg-orange-400 opacity-60 transition-all group-hover/link:scale-150 group-hover/link:opacity-100" />

                          {link.name}

                        </span>

                        <ArrowRight
                          size={15}
                          className="text-gray-300 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-orange-500"
                        />

                      </Link>

                    ))}

                  </div>

                </div>
              );
            })}

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="mt-10 rounded-[2rem] bg-[#21130e] p-7 text-white sm:p-10">

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500">
                  <Utensils size={21} />
                </div>

                <div>

                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
                    Ready To Cook?
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-black">
                    Discover your next favorite recipe.
                  </h2>

                  <p className="mt-2 max-w-xl text-xs leading-7 text-stone-400">
                    Browse our recipe collection and find delicious ideas for
                    breakfast, lunch, dinner, and dessert.
                  </p>

                </div>

              </div>

              <Link
                to="/categories"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
              >
                Explore Recipes

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

          {/* =================================================
              HELP LINKS
          ================================================= */}

          <div className="mt-10 grid gap-5 sm:grid-cols-3">

            <Link
              to="/about"
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >

              <Info
                size={21}
                className="text-orange-500 transition-transform group-hover:scale-110"
              />

              <h3 className="mt-4 text-sm font-black">
                About Recipe Corner
              </h3>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Learn more about our recipe platform.
              </p>

            </Link>

            <Link
              to="/contact"
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >

              <Mail
                size={21}
                className="text-orange-500 transition-transform group-hover:scale-110"
              />

              <h3 className="mt-4 text-sm font-black">
                Contact Us
              </h3>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Have a question? Get in touch with us.
              </p>

            </Link>

            <Link
              to="/blog"
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >

              <FileText
                size={21}
                className="text-orange-500 transition-transform group-hover:scale-110"
              />

              <h3 className="mt-4 text-sm font-black">
                Read Our Blog
              </h3>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Discover cooking tips and food inspiration.
              </p>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Sitemap;