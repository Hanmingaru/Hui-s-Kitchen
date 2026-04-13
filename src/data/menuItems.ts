export interface MenuItem {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "beef_burrito",
    name: "Beef Burrito",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: "/assets/beef_burrito.webp"
  },
  {
    id: "beef_vegetable_noodle_soup",
    name: "Beef Vegetable Noodle Soup",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: "/assets/beef_vegetable_noodle_soup.webp",
  },
  {
    id: "chicken_noodles",
    name: "Chicken Noodles",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: "/assets/chicken_noodles.webp",
  },
  {
    id: "chinese_burger_bun",
    name: "Chinese Burger Bun",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: "/assets/chinese_burger_bun.webp",
  },
  {
    id: "eggroll",
    name: "Eggroll",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: "/assets/eggroll.webp",
  },
  {
    id: "malatang_skewers",
    name: "Malatang Skewers",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: "/assets/malatang_skewers.webp",
  },
  {
    id: "potstickers",
    name: "Potstickers",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: "/assets/potstickers.webp",
  },
];
