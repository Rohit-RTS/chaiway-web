import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/enquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const data = await request.json();
          // TODO: forward to CRM / email / database integration.
          console.log("[Chaiway Enquiry]", data);
          return Response.json({ ok: true });
        } catch (e) {
          return Response.json({ ok: false, error: String(e) }, { status: 400 });
        }
      },
    },
  },
});
