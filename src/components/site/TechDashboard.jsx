import "./TechDashboard.css";
import { motion } from "framer-motion";
import { TrendingUp, Package, ChefHat, BarChart3, Clock, ShoppingBag, AlertCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
function TechDashboard() {
  return <section className="py-14 sm:py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-96 w-96 rounded-full opacity-30" style={{ background: "var(--gradient-glow)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center">
            <SectionHeading
    eyebrow="Tech-Enabled Café"
    title={<>Run Your Café With <span className="text-gradient-orange">Systems</span>, Not Guesswork</>}
    subtitle="Chaiway's franchise model focuses on systematic operations through POS software, inventory control, recipe management, quality checks and daily reporting — so owners run the outlet with clarity, not chaos."
  />

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md mx-auto">
              {["POS Billing", "Inventory Control", "Recipe SOPs", "Daily Reports", "Order Channels", "Staff Tasks"].map((t) => <div key={t} className="rounded-xl border border-chai-orange/20 bg-chai-charcoal/70 px-3 py-2.5 text-sm font-medium text-chai-cream text-center">
                  <span className="text-chai-lime mr-1.5">✓</span>{t}
                </div>)}
            </div>
          </div>

          {
    /* Dashboard mockup */
  }
          <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative"
  >
            <div className="rounded-3xl border border-chai-orange/30 bg-gradient-to-br from-chai-charcoal to-chai-black p-5 sm:p-6 shadow-card glow-orange">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-chai-muted">Chaiway POS</p>
                  <p className="font-display font-bold text-chai-cream">Outlet Dashboard</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-chai-orange/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-chai-gold/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-chai-lime/60" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <DashCard icon={<TrendingUp className="h-4 w-4" />} label="Today's Sales" value="₹18,420" delta="+12%" accent="orange" />
                <DashCard icon={<ShoppingBag className="h-4 w-4" />} label="Orders" value="184" delta="+8%" accent="lime" />
                <div className="col-span-2 rounded-xl bg-chai-black/60 border border-chai-orange/15 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-chai-cream flex items-center gap-1.5"><ChefHat className="h-3.5 w-3.5 text-chai-orange" /> Top Selling Items</p>
                    <span className="text-[10px] text-chai-muted">Live</span>
                  </div>
                  {[
    ["Kullad Kick Chai", 84, "bg-chai-orange"],
    ["Veg Cheese Burger", 56, "bg-chai-gold"],
    ["Masala Fries", 42, "bg-chai-lime"],
    ["Margherita Pizza", 31, "bg-chai-orange/70"]
  ].map(([name, w, color]) => <div key={name} className="mb-2 last:mb-0">
                      <div className="flex justify-between text-[11px] text-chai-cream mb-1"><span>{name}</span><span className="text-chai-muted">{w}</span></div>
                      <div className="h-1.5 bg-chai-charcoal rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${w}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className={`h-full ${color}`} />
                      </div>
                    </div>)}
                </div>
                <DashCard icon={<Package className="h-4 w-4" />} label="Inventory Alerts" value="3 items" delta="Low" accent="gold" />
                <DashCard icon={<BarChart3 className="h-4 w-4" />} label="Avg Bill Value" value="₹100" delta="+5%" accent="lime" />
                <div className="col-span-2 rounded-xl bg-chai-black/60 border border-chai-orange/15 p-4 flex items-center gap-3">
                  <AlertCircle className="h-4 w-4 text-chai-gold shrink-0" />
                  <div className="flex-1 text-xs text-chai-muted"><span className="text-chai-cream font-semibold">Recipe alert:</span> Update Special Tandoor Chai SOP across all outlets.</div>
                  <Clock className="h-3.5 w-3.5 text-chai-muted" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
function DashCard({ icon, label, value, delta, accent }) {
  const color = accent === "orange" ? "text-chai-orange" : accent === "lime" ? "text-chai-lime" : "text-chai-gold";
  return <div className="rounded-xl bg-chai-black/60 border border-chai-orange/15 p-4 text-center">
      <div className={`flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-wider ${color}`}>{icon}{label}</div>
      <p className="mt-1.5 font-display font-bold text-lg text-chai-cream text-center">{value}</p>
      <p className={`text-[10px] ${color} text-center`}>{delta}</p>
    </div>;
}
export {
  TechDashboard
};
