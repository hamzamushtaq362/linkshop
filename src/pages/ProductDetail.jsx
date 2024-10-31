import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
      <p className="text-gray-700">Details for product ID: {productId}</p>
    </div>
  );
}

export default ProductDetail;
