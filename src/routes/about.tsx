import { createFileRoute } from "@tanstack/react-router";
import { BrandStory } from "@/components/site/BrandStory";
import { MediaTrust } from "@/components/site/MediaTrust";
import { StatsStrip } from "@/components/site/StatsStrip";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chaiway Café | Foodlok Foods & Beverages Pvt. Ltd." },
      { name: "description", content: "Chaiway Café is a venture of Foodlok Foods & Beverages Pvt. Ltd., bringing modern tea café culture to everyday India." },
      { property: "og:title", content: "About Chaiway Café" },
      { property: "og:description", content: "Our story, vision and mission." },
    ],
  }),
  component: () => (<div className="pt-24"><BrandStory /><StatsStrip /><MediaTrust /><CTASection /></div>),
});
