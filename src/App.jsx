

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/aboutus";
import Cart from "./pages/cart";
import Dashboard from "./pages/dashboard";
import Account from "./pages/account";
import LoginSignup from "./pages/login-signup.jsx";
const Products = React.lazy(() => import("./pages/Products"));
import Product from "./pages/Product";
import "./assets/css/header-footer.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + product.qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function updateQty(id, qty) {
    if (qty < 1) return;
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              updateQty={updateQty}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
