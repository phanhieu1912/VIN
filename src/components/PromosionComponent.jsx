import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const promotions = [
    { id: 1, title_vi: "Khuyến Mãi Ngày Lễ", title_en: "Holiday Promotion", image: "/images/hinhanh1.png" },
    { id: 2, title_vi: "Khuyến Mãi Đặc Biệt", title_en: "Special Promotion", image: "/images/hinhanh2.png" },
    { id: 3, title_vi: "Ưu Đãi Cuối Tuần", title_en: "Weekend Offer", image: "/images/hinhanh3.png" },
    { id: 4, title_vi: "Giảm Giá Ngay", title_en: "Discount Now", image: "/images/hinhanh4.png" },
    { id: 5, title_vi: "Flash Sale", title_en: "Flash Sale", image: "/images/hinhanh1.png" },
    { id: 6, title_vi: "Ưu Đãi Đặc Biệt", title_en: "Exclusive Deal", image: "/images/hinhanh2.png" },
    { id: 7, title_vi: "Mua 1 Tặng 1", title_en: "Buy 1 Get 1", image: "/images/hinhanh3.png" },
    { id: 8, title_vi: "Sale Cuối Năm", title_en: "End of Year Sale", image: "/images/hinhanh4.png" },
];

const PromotionSection = () => {
    const { language } = useContext(LanguageContext); 

    const translations = {
        vi: {
            title: "Sự kiện & khuyến mãi",
            description:
                `Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.
                Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi
                một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản.
                Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng,
                nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960.`
        },
        en: {
            title: "Events & Promotions",
            description:
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the introduction of typesetting into the printing press,
                still essentially unchanged. It was popularized in the 1960s.`
        },
    };

    return (
        <section className="py-10 px-12 max-w-7xl mx-auto w-full">
            {/* Tiêu đề */}
            <h2 className="text-4xl font-bold text-yellow-400 mb-4 font-dancing-script">
                {translations[language].title}
            </h2>
            <p className="text-xs sm:text-base mt-3.5 text-white mb-6">
                {translations[language].description}
            </p>

            {/* Danh sách khuyến mãi */}
            <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
                {promotions.map((promo) => (
                    <div
                        key={promo.id}
                        className="relative rounded-xl overflow-hidden shadow-lg border transition bg-black hover:border-yellow-500 hover:shadow-yellow-500/50 hover:bg-yellow-500/10 group"
                        style={{ width: "220px", height: "210px" }}
                    >
                        {/* Tiêu đề */}
                        <div className="absolute top-2 left-0 right-0 text-center text-white font-semibold text-sm group-hover:text-yellow-500">
                            {language === "vi" ? promo.title_vi : promo.title_en}
                        </div>

                        {/* Hình ảnh */}
                        <div className="flex items-center justify-center w-full h-full">
                            <img
                                src={promo.image}
                                alt={language === "vi" ? promo.title_vi : promo.title_en}
                                className="w-[90%] h-[80%] object-cover rounded-xl mt-10 transition-all duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromotionSection;
