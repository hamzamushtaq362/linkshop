import React from "react";

const BookCatalog = () => {
  const books = [
    {
      author: "Sylvia Plath",
      title: "THE BELL JAR",
      price: "Rs.650",
      originalPrice: "Rs.699",
      discount: "-7%",
      newBadge: true,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      author: "Sajjad Jahania",
      title: "KAHANI POCHTI HAY",
      price: "Rs.1,700",
      originalPrice: "Rs.2,200",
      discount: "-23%",
      newBadge: true,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      author: "Sylvia Plath",
      title: "ARIEL",
      price: "Rs.300",
      originalPrice: "Rs.350",
      discount: "-14%",
      newBadge: true,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      author: "Sylvia Plath",
      title: "THE COLOSSUS",
      price: "Rs.250",
      originalPrice: "Rs.299",
      discount: "-16%",
      newBadge: true,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="flex justify-start space-x-4 mb-4">
        <button className="font-semibold hover:text-red-600">LATEST</button>
        <button className="font-semibold hover:text-red-600">BESTSELLERS</button>
        <button className="font-semibold hover:text-red-600">BEST RATED</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="border p-4 relative group overflow-hidden"
          >
            {book.newBadge && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                NEW
              </div>
            )}
            <div className="h-48 w-full mb-4 relative">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-2xl">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>
            <h4 className="text-blue-600 font-medium">{book.author}</h4>
            <p className="text-lg font-semibold">{book.title}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-600 font-bold">{book.price}</span>
              <span className="line-through text-gray-500">
                {book.originalPrice}
              </span>
              <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                {book.discount}
              </span>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <button className="text-green-600 font-medium hover:underline">
                Buy Now
              </button>
              <button className="text-red-600 font-medium hover:underline">
                Ask Question
              </button>
            </div>
            {/* Add to Cart Button and Quantity Selector */}
            <div className="absolute bottom-8 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center mb-2">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-12 border rounded p-2 text-center"
                />
                <button className="flex-1 bg-black text-white py-2 rounded font-semibold hover:bg-gray-800">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
