import "./BrandStory.css";
import { motion } from "framer-motion";
import { Target, Heart, Eye } from "lucide-react";
const storefrontUrl = "/assets/storefront.jpeg";
const interiorUrl = "/assets/interior.jpeg";
const kioskUrl = "/assets/kiosk.jpeg";
import { SectionHeading } from "./SectionHeading";
function BrandStory() {
  return <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative aspect-square sm:aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full"
  >
            <img src={interiorUrl} alt="Chaiway café interior" className="absolute inset-0 h-full w-full object-cover rounded-3xl border border-chai-orange/30 shadow-card" />
            <img src={storefrontUrl} alt="Chaiway storefront" className="absolute -bottom-6 -right-4 sm:-right-10 h-40 w-40 sm:h-56 sm:w-56 object-cover rounded-2xl border-4 border-chai-black shadow-card" />
            <img src={kioskUrl} alt="Chaiway kiosk" className="absolute -top-6 -left-4 hidden sm:block h-32 w-32 object-cover rounded-2xl border-4 border-chai-black shadow-card" />
          </motion.div>

          <div className="text-center">
            <SectionHeading eyebrow="Brand Story" title={<>Chaiway Café — <span className="text-gradient-orange">Chai Bolti Hai</span></>} />
            <p className="mt-6 text-chai-muted leading-relaxed">
              Chaiway Café is a venture of <span className="text-chai-cream font-semibold">Foodlok Foods & Beverages Pvt. Ltd.</span>,
              created to bring India's everyday chai culture into a modern, hygienic, affordable and scalable
              café format. From kadak chai and kullad chai to pizza, burger, sandwich, fries, Maggi, coffee, lassi
              and quick bites — Chaiway is built for the Indian mass market.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <StoryCard icon={<Eye className="h-5 w-5" />} title="Vision" body="To be a trusted and ethical organisation promoting Indian food and beverage culture." />
              <StoryCard icon={<Target className="h-5 w-5" />} title="Mission" body="To provide quality food, beverages and service at outstanding value in a comfortable, hygienic and friendly environment." />
              <StoryCard icon={<Heart className="h-5 w-5" />} title="Values" body="Hygiene, affordability, consistency, hospitality and franchisee success." />
              <StoryCard accent title="40+ Outlets" body="Across India, with a vision of 200 outlets in the next 5 years." />
            </div>
          </div>
        </div>
      </div>
    </section>;
}
function StoryCard({ icon, title, body, accent }) {
  return <div className={`rounded-2xl p-5 border text-center ${accent ? "border-chai-lime/30 bg-chai-lime/5" : "border-chai-orange/20 bg-chai-charcoal/60"}`}>
      <div className={`inline-flex items-center justify-center gap-2 mx-auto ${accent ? "text-chai-lime" : "text-chai-orange"}`}>
        {icon}
        <p className="font-display font-bold uppercase text-sm tracking-wider text-center">{title}</p>
      </div>
      <p className="mt-2 text-sm text-chai-muted text-center">{body}</p>
    </div>;
}
export {
  BrandStory
};
