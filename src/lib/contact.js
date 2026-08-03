const CONTACT = {
  brand: "Chaiway Café",
  tagline: "Chai Bolti Hai..!",
  company: "Foodlok Foods & Beverages Pvt. Ltd.",
  founder: "Aba Patil Londhe",
  phonePrimary: "+91 96738 36999",
  phoneSecondary: "+91 70204 19393",
  whatsapp: "919673836999",
  email: "info@chaiwaychai.com",
  website: "www.chaiwaychai.com",
  address: "Ashok Nagar Rd, opposite SBI Bank, beside Union Bank, Ashok Nagar, Vishnu Nagar, Nanded, Maharashtra 431605",
  googleMapsUrl: "https://www.google.com/maps/place/Chaiway+Tea+Cafe/@19.1792099,77.3033603,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd1d7aeb5bfafb1:0xf28e8a7da71b8963!8m2!3d19.1792099!4d77.3059352!16s%2Fg%2F11f7r54nw5?entry=ttu",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.10640960572!2d77.3033603!3d19.1792099!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7aeb5bfafb1%3A0xf28e8a7da71b8963!2sChaiway%20Tea%20Cafe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  instagram: "https://www.instagram.com/chaiway.india?igsh=MTl5dmMzZjNiOTM2ZQ==",
  facebook: "https://www.facebook.com/share/1Q87w85awJ/"
};
function buildWhatsAppLink(message) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
export {
  CONTACT,
  buildWhatsAppLink
};
