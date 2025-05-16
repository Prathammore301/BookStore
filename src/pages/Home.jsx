import React from 'react';
import BookCard from "../components/BookCard"; // Import the BookCard component




const Home = ({ addToCart }) => {
  const topBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg" },
    { id: 2, title: "1984", author: "George Orwell", price: 12.49, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 14.99, image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg?w=300" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 9.99, image: "https://m.media-amazon.com/images/I/91eKRbuhgaL._AC_UF1000,1000_QL80_.jpg" },
  ];

  return (
    <>
      {/* 🔹 Hero Section with Video Background */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <video 
          src="home.mp4" 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to My Bookstore
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full shadow-md transition">
            Start For Free
          </button>
        </div>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

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
          <h1 className="text-4xl font-bold text-blue-700">Why Choose Us?</h1>
          <p className="text-lg text-gray-700 mt-4">
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

      {/* 🔹 Top Reviews Section */}
      <div 
        className="relative bg-fixed bg-center bg-cover text-white py-12" 
        style={{ backgroundImage: `url("/habt.jpg")` }} 
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 py-12 px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700">Top Reviews from Our Customers</h2>
          <p className="text-center text-gray-600 mt-2">See what our readers love about our bookstore!</p>

          <div className="mt-8 max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Absolutely love this bookstore! The collection is vast, and the delivery is quick. Highly recommended!"
              </p>
              <div className="mt-4 flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Amit Sharma</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Best prices and amazing discounts! I found my favorite novels at half the price. Will shop again!"
              </p>
              <div className="mt-4 flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Sneha Patel</p>
                  <p className="text-sm text-gray-500">Book Lover</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "The best place to buy books online. Excellent customer service and fast shipping!"
              </p>
              <div className="mt-4 flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full" />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Rahul Verma</p>
                  <p className="text-sm text-gray-500">Frequent Shopper</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
     {/* Top Books Section */}
     <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Top Books
        </h2>

        {/* Book List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {topBooks.map((book) => (
             <BookCard key={book.id} book={book} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
