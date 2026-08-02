import "./Locations.css";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { locations } from "@/data/franchise";
import { SectionHeading } from "./SectionHeading";
function Locations() {
  return <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Locations" title={<>Growing Across <span className="text-gradient-orange">India</span></>} subtitle="From Maharashtra to Telangana and Madhya Pradesh — and expanding fast." />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-chai-orange/20 bg-chai-charcoal/60"
  >
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(244,123,0,0.4), transparent 20%), radial-gradient(circle at 55% 55%, rgba(244,123,0,0.5), transparent 18%), radial-gradient(circle at 60% 35%, rgba(244,123,0,0.4), transparent 15%), radial-gradient(circle at 45% 65%, rgba(182,230,0,0.3), transparent 18%), radial-gradient(circle at 70% 50%, rgba(255,177,59,0.4), transparent 15%)" }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="h-12 w-12 text-chai-orange animate-glow-pulse" />
              <p className="mt-4 font-display text-3xl font-extrabold text-chai-cream">36+ Outlets</p>
              <p className="mt-1 text-chai-muted">across 6+ states in India</p>
              <p className="mt-4 text-xs text-chai-lime uppercase tracking-wider">Live outlets · expanding monthly</p>
            </div>
          </motion.div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-chai-gold font-semibold text-center">Cities & States</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {locations.map((c) => <span key={c} className="chip">{c}</span>)}
            </div>
            <div className="mt-6 rounded-2xl border border-chai-lime/30 bg-chai-lime/5 p-5 text-center">
              <p className="font-display text-lg font-bold text-chai-cream text-center">Don't see your city?</p>
              <p className="mt-1 text-sm text-chai-muted text-center">Request a Chaiway outlet in your city and let's explore the opportunity together.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center rounded-full bg-chai-lime px-5 py-2.5 text-sm font-bold text-[#0a1500] hover:opacity-90 transition">
                Request Chaiway in My City
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
export {
  Locations
};
