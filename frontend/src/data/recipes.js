const recipes = [
  {
    id: 1,
    title: "Classic Breakfast",
    slug: "classic-breakfast",
    description: "A delicious and easy breakfast to start your morning.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=90",
    time: "20 min",
    rating: "4.8",
    type: "Breakfast",
    category: "Breakfast",
    calories: "350 kcal",
  },

  {
    id: 2,
    title: "Creamy Chicken Pasta",
    slug: "creamy-chicken-pasta",
    description:
      "Creamy chicken pasta with rich flavors and a delicious sauce.",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1200&q=90",
    time: "30 min",
    rating: "4.9",
    type: "Dinner",
    category: "Dinner",
    calories: "520 kcal",
  },

  {
    id: 3,
    title: "Fresh Garden Salad",
    slug: "fresh-garden-salad",
    description:
      "Fresh vegetables with a light and delicious dressing.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90",
    time: "15 min",
    rating: "4.7",
    type: "Lunch",
    category: "Lunch",
    calories: "220 kcal",
  },

  {
    id: 4,
    title: "Classic Chicken Roast",
    slug: "classic-chicken-roast",
    description:
      "Golden roasted chicken seasoned with herbs and spices for a comforting family dinner.",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=90",
    time: "55 min",
    rating: "4.8",
    type: "Dinner",
    category: "Dinner",
    calories: "510 kcal",
  },

  {
    id: 5,
    title: "Chocolate Cake",
    slug: "chocolate-cake",
    description:
      "Soft, rich and delicious chocolate cake for dessert lovers.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
    time: "45 min",
    rating: "4.9",
    type: "Desserts",
    category: "Desserts",
    calories: "450 kcal",
  },

  {
    id: 6,
    title: "Chicken Biryani",
    slug: "chicken-biryani",
    description:
      "Aromatic chicken biryani with flavorful rice and traditional spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDlTbLGnP1JG_D4xRlf69WnSAQt5CYNPKnsogoQ5oRQtBzfrQH58XgQs&s=10",
    time: "60 min",
    rating: "4.9",
    type: "Dinner",
    category: "Dinner",
    calories: "620 kcal",
  },

  {
    id: 7,
    title: "Fluffy Pancakes",
    slug: "fluffy-pancakes",
    description:
      "Fluffy pancakes served with fresh fruit and sweet toppings.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=90",
    time: "20 min",
    rating: "4.8",
    type: "Breakfast",
    category: "Breakfast",
    calories: "390 kcal",
  },

  {
    id: 8,
    title: "Strawberry Cheesecake",
    slug: "strawberry-cheesecake",
    description:
      "Creamy cheesecake topped with fresh strawberries.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=90",
    time: "50 min",
    rating: "4.9",
    type: "Desserts",
    category: "Desserts",
    calories: "470 kcal",
  },

  {
    id: 9,
    title: "Grilled Chicken",
    slug: "grilled-chicken",
    description:
      "Juicy grilled chicken with herbs, spices and fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=90",
    time: "35 min",
    rating: "4.8",
    type: "Lunch",
    category: "Lunch",
    calories: "430 kcal",
  },

  {
    id: 10,
    title: "Creamy Mushroom Pasta",
    slug: "creamy-mushroom-pasta",
    description:
      "Creamy mushroom pasta prepared with herbs and a rich sauce.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=90",
    time: "25 min",
    rating: "4.8",
    type: "Lunch",
    category: "Lunch",
    calories: "480 kcal",
  },

  {
    id: 11,
    title: "French Toast",
    slug: "french-toast",
    description:
      "Golden French toast served with berries and sweet syrup.",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=90",
    time: "15 min",
    rating: "4.7",
    type: "Breakfast",
    category: "Breakfast",
    calories: "360 kcal",
  },

  {
    id: 12,
    title: "Beef Steak",
    slug: "beef-steak",
    description:
      "Tender juicy steak served with herbs and roasted vegetables.",
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=90",
    time: "40 min",
    rating: "4.9",
    type: "Dinner",
    category: "Dinner",
    calories: "590 kcal",
  },

  {
    id: 13,
    title: "Berry Smoothie Bowl",
    slug: "berry-smoothie-bowl",
    description:
      "Fresh berries blended into a creamy smoothie bowl.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=90",
    time: "10 min",
    rating: "4.8",
    type: "Breakfast",
    category: "Breakfast",
    calories: "280 kcal",
  },

  {
    id: 14,
    title: "Margherita Pizza",
    slug: "margherita-pizza",
    description:
      "Classic Italian pizza with tomato, mozzarella and fresh basil.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=90",
    time: "35 min",
    rating: "4.8",
    type: "Lunch",
    category: "Lunch",
    calories: "540 kcal",
  },

  {
    id: 15,
    title: "Tiramisu",
    slug: "classic-tiramisu",
    description:
      "Classic Italian tiramisu with coffee, cream and cocoa.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=90",
    time: "30 min",
    rating: "4.9",
    type: "Desserts",
    category: "Desserts",
    calories: "410 kcal",
  },
];

export { recipes };