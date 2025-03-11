import React, { useState, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import BookingComponent from "../../components/BookingFromComponent";
import NewsSliderComponent from "../../components/NewsSliderComponent";
const images = [
  "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/banner/20241212/Cover_T12_155839939652.webp",
  "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/banner/20241117/Cover_T9_153705704225.webp",
  "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/banner/20241117/cover3-01_153637585128.webp",
  "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/banner/20241117/Covert_T102_153651440809.webp",
  "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/banner/20241110/Cover_T11_183813009371.webp",
];

const promotions = [
  { id: 1, image: "/images/hinhanh1.png" },
  { id: 2, image: "/images/hinhanh2.png" },
  { id: 3, image: "/images/hinhanh3.png" },
  { id: 4, image: "/images/hinhanh4.png" },
  { id: 5, image: "/images/hinhanh1.png" },
  { id: 6, image: "/images/hinhanh2.png" },
  { id: 7, image: "/images/hinhanh3.png" },
  { id: 8, image: "/images/hinhanh4.png" },
];

const HomePage = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef(null);
  const { t } = useTranslation();
  const promotionTitles = t("promotions", { returnObjects: true });
  console.log(promotionTitles)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setSelectedIndex(newIndex),
  };
  return (
    <section className="relative w-full flex flex-col items-center py-10 gap-10">
      {/* Slider hình ảnh */}
      <div className="mx-auto mt-6 w-full sm:mt-0 xl:w-[74%]">
        <div className="relative rounded-2xl bg-black/20 p-0 sm:px-14 sm:py-4">
          <Slider ref={sliderRef} {...settings}>
            {images.map((src, index) => (
              <div key={index} className="relative aspect-[803/373] overflow-hidden rounded-[0.625rem]">
                <img
                  src={src}
                  alt="Mars Venus Welcome"
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </Slider>
          {/* Dots Navigation (Custom) */}
          <div className="flex items-center justify-center gap-2 absolute -bottom-8 left-1/2 -translate-x-1/2">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => sliderRef.current?.slickGoTo(index)} // ✅ Click vào dots để chuyển slide
                className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-500 ease-in-out ${index === selectedIndex ? "w-6 bg-yellow-500" : "bg-gray-700"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto relative w-[74%] h-[450px] rounded-lg overflow-hidden border-4 border-black shadow-lg">
        {/* Video YouTube tự động phát */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/QWX1J6-OdcY?autoplay=1&mute=1&controls=0"
          title="YouTube video player"
          frameBorder="0"  // ✅ Đúng cú pháp
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"  // ✅ Đúng cú pháp
          allowFullScreen  // ✅ Đúng cú pháp
        ></iframe>
      </div>
      <div className="py-10 px-11 max-w-7xl mx-auto w-[79%]">
        {/* Tiêu đề */}
        <h2 className="text-4xl font-bold text-yellow-400 mb-4 font-dancing-script">
          {t("title")}
        </h2>
        <p className="text-xs sm:text-base mt-3.5 text-white mb-6">
          {t("description")}
        </p>

        {/* Danh sách khuyến mãi */}
        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
          {promotionTitles.map((title, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg border transition bg-black hover:border-yellow-500 hover:shadow-yellow-500/50 hover:bg-yellow-500/10 group"
              style={{ width: "220px", height: "210px" }}
            >
           
              <div className="absolute top-2 left-0 right-0 text-center text-white font-semibold text-sm group-hover:text-yellow-500">
                {title} 
              </div>

          
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={promotions[index]?.image} 
                  alt={title} 
                  className="w-[90%] h-[80%] object-cover rounded-xl mt-10 transition-all duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookingComponent />
      <NewsSliderComponent/>
    </section>
  );
};

export default HomePage;
