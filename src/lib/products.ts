export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number; // USD
  description: string;
  details: string[];
  colors: string[];
  sizes: string[];
  emoji: string;
  gradient: string; // CSS gradient for the product "image"
  badge?: string;
};

export const products: Product[] = [
  {
    id: "norr-hoodie",
    slug: "oversized-hoodie",
    name: "Oversized Hoodie",
    category: "Outerwear",
    price: 78,
    description:
      "A heavyweight, boxy-fit hoodie cut from brushed organic cotton fleece. Soft on the inside, structured on the outside.",
    details: [
      "400gsm brushed organic cotton fleece",
      "Boxy, oversized silhouette",
      "Double-lined hood with tonal drawcords",
      "Ribbed cuffs and hem",
    ],
    colors: ["#171717", "#e5e5e5", "#8b5cf6", "#f5f0e6"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    emoji: "🧥",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #ec4899 100%)",
    badge: "Bestseller",
  },
  {
    id: "norr-tee",
    slug: "essential-tee",
    name: "Essential Tee",
    category: "Tops",
    price: 32,
    description:
      "The everyday tee, elevated. Mid-weight combed cotton with a clean, relaxed fit and a subtle chest logo.",
    details: [
      "220gsm combed ring-spun cotton",
      "Relaxed, true-to-size fit",
      "Pre-shrunk and garment-dyed",
      "Reinforced neck ribbing",
    ],
    colors: ["#ffffff", "#171717", "#60a5fa", "#f5f0e6"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    emoji: "👕",
    gradient: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 55%, #ec4899 100%)",
  },
  {
    id: "norr-sweatshirt",
    slug: "relaxed-sweatshirt",
    name: "Relaxed Sweatshirt",
    category: "Outerwear",
    price: 64,
    description:
      "A relaxed crewneck sweatshirt in loopback fleece. Minimal branding, maximum comfort.",
    details: [
      "340gsm loopback cotton fleece",
      "Relaxed, dropped-shoulder fit",
      "Ribbed collar, cuffs and hem",
      "Garment-washed for softness",
    ],
    colors: ["#e5e5e5", "#171717", "#34d399", "#f5f0e6"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    emoji: "🧶",
    gradient: "linear-gradient(135deg, #34d399 0%, #60a5fa 55%, #7c3aed 100%)",
  },
  {
    id: "norr-cargo",
    slug: "cargo-pants",
    name: "Cargo Pants",
    category: "Bottoms",
    price: 88,
    description:
      "Utility-inspired cargo pants with a tapered leg and six pockets. Built to move, made to last.",
    details: [
      "Durable cotton-twill blend",
      "Tapered, articulated fit",
      "Six functional pockets",
      "Adjustable ankle cuffs",
    ],
    colors: ["#4b5563", "#171717", "#f5f0e6", "#8b5cf6"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    emoji: "👖",
    gradient: "linear-gradient(135deg, #fb923c 0%, #ec4899 55%, #7c3aed 100%)",
  },
  {
    id: "norr-beanie",
    slug: "ribbed-beanie",
    name: "Ribbed Beanie",
    category: "Accessories",
    price: 28,
    description:
      "A chunky ribbed-knit beanie in soft merino blend. One size, endless wear.",
    details: [
      "Merino wool blend",
      "Chunky ribbed knit",
      "Fold-over cuff",
      "One size fits most",
    ],
    colors: ["#171717", "#e5e5e5", "#ec4899", "#f5f0e6"],
    sizes: ["One Size"],
    emoji: "🧢",
    gradient: "linear-gradient(135deg, #ec4899 0%, #fb923c 55%, #facc15 100%)",
  },
  {
    id: "norr-zip-hoodie",
    slug: "zip-hoodie",
    name: "Full-Zip Hoodie",
    category: "Outerwear",
    price: 92,
    description:
      "A full-zip hoodie with a clean front and hidden side pockets. The layer you'll reach for every day.",
    details: [
      "380gsm brushed fleece",
      "Two-way YKK metal zipper",
      "Hidden side pockets",
      "Tonal embroidered logo",
    ],
    colors: ["#171717", "#e5e5e5", "#7c3aed", "#f5f0e6"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    emoji: "🧥",
    gradient: "linear-gradient(135deg, #1e293b 0%, #7c3aed 55%, #ec4899 100%)",
    badge: "New",
  },
  {
    id: "norr-longsleeve",
    slug: "long-sleeve-tee",
    name: "Long Sleeve Tee",
    category: "Tops",
    price: 42,
    description:
      "A heavyweight long-sleeve tee with a clean, boxy cut. Perfect on its own or layered.",
    details: [
      "240gsm combed cotton",
      "Boxy, relaxed fit",
      "Ribbed cuffs",
      "Garment-dyed",
    ],
    colors: ["#ffffff", "#171717", "#fb923c", "#f5f0e6"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    emoji: "👕",
    gradient: "linear-gradient(135deg, #fb923c 0%, #ec4899 55%, #a78bfa 100%)",
  },
  {
    id: "norr-joggers",
    slug: "fleece-joggers",
    name: "Fleece Joggers",
    category: "Bottoms",
    price: 72,
    description:
      "Tapered fleece joggers with a secure zip pocket and soft brushed interior.",
    details: [
      "320gsm brushed fleece",
      "Tapered, athletic fit",
      "Zip security pocket",
      "Elasticated waistband with drawcord",
    ],
    colors: ["#171717", "#e5e5e5", "#60a5fa", "#f5f0e6"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    emoji: "👖",
    gradient: "linear-gradient(135deg, #60a5fa 0%, #34d399 55%, #a78bfa 100%)",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const categories = Array.from(
  new Set(products.map((p) => p.category))
);

export function formatPrice(centsOrDollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(centsOrDollars);
}
