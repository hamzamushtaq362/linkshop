import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./components/Cart/ShoppingCart";
import TopNavBar from "./components/SubNavbar/TopNavBar";
import SubNavbar from "./components/SubNavbar/SubNavbar";

function App() {
  return (
    <Router>
      <Navbar />
      <TopNavBar />
      <SubNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/checkout/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
