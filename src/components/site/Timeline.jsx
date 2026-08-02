import React, { useRef } from "react";
import "./Timeline.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { journey } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";

function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-14 sm:py-16 relative overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          center
          eyebrow="Franchise Journey"
          title={
            <>
              From Enquiry to <span className="text-gradient-orange">Grand Opening</span>
            </>
          }
          subtitle="A clear 7-step path to launching your Chaiway outlet."
        />

        <div className="mt-16 sm:mt-20 relative">
          {/* Static background track line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-chai-charcoal/80 sm:-translate-x-1/2 rounded-full" />

          {/* Animated glowing vertical progress line drawn top to bottom */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-chai-orange via-chai-gold to-chai-lime sm:-translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.8)]"
          />

          <div className="space-y-12 sm:space-y-16">
            {journey.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.title || i}
                  initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 15,
                    delay: i * 0.1,
                  }}
                  className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 items-center ${
                    isEven ? "" : "sm:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Card Container */}
                  <div className={`flex flex-col items-center justify-center ${isEven ? "sm:items-end" : "sm:items-start"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, translateY: -4 }}
                      transition={{ duration: 0.2 }}
                      className="w-full max-w-md rounded-2xl border border-chai-orange/30 bg-chai-charcoal/80 p-6 sm:p-7 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-chai-orange hover:shadow-[0_15px_30px_rgba(234,88,12,0.2)] flex flex-col items-center justify-center"
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-chai-orange/10 border border-chai-orange/30 text-xs uppercase tracking-wider text-chai-orange font-bold text-center mb-3">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-chai-cream text-center">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm sm:text-base text-chai-muted leading-relaxed text-center">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for layout balancing on desktop */}
                  <div className="hidden sm:block" />

                  {/* Animated Dot / Milestone Badge with Glowing Orange Pulse */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                      delay: i * 0.1 + 0.1,
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-chai-orange via-orange-500 to-chai-gold text-[#1a0e00] font-black text-sm ring-4 ring-chai-black shadow-[0_0_20px_rgba(234,88,12,0.8)] z-10"
                  >
                    {i + 1}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Timeline };
