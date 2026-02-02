import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-5 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="./public/media/logo.svg" alt="Logo" className="w-32" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li>
            <Link to="/signup" className="hover:text-blue-600">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-blue-600">
              Product
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/support" className="hover:text-blue-600">
              Support
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <ul className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
