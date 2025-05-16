  import React from "react";
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          
          {/* 🔹 Left Section - Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">📖 Bookstore</h2>
            <p className="mt-3 text-sm">
              Your one-stop shop for the best books. Discover knowledge, adventure, and inspiration with every read.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
  
          {/* 🔹 Center Section - Navigation Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* 🔹 Right Section - Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <p className="mt-2 text-sm">Subscribe to get updates on new arrivals and offers.</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-md text-black" />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white">Subscribe</button>
            </div>
          </div>
  
        </div>
  
        {/* 🔹 Bottom Bar */}
        <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm">
          © {new Date().getFullYear()} Bookstore. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  