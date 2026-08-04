import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Award, Zap, Shield, TrendingUp, Users, Coffee,
  CheckCircle, ArrowRight
} from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Proven Brand",
    desc: "40+ outlets across India with a trusted name built since 2018. Step into a recognised brand from day one.",
    color: "from-chai-orange to-chai-gold",
    glow: "rgba(244,123,0,0.25)",
  },
  {
    icon: Zap,
    title: "Zero Royalty",
    desc: "100% of your operational margins stay with you, every single month. No hidden charges, ever.",
    color: "from-chai-gold to-yellow-400",
    glow: "rgba(255,177,59,0.25)",
  },
  {
    icon: Shield,
    title: "Full Support System",
    desc: "Location guidance, POS software, training, recipes, marketing — we back you from day one to grand opening.",
    color: "from-chai-orange to-red-500",
    glow: "rgba(244,123,0,0.2)",
  },
  {
    icon: TrendingUp,
    title: "Low Investment",
    desc: "Start from just ₹5.5 Lakh. Mass-market menu with high daily footfall potential.",
    color: "from-chai-lime to-green-500",
    glow: "rgba(182,230,0,0.2)",
  },
];

const highlights = [
  { label: "Chef-less model" },
  { label: "POS included" },
  { label: "Recipe standardized" },
  { label: "Zomato + Swiggy ready" },
  { label: "40+ active outlets" },
  { label: "30–60 day setup" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HomeFeatures() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <span className="chip mb-4 inline-flex">
            <Coffee className="h-3.5 w-3.5 text-chai-gold" />
            Why Choose Chaiway
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chai-cream">
            Built for{" "}
            <span className="text-gradient-orange">First-Time Founders</span>
          </h2>
          <p className="mt-4 text-chai-muted max-w-2xl mx-auto text-base sm:text-lg">
            Chaiway is engineered to be India's most accessible café franchise — low risk, full support, and zero royalty.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative rounded-3xl border border-chai-orange/15 bg-chai-charcoal/60 p-7 overflow-hidden group cursor-default text-center flex flex-col items-center"
              style={{ boxShadow: `0 0 0 0 ${p.glow}` }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.glow}, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} shadow-lg mb-5 relative z-10`}
              >
                <p.icon className="h-6 w-6 text-[#1a0e00]" />
              </div>

              <h3 className="font-display font-bold text-lg text-chai-cream relative z-10 text-center">{p.title}</h3>
              <p className="mt-2 text-sm text-chai-muted leading-relaxed relative z-10 text-center">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 rounded-3xl border border-chai-orange/15 bg-gradient-to-r from-chai-charcoal/80 to-chai-black/60 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-chai-lime shrink-0" />
                <span className="text-sm font-semibold text-chai-cream">{h.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/franchise"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-7 py-3.5 text-sm font-bold text-[#1a0e00] shadow-[0_10px_30px_-6px_rgba(244,123,0,0.6)] hover:shadow-[0_16px_40px_-6px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Franchise Models <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-chai-orange/35 px-7 py-3.5 text-sm font-semibold text-chai-cream hover:bg-chai-orange/10 hover:border-chai-orange/60 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
