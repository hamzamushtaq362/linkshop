import React from "react";

function HeroSection() {
  return (
    <div
      className="relative py-24 text-center px-8"
      style={{
        backgroundImage:
          "url('https://www.linkshop.pk/image/cache/catalog/Banners/linking_new-1236x745.jpg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Welcome to LinkShop
        </h2>
        <p className="text-lg text-gray-300">
          Find your favorite products at the best prices.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
