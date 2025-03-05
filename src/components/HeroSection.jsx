import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] bg-black">
      {/* Slider Container */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/path-to-your-banner.jpg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Dịch Vụ Đặc Biệt</h1>
        <p className="text-lg mb-6">Đáp ứng mọi nhu cầu của bạn</p>
        <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400">
          Đặt Bàn Ngay
        </button>
      </div>
    </section>
  );
};

export default HeroSection;