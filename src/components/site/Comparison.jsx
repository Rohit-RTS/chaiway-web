import "./Comparison.css";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { comparison } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";

function Comparison() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          center
          eyebrow="Compare"
          title={<>Independent Café vs <span className="text-gradient-orange">Chaiway Franchise</span></>}
          subtitle="The systems and support that make the difference."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-x-auto custom-scrollbar rounded-3xl border border-chai-orange/20 bg-chai-charcoal/60"
        >
          <div className="min-w-[540px]">
            <div className="grid grid-cols-3 bg-chai-black/60 border-b border-chai-orange/15">
              <div className="p-4 sm:p-5 text-xs sm:text-sm font-semibold text-chai-muted uppercase tracking-wider">Feature</div>
              <div className="p-4 sm:p-5 text-xs sm:text-sm font-semibold text-chai-muted uppercase tracking-wider border-l border-chai-orange/15">Independent Café</div>
              <div className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-chai-orange uppercase tracking-wider border-l border-chai-orange/15 bg-chai-orange/5">Chaiway Franchise</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.feat} className={`grid grid-cols-3 ${i % 2 ? "bg-chai-black/30" : ""} border-b border-chai-orange/10 last:border-0`}>
                <div className="p-3.5 sm:p-5 text-xs sm:text-sm font-semibold text-chai-cream">{row.feat}</div>
                <div className="p-3.5 sm:p-5 text-xs sm:text-sm text-chai-muted border-l border-chai-orange/10 flex items-center gap-1.5">
                  <X className="h-3.5 w-3.5 text-chai-muted/60 shrink-0" /> {row.indie}
                </div>
                <div className="p-3.5 sm:p-5 text-xs sm:text-sm text-chai-cream border-l border-chai-orange/10 bg-chai-orange/[0.03] flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-chai-lime shrink-0" /> {row.chai}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Comparison };
