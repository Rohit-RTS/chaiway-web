import "./StatsStrip.css";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/data/franchise";

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isNumeric = !isNaN(num);
  const prefix = value.replace(/[0-9.]/g, "").trim();

  useEffect(() => {
    if (!inView || !isNumeric || !ref.current) return;
    const ctrl = animate(mv, num, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          const formatted = num % 1 === 0 ? Math.round(v).toString() : v.toFixed(1);
          ref.current.textContent = `${prefix}${formatted}`;
        }
      }
    });
    return () => ctrl.stop();
  }, [inView, isNumeric, num, mv, prefix]);

  return (
    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-orange tabular-nums leading-none inline-flex items-baseline shrink-0">
      <span ref={ref}>{isNumeric ? `${prefix}0` : value}</span>
      <span className="text-chai-gold ml-0.5">{suffix}</span>
    </span>
  );
}

function StatsStrip() {
  return (
    <section className="relative border-y border-chai-orange/20 bg-chai-charcoal/80 overflow-hidden py-4 sm:py-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div 
        className="absolute inset-0 pointer-events-none animate-pulse duration-1000" 
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(244,123,0,0.12), transparent 70%)" }} 
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-chai-orange/20">
          {stats.map((s, i) => {
            const isInline = s.layout === "inline";
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center justify-center p-4 rounded-xl hover:bg-chai-orange/5 transition-colors lg:justify-center"
              >
                <div className="flex flex-col items-center justify-center text-center w-full">
                  <CountUp value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-chai-lime font-bold leading-tight text-center">
                    {s.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { StatsStrip };
