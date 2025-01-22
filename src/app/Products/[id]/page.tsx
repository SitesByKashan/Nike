import { client } from "@/sanity/lib/client";
import ProductDetailClient from "@/components/ProductDetailClient";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const query = `
    *[_type == "product" && _id == "${params.id}"][0] {
      _id,
      productName,
      "imageUrl": image.asset->url,
      colors,
      price,
      description
    }
  `;

  const product = await client.fetch(query);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailClient product={product} />;
}
