import { createFileRoute } from "@tanstack/react-router";
import { FranchiseHero } from "@/components/site/FranchiseHero";
import { FranchiseModels } from "@/components/site/FranchiseModels";
import { ROISection } from "@/components/site/ROISection";
import { InvestmentCalculator } from "@/components/site/InvestmentCalculator";
import { SupportBento } from "@/components/site/SupportBento";
import { Timeline } from "@/components/site/Timeline";
import { Comparison } from "@/components/site/Comparison";
import { FranchiseEligibility } from "@/components/site/FranchiseEligibility";
import { FAQ } from "@/components/site/FAQ";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Chaiway Franchise Models & ROI | Start Low Investment Tea Café in India" },
      { name: "description", content: "Compare Chaiway Café franchise models — Kiosk (₹5.5L), Pro (₹7.5L), and Dine (₹9.5L). 0% royalty, POS included, full training & location support. Apply today!" },
      { name: "keywords", content: "Chaiway franchise cost, chai cafe franchise investment, low investment franchise India, tea shop franchise under 10 lakh, no royalty food franchise, Chaiway Kiosk model, Chaiway Pro, Chaiway Dine" },
      { property: "og:title", content: "Chaiway Franchise Models & Investment Plans" },
      { property: "og:description", content: "Low investment, zero royalty, complete setup & training support. Start your Chaiway Café in 30-60 days." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.chaiwaychai.com/franchise" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chaiway Franchise Models & Investment Plans" },
      { name: "twitter:description", content: "Low investment, zero royalty, complete setup & training support." },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaiwaychai.com/franchise" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the investment required for a Chaiway franchise?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Investment starts from ₹5.5 lakh* for the Kiosk format, ₹7.5 lakh* for Pro format, and up to ₹9.5 lakh* for the Dine format.",
              },
            },
            {
              "@type": "Question",
              name: "Does Chaiway charge royalty?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Chaiway operates on a 0% royalty franchise model.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <div>
      <FranchiseHero />
      <FranchiseModels />
      <ROISection />
      <InvestmentCalculator />
      <SupportBento />
      <Timeline />
      <Comparison />
      <FranchiseEligibility />
      <FAQ />
      <EnquiryForm />
      <CTASection />
    </div>
  ),
});
