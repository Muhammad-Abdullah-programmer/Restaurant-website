import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Utensils,
  ChefHat,
  Heart,
  Send,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Categories", path: "/categories" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const recipeLinks = [
  { name: "Breakfast", path: "/recipes/breakfast" },
  { name: "Lunch", path: "/recipes/lunch" },
  { name: "Dinner", path: "/recipes/dinner" },
  { name: "Desserts", path: "/recipes/desserts" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
  { name: "Cookie Policy", path: "/cookie-policy" },
  { name: "Disclaimer", path: "/disclaimer" },
];

const socialLinks = [
  { name: "Facebook", short: "f", href: "#" },
  { name: "Instagram", short: "ig", href: "#" },
  { name: "YouTube", short: "▶", href: "#" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-14 overflow-hidden bg-[#100806] text-gray-300">
      {/* PREMIUM BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-orange-600/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* NEWSLETTER */}
      <section className="relative border-b border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="group relative overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/[0.14] via-[#24130d]/80 to-[#120a07]/80 p-5 shadow-[0_25px_80px_rgba(0,0,0,.35)] sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-orange-400/10 transition-transform duration-700 group-hover:scale-110" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-orange-400/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-orange-500/5 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-orange-300">
                  <Sparkles size={13} /> Fresh From The Kitchen
                </div>

                <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-white sm:text-4xl lg:text-4xl">
                  Delicious recipes,
                  <span className="block text-orange-400">
                    delivered to you.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                  Get fresh recipes, cooking inspiration, kitchen tips, and
                  delicious food ideas delivered directly to your inbox.
                </p>
              </div>

              <div className="w-full lg:max-w-xl">
                {!subscribed ? (
                  <form
                    onSubmit={handleSubscribe}
                    className="rounded-2xl border border-white/10 bg-black/20 p-2 backdrop-blur-xl"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <div className="relative flex-1">
                        <Mail
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          aria-label="Email address"
                          required
                          className="h-12 w-full rounded-xl border border-white/5 bg-white/[0.03] pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-orange-400/50 focus:bg-white/[0.05] focus:ring-4 focus:ring-orange-500/10"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/30"
                      >
                        <Send
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                        Subscribe
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex min-h-[60px] items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 text-sm font-bold text-emerald-300">
                    <CheckCircle2 size={20} />
                    <span>Thanks! You're successfully subscribed.</span>
                  </div>
                )}

                <div className="mt-2 flex items-center gap-2 px-1 text-[10px] text-gray-600">
                  <ShieldIcon /> No spam. Unsubscribe anytime.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-xl shadow-orange-500/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <Utensils size={22} />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#100806] bg-orange-300" />
              </span>

              <span className="font-serif text-2xl font-black tracking-tight text-white">
                Recipe <span className="ml-1 text-orange-400">Corner</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Your destination for delicious recipes, practical cooking tips,
              food inspiration, and simple ideas made for everyday kitchens.
            </p>

            {/* STATS */}
            <div className="mt-5 grid max-w-md grid-cols-3 gap-2">
              <StatCard number="100+" label="Recipes" />
              <StatCard number="4" label="Categories" />
              <StatCard number="24/7" label="Inspiration" />
            </div>

            {/* SOCIAL */}
            <div className="mt-6">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-gray-600">
                Follow Our Kitchen
              </p>

              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    title={social.name}
                    className="group flex h-10 min-w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-3 text-xs font-black uppercase text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {social.short}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* EXPLORE */}
          <FooterColumn title="Explore" links={quickLinks} />

          {/* RECIPES */}
          <FooterColumn title="Recipes" links={recipeLinks} />

          {/* CONTACT */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
              <span className="h-5 w-1 rounded-full bg-orange-500" />
              Get In Touch
            </h3>

            <div className="mt-5 space-y-3">
              <ContactItem
                icon={Mail}
                title="Email"
                value="hassanmujtaba0132@gmail.com"
                href="mailto:hassanmujtaba0132@gmail.com"
              />
              <ContactItem
                icon={Phone}
                title="Phone"
                value="+92 3356481414"
                href="tel:+923356481414"
              />
              <ContactItem
                icon={MapPin}
                title="Location"
                value={
                  <>
                    Food Street, Kitchen Avenue
                    <br />
                    Recipe City
                  </>
                }
              />
              <ContactItem
                icon={Clock3}
                title="Availability"
                value="Online — Always Open"
              />
            </div>

            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-xl border border-orange-400/20 bg-orange-500/10 px-4 py-2.5 text-xs font-bold text-orange-300 transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-500 hover:text-white"
            >
              Let's Talk
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2 text-[11px] text-gray-600">
            <ChefHat size={15} className="text-orange-500" />
            <span>Made with passion for food lovers</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-gray-600">
            <Heart size={13} className="fill-orange-500 text-orange-500" />
            <span>Cook • Share • Enjoy</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-center text-[11px] leading-5 text-gray-600 md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-gray-500">Recipe Corner</span>. All
            rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative text-[11px] font-semibold text-gray-600 transition-colors duration-300 hover:text-orange-400"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20 md:mx-0"
          >
            <ArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="group rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/20 hover:bg-orange-500/[0.05]">
      <p className="text-lg font-black text-white transition-colors group-hover:text-orange-400">
        {number}
      </p>
      <p className="mt-1 text-[9px] uppercase tracking-wider text-gray-600">
        {label}
      </p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
        <span className="h-5 w-1 rounded-full bg-orange-500" />
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="group relative inline-flex items-center text-sm text-gray-500 transition-all duration-300 hover:translate-x-1 hover:text-orange-400"
            >
              <ArrowRight
                size={13}
                className="absolute -left-5 text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />

              <span className="relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon: Icon, title, value, href }) {
  const content = (
    <div className="group -ml-2 flex gap-3 rounded-2xl border border-transparent p-1.5 transition-all duration-300 hover:border-white/[0.06] hover:bg-white/[0.025]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-orange-400 transition-all duration-300 group-hover:border-orange-400/30 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/10">
        <Icon size={16} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-700">
          {title}
        </p>
        <p className="mt-1 break-words text-xs leading-5 text-gray-500 transition-colors group-hover:text-gray-300">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function ShieldIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default Footer;
