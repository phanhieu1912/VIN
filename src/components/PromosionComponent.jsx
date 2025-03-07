import React from "react";

const promotions = [
    { id: 1, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
    { id: 2, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
    { id: 3, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
    { id: 4, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
    { id: 5, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
    { id: 6, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
    { id: 7, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
    { id: 8, title: "Khuyến Mãi Ngày Lễ", image: "/images/logomy.jpg" },
];

const PromotionSection = () => {
    return (
        <section className="py-10 px-12 max-w-7xl mx-auto w-full">
            {/* Tiêu đề */}
            <h2 className="font-flowers text-3xl sm:text-[3rem] text-yellow-500 sm:leading-[2.75rem]">
                Sự kiện & khuyến mãi
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
    Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.
    Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi
    
    một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản.
    Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng,
    nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960.
</p>

            {/* Danh sách khuyến mãi */}
            <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
                {promotions.map((promo, index) => (

                    <div
                        key={promo.id}
                        className={`relative rounded-xl overflow-hidden shadow-lg border transition bg-black`}
                        style={{ width: "220px", height: "210px" }} // Kích thước khung chính xác
                    >
                        {/* Tiêu đề */}
                        <div className="absolute top-2 left-0 right-0 text-center text-white font-semibold text-sm">
                            {promo.title}
                        </div>

                        {/* Hình ảnh */}
                        <div className="flex items-center justify-center w-full h-full">
                            <img
                                src={promo.image}
                                alt={promo.title}
                                className="w-[90%] h-[80%] object-cover rounded-xl mt-10"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromotionSection;
