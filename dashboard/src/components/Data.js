export const CATEGORIES = ["Main course", "Breakfast", "Dessert", "Snacks", "Drinks"];

export const START_RECIPES = [
  { id: 1, title: "Chicken Biryani", emoji: "🍛", category: "Main course", time: 75, views: 1840, status: "Published" },
  { id: 2, title: "Aloo Paratha", emoji: "🫓", category: "Breakfast", time: 30, views: 1260, status: "Published" },
  { id: 3, title: "Gulab Jamun", emoji: "🍩", category: "Dessert", time: 50, views: 970, status: "Published" },
  { id: 4, title: "Samosa Chaat", emoji: "🥟", category: "Snacks", time: 25, views: 640, status: "Draft" },
  { id: 5, title: "Mango Lassi", emoji: "🥭", category: "Drinks", time: 5, views: 410, status: "Published" },
  { id: 6, title: "Chapli Kabab", emoji: "🍖", category: "Main course", time: 40, views: 330, status: "Draft" },
];

export const WEEK = [
  { day: "Mon", views: 320 }, { day: "Tue", views: 410 }, { day: "Wed", views: 380 },
  { day: "Thu", views: 520 }, { day: "Fri", views: 690 }, { day: "Sat", views: 810 }, { day: "Sun", views: 760 },
];

export const NAV = [
  { label: "Overview", icon: "▦" },
  { label: "Recipes", icon: "🍲" },
  { label: "Categories", icon: "🏷️" },
  { label: "Users", icon: "👥" },
  { label: "Comments", icon: "💬" },
  { label: "Settings", icon: "⚙️" },
  // { label: "logout", icon: "⚙️" , path: '/' },
  {label : "logout", icon : "⚙️", path: '/'}
];