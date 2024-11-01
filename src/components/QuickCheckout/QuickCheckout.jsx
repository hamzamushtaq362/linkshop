import React from "react";
import RegistrationForm from "./RegistrationForm";
import OrderForm from "./OrderForm";

export default function QuickCheckout() {
  return (
    <div>
      <div className="w-full space-y-8 p-4 bg-gray-50 border">
        <h2 className="text-2xl font-semibold">Quick Checkout</h2>
      </div>
      <div className="w-full flex">
        <RegistrationForm />
        <OrderForm />
      </div>
    </div>
  );
}
