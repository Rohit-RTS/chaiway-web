import "./FranchiseModels.css";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { franchiseModels } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";
function FranchiseModels({ compact = false }) {
  return <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Franchise Models" title={<>Pick the Format That <span className="text-gradient-orange">Fits Your City</span></>} subtitle="Three formats engineered for different locations, footfalls and budgets." />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {franchiseModels.map((m, i) => <motion.div
    key={m.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: i * 0.1 }}
    className={`relative rounded-3xl border p-7 sm:p-8 transition-all hover:-translate-y-1 ${m.popular ? "border-chai-orange bg-gradient-to-b from-chai-orange/15 to-chai-charcoal glow-orange" : "border-chai-orange/15 bg-chai-charcoal/60 hover:border-chai-orange/50"}`}
  >
              {/* Top Row — aligned in one line and splitted */}
              <div className="flex items-center justify-between w-full mb-4 min-h-[28px]">
                {m.popular ? (
                  <span style={{ display: "inline-flex", flexDirection: "row", alignItems: "center", gap: "4px", whiteSpace: "nowrap", flexWrap: "nowrap" }} className="rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-3.5 py-1 text-[11px] font-bold text-[#1a0e00] uppercase tracking-wider shadow-md">
                    <Star style={{ display: "inline", verticalAlign: "middle", flexShrink: 0 }} className="h-3.5 w-3.5 fill-current" />
                    <span style={{ display: "inline", whiteSpace: "nowrap" }}>Most Popular</span>
                  </span>
                ) : (
                  <span style={{ display: "inline-block", whiteSpace: "nowrap" }} className="text-[11px] uppercase tracking-wider text-chai-gold font-bold bg-chai-gold/10 border border-chai-gold/20 rounded-full px-3 py-1">
                    Franchise Format
                  </span>
                )}
                <p className="text-[11px] uppercase tracking-wider text-chai-lime font-semibold text-right">{m.bestFor}</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-chai-cream">{m.name}</h3>
                <p className="mt-1.5 text-sm text-chai-muted">{m.area}</p>
                <div className="mt-4 flex items-baseline justify-center gap-1.5">
                  <span className="text-xs text-chai-muted">starts at</span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-gradient-orange">{m.investment}</span>
                </div>
                <p className="mt-1 text-xs text-chai-muted">{m.menu}</p>
              </div>

              <ul className="mt-6 space-y-2.5">
                {m.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm text-chai-cream">
                    <Check className="h-4 w-4 mt-0.5 text-chai-lime shrink-0" />{f}
                  </li>)}
              </ul>

              <Link
    to="/contact"
    search={{ model: m.id }}
    className={`mt-7 block w-full rounded-full px-5 py-3 text-center text-sm font-bold transition ${m.popular ? "bg-gradient-to-r from-chai-orange to-chai-gold text-[#1a0e00] shadow-[0_10px_30px_-8px_rgba(244,123,0,0.7)]" : "border border-chai-orange/40 text-chai-cream hover:bg-chai-orange/10"}`}
  >
                Choose {m.name.split(" ")[1]} Model
              </Link>
            </motion.div>)}
        </div>

        {!compact && <p className="mt-8 text-center text-xs text-chai-muted/80 max-w-2xl mx-auto leading-relaxed">
            *Final setup cost depends on city, location, area, interior/exterior setup, equipment and agreement.
          </p>}
      </div>
    </section>;
}
export {
  FranchiseModels
};
