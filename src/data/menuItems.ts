import type { StaticImageData } from "next/image";
import { beefBurrito, beefVegetableNoodleSoup, chickenNoodles, chineseBurgerBun, eggroll, malatangSkewers, potstickers } from "./images";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: string;
  image: StaticImageData;
}

export const menuItems: MenuItem[] = [
  {
    id: "beef_burrito",
    name: "Beef Burrito",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: beefBurrito,
  },
  {
    id: "beef_vegetable_noodle_soup",
    name: "Beef Vegetable Noodle Soup",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: beefVegetableNoodleSoup,
  },
  {
    id: "chicken_noodles",
    name: "Chicken Noodles",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: chickenNoodles,
  },
  {
    id: "chinese_burger_bun",
    name: "Chinese Burger Bun",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: chineseBurgerBun,
  },
  {
    id: "eggroll",
    name: "Eggroll",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: eggroll,
  },
  {
    id: "malatang_skewers",
    name: "Malatang Skewers",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: malatangSkewers,
  },
  {
    id: "potstickers",
    name: "Potstickers",
    description: "TODO: Add a description of this dish.",
    ingredients: ["TODO: ingredient 1", "TODO: ingredient 2", "TODO: ingredient 3"],
    price: "$0.00",
    image: potstickers,
  },
];
