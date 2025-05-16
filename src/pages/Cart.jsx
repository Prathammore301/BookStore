import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const DELIVERY_CHARGE = 50; // Fixed delivery charge

  // Function to update quantity
  const updateQuantity = (index, amount) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += amount;

    // Ensure quantity doesn't go below 1
    if (updatedCart[index].quantity < 1) {
      updatedCart.splice(index, 1); // Remove item if quantity is 0
    }

    setCart(updatedCart);
  };

  // Function to remove item
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Calculate total
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal + (cart.length > 0 ? DELIVERY_CHARGE : 0); // Add delivery charge only if cart is not empty

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-700 text-center">🛒 Your Shopping Cart</h1>

      {/* When the Cart is Empty */}
      {cart.length === 0 ? (
        <div className="text-center mt-12">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" 
            alt="Empty Cart" 
            className="w-40 mx-auto opacity-70"
          />
          <h2 className="text-2xl font-semibold text-gray-600 mt-4">Your cart is empty</h2>
          <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>

          {/* Link to Books Page */}
          <Link to="/books" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            📚 Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 mb-4">
              {/* Book Image */}
              <img src={item.image} alt={item.title} className="w-24 h-32 object-cover rounded-lg shadow-md" />

              {/* Book Details */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm">by {item.author}</p>
                <p className="text-blue-600 font-bold mt-1">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center">
                <button 
                  onClick={() => updateQuantity(index, -1)}
                  className="px-3 py-1 bg-gray-300 text-gray-800 rounded-l hover:bg-gray-400"
                >-</button>
                <span className="px-4 py-1 border">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(index, 1)}
                  className="px-3 py-1 bg-gray-300 text-gray-800 rounded-r hover:bg-gray-400"
                >+</button>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeItem(index)}
                className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                🗑 Remove
              </button>
            </div>
          ))}

          {/* Summary Section */}
          <div className="mt-6 text-right bg-gray-100 p-6 rounded-lg">
            <p className="text-lg font-semibold">Subtotal: <span className="text-blue-600">${subtotal.toFixed(2)}</span></p>
            <p className="text-lg font-semibold">Delivery Charge: <span className="text-blue-600">${cart.length > 0 ? DELIVERY_CHARGE : 0}</span></p>
            <p className="text-2xl font-bold text-blue-700 mt-2">Total: ${total.toFixed(2)}</p>

            {/* Checkout Button */}
            <button 
              onClick={() => {
                alert("🎉 Order Placed Successfully! Thank you for shopping.");
                setCart([]); // Clear cart
              }}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              ✅ Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
