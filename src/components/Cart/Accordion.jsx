import React, { useState } from "react";
import ShippingEstimateForm from "./ShippingEstimateForm";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto bg-white">
      {/* Accordion Item 1 */}
      <div>
        <button
          onClick={() => toggleAccordion(0)}
          className="w-full flex justify-between items-center px-4 py-2  font-semibold text-left bg-gray-100 text-gray-800 border-b border-gray-200 hover:bg-gray-100"
        >
          <span className="text-sm">USE COUPON CODE</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              openIndex === 0 ? "rotate-180" : "rotate-0"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {openIndex === 0 && (
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600">Enter your coupon here:</p>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Enter your coupon here"
                className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
              />
              <button className="ml-2 bg-indigo-600 text-white text-xs px-4 py-2 rounded hover:bg-indigo-700">
                APPLY COUPON
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div>
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex justify-between items-center px-4 py-2  font-semibold text-left bg-gray-100 text-gray-800 border-b border-gray-200 hover:bg-gray-100"
        >
          <span className="text-sm">ESTIMATE SHIPPING & TAXES</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              openIndex === 1 ? "rotate-180" : "rotate-0"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {openIndex === 1 && <ShippingEstimateForm />}
      </div>

      {/* Accordion Item 3 */}
      <div>
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex justify-between items-center px-4 py-2 font-semibold text-left bg-gray-100 text-gray-800 hover:bg-gray-100"
        >
          <span className="text-sm">USE GIFT CERTIFICATE</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              openIndex === 2 ? "rotate-180" : "rotate-0"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {openIndex === 2 && (
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600">
              Details about using a gift certificate will go here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
