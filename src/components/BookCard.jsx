
import React from "react";

const BookCard = ({ book, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={book.image} alt={book.title} className="ml-14 w-60 h-90 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-500">by {book.author}</p>
        <p className="text-lg font-bold text-blue-600 mt-2">${book.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(book)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
