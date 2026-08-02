import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Facebook } from "lucide-react";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* Contact Details Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1 rounded-3xl border border-chai-orange/20 bg-chai-charcoal/70 p-8 space-y-6 text-center flex flex-col items-center justify-between shadow-xl backdrop-blur-md"
          >
            <motion.h3 variants={itemVariants} className="font-display text-2xl font-bold text-chai-cream text-center w-full">
              Contact Details
            </motion.h3>

            {/* Phone */}
            <motion.a
              variants={itemVariants}
              href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`}
              className="flex flex-col items-center gap-2 group text-center w-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-chai-orange to-chai-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Phone className="h-5 w-5 text-[#1a0e00]" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider font-semibold">Phone</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-orange transition-colors">{CONTACT.phonePrimary}</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-orange transition-colors">{CONTACT.phoneSecondary}</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              href={`mailto:${CONTACT.email}`}
              className="flex flex-col items-center gap-2 group text-center w-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-chai-charcoal border border-chai-gold/30 flex items-center justify-center shrink-0 group-hover:bg-chai-gold/10 group-hover:scale-110 transition-all duration-300">
                <Mail className="h-5 w-5 text-chai-gold" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider font-semibold">Email</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-gold transition-colors">{CONTACT.email}</p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={itemVariants}
              href={buildWhatsAppLink("Hi! I want to know about Chaiway franchise.")}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group text-center w-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-chai-lime/10 border border-chai-lime/30 flex items-center justify-center shrink-0 group-hover:bg-chai-lime/20 group-hover:scale-110 transition-all duration-300">
                <MessageSquare className="h-5 w-5 text-chai-lime" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider font-semibold">WhatsApp</p>
                <p className="text-sm font-semibold text-chai-cream group-hover:text-chai-lime transition-colors">Chat with us</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 text-center w-full">
              <div className="w-12 h-12 rounded-2xl bg-chai-charcoal border border-chai-orange/30 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-chai-orange" />
              </div>
              <div className="text-center">
                <p className="text-xs text-chai-muted uppercase tracking-wider font-semibold">Address</p>
                <p className="text-sm text-chai-cream leading-relaxed text-center max-w-xs mx-auto">{CONTACT.address}</p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-chai-orange/30 to-transparent my-2" />

            {/* Business Hours */}
            <motion.div variants={itemVariants} className="text-center w-full">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-chai-gold" />
                <h4 className="font-semibold text-chai-cream text-sm">Business Hours</h4>
              </div>
              <div className="space-y-2">
                {businessHours.map((bh) => (
                  <div key={bh.day} className="flex justify-between items-center text-center px-4">
                    <span className="text-xs text-chai-muted">{bh.day}</span>
                    <span className={`text-xs font-semibold ${bh.active ? "text-chai-cream" : "text-red-400"}`}>
                      {bh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-chai-orange/30 to-transparent my-2" />

            {/* Social Media */}
            <motion.div variants={itemVariants} className="text-center w-full">
              <p className="text-xs text-chai-muted uppercase tracking-wider mb-3 text-center font-semibold">Follow Us</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-chai-orange/15 bg-chai-black/40 p-3 hover:border-chai-orange/40 hover:bg-chai-orange/10 transition-all duration-300 group text-center"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                      <s.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-chai-cream text-center">{s.label}</p>
                      <p className="text-[10px] text-chai-muted text-center">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, boxShadow: "0 25px 40px -10px rgba(234, 88, 12, 0.25)" }}
            className="lg:col-span-2 rounded-3xl border border-chai-orange/30 overflow-hidden bg-chai-charcoal/50 min-h-[480px] flex flex-col shadow-2xl transition-all duration-500 group"
          >
            {/* Map Header Bar */}
            <div className="flex items-center justify-center gap-3 px-6 py-4 border-b border-chai-orange/20 bg-chai-charcoal/90 text-center">
              <MapPin className="h-5 w-5 text-chai-orange animate-bounce" />
              <span className="text-sm font-semibold text-chai-cream text-center tracking-wide">
                Chaiway Headquarters — Nanded, Maharashtra
              </span>
            </div>

            {/* Animated Embedded Map Frame */}
            <div className="flex-1 relative min-h-[420px] w-full overflow-hidden">
              <iframe
                title="Chaiway Café Location"
                src="https://maps.google.com/maps?q=Ashok+Nagar+Rd,+opposite+SBI+Bank,+beside+Union+Bank,+Ashok+Nagar,+Vishnu+Nagar,+Nanded,+Maharashtra+431605&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] opacity-95 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
              {/* Floating Map Location Overlay */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-chai-black/90 backdrop-blur-md border border-chai-orange/40 rounded-2xl p-4 shadow-xl pointer-events-none max-w-sm text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-chai-lime animate-pulse" />
                  <p className="text-xs font-extrabold text-chai-cream">{CONTACT.brand}</p>
                </div>
                <p className="text-[11px] text-chai-muted leading-relaxed text-center sm:text-left">{CONTACT.address}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
