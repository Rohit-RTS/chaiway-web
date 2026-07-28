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
  { icon: Instagram, label: "Instagram", handle: "@chaiwaycafe", href: "#", color: "from-pink-500 to-orange-500" },
  { icon: Facebook, label: "Facebook", handle: "Chaiway Café", href: "#", color: "from-blue-600 to-blue-500" },
  { icon: Twitter, label: "Twitter", handle: "@chaiwaycafe", href: "#", color: "from-sky-500 to-cyan-500" },
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
            className="lg:col-span-1 rounded-3xl border border-chai-orange/20 bg-chai-charcoal/60 p-8 space-y-6"
          >
            <h3 className="font-display text-xl font-bold text-chai-cream">Contact Details</h3>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`}
              className="flex gap-4 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-chai-orange to-chai-gold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="h-5 w-5 text-[#1a0e00]" />
              </div>
              <div>
                <p className="text-xs text-chai-muted uppercase tracking-wider">Phone</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-orange transition-colors">{CONTACT.phonePrimary}</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-orange transition-colors">{CONTACT.phoneSecondary}</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${CONTACT.email}`} className="flex gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-chai-charcoal border border-chai-gold/25 flex items-center justify-center shrink-0 group-hover:bg-chai-gold/10 group-hover:border-chai-gold/50 transition-all">
                <Mail className="h-5 w-5 text-chai-gold" />
              </div>
              <div>
                <p className="text-xs text-chai-muted uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-gold transition-colors">{CONTACT.email}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={buildWhatsAppLink("Hi! I want to know about Chaiway franchise.")}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-chai-lime/10 border border-chai-lime/25 flex items-center justify-center shrink-0 group-hover:bg-chai-lime/20 transition-all">
                <MessageSquare className="h-5 w-5 text-chai-lime" />
              </div>
              <div>
                <p className="text-xs text-chai-muted uppercase tracking-wider">WhatsApp</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-lime transition-colors">Chat with us</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-2xl bg-chai-charcoal border border-chai-orange/20 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-chai-orange" />
              </div>
              <div>
                <p className="text-xs text-chai-muted uppercase tracking-wider">Address</p>
                <p className="text-sm text-chai-cream leading-relaxed">{CONTACT.address}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-chai-orange/20 to-transparent" />

            {/* Business Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-chai-gold" />
                <h4 className="font-semibold text-chai-cream text-sm">Business Hours</h4>
              </div>
              <div className="space-y-2">
                {businessHours.map((bh) => (
                  <div key={bh.day} className="flex justify-between items-center">
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
            <div>
              <p className="text-xs text-chai-muted uppercase tracking-wider mb-3">Follow Us</p>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 rounded-xl border border-chai-orange/10 bg-chai-black/30 px-3 py-2.5 hover:border-chai-orange/30 hover:bg-chai-orange/5 transition-all group"
                  >
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                      <s.icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div>
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
            <div className="flex items-center gap-3 px-6 py-4 border-b border-chai-orange/10">
              <MapPin className="h-4 w-4 text-chai-orange" />
              <span className="text-sm font-semibold text-chai-cream">Chaiway Headquarters — Nanded, Maharashtra</span>
            </div>

            {/* Embedded Map */}
            <div className="flex-1 relative min-h-[360px]">
              <iframe
                title="Chaiway Café Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7550.123456789!2d77.2964!3d19.1383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d47fc40d3b85%3A0x3d2b123456789abc!2sNanded%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[60%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              {/* Map overlay tag */}
              <div className="absolute bottom-4 left-4 bg-chai-black/90 backdrop-blur-sm border border-chai-orange/30 rounded-xl px-4 py-2.5 pointer-events-none">
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
