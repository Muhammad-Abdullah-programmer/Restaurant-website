import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <main className="overflow-hidden bg-white">

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section
        className="relative isolate bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gray-950/70" />

        <div className="absolute inset-0 -z-10 bg-orange-950/20" />

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-orange-300 backdrop-blur-md">
              Get in touch
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              We'd love to
              <span className="block text-orange-400">
                hear from you.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base sm:leading-8">
              Have a question about a recipe, want to share feedback,
              or simply want to say hello? Send us a message and our
              team will get back to you.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="#contact-form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-extrabold text-white transition hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20"
              >
                Send a Message
                <ArrowRight size={17} />
              </a>

              <Link
                to="/faq"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-extrabold text-white backdrop-blur-md transition hover:bg-white hover:text-gray-950"
              >
                Visit FAQ
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          CONTACT CONTENT
      ================================================== */}

      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            {/* LEFT SIDE */}

            <div>

              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                Contact information
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Let's talk about food.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Whether you have recipe suggestions, questions, or
                feedback, we're always happy to hear from our readers.
              </p>

              <div className="mt-8 space-y-4">

                {/* EMAIL */}

                <a
                  href="mailto:hassanmujtaba0132@gmail.com"
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-100 hover:bg-orange-50"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Mail size={20} />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Email us
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      hassanmujtaba0132@gmail.com
                    </p>

                  </div>

                </a>

                {/* PHONE */}

                <a
                  href="tel:+923001234567"
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-100 hover:bg-orange-50"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Phone size={20} />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Call us
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      +92 3356481414
                    </p>

                  </div>

                </a>

                {/* LOCATION */}

                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-100 hover:bg-orange-50">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <MapPin size={20} />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-bold leading-6 text-gray-900">
                      Pakistan
                      <br />
                      Islamabad / Rawalpindi
                    </p>

                  </div>

                </div>

              </div>

              {/* WORKING HOURS */}

              <div className="mt-6 rounded-2xl border border-gray-100 p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white">
                    <Clock3 size={18} />
                  </div>

                  <div>

                    <h3 className="text-sm font-black text-gray-950">
                      Working Hours
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Monday – Friday · 9:00 AM – 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ==================================================
                CONTACT FORM
            ================================================== */}

            <div
              id="contact-form"
              className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/5 sm:p-8"
            >

              <div className="mb-7">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  <MessageCircle size={20} />
                </div>

                <h2 className="mt-5 text-2xl font-black text-gray-950">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form below and we'll get back to you
                  as soon as possible.
                </p>

              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been submitted.");
                }}
                className="space-y-5"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />

                  </div>

                </div>

                {/* SUBJECT */}

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-bold text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-gray-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    required
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-sm font-extrabold text-white transition hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Send Message

                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

                <p className="text-center text-[11px] leading-5 text-gray-400">
                  We respect your privacy and will never share your
                  information with third parties.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          PAKISTAN MAP SECTION
      ================================================== */}

      <section className="bg-[#fffaf5] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-sm">

            <div className="grid lg:grid-cols-2">

              {/* ==================================================
                  OPEN STREET MAP
              ================================================== */}

             

              {/* ==================================================
                  LOCATION CONTENT
              ================================================== */}

              <div className="flex items-center p-8 sm:p-10 lg:p-14">

                <div>

                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                    Our Location
                  </span>

                  <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                    Serving food lovers across Pakistan.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    Recipe Corner is created for food lovers who enjoy
                    simple homemade meals, delicious recipes, and useful
                    cooking inspiration.
                  </p>

                  <div className="mt-7 space-y-4">

                    {/* BASED IN */}

                    <div className="flex items-start gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                        <MapPin size={18} />
                      </div>

                      <div>

                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Based in
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-900">
                          Islamabad / Rawalpindi, Pakistan
                        </p>

                      </div>

                    </div>

                    {/* EMAIL */}

                    <div className="flex items-start gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                        <Mail size={18} />
                      </div>

                      <div>

                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Email
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-900">
                          hassanmujtaba0132@gmail.com
                        </p>

                      </div>

                    </div>

                  </div>

                  <Link
                    to="/faq"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-orange-500"
                  >
                    Visit our FAQ

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          BOTTOM CTA
      ================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl rounded-[2rem] bg-gray-950 px-6 py-12 text-center sm:px-10">

          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Looking for recipe inspiration?
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Explore our collection of easy, delicious recipes for
            every occasion.
          </p>

          <Link
            to="/categories"
            className="group mt-7 inline-flex h-12 items-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-extrabold text-white transition hover:bg-orange-600"
          >
            Explore Recipes

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />

          </Link>

        </div>

      </section>

    </main>
  );
}

export default Contact;