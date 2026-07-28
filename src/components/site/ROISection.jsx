import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, Clock, Users } from "lucide-react";

const roiCards = [
  {
    model: "Kiosk",
    investment: "₹5.5L*",
    area: "60–100 sq.ft.",
    dailyOrders: "80–150",
    avgBill: "₹35–50",
    monthlyRevPotential: "₹90K–2L",
    breakeven: "12–18 months*",
    color: "border-chai-orange/30 from-chai-orange/8",
    badge: null,
  },
  {
    model: "Pro",
    investment: "₹7.5L*",
    area: "100–200 sq.ft.",
    dailyOrders: "150–300",
    avgBill: "₹50–80",
    monthlyRevPotential: "₹2L–4.5L",
    breakeven: "10–15 months*",
    color: "border-chai-orange from-chai-orange/15",
    badge: "Most Popular",
  },
  {
    model: "Dine",
    investment: "₹9.5L*",
    area: "300–500 sq.ft.",
    dailyOrders: "200–400",
    avgBill: "₹80–150",
    monthlyRevPotential: "₹3L–7L",
    breakeven: "12–20 months*",
    color: "border-chai-gold/30 from-chai-gold/8",
    badge: null,
  },
];

const roiFactors = [
  { icon: TrendingUp, title: "Daily Footfall", desc: "High-traffic locations drive consistent daily orders across all formats." },
  { icon: IndianRupee, title: "Low Overheads", desc: "Chef-less, SOP-driven model keeps labour and ingredient costs controlled." },
  { icon: Clock, title: "Long Operating Hours", desc: "Chaiway outlets run 14–16 hrs/day, maximising revenue windows." },
  { icon: Users, title: "Mass Market Appeal", desc: "Menu priced for every customer — students, families, professionals." },
];

export function ROISection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="chip mb-4 inline-flex">
            <TrendingUp className="h-3.5 w-3.5 text-chai-gold" />
            ROI Overview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chai-cream">
            Revenue{" "}
            <span className="text-gradient-orange">Potential</span>
          </h2>
          <p className="mt-4 text-chai-muted max-w-2xl mx-auto">
            Indicative revenue benchmarks based on outlet format, location and daily footfall. Actual results vary by operations and city.
          </p>
        </motion.div>

        {/* ROI Cards */}
        <div className="grid gap-6 lg:grid-cols-3 mb-20">
          {roiCards.map((card, i) => (
            <motion.div
              key={card.model}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl border bg-gradient-to-b ${card.color} p-7 overflow-hidden`}
            >
              {card.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-4 py-1 text-[11px] font-bold text-[#1a0e00] uppercase tracking-wide shadow">
                  {card.badge}
                </div>
              )}

              <h3 className="font-display text-2xl font-extrabold text-chai-cream mt-2">{card.model}</h3>
              <p className="text-sm text-chai-muted mt-1">{card.area}</p>

              <div className="mt-5">
                <p className="text-xs text-chai-muted uppercase tracking-wider">Investment</p>
                <p className="font-display text-3xl font-extrabold text-gradient-orange mt-0.5">{card.investment}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-chai-muted uppercase tracking-wider">Daily Orders</p>
                  <p className="text-lg font-bold text-chai-cream mt-0.5">{card.dailyOrders}</p>
                </div>
                <div>
                  <p className="text-[11px] text-chai-muted uppercase tracking-wider">Avg Bill</p>
                  <p className="text-lg font-bold text-chai-cream mt-0.5">{card.avgBill}</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-chai-black/40 p-4 border border-chai-orange/10">
                <p className="text-[11px] text-chai-muted uppercase tracking-wider">Monthly Revenue Potential</p>
                <p className="text-xl font-extrabold text-chai-gold font-display mt-1">{card.monthlyRevPotential}</p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-chai-muted">
                <Clock className="h-4 w-4 text-chai-lime shrink-0" />
                Break-even: <span className="text-chai-cream font-medium">{card.breakeven}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Factors */}
        <div className="rounded-3xl border border-chai-orange/15 bg-chai-charcoal/50 p-8 sm:p-12">
          <h3 className="font-display text-2xl font-bold text-chai-cream text-center mb-10">
            Factors That Drive <span className="text-gradient-orange">High Returns</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiFactors.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-chai-orange to-chai-gold mb-4">
                  <f.icon className="h-6 w-6 text-[#1a0e00]" />
                </div>
                <h4 className="font-bold text-chai-cream">{f.title}</h4>
                <p className="mt-2 text-sm text-chai-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-chai-muted/70">
          *Figures are indicative estimates only. Revenue and ROI depend on location, rent, operations, staff, local demand and footfall. Final investment may vary by city and setup requirements.
        </p>
      </div>
    </section>
  );
}
