import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";

const galleryTabs = ["All", "Storefronts", "Interiors", "Food", "Kiosks"];

const galleryItems = [
  { src: "/assets/storefront.jpeg", alt: "Chaiway storefront", category: "Storefronts", label: "Main Outlet" },
  { src: "/assets/interior.jpeg", alt: "Café interior", category: "Interiors", label: "Café Interior" },
  { src: "/assets/kiosk.jpeg", alt: "Chaiway kiosk", category: "Kiosks", label: "Kiosk Format" },
  { src: "/assets/menu-1.jpeg", alt: "Chaiway menu 1", category: "Food", label: "Menu Board" },
  { src: "/assets/menu-2.jpeg", alt: "Chaiway menu 2", category: "Food", label: "Food Items" },
  { src: "/assets/menu-3.jpeg", alt: "Chaiway menu 3", category: "Food", label: "Beverages" },
  { src: "/assets/menu-4.jpeg", alt: "Chaiway menu 4", category: "Food", label: "Specials" },
  { src: "/assets/business-card.jpeg", alt: "Business card", category: "Storefronts", label: "Brand Identity" },
];

export function GalleryFull() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Tab filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {galleryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                active === tab
                  ? "bg-gradient-to-r from-chai-orange to-chai-gold text-[#1a0e00] shadow-[0_6px_20px_-4px_rgba(244,123,0,0.5)]"
                  : "border border-chai-orange/25 text-chai-muted hover:text-chai-cream hover:bg-chai-orange/8"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(item)}
                className={`relative overflow-hidden rounded-2xl border border-chai-orange/15 cursor-pointer group ${
                  i % 5 === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                  style={{ aspectRatio: i % 5 === 0 ? "3/4" : "1/1" }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chai-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-[10px] text-chai-gold uppercase tracking-wider font-semibold">{item.category}</span>
                    <p className="text-sm font-bold text-chai-cream mt-0.5">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center rounded-3xl border border-chai-orange/20 bg-chai-charcoal/50 p-10"
        >
          <h3 className="font-display text-2xl font-extrabold text-chai-cream">Want to Open an Outlet This Premium?</h3>
          <p className="mt-3 text-chai-muted max-w-xl mx-auto">
            Every Chaiway outlet is set up with the same design language, brand identity, and quality standards.
          </p>
          <Link
            to="/franchise"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-8 py-4 text-sm font-bold text-[#1a0e00] shadow-[0_10px_30px_-6px_rgba(244,123,0,0.6)] hover:shadow-[0_16px_40px_-6px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Franchise Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-chai-black/95 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full rounded-3xl border border-chai-orange/25 shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-chai-black/80 border border-chai-orange/30 flex items-center justify-center text-chai-cream hover:bg-chai-orange/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-chai-gold uppercase tracking-wider">{lightbox.category}</p>
                <p className="text-sm font-bold text-chai-cream">{lightbox.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
