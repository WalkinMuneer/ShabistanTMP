export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: 'New' | 'Popular' | 'Best Seller' | 'Special';
};

export type MenuSubCategory = {
  name: string;
  items: MenuItem[];
};

export type MenuCategory = {
  category: string;
  subcategories: MenuSubCategory[];
};

export const menuData: MenuCategory[] = [
  {
    category: "Sandwiches & More",
    subcategories: [
      {
        name: "SANDWICH",
        items: [
          { name: "Veg Grill Sandwich", price: "70", description: "Classic grilled sandwich with fresh veggies." },
          { name: "Veg Grill Sandwich with Cheese", price: "90", description: "Our classic veggie grill, loaded with cheese." },
          { name: "Shabistan Special Veg Grill Sandwich", price: "110", description: "A secret blend of veggies and sauces, grilled to perfection.", tag: "Popular" },
          { name: "Shabistan Special Veg Grill Sandwich with Cheese", price: "—", description: "The ultimate special sandwich, oozing with cheese." },
        ],
      },
      {
        name: "FRIES & COMBOS",
        items: [
          { name: "Loaded Fries", price: "110", description: "Crispy fries topped with cheese, sauces, and herbs.", tag: "Best Seller" },
          { name: "Combo: Shabistan Spl. Veg Grill Sandwich + Soda (350 ml)", price: "100", description: "The best of both worlds in one affordable combo." },
          { name: "Combo: Loaded Fries + Soda (350 ml)", price: "120", description: "A satisfying meal for any time of day." },
          { name: "Mayonnaise (Extra Dip)", price: "10", description: "Get an extra serving of our creamy mayonnaise." },
        ],
      },
    ],
  },
  {
    category: "Drinks",
    subcategories: [
      {
        name: "MOJITOS – 300 ML",
        items: [
          { name: "Mint Lime", price: "69", description: "The classic refreshing mojito." },
          { name: "Green Apple", price: "79", description: "Tangy and sweet green apple twist." },
          { name: "Pineapple", price: "79", description: "A tropical punch of pineapple." },
          { name: "Orange", price: "79", description: "Zesty and fresh orange flavor." },
          { name: "Blue Lagoon", price: "109", description: "A vibrant and exotic blue curaçao mocktail.", tag: "Popular" },
          { name: "Guava", price: "79", description: "Sweet and unique guava essence." },
          { name: "Jaljeera", price: "59", description: "A traditional Indian spiced cooler." },
        ],
      },
      {
        name: "COFFEE",
        items: [
          { name: "Cold Coffee", price: "89", description: "Smooth, creamy, and strong cold coffee." },
          { name: "Cold Coffee with Frappe", price: "109", description: "Our classic cold coffee, blended for a frothy finish." },
          { name: "Coke Float", price: "50", description: "A timeless classic of cola and vanilla ice cream." },
        ],
      },
    ],
  },
  {
    category: "Desserts",
    subcategories: [
      {
        name: "SOFTY ICE CREAM",
        items: [
          { name: "Normal Cone", price: "20", description: "Simple, classic, and delicious softy." },
          { name: "Normal Cone with Mix Flavour", price: "25", description: "A swirl of two delightful flavors." },
          { name: "Normal Cone with Chocolate Flavour", price: "30", description: "Creamy softy with a rich chocolate taste." },
          { name: "Waffle Cone", price: "25", description: "Our classic softy in a crispy waffle cone." },
          { name: "Waffle Cone with Mix Flavour", price: "30", description: "A flavorful swirl in a crunchy cone." },
          { name: "Waffle Cone with Chocolate Flavour", price: "35", description: "The perfect combo of chocolate and waffle.", tag: "Popular" },
        ],
      },
       {
        name: "WAFFLES",
        items: [
          { name: "Waffle", price: "70", description: "Warm, crispy waffle served plain and simple." },
          { name: "Waffle with Extra Chocolate", price: "80", description: "Our classic waffle drizzled with more chocolate." },
          { name: "Waffle with Choco Chips", price: "90", description: "A crispy waffle loaded with delightful choco chips.", tag: "Best Seller"},
        ],
      },
    ],
  },
  {
    category: "Shakes & Thirst Busters",
    subcategories: [
      {
        name: "THIRST BUSTERS",
        items: [
          { name: "Vanilla Shake", price: "70", description: "A timeless, creamy vanilla milkshake." },
          { name: "Black Currant Shake", price: "79", description: "Rich and fruity black currant shake." },
          { name: "Mango Shake", price: "79", description: "A sweet and tropical mango delight." },
          { name: "Date Shake", price: "99", description: "A wholesome and naturally sweet date shake." },
          { name: "Oreo Shake", price: "100", description: "Cookies and cream blended to perfection.", tag: "Best Seller" },
          { name: "Strawberry Shake", price: "79", description: "A classic, sweet strawberry milkshake." },
          { name: "Kiwi Shake", price: "79", description: "A tangy and refreshing kiwi shake." },
          { name: "Butterscotch Shake", price: "79", description: "Creamy shake with a rich butterscotch flavor." },
          { name: "Flavour Soda (350 ml)", price: "20", description: "Choose from a variety of fizzy, fun flavors." },
        ],
      },
    ],
  },
  {
    category: "Appetizers",
    subcategories: [
      {
        name: "APPETIZERS",
        items: [
          { name: "Dahi Papdi (Full)", price: "60", description: "Crispy, tangy and creamy – a flavour explosion! Available Tue-Fri.", tag: "Special" },
          { name: "Dahi Papdi (Half)", price: "40", description: "A smaller portion of our flavour explosion! Available Tue-Fri.", tag: "Special" },
          { name: "French Fries (Half)", price: "80", description: "A classic side, perfectly salted." },
          { name: "French Fries (Large)", price: "110", description: "More of the crispy fries you love." },
          { name: "Peri Peri Fries", price: "99", description: "Fries tossed in a spicy peri peri seasoning.", tag: "Popular" },
          { name: "Peri Peri Fries (Large)", price: "129", description: "A large serving of our spicy peri peri fries." },
          { name: "Chicken Cheese Ball (4 pieces)", price: "120", description: "Crispy balls filled with chicken and cheese." },
          { name: "Chicken Cheese Ball (8 pieces)", price: "200", description: "A full plate of our cheesy chicken balls." },
          { name: "Chicken Cheese Ball Peri Peri (4 pieces)", price: "130", description: "Cheesy chicken balls with a spicy kick." },
          { name: "Chicken Finger (4 pieces)", price: "120", description: "Tender chicken fingers, fried to a golden crisp." },
          { name: "Chicken Finger (8 pieces)", price: "200", description: "A shareable portion of chicken fingers." },
          { name: "Chicken Finger Peri Peri (4 pieces)", price: "130", description: "Our crispy chicken fingers with peri peri spice." },
          { name: "Chicken Nuggets (8 pieces)", price: "120", description: "Classic, bite-sized chicken nuggets." },
          { name: "Chicken Nuggets Peri Peri (8 pieces)", price: "130", description: "Nuggets with a fiery peri peri twist." },
          { name: "Chicken Popcorn (8 pieces)", price: "120", description: "Bite-sized pieces of crispy chicken." },
          { name: "Chicken Popcorn Peri Peri (8 pieces)", price: "130", description: "Popcorn chicken tossed in spicy seasoning." },
          { name: "Spring Roll (8 pieces)", price: "120", description: "Crispy rolls filled with savory vegetables." },
          { name: "Spring Roll Peri Peri (8 pieces)", price: "130", description: "Our classic spring rolls, spiced up." },
        ],
      },
    ],
  },
];