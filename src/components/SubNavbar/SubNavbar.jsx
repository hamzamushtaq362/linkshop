import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaHome,
  FaPercent,
  FaGift,
  FaUser,
  FaHeart,
} from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SubNavbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (!hovering) {
      // Set a delay of 2 seconds (2000 milliseconds)
      timer = setTimeout(() => {
        setIsDropdownVisible(false);
      }, 1000);
    } else {
      // Hide the dropdown immediately when not hovering
      setIsDropdownVisible(true);
    }

    // Clear the timeout if hovering changes or component unmounts
    return () => clearTimeout(timer);
  }, [hovering]);

  return (
    <div className="bg-gray-800 text-white sticky top-0 z-50 shadow-md hidden md:block">
      <div className="container mx-auto flex items-center justify-between space-x-4 px-2">
        {/* Complete Catalog */}
        <div className="relative flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded">
          <FaBars size={18} />
          <span className="font-semibold text-[12px]">Complete Catalog</span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2 absolute top-0 right-0">
            Sale
          </span>
        </div>

        {/* All Writers */}
        <div className="flex items-center space-x-1">
          <FaHome size={18} />
          <span className="cursor-pointer text-xs">All Writers</span>
        </div>

        {/* Categories - Hover to show dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <span className="text-green-400 cursor-pointer text-xs">
            Categories
          </span>
          {isDropdownVisible && (
            <div className="absolute left-0 w-screen bg-white shadow-lg mt-2">
              {/* Ensure DropdownMenu takes the full width */}
              <div className="container mx-auto">
                <DropdownMenu />
              </div>
            </div>
          )}
        </div>

        {/* View All Books */}
        <span className="cursor-pointer text-xs">View All Books</span>

        {/* International Shipping Rates */}
        <span className="cursor-pointer text-xs">
          International Shipping Rates
        </span>

        <div className="flex">
          {/* Deals Offer */}
          <div className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded">
            <FaPercent size={14} />
            <span className="text-xs">Deals Offer</span>
          </div>

          {/* Stationery And Toys */}
          <div className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded">
            <FaGift size={18} />
            <span className="text-xs">Stationery And Toys</span>
          </div>
        </div>

        {/* Account */}
        <div className="flex flex-col items-center space-x-1 cursor-pointer">
          <FaUser size={14} />
          <span className="text-xs">Account</span>
        </div>

        {/* Wishlist */}
        <div className="flex flex-col items-center space-x-1 relative cursor-pointer">
          <FaHeart size={14} />
          <span className="text-xs">Wishlist</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            0
          </span>
        </div>

        {/* Checkout */}
        <div
          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => {
            navigate("/checkout/cart");
          }}
        >
          <span className="text-xs">Items</span>
          <FaCartShopping size={18} />
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
