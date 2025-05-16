import React from "react";
import { BookOpen, DollarSign, Truck, Mail, Phone } from "lucide-react"; // Importing icons

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-5xl font-bold mb-6 text-blue-700">About Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to <span className="font-semibold">Bookstore</span>, your one-stop shop for the best books at amazing prices!
      </p>



      {/* 🔹 About Us Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 ml-10">
  <img 
    src="habt.jpg" 
    alt="Bookstore" 
    className="w-[500px] h-[500px] object-cover rounded-lg shadow-lg"
  />
</div>


        {/* Right Side - Content */}
        <div className="md:w-1/2 md:pl-10 text-center md:text-left mt-6 md:mt-0">
          
          <p className="text-lg text-gray-700 mt-2">
            Welcome to <span className="font-semibold">Bookstore</span>, your one-stop shop for the best books at amazing prices!
          </p>
          <p className="text-gray-600 mt-4">
            We believe in making books accessible to everyone, promoting knowledge, and encouraging a love for reading.
          </p>
          
          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-2">📚</span>
              <p className="text-gray-700">Explore thousands of books across different genres.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-2">💰</span>
              <p className="text-gray-700">Affordable prices for all book lovers.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-2">🚚</span>
              <p className="text-gray-700">Fast and hassle-free delivery to your doorstep.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <p className="text-gray-700">📧 Email: support@bookstore.com | 📞 Phone: +91 1234567890</p>
          </div>
        </div>
      </div>




      {/* Our Mission */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-semibold text-blue-800">Our Mission</h2>
        <p className="text-gray-700 mt-2 text-lg">
          We believe in making books accessible to everyone, promoting knowledge, and encouraging a love for reading.
        </p>
      </div>







      {/* What We Offer */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
          <BookOpen className="text-blue-600" size={40} />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">Wide Collection</h3>
          <p className="text-gray-600 mt-2">Explore thousands of books across different genres.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
          <DollarSign className="text-green-600" size={40} />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">Affordable Prices</h3>
          <p className="text-gray-600 mt-2">Get the best books at the most competitive prices.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
          <Truck className="text-red-600" size={40} />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">Fast Delivery</h3>
          <p className="text-gray-600 mt-2">We ensure quick and hassle-free delivery to your doorstep.</p>
        </div>
      </div>

     
    </div>
  );
};

export default About;
