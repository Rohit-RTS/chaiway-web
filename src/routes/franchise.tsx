import { createFileRoute } from "@tanstack/react-router";
import { FranchiseModels } from "@/components/site/FranchiseModels";
import { InvestmentCalculator } from "@/components/site/InvestmentCalculator";
import { Timeline } from "@/components/site/Timeline";
import { Comparison } from "@/components/site/Comparison";
import { SupportBento } from "@/components/site/SupportBento";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { StatsStrip } from "@/components/site/StatsStrip";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Chaiway Franchise Models | Kiosk, Pro & Dine Formats" },
      { name: "description", content: "Compare Chaiway Café franchise models — Kiosk, Pro and Dine. Low investment, no royalty, full operational support." },
      { property: "og:title", content: "Chaiway Franchise Models" },
      { property: "og:description", content: "Pick the right Chaiway format for your city, area and budget." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <FranchiseModels />
      <StatsStrip />
      <InvestmentCalculator />
      <SupportBento />
      <Timeline />
      <Comparison />
      <EnquiryForm />
      <FAQ />
      <CTASection />
    </div>
  ),
});
