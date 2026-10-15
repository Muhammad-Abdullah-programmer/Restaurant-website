import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

// --------------------------------------------------
// Newsletter Component
// --------------------------------------------------

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // --------------------------------------------------
  // Handle Submit
  // --------------------------------------------------

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      {/* --------------------------------------------------
          Newsletter Box
      -------------------------------------------------- */}

      <div className="relative overflow-hidden rounded-3xl bg-orange-500 px-6 py-12 sm:px-10 sm:py-14 lg:px-16">

        {/* Decorative Shapes */}

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />

        {/* --------------------------------------------------
            Content
        -------------------------------------------------- */}

        <div className="relative mx-auto max-w-3xl text-center">

          {/* Icon */}

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Mail size={26} />
          </div>

          {/* Eyebrow */}

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-100">
            Recipe Newsletter
          </p>

          {/* Heading */}

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Get delicious recipes delivered to your inbox.
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-orange-50 sm:text-base">
            Join our recipe community and receive new recipes, cooking tips,
            meal ideas, and food inspiration.
          </p>

          {/* --------------------------------------------------
              Success Message
          -------------------------------------------------- */}

          {submitted ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-green-600 shadow-lg">
              <CheckCircle2 size={19} />
              Thanks! You're on the list.
            </div>
          ) : (
            /* --------------------------------------------------
               Newsletter Form
            -------------------------------------------------- */

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">

                <Mail
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  required
                  className="h-13 w-full rounded-xl border-0 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-400 focus:ring-4 focus:ring-white/30"
                />

              </div>

              <button
                type="submit"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Subscribe
                <ArrowRight size={17} />
              </button>
            </form>
          )}

          {/* Small Note */}

          <p className="relative mt-4 text-xs text-orange-100">
            No spam. Just delicious recipes and useful cooking ideas.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;