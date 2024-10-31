import React from "react";

function DropdownMenu() {
  return (
    <div className="absolute top-full left-0 w-1/3 bg-white shadow-md p-4 grid grid-cols-4 gap-4 z-50">
      <div className="w-1/4">
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Islam
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Sufism
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Children Books
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          English
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Poetry
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Travelogue (Safarnama)
        </a>
      </div>
      <div className="w-1/4">
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Biography
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Politics Books
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Drama
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          History Books
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Self Motivation
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Stationery And Toys
        </a>
      </div>
      <div className="w-1/4">
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Novels
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Urdu Adab
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Education
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Humour (Mazah)
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Short Stories
        </a>
        <a href="/" className="block text-gray-800 font-bold mb-1">
          Deal Offer
        </a>
      </div>
      <div className="w-1/4">
        <a href="/" className="block text-gray-800 font-bold mb-1">
          All Books
        </a>
      </div>
    </div>
  );
}

export default DropdownMenu;
