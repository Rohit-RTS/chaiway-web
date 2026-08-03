import React, { useRef } from "react";
import "./Timeline.css";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  MessageSquareText,
  Calculator,
  MapPin,
  FileCheck,
  Store,
  GraduationCap,
  Rocket,
} from "lucide-react";
import { journey } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";

const stepIcons = [
  MessageSquareText,
  Calculator,
  MapPin,
  FileCheck,
  Store,
  GraduationCap,
  Rocket,
];

function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden" ref={containerRef}>
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

        <div className="mt-12 sm:mt-16 lg:mt-20 relative">
          {/* Static background track line */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-chai-charcoal/80 lg:-translate-x-1/2 rounded-full" />

          {/* Animated glowing vertical progress line drawn top to bottom */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 sm:left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-chai-orange via-chai-gold to-chai-lime lg:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(244,123,0,0.85)] z-0"
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-16">
            {journey.map((step, i) => {
              const isEven = i % 2 === 0;
              const StepIcon = stepIcons[i % stepIcons.length];

              return (
                <div
                  key={step.title || i}
                  className="relative pl-14 sm:pl-20 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center"
                >
                  {/* Step Card Container */}
                  <div
                    className={`flex flex-col ${
                      isEven
                        ? "lg:items-end lg:text-right lg:order-1"
                        : "lg:items-start lg:text-left lg:order-2"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.05 * i,
                      }}
                      whileHover={{ translateY: -4 }}
                      className="w-full max-w-lg rounded-2xl sm:rounded-3xl border border-chai-orange/25 bg-chai-charcoal/80 p-5 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-chai-orange/60 hover:shadow-[0_15px_35px_rgba(244,123,0,0.2)] flex flex-col text-left group"
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? "lg:flex-row-reverse lg:justify-start" : "flex-row"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chai-orange/15 border border-chai-orange/30 text-[11px] sm:text-xs uppercase tracking-wider text-chai-orange font-extrabold shrink-0">
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-chai-gold font-semibold hidden sm:inline-block">
                          Milestone {i + 1} of 7
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-chai-cream group-hover:text-chai-orange transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm lg:text-base text-chai-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop alternating layout */}
                  <div
                    className={`hidden lg:block ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  />

                  {/* Animated Milestone Badge / Icon Circle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 14,
                      delay: 0.05 * i + 0.1,
                    }}
                    className="absolute left-6 sm:left-8 top-6 -translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-chai-orange via-orange-500 to-chai-gold text-[#1a0e00] font-black text-sm sm:text-base ring-4 ring-chai-black shadow-[0_0_20px_rgba(244,123,0,0.7)] z-10"
                  >
                    <StepIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#1a0e00] stroke-[2.5]" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Timeline };
