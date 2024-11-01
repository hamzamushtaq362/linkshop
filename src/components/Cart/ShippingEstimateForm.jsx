import React from "react";

const ShippingEstimateForm = () => {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200">
      <h3 className="text-sm font-semibold mb-4">
        Enter your destination to get a shipping estimate.
      </h3>
      <form className="space-y-4">
        {/* Country Dropdown */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-normal text-gray-700"
          >
            Country *
          </label>
          <select
            id="country"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Pakistan</option>
            <option>India</option>
            <option>United States</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Region/State Dropdown */}
        <div>
          <label
            htmlFor="region"
            className="block text-sm font-normal text-gray-700"
          >
            Region / State *
          </label>
          <select
            id="region"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Punjab</option>
            <option>Sindh</option>
            <option>Khyber Pakhtunkhwa</option>
            {/* Add more regions/states as needed */}
          </select>
        </div>

        {/* Post Code Input */}
        <div>
          <label
            htmlFor="postcode"
            className="block text-sm font-normal text-gray-700"
          >
            Post Code
          </label>
          <input
            type="text"
            id="postcode"
            placeholder="Post Code"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Get Quotes Button */}
        <button
          type="submit"
          className="w-full bg-green-400 text-white text-xs font-semibold py-2 rounded-sm hover:bg-green-600 transition-colors"
        >
          GET QUOTES →
        </button>
      </form>
    </div>
  );
};

export default ShippingEstimateForm;
