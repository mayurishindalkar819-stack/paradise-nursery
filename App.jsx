import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function Home() {
  return (
    <div className="landing">
      <div className="landing-card">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with beautiful, healthy houseplants.</p>
        <AboutUs />
        <Link to="/plants">
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
export default App;
