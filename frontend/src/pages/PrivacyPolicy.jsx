import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Cookie,
  Eye,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const privacySections = [
  {
    number: "01",
    icon: Eye,
    title: "Information We Collect",
    text: "When you visit or interact with Recipe Corner, certain information may be collected automatically or provided by you. This can include information you submit through forms, such as your name or email address, as well as basic technical information about your browser, device, and interaction with our website.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Information You Provide",
    text: "You may voluntarily provide information when you contact us, subscribe to updates, submit feedback, or interact with features of the website. We only ask for information that is reasonably necessary for the particular interaction.",
  },
  {
    number: "03",
    icon: Cookie,
    title: "Cookies & Similar Technologies",
    text: "Recipe Corner may use cookies and similar technologies to help the website function correctly, understand general website usage, remember preferences, and improve the user experience. You can manage cookies through your browser settings.",
  },
  {
    number: "04",
    icon: FileText,
    title: "How We Use Information",
    text: "Information may be used to operate and improve Recipe Corner, respond to messages, provide requested features, understand website usage, maintain website security, and improve the quality and relevance of our content.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "How We Protect Information",
    text: "We take reasonable measures to help protect information from unauthorized access, misuse, alteration, or disclosure. However, no online service can guarantee absolute security, and users should understand that internet transmission always carries some level of risk.",
  },
  {
    number: "06",
    icon: LockKeyhole,
    title: "Information Sharing",
    text: "We do not intend to sell personal information. Information may be shared with service providers or technical partners when reasonably necessary to operate, maintain, secure, or improve website services, subject to applicable requirements.",
  },
  {
    number: "07",
    icon: UserCheck,
    title: "Third-Party Services",
    text: "Our website may use third-party services such as analytics, advertising, hosting, social media, or other technology providers. These third parties may process information according to their own privacy policies and terms.",
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Your Choices",
    text: "Depending on your location and applicable laws, you may have certain choices or rights concerning personal information. You may also control certain browser settings, including cookies and similar technologies.",
  },
];

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#21130e]">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute left-[45%] top-1/2 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

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

            {/* Icon */}

            <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-[#21130e] shadow-xl shadow-amber-500/20 transition-all duration-300 hover:scale-110 hover:rotate-3">
              <LockKeyhole size={29} />
            </div>

            <span className="mt-7 block text-xs font-black uppercase tracking-[0.3em] text-amber-300">
              Your Privacy Matters
            </span>

            <h1 className="mt-3 font-serif text-4xl font-black text-white sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
              This Privacy Policy explains how Recipe Corner may collect,
              use, protect, and handle information when you visit and use
              our website.
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
          QUICK INFO CARDS
      ===================================================== */}

      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              icon: LockKeyhole,
              title: "Privacy Focused",
              text: "We respect your personal information.",
            },
            {
              icon: Cookie,
              title: "Cookie Choices",
              text: "Manage cookies through your browser.",
            },
            {
              icon: ShieldCheck,
              title: "Security",
              text: "Reasonable measures help protect information.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <div>

                    <h3 className="text-sm font-black">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
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
          MAIN CONTENT
      ===================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_300px]">

          {/* =================================================
              ARTICLE
          ================================================= */}

          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">

            {/* Intro */}

            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <ShieldCheck size={19} />
                </div>

                <div>

                  <h2 className="font-serif text-xl font-black">
                    Our Privacy Commitment
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Recipe Corner aims to handle information responsibly and
                    transparently. This policy describes our general approach
                    to privacy and helps you understand what information may
                    be collected when using our website.
                  </p>

                </div>

              </div>

            </div>

            {/* Sections */}

            <div className="mt-12 space-y-12">

              {privacySections.map((section) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.number}
                    className="group"
                  >

                    <div className="flex gap-4 sm:gap-5">

                      {/* Number */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-xs font-black text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                        {section.number}
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center gap-3">

                          <Icon
                            size={18}
                            className="shrink-0 text-orange-500 transition-transform duration-300 group-hover:scale-110"
                          />

                          <h2 className="font-serif text-2xl font-black transition-colors duration-300 group-hover:text-orange-600">
                            {section.title}
                          </h2>

                        </div>

                        <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                          {section.text}
                        </p>

                      </div>

                    </div>

                  </section>
                );
              })}

            </div>

            {/* Data Retention */}

            <section className="mt-14 border-t border-stone-100 pt-12">

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-orange-600">
                  <FileText size={18} />
                </div>

                <div>

                  <h2 className="font-serif text-2xl font-black">
                    Data Retention
                  </h2>

                  <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                    Information may be retained only for as long as reasonably
                    necessary for the purpose for which it was collected,
                    legitimate business needs, security, legal requirements,
                    or other applicable obligations.
                  </p>

                </div>

              </div>

            </section>

            {/* Children */}

            <section className="mt-12 rounded-3xl border border-stone-200 bg-stone-50 p-7 sm:p-9">

              <h2 className="font-serif text-2xl font-black">
                Children's Privacy
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Recipe Corner is not intentionally designed to collect
                personal information from children. If you believe that a
                child has provided personal information through our website,
                please contact us so that the matter can be reviewed.
              </p>

            </section>

            {/* Changes */}

            <section className="mt-12">

              <h2 className="font-serif text-2xl font-black">
                Changes to This Privacy Policy
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                We may update this Privacy Policy from time to time to reflect
                changes to our website, technology, services, or applicable
                requirements. Updated versions will be published on this page
                with a revised update date.
              </p>

            </section>

            {/* Contact CTA */}

            <div className="mt-12 rounded-3xl bg-[#21130e] p-7 text-white sm:p-9">

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="flex items-center gap-2 text-amber-400">

                    <Mail size={17} />

                    <span className="text-xs font-black uppercase tracking-widest">
                      Privacy Questions
                    </span>

                  </div>

                  <h2 className="mt-3 font-serif text-2xl font-black">
                    Need more information?
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-stone-400">
                    If you have a question about this Privacy Policy or how
                    Recipe Corner handles information, please get in touch.
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

            {/* Legal Navigation */}

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <FileText size={18} />
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
                      path === "/privacy-policy"
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

            {/* Privacy Summary */}

            <div className="rounded-[2rem] bg-orange-500 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <LockKeyhole
                size={27}
                className="text-white"
              />

              <h3 className="mt-5 font-serif text-2xl font-black text-white">
                Your Privacy Matters
              </h3>

              <p className="mt-3 text-xs leading-7 text-orange-50">
                We aim to provide clear information about how data may be
                collected and used when you interact with Recipe Corner.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-black text-white"
              >
                Ask a Question
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

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
            <ShieldCheck size={27} />
          </div>

          <h2 className="mt-5 font-serif text-3xl font-black sm:text-4xl">
            Explore Recipe Corner
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Now that you know how we approach privacy, explore our recipes,
            categories, and cooking inspiration.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/categories"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#21130e] px-7 py-4 text-xs font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
            >
              Explore Categories
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

export default PrivacyPolicy;