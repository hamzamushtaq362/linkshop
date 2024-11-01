import React from "react";
import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import WhyBuyFromUs from "../components/WhyBuyFromUs";
import BestsellersAndTestimonials from "../components/BestSellers/BestsellersAndTestimonials";
import Catalog from "../components/Catalog/Catalog";
import BookCatalog from "../components/Catalog/BookCatalog";

function Home() {
  return (
    <div>
      <BestsellersAndTestimonials />
      <BookCatalog />
      <div className="container mx-auto py-10 pb-4 px-8">
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
        <ProductList />
      </div>
      <HeroSection />
      <Catalog />
      <WhyBuyFromUs />
    </div>
  );
}

export default Home;
