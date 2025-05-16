import React, { useState } from "react";
import BookCard from "../components/BookCard";

const Books = ({ addToCart }) => {
  // Single array with all books
  const allBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg", category: "Fiction" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 10.99, image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg?w=300", category: "Fiction" },
    { id: 3, title: "Sapiens", author: "Yuval Noah Harari", price: 15.99, image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg", category: "Non-Fiction" },
    { id: 4, title: "Atomic Habits", author: "James Clear", price: 14.99, image: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg", category: "Non-Fiction" },
    { id: 5, title: "A Brief History of Time", author: "Stephen Hawking", price: 18.99, image: "https://m.media-amazon.com/images/I/81DBK93b6jL.jpg", category: "Science" },
    { id: 6, title: "The Selfish Gene", author: "Richard Dawkins", price: 16.99, image: "https://m.media-amazon.com/images/I/51-bIbzo1mL._SY445_SX342_.jpg", category: "Science" }
  ];

  // State to store selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter books based on selected category
  const filteredBooks =
    selectedCategory === "All"
      ? allBooks
      : allBooks.filter((book) => book.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-700 text-center">📚 Browse Our Books</h1>

      {/* Dropdown for selecting categories */}
      <div className="flex justify-center mt-6">
        <select
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Books</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
        </select>
      </div>

      {/* Display books dynamically */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Books;
