import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">LinkShop</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-gray-700 hover:text-gray-900">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-8">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
