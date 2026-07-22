import "./CTASection.css";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/contact";
function CTASection() {
  return <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-chai-orange/30 bg-gradient-to-br from-chai-orange via-chai-gold to-chai-orange p-8 sm:p-14 text-center">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, #000 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
          <p className="relative text-xs uppercase tracking-[0.2em] font-bold text-[#1a0e00]/80">Chai Pe Business Ki Baat</p>
          <h2 className="relative mt-3 font-display text-3xl sm:text-5xl font-extrabold text-[#1a0e00] leading-tight">
            Apni Chai, Apna Business.<br />Be the Chaiway Café Owner.
          </h2>
          <p className="relative mt-4 text-[#1a0e00]/85 max-w-2xl mx-auto">
            Low investment. No royalty. Full support. Talk to our franchise team today.
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-chai-black px-7 py-3.5 text-sm font-bold text-chai-cream hover:bg-chai-charcoal transition">
              Apply for Franchise <ArrowRight className="h-4 w-4" />
            </Link>
            <a
    href={buildWhatsAppLink("Hi, I'd like to apply for a Chaiway franchise.")}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-[#1a0e00] px-7 py-3.5 text-sm font-bold text-chai-lime hover:opacity-90 transition"
  >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>;
}
export {
  CTASection
};
