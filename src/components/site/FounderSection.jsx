import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Star, Shield, Instagram } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const values = [
  {
    icon: Heart,
    title: "Hospitality",
    desc: "Every Chaiway customer is a guest. Warmth, service, and a welcoming environment are non-negotiable.",
    color: "from-red-500/20 to-rose-500/5",
    border: "border-red-500/25",
    iconColor: "text-red-400",
  },
  {
    icon: Shield,
    title: "Hygiene",
    desc: "FSSAI-compliant kitchens, clean counters, and food-safe practices at every outlet.",
    color: "from-chai-lime/10 to-transparent",
    border: "border-chai-lime/20",
    iconColor: "text-chai-lime",
  },
  {
    icon: Target,
    title: "Consistency",
    desc: "Same recipe. Same taste. Same experience — whether you're in Pune or Hyderabad.",
    color: "from-chai-orange/10 to-transparent",
    border: "border-chai-orange/25",
    iconColor: "text-chai-orange",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Menu R&D, tech-enabled POS systems, and seasonal specials that keep customers excited.",
    color: "from-chai-gold/10 to-transparent",
    border: "border-chai-gold/25",
    iconColor: "text-chai-gold",
  },
  {
    icon: Star,
    title: "Partner Success",
    desc: "A franchise partner's success is Chaiway's success. We grow only when you grow.",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
];

const timelineEvents = [
  { year: "2018", event: "Chaiway founded in Nanded, Maharashtra", highlight: true },
  { year: "2019", event: "First 5 outlets opened across Maharashtra" },
  { year: "2020", event: "POS system and recipe standardisation launched" },
  { year: "2021", event: "Expanded to 15+ outlets; Zomato & Swiggy integration" },
  { year: "2022", event: "Reached 25+ outlets; entered new states" },
  { year: "2023", event: "40+ active outlets; Dine format launched", highlight: true },
  { year: "2024", event: "Brand refresh & nationwide franchise expansion strategy", highlight: true },
  { year: "2025+", event: "Vision: 200+ outlets across India", highlight: true },
];

export function FounderSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Founder */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center flex flex-col items-center"
          >
            <span className="chip mb-5 inline-flex">Founder's Message</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-chai-cream leading-tight text-center">
              "Chai is more than a drink.{" "}
              <span className="text-gradient-orange">It's India's culture.</span>"
            </h2>
            <p className="mt-5 text-chai-muted leading-relaxed text-center max-w-xl">
              Chaiway was born from a simple belief — that quality chai and wholesome snacks should be accessible to every Indian, regardless of their budget. What started as one outlet in Nanded has grown into a franchise movement spreading across states.
            </p>
            <p className="mt-4 text-chai-muted leading-relaxed text-center max-w-xl">
              Our founder, <span className="text-chai-cream font-semibold">Aba Patil Londhe</span>, built Chaiway with a clear mission: to empower first-time entrepreneurs with a proven, low-risk business model that carries the weight of a recognised brand.
            </p>
            <p className="mt-4 text-chai-muted leading-relaxed text-center max-w-xl">
              With zero royalty, standardised recipes, and full support from day one, Chaiway continues to expand its footprint while holding true to its founding promise — quality, consistency, and franchisee success.
            </p>
            <a
              href={CONTACT.founderInstagram || "https://www.instagram.com/abapatillondhe?igsh=ZTQ2dGo4bXRqZ202"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-chai-orange/30 bg-chai-charcoal/80 backdrop-blur-sm w-full max-w-md hover:border-chai-orange/70 hover:shadow-[0_0_30px_rgba(244,123,0,0.3)] hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-br from-chai-orange via-chai-gold to-chai-orange/40 shadow-[0_0_25px_rgba(244,123,0,0.35)] group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/founder.jpeg"
                  alt="Aba Patil Londhe - Founder, Chaiway Café"
                  className="w-full h-full rounded-full object-cover object-center bg-chai-black"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div className="text-left min-w-0">
                <p className="font-bold text-chai-cream text-sm sm:text-base lg:text-lg group-hover:text-chai-orange transition-colors truncate">
                  Aba Patil Londhe
                </p>
                <p className="text-xs sm:text-sm text-chai-gold font-semibold leading-snug">CEO &amp; Founder</p>
                <p className="text-[11px] text-chai-muted mt-0.5">Foodlok Foods &amp; Beverages Pvt. Ltd.</p>
                <p className="text-[11px] text-chai-orange font-medium mt-1.5 inline-flex items-center gap-1 group-hover:underline">
                  <Instagram className="w-3 h-3" /> View Instagram →
                </p>
              </div>
            </a>
          </motion.div>

          {/* Growth Timeline — Animated Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-xl font-bold text-chai-cream mb-8 text-center">Growth Timeline</h3>
            <div className="relative space-y-0">
              {/* Animated vertical line — draws from top to bottom */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
                style={{ originY: 0 }}
                className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-chai-orange via-chai-gold/60 to-chai-orange/10"
              />

              {timelineEvents.map((ev, i) => (
                <div key={ev.year} className={`relative flex gap-4 ${i === timelineEvents.length - 1 ? "pb-0" : "pb-5"}`}>

                  {/* Animated dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.4, ease: "backOut" }}
                    className="relative z-10 shrink-0"
                  >
                    {/* Pulse ring on highlighted nodes */}
                    {ev.highlight && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.12, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-chai-orange/30"
                      />
                    )}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      ev.highlight
                        ? "bg-gradient-to-br from-chai-orange to-chai-gold shadow-[0_0_20px_rgba(244,123,0,0.6)]"
                        : "bg-chai-charcoal border border-chai-orange/30"
                    }`}>
                      <span className={`text-[9px] font-extrabold ${ev.highlight ? "text-[#1a0e00]" : "text-chai-gold"}`}>
                        {ev.year.slice(-2)}
                      </span>
                    </div>
                  </motion.div>

                  {/* Card slides in */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="pt-2"
                  >
                    <span className={`text-xs font-bold uppercase tracking-wider ${ev.highlight ? "text-chai-orange" : "text-chai-gold"}`}>
                      {ev.year}
                    </span>
                    <p className="text-sm text-chai-cream font-medium mt-0.5">{ev.event}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Brand Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="chip mb-4 inline-flex">Brand Values</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-chai-cream">
            The Principles Behind <span className="text-gradient-orange">Every Cup</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative rounded-3xl border ${v.border} bg-gradient-to-b ${v.color} p-6 text-center overflow-hidden cursor-default`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-chai-charcoal/80 ${v.iconColor} mb-4 mx-auto`}>
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-chai-cream text-base">{v.title}</h3>
              <p className="mt-2 text-xs text-chai-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
