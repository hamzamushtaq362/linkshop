import React from "react";
import CartTable from "./CartTable";
import CheckoutCard from "./CheckoutCard";

const ShoppingCart = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl mb-4 font-oswald font-normal text-[26px]">SHOPPING CART (0.50KG)</h2>
      <div className="flex flex-col md:flex-row">
        {/* Cart Table */}
        <div className="w-full md:w-2/3">
          <CartTable />
        </div>
        {/* Checkout Card */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
