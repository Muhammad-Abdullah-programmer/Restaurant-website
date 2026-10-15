import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  ShieldCheck,
  Utensils,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          Welcome to Recipe Corner. By accessing or using this website, you
          agree to comply with these Terms & Conditions. If you do not agree
          with any part of these terms, please discontinue use of the website.
        </p>

        <p>
          These terms apply to all visitors, readers, and users who access
          Recipe Corner and its content.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Use of Our Website",
    content: (
      <>
        <p>
          Recipe Corner provides recipes, cooking ideas, food-related
          information, articles, and other informational content for general
          educational and entertainment purposes.
        </p>

        <p>
          You agree to use this website responsibly and only for lawful
          purposes. You must not attempt to interfere with the operation,
          security, or availability of the website.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Recipe & Food Information",
    content: (
      <>
        <p>
          Recipes and cooking information published on Recipe Corner are
          provided for general informational purposes. Cooking results may
          vary depending on ingredients, equipment, preparation methods, and
          individual circumstances.
        </p>

        <p>
          Always use your own judgment when preparing food and make sure that
          ingredients are suitable for your dietary needs and circumstances.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Food Allergies & Dietary Requirements",
    content: (
      <>
        <p>
          Recipe Corner may include recipes containing common allergens such as
          dairy, eggs, wheat, nuts, seafood, or other ingredients.
        </p>

        <p>
          If you have an allergy, intolerance, medical condition, or specific
          dietary requirement, carefully check every ingredient and consult an
          appropriate qualified professional when necessary.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, the original text, graphics, design,
          branding, layout, and other materials appearing on Recipe Corner are
          protected by applicable intellectual property laws.
        </p>

        <p>
          You may access and use our content for personal, non-commercial
          purposes. Republishing, copying, selling, or distributing substantial
          portions of our original content without permission is not allowed.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "User Conduct",
    content: (
      <>
        <p>
          When using Recipe Corner, you agree not to misuse the website or
          attempt to compromise its functionality.
        </p>

        <ul>
          <li>Do not use the website for unlawful activities.</li>
          <li>Do not attempt unauthorized access to website systems.</li>
          <li>Do not intentionally introduce malicious code or harmful files.</li>
          <li>Do not copy substantial website content for commercial use without permission.</li>
          <li>Do not interfere with other visitors' ability to use the website.</li>
        </ul>
      </>
    ),
  },
  {
    number: "07",
    title: "External Links",
    content: (
      <>
        <p>
          Our website may occasionally contain links to third-party websites,
          services, or resources.
        </p>

        <p>
          These external websites are not controlled by Recipe Corner. We are
          not responsible for their content, policies, availability, or
          practices. Visiting third-party websites is at your own discretion.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p>
          Recipe Corner is provided on an "as available" basis. While we aim
          to provide useful and accurate information, we do not guarantee that
          every piece of content will always be complete, accurate, current,
          or error-free.
        </p>

        <p>
          Information on this website should not be considered professional
          medical, nutritional, legal, or other specialized advice.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Recipe Corner and its
          operators will not be responsible for losses, damages, injuries, or
          issues resulting from reliance on information available through the
          website.
        </p>

        <p>
          Users are responsible for evaluating information and making
          appropriate decisions based on their individual circumstances.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update or modify these Terms & Conditions from time to time
          to reflect changes to our website, services, or legal requirements.
        </p>

        <p>
          Updated terms will be posted on this page. Your continued use of
          Recipe Corner after changes are published means you acknowledge the
          updated terms.
        </p>
      </>
    ),
  },
];

function TermsConditions() {
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
              Terms & Conditions
            </span>

          </div>

          <div className="max-w-3xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-500/20">
              <FileText size={28} />
            </div>

            <p className="mt-7 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
              Website Terms
            </p>

            <h1 className="mt-3 font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Terms &
              <span className="text-orange-400"> Conditions</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-stone-400 sm:text-base">
              Please read these terms carefully before using Recipe Corner.
              They explain the rules and conditions that apply to your use of
              our website.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-stone-300">
              <ShieldCheck size={15} className="text-orange-400" />
              Last updated: August 2026
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="lg:sticky lg:top-24 lg:self-start">

              <div className="rounded-[1.7rem] border border-stone-200 bg-white p-5 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <FileText size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black">
                      On This Page
                    </p>

                    <p className="text-[10px] text-gray-400">
                      {sections.length} sections
                    </p>
                  </div>

                </div>

                <nav className="mt-5 space-y-1">

                  {sections.map((section) => (

                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-gray-500 transition hover:bg-orange-50 hover:text-orange-600"
                    >

                      <span className="text-[10px] font-black text-orange-400">
                        {section.number}
                      </span>

                      <span className="truncate">
                        {section.title}
                      </span>

                    </a>

                  ))}

                </nav>

              </div>

            </aside>

            {/* =================================================
                MAIN TERMS
            ================================================= */}

            <div>

              {/* Intro */}

              <div className="rounded-[2rem] border border-orange-100 bg-orange-50/60 p-6 sm:p-8">

                <div className="flex items-start gap-4">

                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                    <CheckCircle2 size={19} />
                  </div>

                  <div>

                    <h2 className="font-serif text-xl font-black">
                      Welcome to Recipe Corner
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      These Terms & Conditions are intended to make your
                      experience with Recipe Corner clear and transparent.
                      Please review the information below before using our
                      website.
                    </p>

                  </div>

                </div>

              </div>

              {/* Sections */}

              <div className="mt-8 space-y-5">

                {sections.map((section) => (

                  <article
                    key={section.number}
                    id={`section-${section.number}`}
                    className="scroll-mt-24 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-lg sm:p-8"
                  >

                    <div className="flex gap-5">

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#21130e] text-xs font-black text-orange-400 sm:flex">
                        {section.number}
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center gap-3">

                          <span className="text-[10px] font-black text-orange-500 sm:hidden">
                            {section.number}
                          </span>

                          <h2 className="font-serif text-xl font-black sm:text-2xl">
                            {section.title}
                          </h2>

                        </div>

                        <div className="mt-4 space-y-4 text-sm leading-8 text-gray-600">
                          {section.content}
                        </div>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

              {/* =================================================
                  CONTACT CTA
              ================================================= */}

              <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#21130e] p-7 text-white sm:p-10">

                <div className="relative">

                  <div className="absolute -right-20 -top-24 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />

                  <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

                    <div>

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500">
                          <Utensils size={19} />
                        </div>

                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
                          Need Help?
                        </span>

                      </div>

                      <h2 className="mt-4 font-serif text-2xl font-black sm:text-3xl">
                        Have a question about our terms?
                      </h2>

                      <p className="mt-2 max-w-xl text-xs leading-7 text-stone-400">
                        If you need clarification about these Terms &
                        Conditions, feel free to contact our team.
                      </p>

                    </div>

                    <Link
                      to="/contact"
                      className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
                    >
                      Contact Us

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                  </div>

                </div>

              </div>

              {/* Bottom note */}

              <p className="mt-8 text-center text-xs leading-6 text-gray-400">
                By continuing to use Recipe Corner, you acknowledge that you
                have read and understood these Terms & Conditions.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default TermsConditions;