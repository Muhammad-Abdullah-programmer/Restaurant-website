import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Cookie,
  ShieldCheck,
  Settings2,
  Info,
} from "lucide-react";

function CookiePolicy() {
  const sections = [
    {
      title: "What Are Cookies?",
      text: "Cookies are small text files that websites store on your device when you visit them. They help websites remember information about your visit, improve functionality, and provide a better browsing experience.",
    },
    {
      title: "How We Use Cookies",
      text: "Recipe Corner may use cookies to remember preferences, understand how visitors interact with our website, improve page performance, and make our content easier to use.",
    },
    {
      title: "Essential Cookies",
      text: "Some cookies may be necessary for basic website functionality. These cookies help pages work properly and support features such as navigation and security.",
    },
    {
      title: "Analytics Cookies",
      text: "Analytics cookies may help us understand which pages are visited most often and how visitors use our website. This information can help us improve our content and overall user experience.",
    },
    {
      title: "Preference Cookies",
      text: "Preference cookies can remember choices you make while browsing, helping us provide a more convenient and personalized experience when you return to the website.",
    },
    {
      title: "Third-Party Cookies",
      text: "Some third-party services used on websites may set their own cookies. These services can include analytics, embedded content, advertising or social media features.",
    },
    {
      title: "Managing Cookies",
      text: "Most modern browsers allow you to control, block, or delete cookies through their settings. Keep in mind that disabling certain cookies may affect how some website features work.",
    },
    {
      title: "Changes to This Policy",
      text: "We may update this Cookie Policy from time to time as our website, services, or legal requirements change. Any updated version will be published on this page.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#21130e]">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="max-w-3xl">

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

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-[#21130e] shadow-lg shadow-amber-500/20">
                <Cookie size={27} />
              </div>

              <div>

                <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                  Website Policy
                </span>

                <h1 className="mt-1 font-serif text-4xl font-black text-white sm:text-6xl">
                  Cookie Policy
                </h1>

              </div>

            </div>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
              Learn how Recipe Corner uses cookies and similar technologies
              to improve website functionality, understand visitor activity,
              and provide a better browsing experience.
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

          {/* MAIN */}

          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">

            {/* Intro */}

            <div className="rounded-3xl bg-amber-50 p-6 sm:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-[#21130e]">
                  <Info size={19} />
                </div>

                <div>

                  <h2 className="font-serif text-xl font-black">
                    Your privacy matters
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    This Cookie Policy explains what cookies are, how they
                    may be used on Recipe Corner, and the choices available
                    to you regarding cookies.
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

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-xs font-black text-amber-600 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#21130e] group-hover:scale-110">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>

                      <h2 className="font-serif text-2xl font-black transition-colors group-hover:text-amber-600">
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

            {/* Cookie Choices */}

            <div className="mt-14 border-t border-stone-100 pt-12">

              <h2 className="font-serif text-3xl font-black">
                Your Cookie Choices
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                You can manage cookies through your browser settings. You
                may choose to accept cookies, block certain types of cookies,
                or delete cookies already stored on your device.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {[
                  "Accept or block cookies through your browser",
                  "Delete previously stored cookies",
                  "Review cookie settings whenever you wish",
                  "Disable optional cookies where supported",
                ].map((item) => (

                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50 hover:shadow-md"
                  >

                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-amber-500 transition-transform group-hover:scale-110"
                    />

                    <span className="text-xs font-bold leading-6 text-gray-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Contact */}

            <div className="mt-14 rounded-3xl bg-[#21130e] p-7 text-white sm:p-9">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="flex items-center gap-2 text-amber-300">

                    <ShieldCheck size={18} />

                    <span className="text-xs font-black uppercase tracking-widest">
                      Questions?
                    </span>

                  </div>

                  <h2 className="mt-3 font-serif text-2xl font-black">
                    Need more information?
                  </h2>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-stone-400">
                    If you have questions about this Cookie Policy or how
                    cookies are used on Recipe Corner, feel free to contact
                    us.
                  </p>

                </div>

                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-black text-[#21130e] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl"
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

            {/* Quick Navigation */}

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Settings2 size={18} />
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
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                      path === "/cookie-policy"
                        ? "bg-amber-50 text-amber-700"
                        : "text-gray-500 hover:bg-stone-50 hover:text-amber-600"
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

            {/* Summary */}

            <div className="rounded-[2rem] bg-amber-400 p-7">

              <Cookie
                size={25}
                className="text-[#21130e]"
              />

              <h3 className="mt-5 font-serif text-2xl font-black text-[#21130e]">
                Simple & Transparent
              </h3>

              <p className="mt-3 text-xs leading-7 text-[#5b3427]">
                We believe visitors should understand how website
                technologies can be used and what choices they have.
              </p>

              <Link
                to="/privacy-policy"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-black text-[#21130e]"
              >
                Read Privacy Policy
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

          <Cookie
            size={26}
            className="mx-auto text-amber-500"
          />

          <h2 className="mt-5 font-serif text-3xl font-black sm:text-4xl">
            Explore Recipe Corner
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Ready to discover something delicious? Browse our recipes,
            cooking tips and food inspiration.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#21130e] px-7 py-4 text-xs font-black text-white transition-all hover:-translate-y-1 hover:bg-amber-500 hover:text-[#21130e]"
            >
              Explore Recipes
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-200 px-7 py-4 text-xs font-black text-gray-700 transition-all hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default CookiePolicy;