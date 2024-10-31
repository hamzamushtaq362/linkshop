import React from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

function BestsellersAndTestimonials() {
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 px-8">
      <div className="lg:col-span-3">
        <LeftSidebar />
      </div>
      <div className="lg:col-span-6">
        <MainContent />
      </div>
      <div className="lg:col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}

export default BestsellersAndTestimonials;
