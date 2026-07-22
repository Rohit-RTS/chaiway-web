import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { Locations } from "@/components/site/Locations";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Chaiway Gallery | Outlets, Interiors & Menu" },
      { name: "description", content: "Photos of Chaiway Café outlets, interiors, menu boards and brand moments." },
      { property: "og:title", content: "Chaiway Gallery" },
      { property: "og:description", content: "A look inside Chaiway outlets across India." },
    ],
  }),
  component: () => (<div className="pt-24"><Gallery /><Locations /></div>),
});
