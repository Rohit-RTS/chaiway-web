import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    city: "Pune",
    model: "Chaiway Pro",
    since: "2022",
    quote:
      "Best decision I ever made. Started with Chaiway Pro near a college campus. Within 4 months, daily orders crossed 200+. The POS system and recipe standardisation made management very easy.",
    rating: 5,
    initials: "RK",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Priya Sharma",
    city: "Nagpur",
    model: "Chaiway Dine",
    since: "2023",
    quote:
      "The support team helped me choose the location, set up the outlet and even guided me through Zomato onboarding. Zero royalty model means my monthly earnings have been very rewarding.",
    rating: 5,
    initials: "PS",
    color: "from-rose-500 to-orange-400",
  },
  {
    name: "Sanjay Patil",
    city: "Nanded",
    model: "Chaiway Kiosk",
    since: "2021",
    quote:
      "I was a first-time business owner with no food industry experience. Chaiway's training was thorough. The chef-less SOP model means I don't depend on expensive staff.",
    rating: 5,
    initials: "SP",
    color: "from-amber-500 to-yellow-400",
  },
  {
    name: "Meena Agarwal",
    city: "Indore",
    model: "Chaiway Pro",
    since: "2023",
    quote:
      "What attracted me was the 0% royalty. It truly means every rupee of profit is mine. The brand is recognised and footfall comes naturally near my location.",
    rating: 5,
    initials: "MA",
    color: "from-chai-orange to-chai-gold",
  },
  {
    name: "Vikram Singh",
    city: "Bhopal",
    model: "Chaiway Dine",
    since: "2022",
    quote:
      "My Chaiway Dine has become the go-to hangout spot in our area. The premium seating and full menu attract families, students and office groups throughout the day.",
    rating: 5,
    initials: "VS",
    color: "from-orange-600 to-red-400",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-chai-gold text-chai-gold" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-chai-orange/6 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="chip mb-4 inline-flex">
            <Star className="h-3.5 w-3.5 text-chai-gold fill-chai-gold" />
            Franchisee Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chai-cream">
            Straight from Our{" "}
            <span className="text-gradient-orange">Franchise Partners</span>
          </h2>
          <p className="mt-4 text-chai-muted max-w-xl mx-auto">
            Real stories from real partners who chose Chaiway and built their own business.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-chai-orange/20 bg-chai-charcoal/70 p-8 sm:p-12 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-8 h-12 w-12 text-chai-orange/10" />

              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Avatar */}
                <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg`}>
                  <span className="font-display font-extrabold text-[#1a0e00] text-xl">{t.initials}</span>
                </div>

                <div className="flex-1">
                  <StarRating count={t.rating} />
                  <p className="mt-4 text-base sm:text-lg text-chai-cream leading-relaxed font-medium">
                    "{t.quote}"
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div>
                      <p className="font-bold text-chai-cream text-sm">{t.name}</p>
                      <p className="text-xs text-chai-muted">{t.city}</p>
                    </div>
                    <div className="h-8 w-px bg-chai-orange/20" />
                    <div>
                      <p className="text-xs text-chai-gold font-semibold uppercase tracking-wide">{t.model}</p>
                      <p className="text-xs text-chai-muted">Since {t.since}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2.5 bg-chai-orange"
                      : "w-2.5 h-2.5 bg-chai-orange/30 hover:bg-chai-orange/60"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-chai-orange/30 flex items-center justify-center text-chai-cream hover:bg-chai-orange/10 hover:border-chai-orange/60 transition-all duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-chai-orange/30 flex items-center justify-center text-chai-cream hover:bg-chai-orange/10 hover:border-chai-orange/60 transition-all duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
