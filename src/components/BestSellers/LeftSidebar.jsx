import React from "react";

function LeftSidebar() {
  return (
    <div className="bg-white p-4 rounded shadow">
      {/* Bestsellers Section */}
      <h3 className="font-bold mb-4">BESTSELLERS</h3>
      <ul className="space-y-4">
        <li className="text-sm">
          <strong>Bayan ul Quran By Dr...</strong> -{" "}
          <span className="text-red-600">Rs. 6,200</span>{" "}
          <span className="line-through text-gray-500">Rs. 9,000</span>
        </li>
        <li className="text-sm">
          <strong>Jannat Kay Pattay...</strong> -{" "}
          <span className="text-red-600">Rs. 4,800</span>{" "}
          <span className="line-through text-gray-500">Rs. 8,000</span>
        </li>
        {/* Add more list items as needed */}
      </ul>

      {/* Testimonials Section */}
      <h3 className="font-bold mt-8 mb-4">WHAT PEOPLE SAY:</h3>
      <div className="p-4 border-l-4 border-red-600">
        <p className="text-sm italic">
          “I’ve purchased hundreds of files over the past 7 years. There is
          nothing close to this support and professionalism...”
        </p>
        <p className="mt-2 text-right text-xs">- charlibaltimore</p>
      </div>
    </div>
  );
}

export default LeftSidebar;
