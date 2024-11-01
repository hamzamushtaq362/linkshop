import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

function MainContent() {
  return (
    <div className="bg-white p-4 border-l-2 border-r-2">
      {/* Hero Image Swiper */}
      <Swiper spaceBetween={30} slidesPerView={1} className="mb-8">
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0420/1044/3928/files/Y3601HarryPotterandtheDeathlyHallows_USROUNDED_90b5f531-2cd0-4065-b3a4-f74bea6e0ed7_768x.png?v=1724248907"
              alt="Huge Collection of Books"
              className="w-full rounded h-[400px]"
            />
            <div className="absolute top-10 left-10 bg-green-500 text-white px-4 py-2 rounded">
              HUGE COLLECTION OF BOOKS
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0420/1044/3928/files/Y3601HarryPotterandtheDeathlyHallows_USROUNDED_90b5f531-2cd0-4065-b3a4-f74bea6e0ed7_768x.png?v=1724248907"
              alt="English Books"
              className="w-full rounded h-[400px]"
            />
            <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded">
              ENGLISH BOOKS
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>

      {/* Category Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0420/1044/3928/files/Y3601HarryPotterandtheDeathlyHallows_USROUNDED_90b5f531-2cd0-4065-b3a4-f74bea6e0ed7_768x.png?v=1724248907"
            alt="Books on Seerat"
            className="w-full rounded h-[300px]"
          />
          <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded">
            BOOKS ON SEERAT
          </div>
        </div>
        <div className="relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0420/1044/3928/files/Y3601HarryPotterandtheDeathlyHallows_USROUNDED_90b5f531-2cd0-4065-b3a4-f74bea6e0ed7_768x.png?v=1724248907"
            alt="English Books"
            className="w-full rounded h-[300px]"
          />
          <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded">
            ENGLISH BOOKS
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
