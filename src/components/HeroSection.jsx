import React from "react";

function HeroSection() {
  return (
    <div className="bg-gray-100 py-10 text-center px-8">
      <h2 className="text-4xl font-bold mb-4">Welcome to LinkShop</h2>
      <p className="text-lg text-gray-600">
        Find your favorite products at the best prices.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Shop Now
      </button>
    </div>
  );
}

export default HeroSection;
