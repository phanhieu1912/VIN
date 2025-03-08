import { useContext, useState } from "react";
import { FaClock, FaUtensils, FaStar, FaUsers, FaDollarSign } from "react-icons/fa";
import { Slider } from "@mui/material";
import { ImPriceTags } from "react-icons/im";
import { GiKnifeFork } from "react-icons/gi";
import { LanguageContext } from "../context/LanguageContext";
const BookingForm = () => {
    const { language } = useContext(LanguageContext);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        eventType: "",
    });
    const [price, setPrice] = useState([20, 80]);
    const translations = {
        vi: {
            title: "Đặt bàn ngay",
            openHours: "Giờ mở cửa",
            priceRange: "Mức giá (mỗi khách)",
            cuisine: "Ẩm thực",
            nameCuisine: "Món Âu - Vị Á",
            highlights: "Điểm nổi bật",
            title1: "Một căn biệt thự kiểu Ý tân cổ điển",
            title2: "Ẩn mình trong một con hẻm",
            suitableFor: "Thích hợp cho",
            suitableOptions: `Hẹn hò, Tiệc gia đình, Họp mặt bạn bè`,
            infoTitle: "THÔNG TIN ĐẶT BÀN",
            date: "Ngày đặt",
            time: "Giờ nhận bàn",
            guests: "Số lượng người",
            eventType: "Loại tiệc",
            select: "Chọn",
            send: "GỬI",
            eventOptions: ["Hẹn hò", "Tiệc gia đình", "Họp mặt bạn bè"],
        },
        en: {
            title: "Book a Table Now",
            openHours: "Opening Hours",
            priceRange: "Price Range (per guest)",
            cuisine: "Cuisine",
            nameCuisine: "European Food - Asian Flavor",
            highlights: "Highlights",
            title1: "A Neoclassical Italian Villa",
            title2: "Hidden in an Alley",
            suitableFor: "Suitable for",
            suitableOptions: `Dating, Family Party, Friends Gathering`,
            infoTitle: "BOOKING INFORMATION",
            date: "Reservation Date",
            time: "Reservation Time",
            guests: "Number of Guests",
            eventType: "Event Type",
            select: "Select",
            send: "SEND",
            eventOptions: ["Date Night", "Family Gathering", "Friends Meetup"],
        },
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
    };

    return (
        <div className="min-h-screen text-white p-8 flex flex-col items-center">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl font-bold text-yellow-400 mb-4 font-flowers">
                    {translations[language].title}
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Thông tin nhà hàng */}
                    <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg text-white shadow-lg">
                        <div className="flex items-center space-x-2">
                            <FaClock className="" />
                            <p><strong>{translations[language].openHours}</strong> 17:00 - 22:00</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 w-full">
                            {/* Icon và Tiêu đề */}
                            <div className="flex items-center space-x-2 min-w-max">
                                <ImPriceTags className="text-white" />
                                <p className="text-white font-bold">{translations[language].priceRange}</p>
                            </div>

                            {/* Thanh Slider */}
                            <Slider
                                value={price}
                                onChange={(e, newValue) => setPrice(newValue)}
                                valueLabelDisplay="auto"
                                min={0}
                                max={100}
                                sx={{
                                    color: "#ffcc00",
                                    flex: 1, // Để slider tự mở rộng hết không gian còn lại
                                    '& .MuiSlider-thumb': { backgroundColor: "#ffcc00" },
                                    '& .MuiSlider-track': { backgroundColor: "#ffcc00" },
                                    '& .MuiSlider-rail': { backgroundColor: "#ffffff50" },
                                }}
                            />
                        </div>

                        <div className="flex items-center space-x-2 mt-2">
                            <GiKnifeFork className="text-white" />
                            <p><strong>{translations[language].cuisine}:</strong> {translations[language].nameCuisine}</p>
                        </div>
                        <div className="flex items-start space-x-2 mt-4">
                            <FaStar className="" />
                            <div>
                                <p><strong>{translations[language].highlights}:</strong></p>
                                <ul className="list-disc pl-5">
                                    <li>{translations[language].title1}</li>
                                    <li>{translations[language].title2}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <FaUsers className="" />
                            <p><strong>{translations[language].suitableFor}:</strong> {translations[language].suitableOptions}</p>
                        </div>
                    </div>

                    {/* Form đặt bàn */}
                    <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg w-full shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            {translations[language].infoTitle}
                        </h2>
                        <span className="my-4 block h-px w-full bg-black sm:my-6"></span>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Dòng nhập liệu */}
                            {[
                                { name: "date", type: "date", value: formData.date },
                                { name: "time", type: "select", options: ["17:00", "18:00", "19:00"], value: formData.time },
                                { name: "guests", type: "select", options: ["1", "2", "3", "4", "5+"], value: formData.guests },
                                { name: "eventType", type: "select", options: translations[language].eventOptions, value: formData.eventType },
                            ].map((field, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    {/* Đảm bảo label có chiều rộng cố định */}
                                    <label className="text-white w-40 flex-shrink-0">
                                        {translations[language][field.name]} <span className="text-red-500">*</span>
                                    </label>

                                    {/* Input hoặc Select */}
                                    {field.type === "date" ? (
                                        <input
                                            type="date"
                                            name={field.name}
                                            value={field.value}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded bg-[#333333] text-white focus:ring-2 focus:ring-yellow-500"
                                        />
                                    ) : (
                                        <select
                                            name={field.name}
                                            value={field.value}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded bg-[#333333] text-white focus:ring-2 focus:ring-yellow-500"
                                        >
                                            <option value="">{translations[language].select}</option>
                                            {field.options.map((option, idx) => (
                                                <option key={idx} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                            ))}

                            {/* Nút GỬI */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="w-20 bg-yellow-500 p-3 rounded text-black font-bold hover:bg-yellow-600 transition duration-200"
                                >
                                    {translations[language].send}
                                </button>
                            </div>
                        </form>
                    </div>


                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <img src="/images/hinhanh1.png" alt="Restaurant" className="rounded-lg w-full" />
                    <img src="/images/hinhanh2.png" alt="Restaurant" className="rounded-lg w-full" />
                    <img src="/images/hinhanh3.png" alt="Restaurant" className="rounded-lg w-full" />
                    <img src="/images/hinhanh1.png" alt="Restaurant" className="rounded-lg w-full" />
                </div>
            </div>
        </div >
    );
};

export default BookingForm;