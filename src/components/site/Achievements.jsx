import React from "react";
import { motion } from "framer-motion";
import { Award, Users, MapPin, TrendingUp, Star, Coffee, Zap } from "lucide-react";

const achievements = [
  {
    icon: Coffee,
    value: "2018",
    label: "Founded",
    desc: "Started operations in Nanded, Maharashtra",
    color: "from-chai-orange/20 to-transparent",
    border: "border-chai-orange/25",
  },
  {
    icon: MapPin,
    value: "40+",
    label: "Live Outlets",
    desc: "Active franchise outlets across India",
    color: "from-chai-gold/15 to-transparent",
    border: "border-chai-gold/25",
  },
  {
    icon: Users,
    value: "12+",
    label: "Cities",
    desc: "States and cities with Chaiway presence",
    color: "from-chai-lime/10 to-transparent",
    border: "border-chai-lime/20",
  },
  {
    icon: TrendingUp,
    value: "200",
    label: "5-Year Goal",
    desc: "Target outlets across India by 2028",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/20",
  },
  {
    icon: Award,
    value: "0%",
    label: "Royalty",
    desc: "Industry-leading zero-royalty model",
    color: "from-chai-orange/15 to-transparent",
    border: "border-chai-orange/20",
  },
  {
    icon: Star,
    value: "4.5★",
    label: "Partner Rating",
    desc: "Average franchisee satisfaction score",
    color: "from-yellow-500/10 to-transparent",
    border: "border-yellow-500/20",
  },
  {
    icon: Zap,
    value: "30–60",
    label: "Days to Launch",
    desc: "From agreement signing to grand opening",
    color: "from-cyan-500/10 to-transparent",
    border: "border-cyan-500/15",
  },
];

const mediaMentions = [
  "Featured in regional business press",
  "Recognised by MSME bodies",
  "Multiple franchise award nominations",
  "Featured in franchise discovery platforms",
];

export function Achievements() {
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
            <Award className="h-3.5 w-3.5 text-chai-gold" />
            Milestones & Achievements
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chai-cream">
            The Numbers That Tell{" "}
            <span className="text-gradient-orange">Our Story</span>
          </h2>
          <p className="mt-4 text-chai-muted max-w-2xl mx-auto">
            From a single outlet in Nanded to a growing national network — Chaiway's numbers reflect real momentum.
          </p>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-3xl border ${a.border} bg-gradient-to-b ${a.color} p-6 group cursor-default text-center ${i >= 4 ? "lg:col-span-1" : ""}`}
            >
              <div className="flex justify-center items-center w-11 h-11 rounded-2xl bg-chai-charcoal/80 text-chai-orange mb-4 mx-auto">
                <a.icon className="h-5 w-5" />
              </div>
              <p className="font-display text-4xl font-extrabold text-gradient-orange leading-none text-center">{a.value}</p>
              <p className="font-bold text-chai-cream text-base mt-1 text-center">{a.label}</p>
              <p className="text-xs text-chai-muted mt-2 leading-relaxed text-center">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Media Trust */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-chai-orange/15 bg-chai-charcoal/40 p-8 sm:p-10"
        >
          <h3 className="font-display text-xl font-bold text-chai-cream text-center mb-8">
            Recognition & <span className="text-gradient-orange">Media Trust</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {mediaMentions.map((item, i) => (
              <div
                key={item}
                className="flex items-center justify-center gap-3 rounded-2xl border border-chai-gold/15 bg-chai-black/30 p-4 text-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-chai-orange to-chai-gold shrink-0 shadow-[0_0_8px_rgba(244,123,0,0.5)]" />
                <span className="text-sm text-chai-cream text-center">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
