import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Facebook, Twitter } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const businessHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM", active: true },
  { day: "Saturday", hours: "10:00 AM – 5:00 PM", active: true },
  { day: "Sunday", hours: "Closed", active: false },
];

const socials = [
  { icon: Instagram, label: "Instagram", handle: "@chaiway.india", href: CONTACT.instagram, color: "from-pink-500 to-orange-500" },
  { icon: Facebook, label: "Facebook", handle: "Chaiway Café", href: CONTACT.facebook, color: "from-blue-600 to-blue-500" },
];

export function ContactInfo() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 rounded-3xl border border-chai-orange/20 bg-chai-charcoal/60 p-8 space-y-6 text-center"
          >
            <h3 className="font-display text-xl font-bold text-chai-cream text-center">Contact Details</h3>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`}
              className="flex flex-col items-center gap-2 group text-center"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-chai-orange to-chai-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="h-5 w-5 text-[#1a0e00]" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider">Phone</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-orange transition-colors">{CONTACT.phonePrimary}</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-orange transition-colors">{CONTACT.phoneSecondary}</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${CONTACT.email}`} className="flex flex-col items-center gap-2 group text-center">
              <div className="w-11 h-11 rounded-2xl bg-chai-charcoal border border-chai-gold/25 flex items-center justify-center shrink-0 group-hover:bg-chai-gold/10 group-hover:border-chai-gold/50 transition-all">
                <Mail className="h-5 w-5 text-chai-gold" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-gold transition-colors">{CONTACT.email}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={buildWhatsAppLink("Hi! I want to know about Chaiway franchise.")}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group text-center"
            >
              <div className="w-11 h-11 rounded-2xl bg-chai-lime/10 border border-chai-lime/25 flex items-center justify-center shrink-0 group-hover:bg-chai-lime/20 transition-all">
                <MessageSquare className="h-5 w-5 text-chai-lime" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider">WhatsApp</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-lime transition-colors">Chat with us</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-11 h-11 rounded-2xl bg-chai-charcoal border border-chai-orange/20 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-chai-orange" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider">Address</p>
                <p className="text-sm text-chai-cream leading-relaxed text-center">{CONTACT.address}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-chai-orange/20 to-transparent" />

            {/* Business Hours */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-chai-gold" />
                <h4 className="font-semibold text-chai-cream text-sm">Business Hours</h4>
              </div>
              <div className="space-y-2">
                {businessHours.map((bh) => (
                  <div key={bh.day} className="flex justify-between items-center text-center">
                    <span className="text-xs text-chai-muted">{bh.day}</span>
                    <span className={`text-xs font-semibold ${bh.active ? "text-chai-cream" : "text-red-400"}`}>
                      {bh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-chai-orange/20 to-transparent" />

            {/* Social Media */}
            <div className="text-center">
              <p className="text-xs text-chai-muted uppercase tracking-wider mb-3 text-center">Follow Us</p>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-xl border border-chai-orange/10 bg-chai-black/30 px-3 py-2.5 hover:border-chai-orange/30 hover:bg-chai-orange/5 transition-all group text-center"
                  >
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0`}>
                      <s.icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-chai-cream">{s.label}</p>
                      <p className="text-[10px] text-chai-muted">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 rounded-3xl border border-chai-orange/20 overflow-hidden bg-chai-charcoal/40 min-h-[400px] flex flex-col"
          >
            {/* Map header */}
            <div className="flex items-center justify-center gap-3 px-6 py-4 border-b border-chai-orange/10 text-center">
              <MapPin className="h-4 w-4 text-chai-orange" />
              <span className="text-sm font-semibold text-chai-cream text-center">Chaiway Headquarters — Nanded, Maharashtra</span>
            </div>

            {/* Embedded Map */}
            <div className="flex-1 relative min-h-[360px]">
              <iframe
                title="Chaiway Café Location"
                src="https://maps.google.com/maps?q=Ashok+Nagar+Rd,+opposite+SBI+Bank,+beside+Union+Bank,+Ashok+Nagar,+Vishnu+Nagar,+Nanded,+Maharashtra+431605&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[40%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              {/* Map overlay tag */}
              <div className="absolute bottom-4 left-4 bg-chai-black/90 backdrop-blur-sm border border-chai-orange/30 rounded-xl px-4 py-2.5 pointer-events-none max-w-sm">
                <p className="text-xs font-bold text-chai-cream">{CONTACT.brand}</p>
                <p className="text-[10px] text-chai-muted">{CONTACT.address}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
