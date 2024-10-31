import React from "react";
import ProductList from "../components/ProductList";

function Shop() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Shop All Products</h2>
      <ProductList />
    </div>
  );
}

export default Shop;
