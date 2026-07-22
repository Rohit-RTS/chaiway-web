const CONTACT = {
  brand: "Chaiway Caf\xE9",
  tagline: "Chai Bolti Hai..!",
  company: "Foodlok Foods & Beverages Pvt. Ltd.",
  founder: "Aba Patil Londhe",
  phonePrimary: "+91 96738 36999",
  phoneSecondary: "+91 70204 19393",
  whatsapp: "919673836999",
  email: "info@chaiwaychai.com",
  website: "www.chaiwaychai.com",
  address: "Opp. Bharat Petrol Pump, Malegaon Road, Nanded - 431605"
};
function buildWhatsAppLink(message) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
export {
  CONTACT,
  buildWhatsAppLink
};
