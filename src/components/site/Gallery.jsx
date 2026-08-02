import "./Gallery.css";
import { motion } from "framer-motion";
const storefrontUrl = "/assets/storefront.jpeg";
const interiorUrl = "/assets/interior.jpeg";
const kioskUrl = "/assets/kiosk.jpeg";
const menuPage1Url = "/assets/menu-page-1.jpeg";
const menuPage2Url = "/assets/menu-page-2.jpeg";
const menuPage3Url = "/assets/menu-page-3.jpeg";
const menuPage4Url = "/assets/menu-page-4.jpeg";
const menuPage5Url = "/assets/menu-page-5.jpeg";
const logoUrl = "/assets/logo.jpeg";
import { SectionHeading } from "./SectionHeading";

const items = [
  { src: storefrontUrl, label: "Storefront", tag: "Outlets" },
  { src: interiorUrl, label: "Café Interior", tag: "Interior" },
  { src: kioskUrl, label: "Kiosk Format", tag: "Outlets" },
  { src: menuPage1Url, label: "Menu Cover Page", tag: "Menu" },
  { src: menuPage2Url, label: "Tea, Coffee & Shakes", tag: "Menu" },
  { src: menuPage3Url, label: "Fast Bites, Pizza & Burger", tag: "Menu" },
  { src: menuPage4Url, label: "Pasta, Momos, Fries & Maggi", tag: "Menu" },
  { src: menuPage5Url, label: "Bread, Water & Extras", tag: "Menu" },
  { src: logoUrl, label: "Chaiway Premium Outlet", tag: "Brand" }
];

function Gallery() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Gallery" title={<>Inside The <span className="text-gradient-orange">Chaiway World</span></>} subtitle="A look at our outlets, interiors, menu and brand moments." />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-chai-orange/20 group"
            >
              <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-chai-black via-chai-black/70 to-transparent p-4">
                <p className="text-[10px] uppercase tracking-wider text-chai-lime font-semibold">{it.tag}</p>
                <p className="text-sm font-bold text-chai-cream">{it.label}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
export {
  Gallery
};
