import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Star, Shield } from "lucide-react";

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
  { year: "2025+", event: "Vision: 200 outlets across India", highlight: true },
];

export function FounderSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Founder */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="chip mb-5 inline-flex">Founder's Message</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-chai-cream leading-tight">
              "Chai is more than a drink.{" "}
              <span className="text-gradient-orange">It's India's culture.</span>"
            </h2>
            <p className="mt-5 text-chai-muted leading-relaxed">
              Chaiway was born from a simple belief — that quality chai and wholesome snacks should be accessible to every Indian, regardless of their budget. What started as one outlet in Nanded has grown into a franchise movement spreading across states.
            </p>
            <p className="mt-4 text-chai-muted leading-relaxed">
              Our founder, <span className="text-chai-cream font-semibold">Aba Patil Londhe</span>, built Chaiway with a clear mission: to empower first-time entrepreneurs with a proven, low-risk business model that carries the weight of a recognised brand.
            </p>
            <p className="mt-4 text-chai-muted leading-relaxed">
              With zero royalty, standardised recipes, and full support from day one, Chaiway continues to expand its footprint while holding true to its founding promise — quality, consistency, and franchisee success.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-chai-orange to-chai-gold flex items-center justify-center font-bold font-display text-[#1a0e00] text-lg">
                AP
              </div>
              <div>
                <p className="font-bold text-chai-cream">Aba Patil Londhe</p>
                <p className="text-sm text-chai-gold">Founder, Chaiway Café</p>
                <p className="text-xs text-chai-muted">Foodlok Foods & Beverages Pvt. Ltd.</p>
              </div>
            </div>
          </motion.div>

          {/* Growth Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-xl font-bold text-chai-cream mb-8">Growth Timeline</h3>
            <div className="relative space-y-0">
              {/* Vertical line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-chai-orange via-chai-gold/50 to-chai-orange/10" />

              {timelineEvents.map((ev, i) => (
                <motion.div
                  key={ev.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex gap-4 pb-6 ${i === timelineEvents.length - 1 ? "pb-0" : ""}`}
                >
                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    ev.highlight
                      ? "bg-gradient-to-br from-chai-orange to-chai-gold shadow-[0_0_20px_rgba(244,123,0,0.5)]"
                      : "bg-chai-charcoal border border-chai-orange/30"
                  }`}>
                    <span className={`text-[9px] font-extrabold ${ev.highlight ? "text-[#1a0e00]" : "text-chai-gold"}`}>
                      {ev.year.slice(-2)}
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${ev.highlight ? "text-chai-orange" : "text-chai-gold"}`}>
                      {ev.year}
                    </span>
                    <p className="text-sm text-chai-cream font-medium mt-0.5">{ev.event}</p>
                  </div>
                </motion.div>
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
