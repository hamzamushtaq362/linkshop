import React from "react";
import { FaSearch, FaRedoAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../logo.svg";
import { useNavigate } from "react-router-dom";

function TopNavBar() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 px-4 cursor-pointer">
        {/* Logo */}
        <div
          className="flex items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="Link Shop Logo" className="h-10 md:h-12" />
          <span className="ml-2 text-xl md:text-2xl font-bold">LINK SHOP</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 rounded-l-md text-black"
          />
          <button className="bg-red-500 text-white px-4 py-3 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 md:space-x-4">
          <button className="flex items-center bg-white text-gray-800 px-3 md:px-4 py-2 rounded-md shadow">
            <FaRedoAlt className="text-red-500 mr-2" />
            <span className="text-xs md:text-sm font-semibold">
              RETURN POLICY
            </span>
          </button>
          <button className="flex items-center bg-white text-gray-800 px-3 md:px-4 py-2 rounded-md shadow">
            <FaEnvelope className="text-red-500 mr-2" />
            <span className="text-xs md:text-sm font-semibold">CONTACT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
