import React, { useState } from "react";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react"; // Icons

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* 🔹 Heading Section (Like About Page) */}
      <div className="relative h-60 bg-blue-600 text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 🔹 Contact Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Contact Form */}
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-4xl font-bold text-blue-700">Get in Touch</h2>
          <p className="text-lg text-gray-700 mt-4">
            We'd love to hear from you! Fill out the form below and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info & Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://via.placeholder.com/500x350" 
            alt="Contact Us" 
            className="w-full rounded-lg shadow-lg"
          />

          {/* Contact Details */}
          <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700">Our Contact Details</h3>
            <div className="mt-4 space-y-3">
              <p className="flex items-center text-gray-700">
                <Phone className="text-blue-600 mr-2" size={20} /> +91 9876543210
              </p>
              <p className="flex items-center text-gray-700">
                <Mail className="text-blue-600 mr-2" size={20} /> support@bookstore.com
              </p>
              <p className="flex items-center text-gray-700">
                <MapPin className="text-blue-600 mr-2" size={20} /> 123, Book Street, India
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 🔹 Google Map Section */}
      <div className="container mx-auto px-6 pb-12">
        <h2 className="text-4xl font-bold text-blue-700 text-center">Find Us on Google Maps</h2>
        <p className="text-center text-gray-600 mt-2">Locate our bookstore easily!</p>

        <div className="mt-6 flex justify-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29529.28207590701!2d73.17075531400673!3d22.309778049475486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbookstores%20near%20me%20for%20novels!5e0!3m2!1sen!2sin!4v1742401576814!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            className="rounded-lg shadow-lg border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
