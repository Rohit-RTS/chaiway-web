 import "./Header.css";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
const logoUrl = "/assets/logo.jpeg";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/franchise", label: "Franchise" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header
    className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-chai-black/85 backdrop-blur-xl border-b border-chai-orange/15" : "bg-transparent"}`}
  >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-chai-orange/40 group-hover:ring-chai-orange transition">
            <img src={logoUrl} alt="Chaiway logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-chai-cream text-lg">Chaiway</span>
            <span className="text-[0.65rem] text-chai-gold tracking-wider uppercase">Chai Bolti Hai</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => <Link
    key={l.to}
    to={l.to}
    className="px-4 py-2 text-sm font-medium text-chai-cream/80 hover:text-chai-gold transition-colors"
    activeProps={{ className: "text-chai-orange" }}
  >
              {l.label}
            </Link>)}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
    href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`}
    className="inline-flex items-center gap-1.5 rounded-full border border-chai-orange/40 px-3.5 py-2 text-sm font-semibold text-chai-cream hover:bg-chai-orange/10 transition"
  >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <Link
    to="/contact"
    className="rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-4 py-2 text-sm font-bold text-[#1a0e00] shadow-[0_8px_24px_-8px_rgba(244,123,0,0.7)] hover:shadow-[0_12px_32px_-8px_rgba(244,123,0,0.9)] transition-shadow"
  >
            Apply Franchise
          </Link>
        </div>

        <button
    aria-label="Toggle menu"
    className="lg:hidden rounded-md p-2 text-chai-cream"
    onClick={() => setOpen((v) => !v)}
  >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && <div className="lg:hidden border-t border-chai-orange/15 bg-chai-black/95 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => <Link
    key={l.to}
    to={l.to}
    onClick={() => setOpen(false)}
    className="rounded-lg px-4 py-3 text-base font-medium text-chai-cream hover:bg-chai-orange/10"
  >
                {l.label}
              </Link>)}
            <a
    href={buildWhatsAppLink("Hi, I'm interested in a Chaiway franchise.")}
    target="_blank"
    rel="noreferrer"
    className="mt-2 rounded-lg bg-chai-lime px-4 py-3 text-center text-base font-bold text-[#0a1500]"
  >
              WhatsApp Us
            </a>
            <Link
    to="/contact"
    onClick={() => setOpen(false)}
    className="rounded-lg bg-gradient-to-r from-chai-orange to-chai-gold px-4 py-3 text-center text-base font-bold text-[#1a0e00]"
  >
              Apply for Franchise
            </Link>
          </nav>
        </div>}
    </header>;
}
export {
  Header
};
