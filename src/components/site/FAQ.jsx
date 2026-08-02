import "./FAQ.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";
function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading center eyebrow="FAQ" title={<>Questions, <span className="text-gradient-orange">Answered</span></>} />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
    const isOpen = open === i;
    return <div key={f.q} className="rounded-2xl border border-chai-orange/20 bg-chai-charcoal/60 overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-semibold text-chai-cream">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-chai-orange shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p className="px-5 pb-5 text-sm text-chai-muted leading-relaxed">{f.a}</p>
                    </motion.div>}
                </AnimatePresence>
              </div>;
  })}
        </div>
      </div>
    </section>;
}
export {
  FAQ
};
