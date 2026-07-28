import React from "react";
import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function GalleryHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(244,123,0,0.16), transparent 60%), linear-gradient(180deg,#080604 0%,#14100c 100%)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="chip inline-flex mb-6"
        >
          <Camera className="h-3.5 w-3.5 text-chai-gold" />
          Outlet Gallery
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-chai-cream tracking-tight"
        >
          See Chaiway{" "}
          <span className="text-gradient-orange inline-block">in Action</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-chai-muted max-w-xl leading-relaxed mx-auto"
        >
          A visual journey through Chaiway café outlets, interiors, kiosks, food photography and brand moments from across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-10"
        >
          {[
            { val: "40+", label: "Active Outlets" },
            { val: "12+", label: "Cities" },
            { val: "2018", label: "Founded" },
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
          className="mt-8"
        >
          <Link
            to="/franchise"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-7 py-3.5 text-sm font-bold text-[#1a0e00] shadow-[0_10px_30px_-6px_rgba(244,123,0,0.6)] hover:shadow-[0_16px_40px_-6px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Own One Like This <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
