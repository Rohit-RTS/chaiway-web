import "./SectionHeading.css";
import { motion } from "framer-motion";
function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      {eyebrow && <span className="chip mb-4 inline-flex">{eyebrow}</span>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chai-cream leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-chai-muted leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
export {
  SectionHeading
};
