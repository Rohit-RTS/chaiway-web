import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast initial progress simulation paired with window load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random incremental steps for natural feel
        const diff = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    const handleLoad = () => {
      setProgress(100);
    };

    if (document.readyState === "complete") {
      setProgress(100);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="chaiway-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080604] overflow-hidden select-none"
        >
          {/* Ambient Radial Background Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(244,123,0,0.18)_0%,_transparent_65%)]" />

          {/* Center Content Box */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
            
            {/* Steaming Chai Cup Illustration */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              {/* Outer Golden Pulsing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-chai-orange/30"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Animated Steam Lines */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1.5 justify-center pointer-events-none">
                {[0, 0.3, 0.6].map((delay, idx) => (
                  <motion.div
                    key={idx}
                    className="w-1.5 h-6 rounded-full bg-gradient-to-t from-chai-gold/80 to-transparent blur-[1px]"
                    animate={{
                      y: [0, -18, -32],
                      opacity: [0, 0.8, 0],
                      scaleX: [1, 1.5, 2],
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              {/* Chai Logo / Icon Center */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#1a120b] to-[#0d0905] p-1 border border-chai-gold/40 shadow-[0_0_30px_rgba(244,123,0,0.35)] flex items-center justify-center"
              >
                <img
                  src="/assets/logo.jpeg"
                  alt="Chaiway Logo"
                  className="w-full h-full object-cover rounded-full"
                  decoding="async"
                  fetchPriority="high"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-display text-2xl font-bold tracking-tight text-chai-cream"
            >
              CHAIWAY <span className="text-chai-orange">CAFÉ</span>
            </motion.h2>

            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-1 text-xs font-medium text-chai-muted uppercase tracking-widest"
            >
              {progress < 40
                ? "Brewing Experience..."
                : progress < 80
                ? "Standardizing Excellence..."
                : "Serving Fresh Possibilities..."}
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full mt-6 bg-[#16110b] h-1.5 rounded-full overflow-hidden border border-white/5 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-chai-orange via-amber-400 to-chai-gold rounded-full shadow-[0_0_12px_#f47b00]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>

            {/* Percentage Indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-[11px] font-mono text-chai-gold/90 font-semibold"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
