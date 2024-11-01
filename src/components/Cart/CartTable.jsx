import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const CartTable = () => {
  return (
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
  );
};

export default CartTable;
