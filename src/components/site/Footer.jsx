import "./Footer.css";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Facebook, ExternalLink } from "lucide-react";
const logoUrl = "/assets/logo.jpeg";
import { CONTACT } from "@/lib/contact";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
];

const franchiseLinks = [
  { label: "Franchise Models", to: "/franchise" },
  { label: "Apply Now", to: "/contact" },
  { label: "ROI Overview", to: "/franchise" },
  { label: "FAQ", to: "/franchise" },
];

function Footer() {
  return (
    <footer className="relative mt-16 sm:mt-20 border-t border-chai-orange/20 bg-chai-charcoal">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chai-orange to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 lg:py-16">

        {/* Main Grid: Brand (full-width on mobile) + 3 link columns */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-12">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoUrl}
                alt="Chaiway Café"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-chai-orange/50 object-cover shrink-0"
              />
              <div>
                <p className="font-display font-bold text-base sm:text-lg text-chai-cream leading-tight">Chaiway Café</p>
                <p className="text-[10px] sm:text-[11px] text-chai-gold tracking-wider uppercase">Chai Bolti Hai..!</p>
              </div>
            </div>

            <p className="text-sm text-chai-muted leading-relaxed max-w-xs">
              India's affordable tea café franchise — low investment, 0% royalty, POS-enabled operations and a menu built for everyday India.
            </p>

            {/* Social Badges */}
            <div className="mt-4 sm:mt-5 flex items-center flex-wrap gap-2">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-1.5 rounded-full border border-chai-orange/30 px-3 py-1.5 text-xs text-chai-cream/80 hover:text-chai-orange hover:border-chai-orange hover:bg-chai-orange/10 transition-all duration-200"
              >
                <Instagram className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Instagram
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center gap-1.5 rounded-full border border-chai-orange/30 px-3 py-1.5 text-xs text-chai-cream/80 hover:text-chai-orange hover:border-chai-orange hover:bg-chai-orange/10 transition-all duration-200"
              >
                <Facebook className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Facebook
              </a>
            </div>
          </div>

          {/* ── Link Columns: 2-col grid on mobile, split across desktop ── */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:contents">

            {/* Quick Links */}
            <div>
              <p className="font-display text-xs sm:text-sm font-semibold text-chai-gold uppercase tracking-wider mb-3 sm:mb-4">
                Quick Links
              </p>
              <ul className="space-y-2 sm:space-y-2.5">
                {navLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-chai-muted hover:text-chai-orange transition-colors duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-chai-orange/40 group-hover:bg-chai-orange transition-colors shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Franchise Links */}
            <div>
              <p className="font-display text-xs sm:text-sm font-semibold text-chai-gold uppercase tracking-wider mb-3 sm:mb-4">
                Franchise
              </p>
              <ul className="space-y-2 sm:space-y-2.5">
                {franchiseLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-chai-muted hover:text-chai-orange transition-colors duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-chai-orange/40 group-hover:bg-chai-orange transition-colors shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Contact Column ── */}
          <div className="sm:col-span-1">
            <p className="font-display text-xs sm:text-sm font-semibold text-chai-gold uppercase tracking-wider mb-3 sm:mb-4">
              Contact Us
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-chai-orange mt-0.5" />
                <div className="text-sm text-chai-muted">
                  <p>{CONTACT.phonePrimary}</p>
                  <p>{CONTACT.phoneSecondary}</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-chai-orange mt-0.5" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-chai-muted hover:text-chai-gold transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-chai-orange mt-0.5" />
                <span className="text-sm text-chai-muted leading-relaxed">{CONTACT.address}</span>
              </li>
            </ul>

            {/* Apply CTA */}
            <Link
              to="/contact"
              className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-[#1a0e00] shadow-[0_6px_20px_-4px_rgba(244,123,0,0.5)] hover:shadow-[0_10px_28px_-4px_rgba(244,123,0,0.8)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Apply for Franchise <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-10 sm:mt-12 border-t border-chai-orange/10 pt-5 sm:pt-6">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-chai-muted">
              © {new Date().getFullYear()} {CONTACT.company}. All rights reserved.
            </p>
            <p className="text-xs text-chai-muted/60">
              Investment &amp; returns are indicative — subject to location, operations and final agreement.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export { Footer };
