import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { FloatingLogo } from "./FloatingLogo";
import { AnimatedButton } from "./AnimatedButton";
import { ScrollIndicator } from "./ScrollIndicator";
import { buildWhatsAppLink } from "@/lib/contact";

const chips = [
  "No Royalty",
  "POS Software",
  "Chef-Less Model",
  "Own Recipes",
  "Training Support",
  "Low Investment",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32 min-h-[90vh] flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          
          {/* Left Side Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            {/* Badge — top-left */}
            <motion.div variants={itemVariants}>
              <span className="chip shadow-[0_4px_15px_rgba(244,123,0,0.15)] inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-chai-gold animate-pulse" />
                India's Affordable Tea Café Franchise
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-chai-cream tracking-tight text-left"
            >
              Start Your Own{" "}
              <span className="text-gradient-orange-shimmer inline-block">
                Chaiway Café
              </span>{" "}
              Franchise
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base sm:text-lg text-chai-muted max-w-xl font-normal leading-relaxed text-left"
            >
              Low investment.{" "}
              <span className="text-chai-gold font-semibold">No royalty.</span>{" "}
              High growth potential. Build a modern tea café with standardised
              recipes, POS-enabled operations, training support and a
              mass-market menu loved by India.
            </motion.p>

            {/* Interactive Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <AnimatedButton
                to="/contact"
                variant="primary"
                icon={ArrowRight}
              >
                Apply for Franchise
              </AnimatedButton>

              <AnimatedButton
                to="/franchise"
                variant="secondary"
              >
                Explore Models
              </AnimatedButton>

              <AnimatedButton
                href={buildWhatsAppLink("Hi, tell me about Chaiway franchise.")}
                variant="ghost"
                icon={MessageCircle}
                target="_blank"
                rel="noreferrer"
              >
                Talk on WhatsApp
              </AnimatedButton>
            </motion.div>

            {/* Feature Chips */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap gap-2"
            >
              {chips.map((c) => (
                <span
                  key={c}
                  className="chip text-xs hover:border-chai-orange/60 hover:bg-chai-orange/15 transition-all duration-300 cursor-default"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-[11px] text-chai-muted/80 max-w-xl text-left"
            >
              *Investment and returns are indicative and may vary by location, outlet size, operations and final agreement.
            </motion.p>
          </motion.div>

          {/* Right Side Centerpiece Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <FloatingLogo />
          </motion.div>

        </div>
      </div>

      {/* Glowing Bottom Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
