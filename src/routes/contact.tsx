import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { MediaTrust } from "@/components/site/MediaTrust";

const search = z.object({ model: z.enum(["kiosk", "pro", "dine"]).optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Apply for Chaiway Franchise | Contact Chaiway Café" },
      { name: "description", content: "Submit a Chaiway franchise enquiry. Talk to our team about Kiosk, Pro or Dine formats." },
      { property: "og:title", content: "Apply for a Chaiway Franchise" },
      { property: "og:description", content: "Get in touch with the Chaiway franchise team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { model } = Route.useSearch();
  return (
    <div className="pt-24">
      <EnquiryForm defaultModel={model} />
      <MediaTrust />
    </div>
  );
}
