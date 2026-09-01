const menuCategories = [
  {
    id: "tea",
    name: "Tea",
    tagline: "Kadak, Kullad, Masala & Neelgiri",
    items: [
      { name: "Kadak Masala Chai", price: "12" },
      { name: "Kullad Kick Chai", price: "20" },
      { name: "Black Tea", price: "15" },
      { name: "Green Tea", price: "20" },
      { name: "Neelgiri Chai", price: "20" }
    ]
  },
  {
    id: "special-menu",
    name: "Special Menu",
    tagline: "Signature Tea, Coffee & Shakes",
    items: [
      { name: "Special Tandoor Chai", price: "40" },
      { name: "Chocolate Hot Coffee", price: "25" },
      { name: "Cold Coffee with Ice Cream", price: "69" },
      { name: "Kitkat Shake / Crush", price: "79/89" },
      { name: "Oreo Shake / Crush", price: "79/89" }
    ]
  },
  {
    id: "coffee",
    name: "Coffee",
    tagline: "Hot, Kullad & Black Coffee",
    items: [
      { name: "Hot Coffee", price: "20" },
      { name: "Kullad Coffee", price: "25" },
      { name: "Chocolate Hot Coffee", price: "25" },
      { name: "Black Coffee", price: "20" }
    ]
  },
  {
    id: "lassi",
    name: "Lassi & Desserts",
    tagline: "Chilled Matka Lassi & Kulfi",
    items: [
      { name: "Lassi", price: "39" },
      { name: "Lassi With Ice-Cream", price: "49" },
      { name: "Kulfi", price: "25" },
      { name: "Matka Lassi", price: "59" }
    ]
  },
  {
    id: "cold-beverages",
    name: "Cold Beverages",
    tagline: "Refreshing Cold Coffee & Mocktails",
    items: [
      { name: "Cold Coffee / Crush", price: "59/69" },
      { name: "Mocktails", price: "69" },
      { name: "Cold Drinks", price: "MRP" }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    tagline: "White, Red & Insta Special",
    items: [
      { name: "White Sauce Pasta", price: "89" },
      { name: "Red Sauce Pasta", price: "89" },
      { name: "Veg Insta Special Pasta", price: "89" }
    ]
  },
  {
    id: "momos",
    name: "Momos",
    tagline: "Steamed & Cheesy Veg Momos",
    items: [
      { name: "Mix Veg Momos", price: "89" },
      { name: "Corn Momos / Cheese", price: "99/110" },
      { name: "Paneer Momos", price: "120" }
    ]
  },
  {
    id: "bites",
    name: "Chaiway Bites",
    tagline: "Crispy Fries & Potato Pops",
    items: [
      { name: "French Fries", price: "59" },
      { name: "Masala French Fries", price: "69" },
      { name: "Piri Piri Masala Fries", price: "79" },
      { name: "Masala French Fries with Cheese", price: "89" },
      { name: "Potato Garlic Pops", price: "69" },
      { name: "Potato Garlic Pops (Peri Peri)", price: "79" }
    ]
  },
  {
    id: "maggi",
    name: "Maggi",
    tagline: "Hot & Cheesy Maggi Bowls",
    items: [
      { name: "Plain Maggi", price: "49" },
      { name: "Double Masala Maggi", price: "59" },
      { name: "Veg Butter Maggi", price: "69" },
      { name: "Veg Paneer Maggi", price: "69" },
      { name: "Veg Cheese Maggi", price: "79" },
      { name: "Veg Paneer Cheese Maggi", price: "89" }
    ]
  },
  {
    id: "fast-bites",
    name: "Fast Bites",
    tagline: "Cream Rolls, Toast & Biscuits",
    items: [
      { name: "Cream Roll", price: "10" },
      { name: "Toast", price: "10" },
      { name: "Biscuits", price: "10" }
    ]
  },
  {
    id: "sandwich",
    name: "Sandwich",
    tagline: "Club, Grilled, Cheese & Special Sandwiches",
    items: [
      { name: "Veg-Club Sandwich", price: "69" },
      { name: "Veg-Grilled Sandwich", price: "79" },
      { name: "Chocolate Sandwich", price: "79" },
      { name: "Corn Cheese Sandwich", price: "89" },
      { name: "Veg-Cheese Sandwich", price: "89" },
      { name: "Only Paneer Cheese Sandwich", price: "89" },
      { name: "Veg-Paneer Cheese Crispy", price: "99" },
      { name: "Chai-Way Special Sandwich", price: "149" }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    tagline: "6 inch & 8 inch Fresh Baked Pizzas",
    items: [
      { name: "Cheese Pizza (6\")", price: "120" },
      { name: "Margherita Pizza (6\")", price: "149" },
      { name: "Onion Cheese Pizza (6\")", price: "149" },
      { name: "Tomato Cheese Pizza (6\")", price: "149" },
      { name: "Capsicum Cheese Pizza (6\")", price: "149" },
      { name: "Corn & Cheese Pizza (6\")", price: "149" },
      { name: "Double Cheese Margherita (8\")", price: "199" },
      { name: "Chocolate Pizza (8\")", price: "199" },
      { name: "Farmhouse Pizza (8\")", price: "199" },
      { name: "Paneer & Onion Pizza (8\")", price: "199" },
      { name: "Paneer Tikka Crisps Pizza (8\")", price: "249" },
      { name: "Chaiway Special Pizza (8\")", price: "299" }
    ]
  },
  {
    id: "burger",
    name: "Burger",
    tagline: "Juicy Veg & Paneer Burgers",
    items: [
      { name: "Veg Burger", price: "69" },
      { name: "Veg Cheese Burger", price: "79" },
      { name: "Veg Paneer Burger", price: "79" },
      { name: "Veg Paneer Cheese Burger", price: "89" },
      { name: "Chai-Way Special Burger (Double Tikki)", price: "129" }
    ]
  },
  {
    id: "bread",
    name: "Bread",
    tagline: "Toast, Garlic Bread & Bread Pizza",
    items: [
      { name: "Jam Bread", price: "29" },
      { name: "Bread Butter", price: "39" },
      { name: "Bread Butter Toast", price: "49" },
      { name: "Cheese Garlic Bread Toast", price: "59" },
      { name: "Veg Cheese Bread Pizza", price: "69" },
      { name: "Paneer Cheese Bread Pizza", price: "69" }
    ]
  },
  {
    id: "extras",
    name: "Water & Extras",
    tagline: "Bottles, Extra Cheese & Toppings",
    items: [
      { name: "Water Bottle (500ml)", price: "10" },
      { name: "Water Bottle (1000ml)", price: "20" },
      { name: "Extra Butter / Topping / Piri Piri / Masala", price: "10" },
      { name: "Extra Cheese", price: "20" },
      { name: "Extra Crush / Ice Cream", price: "10" }
    ]
  }
];

export { menuCategories };
