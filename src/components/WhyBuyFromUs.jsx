import React from "react";
import { FaUsers, FaLock, FaTruck, FaMedal } from "react-icons/fa";
import "./styles.css";

function WhyBuyFromUs() {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Buy From Us?</h2>
        <div className="border-b-2 border-red-600 w-16 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Our Motto */}
          <div className="bg-white p-8 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 text-white rounded-full p-4">
                <FaUsers size={32} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">OUR MOTTO</h3>
            <p className="text-gray-600">
              We are here to make Clients not Customers!
            </p>
          </div>

          {/* Safe and Secure Shopping */}
          <div className="bg-white p-8 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 text-white rounded-full p-4">
                <FaLock size={32} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">SAFE AND SECURE SHOPPING</h3>
            <p className="text-gray-600">
              LinkShop.pk guarantees 100% Safe & Secure shopping. All customer
              details are held private.
            </p>
          </div>

          {/* Flat Shipping Charges */}
          <div className="bg-white p-8 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 text-white rounded-full p-4">
                <FaTruck size={32} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">FLAT SHIPPING CHARGES</h3>
            <p className="text-gray-600">
              Rs. 200 Rupees flat shipping charges on each order in all over
              Pakistan.
            </p>
          </div>

          {/* Satisfied Clients */}
          <div className="bg-white p-8 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 text-white rounded-full p-4">
                <FaMedal size={32} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">SATISFIED CLIENTS</h3>
            <p className="text-gray-600">Above 100K Satisfied Clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBuyFromUs;
