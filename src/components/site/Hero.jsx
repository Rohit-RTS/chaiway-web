import "./Hero.css";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import logoUrl from "@/assets/logo.jpeg";
import storefrontUrl from "@/assets/storefront.jpeg";
import interiorUrl from "@/assets/interior.jpeg";
import { buildWhatsAppLink } from "@/lib/contact";
const chips = ["No Royalty", "POS Software", "Chef-Less Model", "Own Recipes", "Training Support", "Zomato + Swiggy", "Low Investment"];
function Hero() {
  return <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full opacity-60" style={{ background: "var(--gradient-glow)" }} />
      {
    /* subtle grid */
  }
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-center lg:text-left"
  >
            <span className="chip"><Sparkles className="h-3.5 w-3.5 text-chai-gold" /> India's Affordable Tea Café Franchise</span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-chai-cream">
              Start Your Own <span className="text-gradient-orange">Chaiway Café</span> Franchise
            </h1>
            <p className="mt-4 text-base sm:text-lg text-chai-muted max-w-xl mx-auto lg:mx-0">
              Low investment. <span className="text-chai-gold font-semibold">No royalty.</span> High growth potential.
              Build a modern tea café with standardised recipes, POS-enabled operations, training
              support and a mass-market menu loved by India.
            </p>

            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-6 py-3.5 text-sm font-bold text-[#1a0e00] shadow-[0_12px_30px_-8px_rgba(244,123,0,0.7)] hover:shadow-[0_18px_40px_-8px_rgba(244,123,0,0.95)] transition">
                Apply for Franchise <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/franchise" className="inline-flex items-center gap-2 rounded-full border border-chai-orange/40 px-6 py-3.5 text-sm font-semibold text-chai-cream hover:bg-chai-orange/10 transition">
                Explore Models
              </Link>
              <a href={buildWhatsAppLink("Hi, tell me about Chaiway franchise.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-2 py-3.5 text-sm font-medium text-chai-lime hover:text-chai-gold transition">
                <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2">
              {chips.map((c) => <span key={c} className="chip">{c}</span>)}
            </div>
            <p className="mt-4 text-[11px] text-chai-muted/80 max-w-xl mx-auto lg:mx-0">
              *Investment and returns are indicative and may vary by location, outlet size, operations and final agreement.
            </p>
          </motion.div>

          {
    /* Visual */
  }
          <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.15 }}
    className="relative mx-auto w-full max-w-md lg:max-w-none aspect-square"
  >
            {
    /* glow */
  }
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-chai-orange/40 via-chai-gold/30 to-transparent blur-3xl" />
            {
    /* steam */
  }
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
              {[0, 0.4, 0.8].map((d) => <span key={d} className="block h-10 w-1.5 rounded-full bg-chai-cream/50 blur-sm animate-steam" style={{ animationDelay: `${d}s` }} />)}
            </div>
            {
    /* logo cup */
  }
            <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 sm:h-72 sm:w-72 rounded-full overflow-hidden ring-4 ring-chai-orange/60 glow-orange"
  >
              <img src={logoUrl} alt="Chaiway logo cup" className="h-full w-full object-cover" />
            </motion.div>
            {
    /* storefront card */
  }
            <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -left-2 top-6 w-40 sm:w-52 rounded-2xl overflow-hidden border border-chai-orange/30 shadow-card glass-card"
  >
              <img src={storefrontUrl} alt="Chaiway storefront" className="h-28 sm:h-32 w-full object-cover" />
              <div className="p-2.5">
                <p className="text-[10px] uppercase tracking-wider text-chai-gold">Storefront</p>
                <p className="text-xs font-semibold text-chai-cream">Outlet — Maharashtra</p>
              </div>
            </motion.div>
            {
    /* interior card */
  }
            <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -right-2 bottom-2 w-40 sm:w-52 rounded-2xl overflow-hidden border border-chai-lime/30 shadow-card glass-card"
  >
              <img src={interiorUrl} alt="Chaiway café interior" className="h-28 sm:h-32 w-full object-cover" />
              <div className="p-2.5">
                <p className="text-[10px] uppercase tracking-wider text-chai-lime">Interior</p>
                <p className="text-xs font-semibold text-chai-cream">Café Dine Format</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  Hero
};
