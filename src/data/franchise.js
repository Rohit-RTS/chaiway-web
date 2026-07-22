const franchiseModels = [
  {
    id: "kiosk",
    name: "Chaiway Kiosk",
    area: "60 \u2013 100 sq. ft.",
    investment: "\u20B95.5 Lakh*",
    bestFor: "Compact high-footfall locations",
    menu: "Tea & beverages focused",
    features: ["Compact setup", "Quick break-even potential", "Ideal for street corners", "POS included"]
  },
  {
    id: "pro",
    name: "Chaiway Pro",
    area: "100 \u2013 200 sq. ft.",
    investment: "\u20B97.5 Lakh*",
    bestFor: "Roadside, colleges, offices, markets",
    menu: "Tea, beverages and fast snacks",
    features: ["Full beverage range", "Snacks + bites menu", "Standing + take-away", "Most Popular Format"],
    popular: true
  },
  {
    id: "dine",
    name: "Chaiway Dine",
    area: "300 \u2013 500 sq. ft.",
    investment: "\u20B99.5 Lakh*",
    bestFor: "Premium streets, malls, youth hangouts",
    menu: "Full caf\xE9 with dine-in",
    features: ["Premium seating caf\xE9", "Complete Chaiway menu", "Group / hangout friendly", "Zomato + Swiggy ready"]
  }
];
const stats = [
  { label: "Founded In", value: "2018", suffix: "" },
  { label: "Outlets Across India", value: "36", suffix: "+" },
  { label: "5-Year Vision", value: "200", suffix: " Outlets" },
  { label: "Investment Starts From", value: "\u20B95.5", suffix: "L*" },
  { label: "Royalty", value: "0", suffix: "%" },
  { label: "Customer Age Group", value: "12-50", suffix: " yrs" }
];
const usps = [
  { title: "Most Affordable Investment", desc: "Tea-caf\xE9 format priced for first-time founders." },
  { title: "No Royalty Charges", desc: "Keep 100% of operational margins, every month." },
  { title: "POS Software Included", desc: "Billing, KOTs and reports out of the box." },
  { title: "Inventory Management", desc: "Track stock, wastage and reordering cleanly." },
  { title: "Recipe Management", desc: "Standardised recipes for the same taste everywhere." },
  { title: "Daily Sales Reports", desc: "Owner dashboard with the numbers that matter." },
  { title: "No Staff Dependency", desc: "Simple SOPs designed for a chef-less model." },
  { title: "Same Taste Management", desc: "Quality control across every Chaiway outlet." },
  { title: "Quality Control", desc: "Approved suppliers and product checklists." },
  { title: "High Return Potential", desc: "Low investment, mass-market everyday menu." }
];
const supportItems = [
  "Location guidance",
  "Setup support",
  "Startup kit",
  "Caf\xE9 equipment guidance",
  "Chaiway own recipes",
  "Owner training",
  "Staff training",
  "POS setup",
  "Inventory management",
  "Recipe management",
  "Daily sales report",
  "Marketing support",
  "Sales support",
  "Zomato & Swiggy integration",
  "Menu support",
  "Launch support",
  "Brand support"
];
const journey = [
  { title: "Submit Enquiry", desc: "Share your details and city of interest." },
  { title: "Budget & Model Consultation", desc: "Our team helps pick Kiosk, Pro or Dine." },
  { title: "Location Review", desc: "Footfall, visibility and area suitability check." },
  { title: "Agreement & Planning", desc: "Documentation, timelines and project plan." },
  { title: "Interior, Branding & Setup", desc: "Standardised Chaiway look and equipment." },
  { title: "Training + POS Setup", desc: "Recipes, operations and software handover." },
  { title: "Grand Opening", desc: "Launch support, marketing push and go-live." }
];
const comparison = [
  { feat: "Brand Identity", indie: "Build from scratch", chai: "Trusted Chaiway brand" },
  { feat: "Menu Planning", indie: "Trial & error", chai: "Tested mass-market menu" },
  { feat: "Recipe Standardization", indie: "Inconsistent", chai: "Standard recipes" },
  { feat: "POS Software", indie: "Buy separately", chai: "Included" },
  { feat: "Inventory Control", indie: "Manual", chai: "Software-led" },
  { feat: "Training", indie: "Self-managed", chai: "Owner + staff training" },
  { feat: "Marketing Support", indie: "On your own", chai: "Brand + launch support" },
  { feat: "Taste Consistency", indie: "Chef dependent", chai: "Recipe controlled" },
  { feat: "Supplier Guidance", indie: "Research yourself", chai: "Vetted suppliers" },
  { feat: "Launch Support", indie: "None", chai: "Full launch support" },
  { feat: "Royalty", indie: "\u2014", chai: "0% Royalty" }
];
const faqs = [
  { q: "What is the investment required for a Chaiway franchise?", a: "Investment starts from \u20B95.5 lakh* for the Kiosk format and goes up to \u20B99.5 lakh* for the Dine format. Final cost depends on city, area, interiors and equipment." },
  { q: "Does Chaiway charge royalty?", a: "No. Chaiway works on a 0% royalty franchise model." },
  { q: "What area is required?", a: "60\u2013100 sq. ft. for Kiosk, 100\u2013200 sq. ft. for Pro, and 300\u2013500 sq. ft. for Dine." },
  { q: "Which model is best for me?", a: "Our franchise team helps you pick the right model based on city tier, location, footfall and budget." },
  { q: "Is POS software included?", a: "Yes \u2014 billing, inventory, recipe and reporting modules are included with every model." },
  { q: "What support does Chaiway provide?", a: "Location guidance, setup, training, POS, recipes, marketing, launch and ongoing brand support." },
  { q: "Do I need previous caf\xE9 experience?", a: "No. Chaiway is designed as a chef-less, SOP-driven model \u2014 training is provided." },
  { q: "How many staff members are needed?", a: "Typically 2\u20134 depending on the model and city. Our team will guide you on staffing." },
  { q: "Does Chaiway support Zomato and Swiggy integration?", a: "Yes, we help with onboarding and operations on Zomato and Swiggy." },
  { q: "How long does outlet setup take?", a: "Usually 30\u201360 days from agreement to launch, depending on location readiness." },
  { q: "Can I open Chaiway in my city?", a: "Yes, we are actively expanding across India. Submit an enquiry with your city." },
  { q: "What documents are required?", a: "Basic KYC, shop documents, FSSAI and GST. Our team shares a complete checklist." },
  { q: "Are profit and ROI guaranteed?", a: "No franchise can guarantee ROI. Returns depend on rent, sales, staff, raw material cost, local demand and operations. Chaiway helps you choose a suitable model." }
];
const audiences = [
  { title: "Students", desc: "Affordable chai + bites near colleges." },
  { title: "Office Professionals", desc: "Quick chai breaks and snacks." },
  { title: "Families", desc: "A clean, hygienic caf\xE9 to relax in." },
  { title: "Travellers", desc: "Highways, stations and transit hubs." },
  { title: "Market Shoppers", desc: "A pit-stop between errands." },
  { title: "Tea Lovers", desc: "Kullad, masala and tandoor chai." },
  { title: "Youth Hangouts", desc: "Cool caf\xE9 vibe for friend groups." },
  { title: "Daily Snackers", desc: "Burgers, pizza, sandwich, Maggi & more." }
];
const locations = [
  "Nanded",
  "Pune",
  "Mumbai",
  "Nashik",
  "Nagpur",
  "Aurangabad",
  "Hyderabad",
  "Indore",
  "Ahmedabad",
  "Surat",
  "Bhopal",
  "Raipur"
];
export {
  audiences,
  comparison,
  faqs,
  franchiseModels,
  journey,
  locations,
  stats,
  supportItems,
  usps
};
