// Unconfirmed collection concepts. Do not add prices, specifications, badges,
// or purchasing controls until the owner supplies verified product information.
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
};

export const products: Product[] = [
  { id: "norr-hoodie", slug: "oversized-hoodie", name: "Oversized Hoodie", category: "Outerwear" },
  { id: "norr-tee", slug: "essential-tee", name: "Essential Tee", category: "Tops" },
  { id: "norr-sweatshirt", slug: "relaxed-sweatshirt", name: "Relaxed Sweatshirt", category: "Outerwear" },
  { id: "norr-cargo", slug: "cargo-pants", name: "Cargo Pants", category: "Bottoms" },
  { id: "norr-beanie", slug: "ribbed-beanie", name: "Ribbed Beanie", category: "Accessories" },
  { id: "norr-zip-hoodie", slug: "zip-hoodie", name: "Full-Zip Hoodie", category: "Outerwear" },
  { id: "norr-longsleeve", slug: "long-sleeve-tee", name: "Long Sleeve Tee", category: "Tops" },
  { id: "norr-joggers", slug: "fleece-joggers", name: "Fleece Joggers", category: "Bottoms" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const categories = Array.from(new Set(products.map((product) => product.category)));
