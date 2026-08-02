import "./EnquiryForm.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { buildWhatsAppLink, CONTACT } from "@/lib/contact";
import { SectionHeading } from "./SectionHeading";
const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  whatsapp: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid WhatsApp number").optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  state: z.string().trim().min(2, "Required").max(60),
  city: z.string().trim().min(2, "Required").max(60),
  budget: z.string().min(1, "Select your budget"),
  property: z.enum(["yes", "no"], { message: "Required" }),
  area: z.string().trim().max(20).optional().or(z.literal("")),
  model: z.enum(["kiosk", "pro", "dine", "not-sure"]),
  occupation: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(500).optional().or(z.literal(""))
});
/** @param {{ defaultModel?: string }} [props] */
function EnquiryForm({ defaultModel } = {}) {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { model: defaultModel ?? "not-sure", property: void 0 }
  });
  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).catch(() => {
      });
      const msg = `*New Chaiway Franchise Enquiry*%0A%0AName: ${data.name}%0AMobile: ${data.mobile}%0A` + (data.whatsapp ? `WhatsApp: ${data.whatsapp}%0A` : "") + (data.email ? `Email: ${data.email}%0A` : "") + `State: ${data.state}%0ACity: ${data.city}%0ABudget: ${data.budget}%0AModel: ${data.model}%0AProperty: ${data.property}${data.area ? ` (${data.area} sq.ft.)` : ""}%0A` + (data.occupation ? `Occupation: ${data.occupation}%0A` : "") + (data.message ? `Message: ${data.message}` : "");
      toast.success("Enquiry submitted! Opening WhatsApp\u2026", { description: "Our franchise team will get in touch shortly." });
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, "_blank");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section id="enquiry" className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Franchise Enquiry" title={<>Apply for a <span className="text-gradient-orange">Chaiway Franchise</span></>} subtitle="Our franchise team will connect with you for model suitability, location discussion and next steps." />

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 rounded-3xl border border-chai-orange/20 bg-chai-charcoal/70 p-6 sm:p-8 grid gap-4 sm:grid-cols-2">
          <Field label="Full Name *" error={errors.name?.message}>
            <input {...register("name")} className="input" placeholder="Your name" />
          </Field>
          <Field label="Mobile Number *" error={errors.mobile?.message}>
            <input {...register("mobile")} className="input" placeholder="10-digit mobile" inputMode="numeric" />
          </Field>
          <Field label="WhatsApp Number" error={errors.whatsapp?.message}>
            <input {...register("whatsapp")} className="input" placeholder="If different from mobile" inputMode="numeric" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} className="input" placeholder="you@example.com" />
          </Field>
          <Field label="State *" error={errors.state?.message}>
            <input {...register("state")} className="input" placeholder="e.g. Maharashtra" />
          </Field>
          <Field label="Preferred City *" error={errors.city?.message}>
            <input {...register("city")} className="input" placeholder="e.g. Pune" />
          </Field>
          <Field label="Investment Budget *" error={errors.budget?.message}>
            <select {...register("budget")} className="input">
              <option value="">Select budget</option>
              <option value="5-7L">₹5 – 7 Lakh</option>
              <option value="7-10L">₹7 – 10 Lakh</option>
              <option value="10-15L">₹10 – 15 Lakh</option>
              <option value="15L+">₹15 Lakh+</option>
            </select>
          </Field>
          <Field label="Preferred Model *" error={errors.model?.message}>
            <select {...register("model")} className="input">
              <option value="kiosk">Kiosk</option>
              <option value="pro">Pro (Most Popular)</option>
              <option value="dine">Dine</option>
              <option value="not-sure">Not Sure</option>
            </select>
          </Field>
          <Field label="Property Available? *" error={errors.property?.message}>
            <select {...register("property")} className="input" defaultValue="">
              <option value="" disabled>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </Field>
          <Field label="Available Area (sq. ft.)" error={errors.area?.message}>
            <input {...register("area")} className="input" placeholder="e.g. 150" inputMode="numeric" />
          </Field>
          <Field label="Current Occupation" error={errors.occupation?.message} className="sm:col-span-2">
            <input {...register("occupation")} className="input" placeholder="e.g. Business owner, salaried, student" />
          </Field>
          <Field label="Message" error={errors.message?.message} className="sm:col-span-2">
            <textarea {...register("message")} rows={3} className="input resize-none" placeholder="Tell us anything specific about your location or plans." />
          </Field>

          <div className="sm:col-span-2 flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-8 py-3.5 text-sm font-bold text-[#1a0e00] hover:shadow-[0_12px_30px_-8px_rgba(244,123,0,0.7)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {submitting ? "Submitting…" : "Apply for Chaiway Franchise"}
            </button>
            <a
              href={buildWhatsAppLink("Hi, I'd like to enquire about a Chaiway franchise.")}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-2 rounded-full border border-chai-lime/50 px-6 py-3.5 text-sm font-bold text-chai-lime hover:bg-chai-lime/10 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <p className="sm:col-span-2 text-xs text-chai-muted/80 text-center max-w-lg mx-auto mt-3">
            By submitting, you agree to be contacted by the official Chaiway franchise team.
          </p>
        </form>
      </div>

      <style>{`.input { width: 100%; text-align: center; border-radius: 12px; background: rgba(8,6,4,0.6); border: 1px solid rgba(244,123,0,0.2); padding: 0.7rem 0.9rem; font-size: 0.875rem; color: var(--chai-cream); outline: none; transition: border-color 0.2s; }
        .input:focus { border-color: var(--chai-orange); }
        .input::placeholder { color: rgba(168,162,158,0.5); text-align: center; }
        select.input { text-align-last: center; }
      `}</style>
    </section>
  );
}
function Field({ label, error, children, className = "" }) {
  return (
    <label className={`block text-center ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-chai-gold block text-center">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-[11px] text-red-400 text-center">{error}</span>}
    </label>
  );
}
export {
  EnquiryForm
};
