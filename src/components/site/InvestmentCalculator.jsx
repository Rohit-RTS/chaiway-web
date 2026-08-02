import "./InvestmentCalculator.css";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
function InvestmentCalculator() {
  const [model, setModel] = useState("");
  const [tier, setTier] = useState("");
  const [property, setProperty] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const recommendation = useMemo(() => {
    const a = parseInt(area || "0");
    const b = parseInt(budget || "0");
    if (a >= 300 || b >= 95e4) return { id: "dine", name: "Chaiway Dine", note: "Best for premium streets, malls & youth hangouts." };
    if (a >= 100 || b >= 75e4) return { id: "pro", name: "Chaiway Pro", note: "Most popular format \u2014 fits roadside, colleges & markets." };
    if (a > 0 || b > 0) return { id: "kiosk", name: "Chaiway Kiosk", note: "Compact, high-footfall pick to start lean." };
    return null;
  }, [area, budget]);
  const ready = model && tier && property && area && budget;
  return <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Match My Model" title={<>Find the Right <span className="text-gradient-orange">Chaiway Model</span> for You</>} subtitle="Answer 5 quick questions and we'll suggest a suitable format. Final ROI depends on rent, sales, staff, raw material and local demand — our team can guide you in detail." />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-chai-orange/20 bg-chai-charcoal/70 p-6 sm:p-8 space-y-5">
            <Select label="Preferred Model" value={model} onChange={(v) => setModel(v)} options={[["", "Select model"], ["kiosk", "Kiosk"], ["pro", "Pro"], ["dine", "Dine"]]} />
            <Select label="City Type" value={tier} onChange={(v) => setTier(v)} options={[["", "Select tier"], ["1", "Tier 1"], ["2", "Tier 2"], ["3", "Tier 3"]]} />
            <Select label="Property Available?" value={property} onChange={(v) => setProperty(v)} options={[["", "Select"], ["yes", "Yes"], ["no", "No"]]} />
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Area Available (sq. ft.)" value={area} onChange={setArea} placeholder="e.g. 150" type="number" />
              <Input label="Investment Budget (₹)" value={budget} onChange={setBudget} placeholder="e.g. 800000" type="number" />
            </div>
          </div>

          <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="rounded-3xl border border-chai-lime/30 bg-gradient-to-br from-chai-charcoal to-chai-black p-6 sm:p-8 flex flex-col text-center"
  >
            <Calculator className="h-8 w-8 text-chai-lime mx-auto" />
            <p className="mt-3 text-xs uppercase tracking-wider text-chai-lime font-semibold text-center">Your Recommendation</p>
            {recommendation && ready ? <>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-chai-cream text-center">{recommendation.name}</h3>
                <p className="mt-2 text-sm text-chai-muted text-center">{recommendation.note}</p>
              </> : <>
                <h3 className="mt-2 font-display text-2xl font-bold text-chai-cream/70 text-center">Fill the form to see your match</h3>
                <p className="mt-2 text-sm text-chai-muted text-center">We'll suggest Kiosk, Pro or Dine based on your area and budget.</p>
              </>}
            <p className="mt-6 text-xs text-chai-muted/80 italic text-center">
              Exact ROI depends on rent, sales, staff, raw material cost, local demand and operations.
              Our team can guide you with model suitability.
            </p>
            <Link to="/contact" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-6 py-3 text-sm font-bold text-[#1a0e00] mt-6 hover:shadow-[0_12px_30px_-8px_rgba(244,123,0,0.7)] transition">
              Talk to Franchise Team <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>;
}
function Select({ label, value, onChange, options }) {
  return <label className="block text-center">
      <span className="text-xs font-semibold uppercase tracking-wider text-chai-gold text-center">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="mt-1.5 w-full rounded-xl bg-chai-black/60 border border-chai-orange/20 px-4 py-3 text-sm text-chai-cream outline-none focus:border-chai-orange transition text-center" style={{textAlignLast: "center"}}>
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
    </label>;
}
function Input({ label, value, onChange, placeholder, type = "text" }) {
  return <label className="block text-center">
      <span className="text-xs font-semibold uppercase tracking-wider text-chai-gold text-center">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="mt-1.5 w-full rounded-xl bg-chai-black/60 border border-chai-orange/20 px-4 py-3 text-sm text-chai-cream outline-none focus:border-chai-orange transition placeholder:text-chai-muted/60 text-center" />
    </label>;
}
export {
  InvestmentCalculator
};
