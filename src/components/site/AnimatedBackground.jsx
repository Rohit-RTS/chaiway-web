import React from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Dark Vignette Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(8, 6, 4, 0.8) 100%)"
        }}
      />

      {/* Ambient Pulsing Orange Blobs - Hardware accelerated */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform, opacity" }}
        className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-chai-orange/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [30, -20, 30],
          y: [20, -20, 20],
          scale: [1.05, 0.95, 1.05],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-1/3 -right-20 h-[550px] w-[550px] rounded-full bg-chai-gold/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [-15, 25, -15],
          y: [15, -25, 15],
          scale: [0.95, 1.1, 0.95],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform, opacity" }}
        className="absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full bg-chai-orange/15 blur-[120px]"
      />

      {/* Light Rays */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-15"
        style={{
          background: "conic-gradient(from 180deg at 50% 0%, transparent 160deg, rgba(244, 123, 0, 0.3) 180deg, transparent 200deg)"
        }}
      />

      {/* Optimized Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffb13b 1px, transparent 1px),
            linear-gradient(to bottom, #ffb13b 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
