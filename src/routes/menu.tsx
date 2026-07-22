import { createFileRoute } from "@tanstack/react-router";
import { MenuShowcase } from "@/components/site/MenuShowcase";
import { Audience } from "@/components/site/Audience";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Chaiway Menu | Tea, Coffee, Pizza, Burger, Maggi & More" },
      { name: "description", content: "Explore the full Chaiway Café menu — chai, coffee, lassi, pizza, burger, sandwich, Maggi, momos, pasta and more." },
      { property: "og:title", content: "Chaiway Café Menu" },
      { property: "og:description", content: "Budget-friendly menu made for everyday India." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <MenuShowcase full />
      <Audience />
      <CTASection />
    </div>
  ),
});
