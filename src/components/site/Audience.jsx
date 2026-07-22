import "./Audience.css";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Plane, ShoppingBag, Coffee, PartyPopper, Cookie } from "lucide-react";
import { audiences } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";

const icons = [GraduationCap, Briefcase, Users, Plane, ShoppingBag, Coffee, PartyPopper, Cookie];

function Audience() {
  return (
    <section className="audience-section">
      <div className="audience-container">
        <SectionHeading
          center
          eyebrow="Target Audience"
          title={<>Made for India's <span className="audience-title-accent">Everyday Crowd</span></>}
          subtitle="Chaiway is built around India's everyday consumption behaviour — chai, quick bites, affordable snacks and a place to connect."
        />

        <div className="audience-grid">
          {audiences.map((a, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="audience-card"
              >
                <Icon className="audience-card-icon" />
                <p className="audience-card-title">{a.title}</p>
                <p className="audience-card-desc">{a.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Audience };
