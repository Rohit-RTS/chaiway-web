import React, { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

export function RouteLoadingBar() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer1;
    let timer2;
    if (isLoading) {
      setAnimating(true);
      setProgress(30);
      timer1 = setTimeout(() => setProgress(70), 150);
      timer2 = setTimeout(() => setProgress(90), 400);
    } else if (animating) {
      setProgress(100);
      const doneTimer = setTimeout(() => {
        setAnimating(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(doneTimer);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {animating && (
        <motion.div
          key="route-loader-bar"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 left-0 right-0 z-[10000] h-[3px] pointer-events-none bg-transparent"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-chai-orange via-amber-400 to-chai-gold shadow-[0_0_10px_#f47b00]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
