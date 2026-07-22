import "./USPGrid.css";
import { motion } from "framer-motion";
import { Wallet, Ban, Cpu, Boxes, ChefHat, BarChart3, Users, ShieldCheck, Award, TrendingUp } from "lucide-react";
import { usps } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";
const icons = [Wallet, Ban, Cpu, Boxes, ChefHat, BarChart3, Users, ShieldCheck, Award, TrendingUp];
function USPGrid() {
  return <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Why Chaiway" title={<>Built for Franchise Owners, <span className="text-gradient-orange">Not Just Customers</span></>} subtitle="Ten reasons why first-time café owners choose Chaiway as their next business." />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {usps.map((u, i) => {
    const Icon = icons[i % icons.length];
    return <motion.div
      key={u.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i % 5 * 0.06 }}
      className="group relative rounded-2xl border border-chai-orange/15 bg-chai-charcoal/70 p-5 hover:border-chai-orange/60 hover:-translate-y-1 transition-all duration-300 hover:glow-orange"
    >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-chai-orange to-chai-gold text-[#1a0e00] shadow-[0_8px_20px_-5px_rgba(244,123,0,0.5)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display font-bold text-chai-cream">{u.title}</p>
                <p className="mt-1.5 text-sm text-chai-muted leading-relaxed">{u.desc}</p>
              </motion.div>;
  })}
        </div>
      </div>
    </section>;
}
export {
  USPGrid
};
