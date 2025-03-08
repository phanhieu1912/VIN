import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
const news = [
  {
    title: "HẦM RƯỢU BÍ ẨN TRONG HẺM - NƠI CẦU HÔN NHÀ HÀNG MARS VENUS",
    date: "Ngày 9 Tháng 6 Năm 2024",
    description: "Bạn muốn tạo cảm giác thoải mái cho nàng ngay tại nhà hàng cầu hôn nhưng vẫn lãng mạn?",
    image: "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/news/20240607/002531_5b83a308-0c61-46b2-8f9c-a52fff300525.jpg",
    link: "/su-kien-va-bai-viet/ham-ruou-bi-an/",
  },
  {
    title: "6 BÍ QUYẾT KHIẾN BỮA TIỆC CẦU HÔN TẠI NHÀ HÀNG TRỞ NÊN HOÀN HẢO",
    date: "Ngày 8 Tháng 6 Năm 2024",
    description: "Buổi cầu hôn ở nhà hàng lãng mạn dưới ánh nến lung linh là mơ ước của nhiều bạn gái...",
    image: "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/news/20240607/002531_5b83a308-0c61-46b2-8f9c-a52fff300525.jpg",
    link: "/su-kien-va-bai-viet/6-bi-quyet-cau-hon-hoan-hao/",
  },
  {
    title: "KHÁM PHÁ MARS VENUS - NHÀ HÀNG LÃNG MẠN BẬC NHẤT SÀI GÒN",
    date: "Ngày 8 Tháng 6 Năm 2024",
    description: "Một buổi cầu hôn đầy cảm xúc chưa thể thành công nếu thiếu địa điểm phù hợp...",
    image: "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/news/20240607/002531_5b83a308-0c61-46b2-8f9c-a52fff300525.jpg",
    link: "/su-kien-va-bai-viet/nha-hang-lang-man/",
  },
  {
    title: "KHÁM PHÁ MARS VENUS - NHÀ HÀNG LÃNG MẠN BẬC NHẤT SÀI GÒN",
    date: "Ngày 8 Tháng 6 Năm 2024",
    description: "Một buổi cầu hôn đầy cảm xúc chưa thể thành công nếu thiếu địa điểm phù hợp...",
    image: "https://cdn.marsvenus.com.vn/marsvenus/public/uploads/news/20240607/002531_5b83a308-0c61-46b2-8f9c-a52fff300525.jpg",
    link: "/su-kien-va-bai-viet/nha-hang-lang-man/",
  },
];

const NewsSlider = () => {
  const { language } = useContext(LanguageContext); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const step = 10; 
  const maxTranslate = 100; 
  const progress = (currentIndex / maxTranslate) * 100; // Cập nhật tiến trình
  const translations = {
    vi: {
        title: "Sự kiện & bài viết",
        
    },
    en: {
        title: "Events & Blocks",
         
    },
};
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - step < 0 ? maxTranslate - step : prev - step));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + step > maxTranslate ? 0 : prev + step));
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
      {/* Tiêu đề */}
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500">{translations[language].title}</h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex}%)` }}
        >
          {news.map((item, index) => (
            <a key={index} href={item.link} className="w-[calc(100%/3)] sm:w-[calc(100%/3)] px-2 flex-shrink-0">
              <div className="group flex flex-col rounded-md border border-yellow-950 bg-black/45 sm:rounded-xl p-3 hover:border-yellow-500 sm:p-3.5 transition-all duration-[400] ease-in-out">
                {/* Hình ảnh */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* Nội dung */}
                <div className="p-4">
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <h3 className="text-sm sm:text-lg font-semibold text-white line-clamp-2 min-h-[3rem] text-sm group-hover:text-yellow-500">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-3">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="w-fit ml-auto px-6 py-3 flex flex-col items-end gap-3">
          
          <div className="w-[150px] h-1 bg-black/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black-500 transition text-white text-xs"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black-500 transition text-white text-xs"
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      {/* Xem thêm */}
      {/* <a
        href="/su-kien-va-bai-viet/"
        className="block w-fit mx-auto px-6 py-3 rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
      >
        Xem thêm
      </a> */}
    </div>
  );
};

export default NewsSlider;
