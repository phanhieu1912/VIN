import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaClock, FaStar, FaUsers } from "react-icons/fa";
import { Slider } from "@mui/material";
import { ImPriceTags } from "react-icons/im";
import { GiKnifeFork } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const BookingForm = () => {
    const { t } = useTranslation(); 
     const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        eventType: "",
    });
    const [price, setPrice] = useState([20, 80]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
        navigate("/order", );
    };

    return (
        <div className="min-h-screen text-white p-8 flex flex-col items-center">
            <div className="mx-auto w-[77%]">
                <h1 className="text-4xl font-bold text-yellow-400 mb-4 font-flowers">
                    {t("titleBooking")}
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Thông tin nhà hàng */}
                    <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg text-white shadow-lg">
                        <div className="flex items-center space-x-2">
                            <FaClock />
                            <p><strong>{t("openHours")}</strong> 17:00 - 22:00</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-12 w-full">
                            <div className="flex items-center space-x-2 min-w-max">
                                <ImPriceTags className="text-white" />
                                <p className="text-white font-bold">{t("priceRange")}</p>
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
                                    flex: 1,
                                    '& .MuiSlider-thumb': { backgroundColor: "#ffcc00" },
                                    '& .MuiSlider-track': { backgroundColor: "#ffcc00" },
                                    '& .MuiSlider-rail': { backgroundColor: "#ffffff50" },
                                }}
                            />
                        </div>

                        <div className="flex items-center space-x-2 mt-12">
                            <GiKnifeFork className="text-white" />
                            <p><strong>{t("cuisine")}:</strong> {t("nameCuisine")}</p>
                        </div>
                        <div className="flex items-start space-x-2 mt-12">
                            <FaStar />
                            <div>
                                <p><strong>{t("highlights")}:</strong></p>
                                <ul className="list-disc pl-5">
                                    <li>{t("title1")}</li>
                                    <li>{t("title2")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-12">
                            <FaUsers />
                            <p><strong>{t("suitableFor")}:</strong> {t("suitableOptions")}</p>
                        </div>
                    </div>

                    {/* Form đặt bàn */}
                    <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg w-full shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            {t("infoTitle")}
                        </h2>
                        <span className="my-4 block h-px w-full bg-black sm:my-6"></span>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {[ 
                                { name: "date", type: "date", value: formData.date },
                                { name: "time", type: "select", options: ["17:00", "18:00", "19:00"], value: formData.time },
                                { name: "guests", type: "select", options: ["1", "2", "3", "4", "5+"], value: formData.guests },
                                { name: "eventType", type: "select", options: t("eventOptions", { returnObjects: true }), value: formData.eventType },
                            ].map((field, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <label className="text-white w-40 flex-shrink-0">
                                        {t(field.name)} <span className="text-red-500">*</span>
                                    </label>

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
                                            <option value="">{t("select")}</option>
                                            {field.options.map((option, idx) => (
                                                <option key={idx} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                            ))}

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="w-20 bg-yellow-500 p-3 rounded text-black font-bold hover:bg-yellow-600 transition duration-200"
                                >
                                    {t("send")}
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
        </div>
    );
};

export default BookingForm;
