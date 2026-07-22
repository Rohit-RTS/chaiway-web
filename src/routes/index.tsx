import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { BrandStory } from "@/components/site/BrandStory";
import { USPGrid } from "@/components/site/USPGrid";
import { TechDashboard } from "@/components/site/TechDashboard";
import { FranchiseModels } from "@/components/site/FranchiseModels";
import { InvestmentCalculator } from "@/components/site/InvestmentCalculator";
import { SupportBento } from "@/components/site/SupportBento";
import { Timeline } from "@/components/site/Timeline";
import { Comparison } from "@/components/site/Comparison";
import { MenuShowcase } from "@/components/site/MenuShowcase";
import { Audience } from "@/components/site/Audience";
import { Gallery } from "@/components/site/Gallery";
import { MediaTrust } from "@/components/site/MediaTrust";
import { Locations } from "@/components/site/Locations";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { name: "description", content: "Start your own Chaiway Café franchise with low investment, no royalty, POS-enabled operations and a mass-market tea café menu." },
      { property: "og:title", content: "Chaiway Café Franchise — Chai Bolti Hai" },
      { property: "og:description", content: "India's affordable tea café franchise. Low investment, 0% royalty, full support." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <BrandStory />
      <USPGrid />
      <TechDashboard />
      <FranchiseModels />
      <InvestmentCalculator />
      <SupportBento />
      <Timeline />
      <Comparison />
      <MenuShowcase />
      <Audience />
      <Gallery />
      <MediaTrust />
      <Locations />
      <EnquiryForm />
      <FAQ />
      <CTASection />
    </>
  );
}
