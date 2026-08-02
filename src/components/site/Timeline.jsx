import "./Timeline.css";
import { motion } from "framer-motion";
import { journey } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";
function Timeline() {
  return <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Franchise Journey" title={<>From Enquiry to <span className="text-gradient-orange">Grand Opening</span></>} subtitle="A clear 7-step path to launching your Chaiway outlet." />

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-chai-orange via-chai-gold to-chai-lime sm:-translate-x-1/2" />
          <div className="space-y-10">
            {journey.map((step, i) => <motion.div
    key={step.title}
    initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}
  >
                <div className="text-center">
                  <div className={`inline-block rounded-2xl border border-chai-orange/30 bg-chai-charcoal/70 p-5 max-w-md mx-auto text-center`}>
                    <p className="text-xs uppercase tracking-wider text-chai-lime font-semibold text-center">Step {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-chai-cream text-center">{step.title}</h3>
                    <p className="mt-2 text-sm text-chai-muted text-center">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:block" />
                <span className="absolute left-4 top-5 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-chai-orange to-chai-gold text-[#1a0e00] font-bold text-sm ring-4 ring-chai-black">
                  {i + 1}
                </span>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}
export {
  Timeline
};
