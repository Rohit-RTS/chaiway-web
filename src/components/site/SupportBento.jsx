import "./SupportBento.css";
import { motion } from "framer-motion";
import { supportItems } from "@/data/franchise";
const interiorUrl = "/assets/interior.jpeg";
const storefrontUrl = "/assets/storefront.jpeg";
import { SectionHeading } from "./SectionHeading";

function SupportBento() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          center
          eyebrow="End-to-End Support"
          title={<>Everything You Get <span className="text-gradient-orange">From Chaiway</span></>}
          subtitle="From location guidance to grand opening — we walk every step with you."
        />

        {/* Main bento grid: two image cards side by side */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {/* Large image card 1 – Café Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-chai-orange/30 group min-h-[240px]"
          >
            <img
              src={interiorUrl}
              alt="Café setup"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chai-black via-chai-black/60 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <p className="text-[10px] uppercase tracking-wider text-chai-lime font-semibold">Café Setup</p>
              <h3 className="mt-0.5 font-display text-xl font-bold text-chai-cream">Interior, Branding &amp; Launch</h3>
              <p className="mt-1 text-xs text-chai-muted max-w-sm">Standardised Chaiway look, equipment guidance and grand opening support.</p>
            </div>
          </motion.div>

          {/* Image card 2 – Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative rounded-3xl overflow-hidden border border-chai-lime/30 group min-h-[240px]"
          >
            <img
              src={storefrontUrl}
              alt="Marketing & launch"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-chai-black via-chai-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-end p-5">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-chai-orange font-semibold">Marketing &amp; Sales</p>
                <h3 className="mt-0.5 font-display text-xl font-bold text-chai-cream">Launch, social &amp; Zomato/Swiggy</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compact chip cards grid */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {supportItems.map((s, i) => (
            <BentoCard key={s} title={s} delay={i * 0.03} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ title, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-xl border border-chai-orange/15 bg-chai-charcoal/60 px-3 py-2 flex items-center gap-2 hover:border-chai-orange/50 hover:bg-chai-orange/5 transition"
    >
      <span className="shrink-0 inline-block h-1.5 w-1.5 rounded-full bg-chai-orange" />
      <p className="text-xs font-medium text-chai-cream leading-tight">{title}</p>
    </motion.div>
  );
}

export { SupportBento };
