import "./Gallery.css";
import { motion } from "framer-motion";
import storefront from "@/assets/storefront.asset.json";
import interior from "@/assets/interior.asset.json";
import kiosk from "@/assets/kiosk.asset.json";
import menu1 from "@/assets/menu-1.asset.json";
import menu2 from "@/assets/menu-2.asset.json";
import menu3 from "@/assets/menu-3.asset.json";
import menu4 from "@/assets/menu-4.asset.json";
import businessCard from "@/assets/business-card.asset.json";
import logoPremium from "@/assets/logo-premium.asset.json";
import { SectionHeading } from "./SectionHeading";
const items = [
  { src: storefront.url, label: "Storefront", tag: "Outlets" },
  { src: interior.url, label: "Caf\xE9 Interior", tag: "Interior" },
  { src: kiosk.url, label: "Kiosk Format", tag: "Outlets" },
  { src: menu2.url, label: "Tea & Coffee Menu", tag: "Menu" },
  { src: menu1.url, label: "Pizza, Sandwich & Burger", tag: "Menu" },
  { src: menu3.url, label: "Pasta, Momos & Bites", tag: "Menu" },
  { src: menu4.url, label: "Bread, Water & Extras", tag: "Menu" },
  { src: businessCard.url, label: "Founder Card", tag: "Brand" },
  { src: logoPremium.url, label: "Chaiway Premium Outlet", tag: "Brand" }
];
function Gallery() {
  return <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Gallery" title={<>Inside The <span className="text-gradient-orange">Chaiway World</span></>} subtitle="A look at our outlets, interiors, menu and brand moments." />

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((it, i) => <motion.figure
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: i % 6 * 0.05 }}
    className="relative break-inside-avoid overflow-hidden rounded-2xl border border-chai-orange/20 group"
  >
              <img src={it.src} alt={it.label} loading="lazy" className="w-full object-cover group-hover:scale-105 transition duration-700" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-chai-black to-transparent p-4">
                <p className="text-[10px] uppercase tracking-wider text-chai-lime font-semibold">{it.tag}</p>
                <p className="text-sm font-bold text-chai-cream">{it.label}</p>
              </figcaption>
            </motion.figure>)}
        </div>
      </div>
    </section>;
}
export {
  Gallery
};
