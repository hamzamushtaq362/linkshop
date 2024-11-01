import React from "react";
import RegistrationForm from "./RegistrationForm";
import OrderForm from "./OrderForm";

export default function QuickCheckout() {
  return (
    <div className="w-full flex">
      <RegistrationForm />
      <OrderForm />
    </div>
  );
}
