import "./MediaTrust.css";
import { motion } from "framer-motion";
import { Award, FileCheck, Newspaper, Building } from "lucide-react";
import businessCardUrl from "@/assets/business-card.jpeg";
import { SectionHeading } from "./SectionHeading";
import { CONTACT } from "@/lib/contact";
function MediaTrust() {
  return <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Media & Trust" title={<>A Registered, <span className="text-gradient-orange">Recognised Brand</span></>} subtitle="Backed by a registered company, certifications and growing media presence." />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TrustCard icon={<Award className="h-6 w-6" />} title="Registered Trademark" body="Chaiway® is a registered brand." accent="orange" />
          <TrustCard icon={<FileCheck className="h-6 w-6" />} title="FSSAI Certified" body="Food safety & hygiene compliance." accent="lime" />
          <TrustCard icon={<Newspaper className="h-6 w-6" />} title="Local Media Coverage" body="Featured in regional press & events." accent="gold" />
          <TrustCard icon={<Building className="h-6 w-6" />} title="Foodlok Foods Pvt. Ltd." body="Parent company, India." accent="orange" />
        </div>

        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-6 rounded-3xl border border-chai-orange/30 bg-gradient-to-br from-chai-charcoal to-chai-black p-6 sm:p-8 overflow-hidden"
  >
          <div>
            <p className="text-xs uppercase tracking-wider text-chai-lime font-semibold">Founder & CEO</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-chai-cream">{CONTACT.founder}</h3>
            <p className="mt-1 text-chai-muted">{CONTACT.company}</p>
            <div className="mt-5 space-y-1.5 text-sm text-chai-cream">
              <p>📞 {CONTACT.phonePrimary} · {CONTACT.phoneSecondary}</p>
              <p>✉️ {CONTACT.email}</p>
              <p>🌐 {CONTACT.website}</p>
              <p>📍 {CONTACT.address}</p>
            </div>
            <p className="mt-5 text-[11px] text-chai-muted/70 italic">Certificates and legal documents are verified before publication.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-chai-orange/30">
            <img src={businessCardUrl} alt="Chaiway founder business card" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>;
}
function TrustCard({ icon, title, body, accent }) {
  const color = accent === "orange" ? "text-chai-orange border-chai-orange/30" : accent === "lime" ? "text-chai-lime border-chai-lime/30" : "text-chai-gold border-chai-gold/30";
  return <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`rounded-2xl border ${color} bg-chai-charcoal/60 p-5`}
  >
      <div className={color}>{icon}</div>
      <p className="mt-3 font-display font-bold text-chai-cream">{title}</p>
      <p className="mt-1 text-sm text-chai-muted">{body}</p>
    </motion.div>;
}
export {
  MediaTrust
};
