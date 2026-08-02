import "./SupportBento.css";
import { motion } from "framer-motion";
import { supportItems } from "@/data/franchise";
const interiorUrl = "/assets/interior.jpeg";
const storefrontUrl = "/assets/storefront.jpeg";
import { SectionHeading } from "./SectionHeading";
function SupportBento() {
  return <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="End-to-End Support" title={<>Everything You Get <span className="text-gradient-orange">From Chaiway</span></>} subtitle="From location guidance to grand opening — we walk every step with you." />

        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-3 lg:auto-rows-fr">
          {
    /* Large image card 1 */
  }
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden border border-chai-orange/30 group min-h-[280px]"
  >
            <img src={interiorUrl} alt="Café setup" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-chai-black via-chai-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="text-xs uppercase tracking-wider text-chai-lime font-semibold">Café Setup</p>
              <h3 className="mt-1 font-display text-2xl font-bold text-chai-cream">Interior, Branding & Launch</h3>
              <p className="mt-2 text-sm text-chai-muted max-w-md">Standardised Chaiway look, equipment guidance and grand opening support.</p>
            </div>
          </motion.div>

          {
    /* Bento small cards */
  }
          {supportItems.slice(0, 4).map((s, i) => <BentoCard key={s} title={s} delay={i * 0.05} />)}

          {
    /* Image card 2 */
  }
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="lg:col-span-2 lg:row-span-1 relative rounded-3xl overflow-hidden border border-chai-lime/30 group min-h-[200px]"
  >
            <img src={storefrontUrl} alt="Marketing & launch" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-chai-black via-chai-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-center p-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-chai-orange font-semibold">Marketing & Sales</p>
                <h3 className="mt-1 font-display text-xl font-bold text-chai-cream">Launch, social & Zomato/Swiggy</h3>
              </div>
            </div>
          </motion.div>

          {supportItems.slice(4, 13).map((s, i) => <BentoCard key={s} title={s} delay={i * 0.04} />)}
        </div>
      </div>
    </section>;
}
function BentoCard({ title, delay }) {
  return <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="rounded-2xl border border-chai-orange/15 bg-chai-charcoal/60 p-4 flex items-center justify-center hover:border-chai-orange/50 hover:bg-chai-orange/5 transition text-center"
  >
      <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-chai-orange" />
      <p className="text-sm font-medium text-chai-cream text-center">{title}</p>
    </motion.div>;
}
export {
  SupportBento
};
