import "./SectionHeading.css";
import { motion } from "framer-motion";
function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mx-auto text-center flex flex-col items-center justify-center ${center ? "items-center text-center" : ""}`}
    >
      {eyebrow && <span className="chip mb-4 inline-flex mx-auto text-center">{eyebrow}</span>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chai-cream leading-tight text-center">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-chai-muted leading-relaxed text-center max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
export {
  SectionHeading
};
