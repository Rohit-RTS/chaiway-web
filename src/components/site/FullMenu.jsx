import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menu";
import { Search, Flame, Star, IndianRupee } from "lucide-react";

const categoryIcons = {
  tea: "🍵",
  milk: "🥛",
  coffee: "☕",
  "cold-coffee": "🧋",
  lassi: "🍶",
  pizza: "🍕",
  sandwich: "🥪",
  burger: "🍔",
  maggi: "🍜",
  momos: "🥟",
  pasta: "🍝",
  bites: "🍟",
  bread: "🍞",
  "fast-bites": "⚡",
  extras: "💧",
};

const bestSellers = ["Kadak Masala Chai", "Kullad Kick Chai", "Special Tandoor Chai", "Veg Cheese Burger", "Chaiway Special Pizza", "Lassi with Ice-Cream", "Veg Paneer Cheese Maggi"];

export function FullMenu() {
  const [activeCategory, setActiveCategory] = useState("tea");
  const [search, setSearch] = useState("");

  const current = menuCategories.find((c) => c.id === activeCategory);

  const filteredCategories = search
    ? menuCategories.map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : null;

  const displayCategories = filteredCategories || menuCategories;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Best Sellers Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl border border-chai-gold/20 bg-gradient-to-r from-chai-orange/8 to-chai-gold/5 p-5 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flame className="h-4 w-4 text-chai-orange" />
            <span className="text-sm font-bold text-chai-gold uppercase tracking-wider text-center">Best Sellers</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {bestSellers.map((item) => (
              <span key={item} className="inline-flex items-center gap-1 rounded-full border border-chai-orange/25 bg-chai-orange/10 px-3 py-1.5 text-xs font-semibold text-chai-cream">
                <Star className="h-3 w-3 text-chai-gold fill-chai-gold" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-8 max-w-md mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-chai-muted" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-chai-orange/25 bg-chai-charcoal/60 pl-11 pr-5 py-3 text-sm text-chai-cream placeholder:text-chai-muted focus:outline-none focus:border-chai-orange/60 focus:ring-1 focus:ring-chai-orange/30 backdrop-blur-sm transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-chai-muted hover:text-chai-cream text-xs"
            >
              Clear
            </button>
          )}
        </motion.div>

        {search ? (
          /* Search Results */
          <div className="space-y-8">
            {displayCategories.map((cat) => (
              <div key={cat.id}>
                <h3 className="flex items-center gap-2 font-display text-xl font-bold text-chai-cream mb-4">
                  <span className="text-2xl">{categoryIcons[cat.id] || "🍽️"}</span>
                  {cat.name}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item) => (
                    <MenuItemCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Category Tab View */
          <div className="flex gap-8 flex-col lg:flex-row">
            {/* Sidebar Tabs */}
            <div className="lg:w-56 shrink-0">
              <div className="sticky top-24 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {menuCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeCategory === cat.id
                        ? "bg-chai-orange text-[#1a0e00] font-bold shadow-[0_6px_20px_-4px_rgba(244,123,0,0.6)]"
                        : "text-chai-muted hover:text-chai-cream hover:bg-chai-orange/10 border border-transparent hover:border-chai-orange/15"
                    }`}
                  >
                    <span className="text-lg">{categoryIcons[cat.id] || "🍽️"}</span>
                    {cat.name}
                    <span className={`ml-auto text-[10px] rounded-full px-1.5 py-0.5 ${activeCategory === cat.id ? "bg-[#1a0e00]/20 text-[#1a0e00]" : "bg-chai-charcoal text-chai-muted"}`}>
                      {cat.items.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Items Panel */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-center gap-3 mb-6 text-center">
                    <span className="text-4xl">{categoryIcons[current?.id] || "🍽️"}</span>
                    <div className="text-center">
                      <h2 className="font-display text-2xl font-extrabold text-chai-cream text-center">{current?.name}</h2>
                      {current?.tagline && (
                        <p className="text-sm text-chai-gold text-center">{current.tagline}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {current?.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <MenuItemCard item={item} highlight={bestSellers.includes(item.name)} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        <p className="mt-10 text-center text-xs text-chai-muted/70">
          * Prices may vary by location and outlet. Menu is subject to change without prior notice.
        </p>
      </div>
    </section>
  );
}

function MenuItemCard({ item, highlight }) {
  return (
    <div className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-200 hover:border-chai-orange/40 ${
      highlight
        ? "border-chai-gold/30 bg-chai-gold/5"
        : "border-chai-orange/12 bg-chai-charcoal/50"
    }`}>
      <div className="flex items-center gap-2">
        {highlight && <Star className="h-3.5 w-3.5 text-chai-gold fill-chai-gold shrink-0" />}
        <span className="text-sm font-medium text-chai-cream">{item.name}</span>
      </div>
      <span className="flex items-center gap-0.5 text-sm font-bold text-chai-gold shrink-0 ml-2">
        <IndianRupee className="h-3.5 w-3.5" />
        {item.price}
      </span>
    </div>
  );
}
