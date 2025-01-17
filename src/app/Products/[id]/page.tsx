import { client } from '@/sanity/lib/client';

type Product = {
  _id: string;
  productName: string;
  imageUrl: string;
  colors?: string[];
  price: number;
  description: string;
};

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

  const product: Product = await client.fetch(query);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <img src={product.imageUrl} alt={product.productName} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-900 text-lg font-semibold mb-4">Price: ₹ {product.price}</p>
          {product.colors && (
            <div className="mb-4">
              <h3 className="font-medium mb-2">Available Colors:</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="block w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          )}
          <button className="bg-black text-white py-2 px-4 rounded mt-6 hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
