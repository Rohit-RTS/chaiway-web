import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

export function ScrollToTop() {
  const { location } = useRouterState();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

export function PageHero({ title, subtitle, badge }) {
  return (
    <div className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 overflow-hidden text-center border-b border-chai-orange/10">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(244,123,0,0.12) 0%, transparent 65%), linear-gradient(180deg, rgba(20,16,12,0.8) 0%, transparent 100%)",
        }}
      />

      {/* Central Glow */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-chai-orange/12 blur-3xl pointer-events-none" />

      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-chai-orange/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="chip mb-5 inline-flex"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-chai-cream tracking-tight font-display"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base sm:text-lg text-chai-muted max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-chai-black/60 to-transparent pointer-events-none" />
    </div>
  );
}

export function PageLayout({ children, title }) {
  const { location } = useRouterState();

  useEffect(() => {
    if (title) {
      document.title = `${title} | Chaiway Café Franchise`;
    }
  }, [title, location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full min-h-screen relative"
    >
      {children}
    </motion.div>
  );
}
