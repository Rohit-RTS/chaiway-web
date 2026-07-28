import { createFileRoute } from "@tanstack/react-router";
import { MenuHero } from "@/components/site/MenuHero";
import { FullMenu } from "@/components/site/FullMenu";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Chaiway Café Full Menu & Prices | Tea, Coffee, Pizza, Burgers, Maggi & Snacks" },
      { name: "description", content: "Explore the full Chaiway Café menu — Kadak chai from ₹12, Kullad chai, cold coffee, pizza, burgers, Maggi, momos, lassi & bites. 100% vegetarian mass-market menu." },
      { name: "keywords", content: "Chaiway menu, Chaiway tea prices, kullad chai price, Chaiway pizza menu, Chaiway burger, tea cafe menu India, affordable cafe menu" },
      { property: "og:title", content: "Chaiway Café Full Menu & Prices" },
      { property: "og:description", content: "50+ menu items starting at ₹12. Kadak chai, pizza, burgers, Maggi, shakes & more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.chaiwaychai.com/menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaiwaychai.com/menu" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Chaiway Café Menu",
          hasMenuSection: [
            { "@type": "MenuSection", name: "Tea", description: "Kadak Masala, Kullad, Tandoor & Green Tea" },
            { "@type": "MenuSection", name: "Pizza", description: "6-inch and 8-inch vegetarian pizzas" },
            { "@type": "MenuSection", name: "Burgers & Snacks", description: "Veg burgers, fries, pops, and sandwiches" },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <div>
      <MenuHero />
      <FullMenu />
      <CTASection />
    </div>
  ),
});
