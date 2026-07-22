import "./MenuShowcase.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { menuCategories } from "@/data/menu";
import menu1 from "@/assets/menu-1.asset.json";
import menu2 from "@/assets/menu-2.asset.json";
import menu3 from "@/assets/menu-3.asset.json";
import menu4 from "@/assets/menu-4.asset.json";
import { SectionHeading } from "./SectionHeading";
const previewImages = [menu2, menu1, menu3, menu4];
function MenuShowcase({ full = false }) {
  const [active, setActive] = useState(menuCategories[0].id);
  const cats = full ? menuCategories : menuCategories.slice(0, 8);
  const activeCat = menuCategories.find((c) => c.id === active) ?? menuCategories[0];
  return <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Budget-Friendly Menu" title={<>A Menu Built for <span className="text-gradient-orange">Everyday India</span></>} subtitle="Chai, snacks, pizza, burger, sandwich, Maggi, momos and more — priced for daily customers." />

        {!full && <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {previewImages.map((img, i) => <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08 }}
    className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-chai-orange/20 group"
  >
                <img src={img.url} alt={`Chaiway menu ${i + 1}`} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              </motion.div>)}
          </div>}

        <div className="mt-12">
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {cats.map((c) => <button
    key={c.id}
    onClick={() => setActive(c.id)}
    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${active === c.id ? "bg-gradient-to-r from-chai-orange to-chai-gold text-[#1a0e00]" : "border border-chai-orange/25 text-chai-cream hover:bg-chai-orange/10"}`}
  >
                {c.name}
              </button>)}
          </div>

          <motion.div
    key={activeCat.id}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="mt-6 rounded-3xl border border-chai-orange/20 bg-chai-black/60 p-6 sm:p-8"
  >
            <div className="flex items-baseline justify-between border-b border-chai-orange/15 pb-4 mb-5">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-chai-orange">{activeCat.name}</h3>
              {activeCat.tagline && <p className="text-xs text-chai-lime">{activeCat.tagline}</p>}
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {activeCat.items.map((item) => <li key={item.name} className="flex items-baseline gap-3 text-chai-cream">
                  <span className="text-sm font-medium flex-1">{item.name}</span>
                  <span className="border-b border-dashed border-chai-muted/40 flex-1 min-w-4" />
                  <span className="text-sm font-bold text-chai-gold">₹{item.price}</span>
                </li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  MenuShowcase
};
