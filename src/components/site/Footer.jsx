import "./Footer.css";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
const logoUrl = "/assets/logo.jpeg";
import { CONTACT } from "@/lib/contact";
function Footer() {
  return <footer className="relative mt-20 border-t border-chai-orange/20 bg-chai-charcoal">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chai-orange to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Chaiway" className="h-12 w-12 rounded-full ring-2 ring-chai-orange/50" />
              <div>
                <p className="font-display font-bold text-xl text-chai-cream">Chaiway Café</p>
                <p className="text-xs text-chai-gold tracking-wider uppercase">Chai Bolti Hai..!</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-chai-muted">
              India's affordable tea café franchise model — low investment, 0% royalty, POS-enabled
              operations and a menu built for everyday India.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => <a key={i} href="#" aria-label="social" className="rounded-full border border-chai-orange/30 p-2 text-chai-cream/80 hover:text-chai-orange hover:border-chai-orange transition">
                  <Icon className="h-4 w-4" />
                </a>)}
            </div>
          </div>

          <FooterCol title="Brand" links={[["About", "/about"], ["Gallery", "/gallery"], ["Menu", "/menu"]]} />
          <FooterCol title="Franchise" links={[["Models", "/franchise"], ["Apply", "/contact"], ["Locations", "/gallery"]]} />

          <div>
            <p className="font-display text-sm font-semibold text-chai-gold uppercase tracking-wider">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-chai-muted">
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-chai-orange mt-0.5" /><span>{CONTACT.phonePrimary}<br />{CONTACT.phoneSecondary}</span></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-chai-orange mt-0.5" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-chai-orange mt-0.5" /><span>{CONTACT.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-chai-orange/10 pt-6 text-xs text-chai-muted">
          <p>© {(/* @__PURE__ */ new Date()).getFullYear()} {CONTACT.company}. All rights reserved.</p>
          <p>Investment & returns are indicative — subject to location, operations and final agreement.</p>
        </div>
      </div>
    </footer>;
}
function FooterCol({ title, links }) {
  return <div>
      <p className="font-display text-sm font-semibold text-chai-gold uppercase tracking-wider">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-chai-muted">
        {links.map(([label, to]) => <li key={to}><Link to={to} className="hover:text-chai-orange transition">{label}</Link></li>)}
      </ul>
    </div>;
}
export {
  Footer
};
