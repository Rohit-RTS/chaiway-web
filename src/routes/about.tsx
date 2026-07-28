import { createFileRoute } from "@tanstack/react-router";
import { AboutHero } from "@/components/site/AboutHero";
import { BrandStory } from "@/components/site/BrandStory";
import { FounderSection } from "@/components/site/FounderSection";
import { Achievements } from "@/components/site/Achievements";
import { StatsStrip } from "@/components/site/StatsStrip";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chaiway Café | Foodlok Foods & Beverages Pvt. Ltd." },
      { name: "description", content: "Learn about Chaiway Café, founded in 2018 by Aba Patil Londhe under Foodlok Foods & Beverages Pvt. Ltd. Bringing modern chai culture to everyday India with 40+ outlets." },
      { name: "keywords", content: "About Chaiway, Foodlok Foods & Beverages, Aba Patil Londhe, chai cafe story, Indian tea cafe brand, Chaiway history" },
      { property: "og:title", content: "About Chaiway Café — Story, Vision & Mission" },
      { property: "og:description", content: "Founded in 2018 with a vision of 200 outlets across India. Bringing modern chai culture to the masses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.chaiwaychai.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaiwaychai.com/about" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Chaiway Café",
          description: "Story, mission, vision, founder details, and growth milestones of Chaiway Café.",
        }),
      },
    ],
  }),
  component: () => (
    <div>
      <AboutHero />
      <BrandStory />
      <StatsStrip />
      <FounderSection />
      <Achievements />
      <CTASection />
    </div>
  ),
});
