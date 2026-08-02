import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

const menuHighlights = [
  { icon: "🍵", label: "15+ Chai Varieties", desc: "Kadak, Kullad, Masala, Tandoor & more" },
  { icon: "☕", label: "Hot & Cold Coffee", desc: "Classic, chocolate & cold brew options" },
  { icon: "🍕", label: "6\" & 8\" Pizzas", desc: "12 varieties starting at ₹120" },
  { icon: "🍔", label: "Burgers & Snacks", desc: "Veg burgers, fries, pops & more" },
  { icon: "🍜", label: "Maggi & Pasta", desc: "6 Maggi varieties, 3 pasta options" },
  { icon: "🧋", label: "Shakes & Lassi", desc: "Cold coffee, Kitkat, Oreo, Lassi" },
];

export function MenuHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(244,123,0,0.18), transparent 60%), linear-gradient(180deg,#080604 0%,#14100c 100%)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Large BG text */}
      <div className="absolute bottom-4 left-0 right-0 text-center -z-10 pointer-events-none overflow-hidden">
        <span className="text-[100px] sm:text-[160px] lg:text-[200px] font-black text-chai-orange/[0.03] font-display leading-none select-none">
          MENU
        </span>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full flex flex-col items-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="chip inline-flex mb-6"
        >
          <UtensilsCrossed className="h-3.5 w-3.5 text-chai-gold" />
          Our Full Menu
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-chai-cream tracking-tight"
        >
          A Menu Made for{" "}
          <span className="text-gradient-orange-shimmer inline-block">Everyday</span>{" "}
          India
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-chai-muted max-w-2xl leading-relaxed mx-auto"
        >
          From kadak chai at ₹12 to Chaiway Special Pizza at ₹299 — our menu is designed for value, variety, and taste that keeps customers coming back daily.
        </motion.p>

        {/* Category Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full"
        >
          {menuHighlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              className="flex flex-col items-center text-center rounded-2xl border border-chai-orange/15 bg-chai-charcoal/50 p-4 hover:border-chai-orange/40 hover:bg-chai-orange/8 transition-all duration-300 group cursor-default"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{h.icon}</span>
              <p className="text-xs font-bold text-chai-cream leading-tight">{h.label}</p>
              <p className="text-[10px] text-chai-muted mt-1 leading-tight">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Centered */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap justify-center gap-10"
        >
          {[
            { val: "50+", label: "Menu Items" },
            { val: "₹12", label: "Starting Price" },
            { val: "100%", label: "Vegetarian" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-gradient-orange">{s.val}</p>
              <p className="text-xs text-chai-muted mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
