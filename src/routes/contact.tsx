import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContactHero } from "@/components/site/ContactHero";
import { ContactInfo } from "@/components/site/ContactInfo";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";

const search = z.object({ model: z.enum(["kiosk", "pro", "dine"]).optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Contact Chaiway Café | Apply for Franchise & Enquiries" },
      { name: "description", content: "Submit a Chaiway franchise enquiry or reach our team in Nanded, Maharashtra. Phone: +91 96738 36999. Fast 24-hour response." },
      { name: "keywords", content: "Contact Chaiway, Chaiway franchise enquiry, Chaiway phone number, Chaiway Nanded address, apply chai cafe franchise" },
      { property: "og:title", content: "Apply for a Chaiway Franchise | Contact Us" },
      { property: "og:description", content: "Get in touch with the Chaiway franchise team. 24-hour response guaranteed." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.chaiwaychai.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.chaiwaychai.com/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Chaiway Café",
          description: "Franchise enquiry form, address, phone numbers, business hours and location map.",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { model } = Route.useSearch();
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <EnquiryForm defaultModel={model} />
      <FAQ />
      <CTASection />
    </div>
  );
}
