import "./FranchiseModels.css";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { franchiseModels } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";
function FranchiseModels({ compact = false }) {
  return <section className="py-20 sm:py-28">
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
              {m.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-4 py-1 text-[11px] font-bold text-[#1a0e00] uppercase tracking-wider">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </div>}
              <div className="text-center flex flex-col items-center">
                <p className="text-xs uppercase tracking-wider text-chai-lime font-semibold">{m.bestFor}</p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-chai-cream">{m.name}</h3>
                <p className="mt-2 text-sm text-chai-muted">{m.area}</p>
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

        {!compact && <p className="mt-8 text-center text-xs text-chai-muted/80">
            *Final setup cost depends on city, location, area, interior/exterior setup, equipment and agreement.
          </p>}
      </div>
    </section>;
}
export {
  FranchiseModels
};
