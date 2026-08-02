import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(244,123,0,0.16), transparent 55%), linear-gradient(180deg,#080604 0%,#14100c 100%)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Large BG word */}
      <div className="absolute bottom-4 left-0 right-0 text-center -z-10 pointer-events-none overflow-hidden">
        <span className="text-[100px] sm:text-[160px] lg:text-[200px] font-black text-chai-orange/[0.03] font-display leading-none select-none">STORY</span>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="chip inline-flex mb-6"
        >
          <BookOpen className="h-3.5 w-3.5 text-chai-gold" />
          Our Story
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-chai-cream tracking-tight"
        >
          Built on{" "}
          <span className="text-gradient-orange-shimmer inline-block">Chai.</span>
          <br />
          Driven by Vision.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-chai-muted max-w-xl leading-relaxed mx-auto"
        >
          Chaiway Café is a venture of Foodlok Foods & Beverages Pvt. Ltd. — born to bring India's everyday chai culture into a modern, hygienic, and scalable café format.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-10"
        >
          {[
            { val: "2018", label: "Founded" },
            { val: "40+", label: "Outlets" },
            { val: "200", label: "5-Year Vision" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-gradient-orange">{s.val}</p>
              <p className="text-xs text-chai-muted mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/franchise"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-7 py-3.5 text-sm font-bold text-[#1a0e00] shadow-[0_10px_30px_-6px_rgba(244,123,0,0.6)] hover:shadow-[0_16px_40px_-6px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Join the Journey <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-chai-orange/35 px-7 py-3.5 text-sm font-semibold text-chai-cream hover:bg-chai-orange/10 hover:border-chai-orange/60 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
