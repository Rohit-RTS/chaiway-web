import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, TrendingUp, Shield, Zap } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/contact";

const badges = [
  { icon: Shield, label: "0% Royalty" },
  { icon: Zap, label: "30-Day Setup" },
  { icon: TrendingUp, label: "40+ Outlets" },
];

export function FranchiseHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden text-center">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(244,123,0,0.2), transparent 60%), linear-gradient(180deg,#080604 0%,#14100c 100%)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.045]" style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Background ambient text */}
      <div className="absolute bottom-6 left-0 right-0 text-center -z-10 pointer-events-none overflow-hidden">
        <span className="text-[110px] sm:text-[170px] lg:text-[210px] font-black text-chai-orange/[0.03] font-display leading-none select-none tracking-tighter">
          FRANCHISE
        </span>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full flex flex-col items-center">
        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {badges.map((b) => (
            <span key={b.label} className="chip inline-flex items-center gap-1.5">
              <b.icon className="h-3.5 w-3.5 text-chai-gold" />
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-chai-cream tracking-tight"
        >
          Own a{" "}
          <span className="text-gradient-orange-shimmer inline-block">Chaiway Café</span>
          <br />
          in Your City
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-xl text-chai-muted max-w-2xl leading-relaxed mx-auto"
        >
          India's fastest-growing tea café franchise. Low investment, zero royalty, complete operational support — and a menu the masses love every day.
        </motion.p>

        {/* Action Buttons Centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-8 py-4 text-base font-bold text-[#1a0e00] shadow-[0_12px_36px_-6px_rgba(244,123,0,0.65)] hover:shadow-[0_18px_48px_-6px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Apply Now <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={buildWhatsAppLink("Hi, I want to know about Chaiway franchise opportunity.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-chai-orange/40 px-8 py-4 text-base font-semibold text-chai-cream hover:bg-chai-orange/12 hover:border-chai-orange/70 transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5 text-chai-lime" /> WhatsApp Us
          </a>
        </motion.div>

        {/* Stats Row Centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 grid grid-cols-3 gap-6 sm:gap-10 max-w-md mx-auto"
        >
          {[
            { val: "₹5.5L*", label: "Starting Investment" },
            { val: "0%", label: "Royalty" },
            { val: "40+", label: "Live Outlets" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-gradient-orange">{s.val}</p>
              <p className="text-[11px] sm:text-xs text-chai-muted mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
