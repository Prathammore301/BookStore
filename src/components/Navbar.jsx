import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link to="/" className="text-2xl font-bold">
          Bookstore 📚
        </Link>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔹 Menu (Responsive) */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link 
              to="/" 
              className={`block ${isActive('/') ? 'font-bold bg-blue-700 px-3 py-1 rounded-lg' : 'hover:text-gray-300'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`block ${isActive('/about') ? 'font-bold bg-blue-700 px-3 py-1 rounded-lg' : 'hover:text-gray-300'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/books" 
              className={`block ${isActive('/books') ? 'font-bold bg-blue-700 px-3 py-1 rounded-lg' : 'hover:text-gray-300'}`}
            >
              Books
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`block ${isActive('/contact') ? 'font-bold bg-blue-700 px-3 py-1 rounded-lg' : 'hover:text-gray-300'}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className={`block ${isActive('/login') ? 'font-bold bg-blue-700 px-3 py-1 rounded-lg' : 'hover:text-gray-300'}`}
            >
              Login
            </Link>
          </li>

          {/* 🔹 Cart */}
          <li className="relative">
            <Link 
              to="/cart"
              className={isActive('/cart') ? 'bg-blue-700 p-1 rounded-lg inline-block' : ''}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;  