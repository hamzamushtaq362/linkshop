import React from "react";
import Accordion from "./Accordion";
import { useNavigate } from "react-router-dom";

const CheckoutCard = () => {
  const navigate = useNavigate();
  return (
    <div className="border p-4 bg-gray-100">
      <Accordion />
      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Sub-Total:</span>
          <span>Rs.650</span>
        </div>
        <div className="flex justify-between">
          <span>Total:</span>
          <span>Rs.650</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          &larr; CONTINUE SHOPPING
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => {
            navigate("/checkout/checkout");
          }}
        >
          CHECKOUT &rarr;
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
