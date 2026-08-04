import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, XCircle, ArrowRight, HandCoins, Briefcase, Leaf, Home, Store, Flame } from "lucide-react";

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
    icon: HandCoins,
    badgeBg: "bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent",
    border: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    title: "Working Professionals",
    desc: "Run the outlet with hired staff. The POS and daily reports keep you fully informed remotely.",
    icon: Briefcase,
    badgeBg: "bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    title: "Retired Individuals",
    desc: "A stable, low-risk business opportunity with steady daily footfall and simple operations.",
    icon: Leaf,
    badgeBg: "bg-gradient-to-br from-chai-lime/20 via-emerald-500/10 to-transparent",
    border: "border-chai-lime/30",
    iconColor: "text-chai-lime",
  },
  {
    title: "Family Businesses",
    desc: "A fantastic family-run venture. Café operations are streamlined for teams of 2–4.",
    icon: Home,
    badgeBg: "bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-transparent",
    border: "border-rose-500/30",
    iconColor: "text-rose-400",
  },
  {
    title: "Real Estate Owners",
    desc: "Already have a commercial space? Convert it into a Chaiway outlet for consistent returns.",
    icon: Store,
    badgeBg: "bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    title: "Aspiring Entrepreneurs",
    desc: "Take your first big step into entrepreneurship with a proven brand and national presence.",
    icon: Flame,
    badgeBg: "bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-transparent",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
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

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-20">
          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-chai-orange/20 bg-chai-charcoal/60 p-5 sm:p-8"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {idealProfiles.map((p, i) => {
                const IconComponent = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex flex-row items-center gap-3 sm:flex-col sm:items-center rounded-2xl border border-chai-orange/15 bg-chai-charcoal/60 p-4 sm:p-5 hover:border-chai-orange/40 hover:bg-chai-charcoal/90 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border ${p.border} ${p.badgeBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${p.iconColor}`} />
                    </div>
                    <div className="text-left sm:text-center">
                      <h4 className="font-bold text-chai-cream text-sm group-hover:text-chai-orange transition-colors">{p.title}</h4>
                      <p className="text-xs text-chai-muted mt-0.5 sm:mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
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
