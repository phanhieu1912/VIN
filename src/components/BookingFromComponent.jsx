import { useState } from "react";
import { FaClock, FaUtensils, FaStar, FaUsers, FaDollarSign } from "react-icons/fa";
import { Slider } from "@mui/material";

const BookingForm = () => {
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
    };

    return (
        <div className="min-h-screen text-white p-8 flex flex-col items-center">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl font-bold text-yellow-400 mb-4 font-dancing-script">
                    Đặt bàn ngay
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Thông tin nhà hàng */}
                    <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg text-white shadow-lg">
                        <div className="flex items-center space-x-2">
                            <FaClock className="text-yellow-400" />
                            <p><strong>Giờ mở cửa:</strong> 17:00 - 22:00</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                            <FaDollarSign className="text-yellow-400" />
                            <p><strong>Mức giá (mỗi khách)</strong></p>
                        </div>
                        <Slider
                            value={price}
                            onChange={(e, newValue) => setPrice(newValue)}
                            valueLabelDisplay="auto"
                            min={0}
                            max={100}
                            sx={{
                                color: "#ffcc00", // Màu vàng cho slider
                                '& .MuiSlider-thumb': {
                                    backgroundColor: "#ffcc00",
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: "#ffcc00",
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: "#ffffff50", // Màu xám nhạt
                                },
                            }}
                        />
                        <div className="flex items-center space-x-2 mt-2">
                            <FaUtensils className="text-yellow-400" />
                            <p><strong>Ẩm thực:</strong> Món Âu - Vị Á</p>
                        </div>
                        <div className="flex items-start space-x-2 mt-4">
                            <FaStar className="text-yellow-400 mt-1" />
                            <div>
                                <p><strong>Điểm nổi bật:</strong></p>
                                <ul className="list-disc pl-5">
                                    <li>Một căn biệt thự kiểu Ý tân cổ điển</li>
                                    <li>Ẩn mình trong một con hẻm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <FaUsers className="text-yellow-400" />
                            <p><strong>Thích hợp cho:</strong> Cặp đôi, Đối tác, Bạn bè</p>
                        </div>
                    </div>

                    {/* Form đặt bàn */}
                    <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg w-full shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-white">THÔNG TIN ĐẶT BÀN</h2>
                        <span className="my-4 block h-px w-full bg-black sm:my-6"></span>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Ngày đặt */}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-white text-right">Ngày đặt<span className="text-red-500">*</span></label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="col-span-3 w-full p-3 rounded bg-[#333333]  text-white focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>

                            {/* Giờ nhận bàn */}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-white text-right">Giờ nhận bàn<span className="text-red-500">*</span></label>
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="col-span-3 w-full p-3 rounded bg-[#333333]  text-white focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="">Chọn giờ</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                </select>
                            </div>

                            {/* Số lượng người */}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-white text-right">Số lượng người<span className="text-red-500">*</span></label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="col-span-3 w-full p-3 rounded bg-[#333333]  text-white focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="">Chọn</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5+">5+</option>
                                </select>
                            </div>

                            {/* Loại tiệc */}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-white text-right">Loại tiệc<span className="text-red-500">*</span></label>
                                <select
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className="col-span-3 w-full p-3 rounded bg-[#333333]  text-white focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="">Chọn</option>
                                    <option value="Hẹn hò">Hẹn hò</option>
                                    <option value="Tiệc gia đình">Tiệc gia đình</option>
                                    <option value="Họp mặt bạn bè">Họp mặt bạn bè</option>
                                </select>
                            </div>

                            {/* Nút GỬI */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="w-20 bg-yellow-500 p-3 rounded text-black font-bold hover:bg-yellow-600 transition duration-200"
                                >
                                    GỬI
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <img src="/images/logomy.jpg" alt="Restaurant" className="rounded-lg w-full" />
                    <img src="/images/logomy.jpg" alt="Restaurant" className="rounded-lg w-full" />
                    <img src="/images/logomy.jpg" alt="Restaurant" className="rounded-lg w-full" />
                    <img src="/images/logomy.jpg" alt="Restaurant" className="rounded-lg w-full" />
                </div>
            </div>
        </div >
    );
};

export default BookingForm;