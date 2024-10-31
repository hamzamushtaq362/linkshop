import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaCcMastercard,
} from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Link Shop Links Section */}
        <div>
          <h4 className="text-lg font-bold mb-2">LINK SHOP LINKS</h4>
          <div className="border-b-2 border-red-600 w-10 mb-4"></div>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="text-gray-300 hover:text-white">
                Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-300 hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="text-gray-300 hover:text-white"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h4 className="text-lg font-bold mb-2">MY ACCOUNT</h4>
          <div className="border-b-2 border-red-600 w-10 mb-4"></div>
          <ul className="space-y-2">
            <li>
              <Link to="/my-account" className="text-gray-300 hover:text-white">
                My Account
              </Link>
            </li>
            <li>
              <Link
                to="/order-history"
                className="text-gray-300 hover:text-white"
              >
                Order History
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h4 className="text-lg font-bold mb-2">CUSTOMER SERVICE</h4>
          <div className="border-b-2 border-red-600 w-10 mb-4"></div>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/returns-policy"
                className="text-gray-300 hover:text-white"
              >
                Returns Policy
              </Link>
            </li>
            <li>
              <Link to="/site-map" className="text-gray-300 hover:text-white">
                Site Map
              </Link>
            </li>
            <li>
              <Link
                to="/all-writers"
                className="text-gray-300 hover:text-white"
              >
                All Writers
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-2">FOLLOW US</h4>
          <div className="border-b-2 border-red-600 w-10 mb-4"></div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-500 hover:text-white"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-pink-500 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://whatsapp.com"
              className="text-green-500 hover:text-white"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
          <p className="text-gray-400 mt-4">
            &copy; 2024, Link Shop, All Rights Reserved
          </p>
          <div className="flex items-center space-x-2 mt-2">
            {/* Replace these with actual payment method images */}
            <LiaCcVisa size={28} />
            <FaCcMastercard size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
