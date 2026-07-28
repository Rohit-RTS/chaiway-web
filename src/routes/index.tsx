import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { HomeFeatures } from "@/components/site/HomeFeatures";
import { StatsStrip } from "@/components/site/StatsStrip";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { name: "description", content: "Start your own Chaiway Café franchise with low investment (starts ₹5.5L), 0% royalty, POS operations, recipe training, and 40+ outlets across India." },
      { name: "keywords", content: "Chaiway franchise, tea cafe franchise India, chai franchise, low investment cafe franchise, no royalty franchise, tea business opportunity, cafe franchise Maharashtra, chai cafe franchise under 10 lakh" },
      { property: "og:title", content: "Chaiway Café Franchise — Chai Bolti Hai" },
      { property: "og:description", content: "India's affordable tea café franchise. Low investment, 0% royalty, full support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.chaiwaychai.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaiwaychai.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <HomeFeatures />
      <Testimonials />
      <CTASection />
    </>
  );
}
