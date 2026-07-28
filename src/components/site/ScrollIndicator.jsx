import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer select-none" onClick={scrollToNextSection}>
      <span className="text-[10px] uppercase font-semibold tracking-widest text-chai-gold/80 hover:text-chai-orange transition-colors">
        Scroll to Explore
      </span>

      {/* Mouse Icon Graphic */}
      <motion.div
        className="w-6 h-10 rounded-full border-2 border-chai-orange/40 flex justify-center p-1.5 backdrop-blur-sm bg-chai-black/40 shadow-[0_0_15px_rgba(244,123,0,0.3)] hover:border-chai-orange transition-colors"
        animate={{
          boxShadow: [
            "0 0 10px rgba(244, 123, 0, 0.2)",
            "0 0 22px rgba(244, 123, 0, 0.6)",
            "0 0 10px rgba(244, 123, 0, 0.2)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-1.5 h-2.5 rounded-full bg-chai-gold"
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Chevron Bouncing Arrow */}
      <motion.div
        animate={{
          y: [0, 5, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-4 h-4 text-chai-gold" />
      </motion.div>
    </div>
  );
}
