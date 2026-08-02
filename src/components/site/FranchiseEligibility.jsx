import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const eligibilityItems = [
  { req: "Age 21 and above", required: true },
  { req: "Indian citizen or registered business entity", required: true },
  { req: "Minimum investment capital available", required: true },
  { req: "Commercial space in a high-footfall area", required: true },
  { req: "Commitment to follow Chaiway SOPs", required: true },
  { req: "Willingness to learn and manage operations", required: true },
  { req: "Prior food industry experience", required: false },
  { req: "Chef or kitchen staff background", required: false },
  { req: "Large warehouse or storage space", required: false },
  { req: "Multiple locations at once (for first-timers)", required: false },
];

const idealProfiles = [
  {
    title: "First-Time Business Owners",
    desc: "No experience needed. Chaiway's training and SOP system gets you up and running in weeks.",
    emoji: "🚀",
  },
  {
    title: "Working Professionals",
    desc: "Run the outlet with hired staff. The POS and daily reports keep you fully informed remotely.",
    emoji: "💼",
  },
  {
    title: "Retired Individuals",
    desc: "A stable, low-risk business opportunity with steady daily footfall and simple operations.",
    emoji: "🎯",
  },
  {
    title: "Family Businesses",
    desc: "A fantastic family-run venture. Café operations are streamlined for teams of 2–4.",
    emoji: "👨‍👩‍👧",
  },
  {
    title: "Real Estate Owners",
    desc: "Already have a commercial space? Convert it into a Chaiway outlet for consistent returns.",
    emoji: "🏪",
  },
  {
    title: "Aspiring Entrepreneurs",
    desc: "Take your first big step into entrepreneurship with a proven brand and national presence.",
    emoji: "✨",
  },
];

export function FranchiseEligibility() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="chip mb-4 inline-flex">Eligibility</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chai-cream">
            Who Can Own a{" "}
            <span className="text-gradient-orange">Chaiway Outlet?</span>
          </h2>
          <p className="mt-4 text-chai-muted max-w-2xl mx-auto">
            Chaiway is designed to be accessible. Most of what matters is commitment, not experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-chai-orange/20 bg-chai-charcoal/60 p-8 text-center"
          >
            <h3 className="font-display text-xl font-bold text-chai-cream mb-6 text-center">Requirements Checklist</h3>
            <div className="space-y-3">
              {eligibilityItems.map((item) => (
                <div
                  key={item.req}
                  className={`flex items-start gap-3 p-3 rounded-xl ${
                    item.required
                      ? "bg-chai-lime/6 border border-chai-lime/15"
                      : "bg-chai-black/30 border border-white/5 opacity-60"
                  }`}
                >
                  {item.required ? (
                    <CheckCircle2 className="h-5 w-5 text-chai-lime shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-chai-muted shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${item.required ? "text-chai-cream font-medium" : "text-chai-muted line-through"}`}>
                    {item.req}
                  </span>
                  {!item.required && (
                    <span className="ml-auto text-[10px] font-semibold text-chai-lime bg-chai-lime/10 border border-chai-lime/20 rounded-full px-2 py-0.5 shrink-0">
                      NOT required
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ideal Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-bold text-chai-cream mb-6 text-center">Who This Is Perfect For</h3>
            <div className="grid gap-4">
              {idealProfiles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-chai-orange/12 bg-chai-charcoal/40 p-4 hover:border-chai-orange/30 hover:bg-chai-orange/5 transition-all duration-300 text-center"
                >
                  <span className="text-2xl shrink-0">{p.emoji}</span>
                  <div className="text-center">
                    <h4 className="font-semibold text-chai-cream text-sm text-center">{p.title}</h4>
                    <p className="text-xs text-chai-muted mt-0.5 leading-relaxed text-center">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-chai-muted text-center max-w-xl mx-auto mb-6 text-base">
            Think you're a good fit? Our team will guide you through the next steps.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-8 py-4 text-base font-bold text-[#1a0e00] shadow-[0_12px_36px_-6px_rgba(244,123,0,0.6)] hover:shadow-[0_18px_48px_-6px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Submit Your Application <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
