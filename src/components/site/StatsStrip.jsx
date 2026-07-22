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
      duration: 1.6,
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
  return <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-orange tabular-nums">
      <span ref={ref}>{isNumeric ? `${prefix}0` : value}</span>
      <span className="text-chai-gold">{suffix}</span>
    </span>;
}
function StatsStrip() {
  return <section className="relative border-y border-chai-orange/15 bg-chai-charcoal/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => <motion.div
    key={s.label}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08 }}
    className="text-center"
  >
              <CountUp value={s.value} suffix={s.suffix} />
              <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-chai-lime font-semibold">{s.label}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  StatsStrip
};
