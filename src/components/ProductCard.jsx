import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md cursor-pointer hover-bounce">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">Price: ${price}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
