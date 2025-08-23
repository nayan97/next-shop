import React from "react";
import products from "../../../../public/data/products.json";

const ProductPage = async ({ params }) => {
  const { id } = await params;

  // Simulate async fetching with Promise
  const getProduct = async () => {
    return products.find((item) => item.id.toString() === id.toString());
  };

  const product = await getProduct();

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-red-100 rounded-2xl shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-base-200 rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      

        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="h-80 mb-6 rounded-lg max-h-96 object-cover w-full"
          />
        )}
  <h2 className="text-xl font-bold mb-4">{product.short_description}</h2>
        <p className="whitespace-pre-line mb-6">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">💲 {product.price}</span>
          <span className="badge badge-primary">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
