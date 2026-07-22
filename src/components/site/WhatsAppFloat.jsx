import "./WhatsAppFloat.css";
import { MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppLink, CONTACT } from "@/lib/contact";
function WhatsAppFloat() {
  const link = buildWhatsAppLink("Hi Chaiway team, I'd like to know more about your franchise.");
  return <>
      <a
    href={link}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-105 transition animate-glow-pulse"
  >
        <MessageCircle className="h-7 w-7" />
      </a>

      {
    /* Mobile bottom CTA bar */
  }
      <div className="fixed bottom-0 inset-x-0 z-30 grid grid-cols-3 sm:hidden border-t border-chai-orange/20 bg-chai-black/95 backdrop-blur-xl">
        <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`} className="flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-chai-cream">
          <Phone className="h-4 w-4 text-chai-orange" /> Call
        </a>
        <a href={link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-chai-cream border-x border-chai-orange/20">
          <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
        </a>
        <a href="/contact" className="flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-[#1a0e00] bg-gradient-to-r from-chai-orange to-chai-gold">
          Apply
        </a>
      </div>
    </>;
}
export {
  WhatsAppFloat
};
