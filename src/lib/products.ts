export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  color: string;
  summary: string;
  details: string[];
};

export const products: Product[] = [
  {
    id: "norr-frame-tee",
    slug: "frame-box-tee",
    name: "Frame Box Tee",
    category: "Tops",
    image: "/products/frame-box-tee.png",
    imageAlt: "Charcoal black cropped box-fit T-shirt on a warm grey studio background",
    color: "Charcoal",
    summary: "A compact, wide-cut tee with dropped shoulders and a clean, heavyweight drape.",
    details: ["Cropped box silhouette", "Dropped shoulder", "Heavyweight jersey direction"],
  },
  {
    id: "norr-volume-hoodie",
    slug: "volume-hoodie",
    name: "Volume Hoodie",
    category: "Outerwear",
    image: "/products/volume-hoodie.png",
    imageAlt: "Graphite oversized pullover hoodie on a warm grey studio background",
    color: "Graphite",
    summary: "A sculpted pullover hoodie built around generous sleeves, a cropped body, and quiet weight.",
    details: ["Oversized cropped fit", "Double-layer hood direction", "Dense fleece direction"],
  },
  {
    id: "norr-axis-zip",
    slug: "axis-zip-hoodie",
    name: "Axis Zip Hoodie",
    category: "Outerwear",
    image: "/products/axis-zip-hoodie.png",
    imageAlt: "Stone grey cropped zip hoodie on a warm grey studio background",
    color: "Stone",
    summary: "A shortened zip layer with broad shoulders and a precise visual line through the front.",
    details: ["Relaxed cropped silhouette", "Full front zip", "Heavy fleece direction"],
  },
  {
    id: "norr-uniform-set",
    slug: "uniform-fleece-set",
    name: "Uniform Fleece Set",
    category: "Sets",
    image: "/products/uniform-fleece-set.png",
    imageAlt: "Washed black hoodie and wide-leg sweatpants set on a warm grey studio background",
    color: "Washed Black",
    summary: "A tonal hoodie and wide-leg trouser pairing designed as one calm, oversized uniform.",
    details: ["Two-piece concept", "Relaxed hoodie", "Wide-leg sweatpant"],
  },
  {
    id: "norr-field-cargo",
    slug: "field-cargo-trouser",
    name: "Field Cargo Trouser",
    category: "Bottoms",
    image: "/products/field-cargo-trouser.png",
    imageAlt: "Olive brown wide-leg cargo trousers on a warm grey studio background",
    color: "Field Olive",
    summary: "A wide utility trouser balancing oversized patch pockets with an easy, controlled fall.",
    details: ["Wide-leg shape", "Oversized utility pockets", "Adjustable waist direction"],
  },
  {
    id: "norr-form-polo",
    slug: "form-knit-polo",
    name: "Form Knit Polo",
    category: "Knitwear",
    image: "/products/form-knit-polo.png",
    imageAlt: "Ecru textured knit polo with an open collar on a warm grey studio background",
    color: "Ecru",
    summary: "A relaxed knit polo with a tactile surface and an open collar that softens the structure.",
    details: ["Relaxed fit", "Open collar", "Textured knit direction"],
  },
  {
    id: "norr-workshop-jacket",
    slug: "workshop-canvas-jacket",
    name: "Workshop Canvas Jacket",
    category: "Outerwear",
    image: "/products/workshop-canvas-jacket.png",
    imageAlt: "Dark tobacco brown cropped canvas work jacket on a warm grey studio background",
    color: "Dark Tobacco",
    summary: "A cropped work jacket with firm structure, a simple collar, and restrained utility detailing.",
    details: ["Cropped workwear fit", "Structured collar", "Canvas direction"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const categories = Array.from(new Set(products.map((product) => product.category)));
