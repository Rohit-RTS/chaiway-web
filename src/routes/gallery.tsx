import { createFileRoute } from "@tanstack/react-router";
import { GalleryHero } from "@/components/site/GalleryHero";
import { GalleryFull } from "@/components/site/GalleryFull";
import { Locations } from "@/components/site/Locations";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Chaiway Outlet Gallery | Café Interiors, Storefronts & Outlets Across India" },
      { name: "description", content: "View photos of Chaiway Café outlets across India — storefronts, interior seating, kiosks, menu boards, and food photography from 40+ locations." },
      { name: "keywords", content: "Chaiway outlet photos, chai cafe interior design, tea cafe kiosk photos, Chaiway store photos, cafe franchise outlet gallery" },
      { property: "og:title", content: "Chaiway Café Outlet Gallery" },
      { property: "og:description", content: "See Chaiway outlets in action — storefronts, interiors, kiosks & brand moments." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.chaiwaychai.com/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaiwaychai.com/gallery" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Chaiway Café Outlet Gallery",
          description: "Photos of Chaiway Café outlets, interiors, kiosks, and food items from across India.",
        }),
      },
    ],
  }),
  component: () => (
    <div>
      <GalleryHero />
      <GalleryFull />
      <Locations />
      <CTASection />
    </div>
  ),
});
