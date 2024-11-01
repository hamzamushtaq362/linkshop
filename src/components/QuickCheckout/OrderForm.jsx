import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const OrderForm = () => {
  return (
    <div className="w-[70%] space-y-8 p-4 bg-gray-50 rounded-lg">
      {/* Shipping and Payment Methods */}
      <div className="p-4 bg-white border border-gray-300 rounded-md grid grid-cols-2 gap-4">
        {/* Shipping Method */}
        <div>
          <h3 className="text-md font-semibold mb-2">SHIPPING METHOD</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="shipping" className="form-radio" />
              <span>Flat Shipping Rate - Rs.200</span>
            </label>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-md font-semibold mb-2">PAYMENT METHOD</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Cash On Delivery</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Online Pay Via Debit/Credit Card</span>
            </label>
          </div>
        </div>
      </div>

      {/* Shopping Cart */}
      <div className="p-4 bg-white border border-gray-300 rounded-md">
        <h3 className="text-md font-semibold mb-2">SHOPPING CART</h3>
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border text-[12px] font-bold uppercase">IMAGE</th>
              <th className="p-2 border text-[12px] font-bold uppercase">PRODUCT NAME</th>
              <th className="p-2 border text-[12px] font-bold uppercase">MODEL</th>
              <th className="p-2 border text-[12px] font-bold uppercase">QUANTITY</th>
              <th className="p-2 border text-[12px] font-bold uppercase">UNIT PRICE</th>
              <th className="p-2 border text-[12px] font-bold uppercase">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-2 border">
                <img
                  src="https://via.placeholder.com/50"
                  alt="The Bell Jar"
                  className="h-8 w-12 object-cover"
                />
              </td>
              <td className="p-2 border text-blue-500">The Bell Jar</td>
              <td className="p-2 border">STP-13467</td>
              <td className="p-2 border">
                <div className="flex items-center">
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-12 border rounded p-1 text-center mr-2"
                  />
                  <button className="text-gray-600 bg-gray-200 p-1 rounded">
                    <FiRefreshCcw />
                  </button>
                  <button className="text-white bg-red-500 p-1 rounded ml-2">
                    <RxCross1 />
                  </button>
                </div>
              </td>
              <td className="p-2 border">Rs.650</td>
              <td className="p-2 border">Rs.650</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Sub-Total:</span>
            <span>Rs.650</span>
          </div>
          <div className="flex justify-between">
            <span>Flat Shipping Rate:</span>
            <span>Rs.200</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>Rs.850</span>
          </div>
        </div>
      </div>

      {/* Confirm Your Order */}
      <div className="p-4 bg-white border border-gray-300 rounded-md">
        <h3 className="text-md font-semibold mb-2">CONFIRM YOUR ORDER</h3>
        <textarea
          placeholder="Add Comments About Your Order"
          className="w-full border border-gray-300 rounded-md p-2"
        ></textarea>
        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" id="newsletter" className="form-checkbox" />
          <label htmlFor="newsletter" className="text-sm">
            I wish to subscribe to the LinkShop.pk newsletter.
          </label>
        </div>
      </div>

      {/* Confirm Order Button */}
      <button
        type="submit"
        className="w-full bg-green-400 text-white text-sm font-semibold py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        CONFIRM ORDER →
      </button>
    </div>
  );
};

export default OrderForm;
