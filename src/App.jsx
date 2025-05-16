import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add book to cart
  const addToCart = (book) => {
    const exists = cart.find(item => item.id === book.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/books" element={<Books addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
