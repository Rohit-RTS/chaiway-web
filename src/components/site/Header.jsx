 import "./Header.css";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const logoUrl = "/assets/logo.jpeg";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/franchise", label: "Franchise" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function HamburgerIcon({ open }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between cursor-pointer">
      <motion.span
        animate={open ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="block h-0.5 rounded-full bg-chai-cream origin-left"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 rounded-full bg-chai-cream"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="block h-0.5 rounded-full bg-chai-cream origin-left"
      />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const isActive = (to) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-chai-black/90 backdrop-blur-2xl border-b border-chai-orange/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-chai-orange/50 group-hover:ring-chai-orange transition-all duration-300 shadow-[0_0_16px_rgba(244,123,0,0.4)] animate-glow-pulse">
            <img src={logoUrl} alt="Chaiway logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-chai-cream text-sm sm:text-[1.05rem]">Chaiway</span>
            <span className="text-[0.55rem] sm:text-[0.62rem] text-chai-gold tracking-widest uppercase font-semibold">Chai Bolti Hai</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                isActive(l.to)
                  ? "text-chai-orange"
                  : "text-chai-cream/75 hover:text-chai-gold hover:bg-chai-orange/8"
              }`}
            >
              {l.label}
              {/* Active Underline Indicator */}
              {isActive(l.to) && (
                <motion.div
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-chai-orange/35 px-3.5 py-2 text-sm font-semibold text-chai-cream hover:bg-chai-orange/12 hover:border-chai-orange/60 transition-all duration-300"
          >
            <Phone className="h-3.5 w-3.5 text-chai-orange" /> Call
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-4 py-2 text-sm font-bold text-[#1a0e00] shadow-[0_6px_20px_-4px_rgba(244,123,0,0.65)] hover:shadow-[0_10px_30px_-4px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Apply Franchise
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden rounded-lg p-2.5 text-chai-cream hover:bg-chai-orange/10 transition-colors duration-200"
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-[68px] z-40 bg-chai-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Slide-Down Menu Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ y: -20, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden absolute top-full inset-x-0 z-50 border-t border-chai-orange/15 bg-chai-black/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <nav className="flex flex-col p-5 gap-1">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${
                        isActive(l.to)
                          ? "bg-chai-orange/15 text-chai-orange border border-chai-orange/25"
                          : "text-chai-cream hover:bg-chai-orange/8 hover:text-chai-gold"
                      }`}
                    >
                      {l.label}
                      {isActive(l.to) && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-chai-orange shadow-[0_0_8px_rgba(244,123,0,0.8)]" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-chai-orange/12">
                  <a
                    href={buildWhatsAppLink("Hi, I'm interested in a Chaiway franchise.")}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-chai-lime/15 border border-chai-lime/30 px-4 py-3.5 text-center text-base font-bold text-chai-lime hover:bg-chai-lime/25 transition-all duration-200"
                  >
                    💬 WhatsApp Us
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-gradient-to-r from-chai-orange to-chai-gold px-4 py-3.5 text-center text-base font-bold text-[#1a0e00] shadow-[0_6px_20px_-4px_rgba(244,123,0,0.55)] hover:shadow-[0_10px_30px_-4px_rgba(244,123,0,0.8)] transition-all duration-200"
                  >
                    Apply for Franchise →
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Header };
