import React from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-[#003f62] p-4 flex justify-between items-center">
    <div className="text-white text-2xl"></div>
    <div className="relative">
     
      </span>
    </div>

    <div className="flex items-center space-x-6">
      {/* Wishlist Icon and Count */}
      <div className="flex items-center space-x-1">
        <FaHeart className="text-white" />
        <span className="bg-[#eda415] text-white text-md rounded-full h-5 w-5 flex items-center justify-center">
          5
        </span>
      </div>

      <Link
        to="/signin"
        className=" text-white px-4 py-2 rounded hover:bg-[#d58b0e] transition"
      >
        Sign In
      </Link>

      {/* Cart Icon with Count and Text */}
      <div className="flex items-center space-x-8">
        <div className="relative">
          <FaShoppingCart className="text-white" />
          <span className="absolute top-0 left-6 text-xs text-white bg-[#eda415] rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>
        <span className="text-white">Cart</span>
      </div>

      {/* Sign In as Link */}
    </div>
  </nav>
);

export default Navbar;
