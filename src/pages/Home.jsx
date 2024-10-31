import React from "react";
import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import WhyBuyFromUs from "../components/WhyBuyFromUs";
import BestsellersAndTestimonials from "../components/BestSellers/BestsellersAndTestimonials";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import TopNavBar from "../components/SubNavbar/TopNavBar";

function Home() {
  return (
    <div>
      <TopNavBar />
      <HeroSection />
      <SubNavbar />
      <BestsellersAndTestimonials />
      <div className="container mx-auto py-10 pb-4 px-8">
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
        <ProductList />
      </div>
      <WhyBuyFromUs />
    </div>
  );
}

export default Home;
