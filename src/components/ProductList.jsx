import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 50,
    image:
      "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855713.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 75,
    image:
      "https://cdn.shopify.com/s/files/1/0420/1044/3928/files/Y3601HarryPotterandtheDeathlyHallows_USROUNDED_90b5f531-2cd0-4065-b3a4-f74bea6e0ed7_768x.png?v=1724248907",
  },
  // Add more products as needed
];

function ProductList() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
