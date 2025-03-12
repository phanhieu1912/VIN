import React, { useState, useContext } from "react";
import { FaClock, FaUtensils, FaStar, FaUsers, FaDollarSign } from "react-icons/fa";
import { Slider } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { ImPriceTags } from "react-icons/im";
import { GiKnifeFork } from "react-icons/gi";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const branches = [
  { name: "LURNARIA CRUISE", location: "Thuyền", image: "/images/hinhanh1.png", price: [200000, 700000] },
  { name: "WHITE PIER", location: "Thanh Đa", image: "/images/hinhanh2.png", price: [300000, 900000] },
  { name: "VINTAGE VILLA", location: "Quận 10", image: "/images/hinhanh3.png", price: [400000, 1000000] },
  { name: "WINE CELLAR", location: "Phú Nhuận", image: "/images/order1.png", price: [500000, 1200000] },
  { name: "GARDEN IN ISLAND", location: "Quận 7", image: "/images/order2.png", price: [450000, 1300000] },
];

const steps = [
  { number: "1", label: "Chọn chi nhánh", active: true },
  { number: "2", label: "Chọn set menu", active: false },
  { number: "3", label: "Chọn dịch vụ", active: false },
  { number: "4", label: "Hoàn tất", active: false },
];

const Order = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    eventType: "",
    price: " ",
  });
  const [price, setPrice] = useState([0, 0]);
  const handleBranchSelect = (index) => {
    setSelectedBranch(index);
    setFormData((prev) => ({
      ...prev,
      price: branches[index].price, // Lấy giá từ chi nhánh được chọn
    }));
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);

    // Điều hướng sang trang thanh toán và truyền dữ liệu qua state
    navigate("/thanhtoan", { state: { bookingData: formData } });
  };
  function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
      <Tooltip
        open
        enterTouchDelay={0}
        placement={value >= 600000 ? "top" : "bottom"} // Điều kiện đổi vị trí
        title={`${value.toLocaleString("vi-VN")} VND`}
        arrow
      >
        {children}
      </Tooltip>
    );
  }
  return (
    <div className="min-h-screen bg-cover bg-center text-white">
      {/* Thanh tiến trình */}
      <div className="flex justify-center items-center py-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Ô chứa số bước */}
            <div
              className={`flex items-center justify-center w-10 h-9 rounded-md text-sm font-bold 
              ${step.active ? "bg-yellow-500 text-black" : "bg-gray-800 text-gray-400"}`}
            >
              {step.number}
            </div>

            {/* Ô chứa tiêu đề bước */}
            <div
              className={`w-40 px-4 py-2 rounded-md text-sm font-bold ml-2 text-center
              ${step.active ? "bg-yellow-500 text-black" : "bg-gray-800 text-gray-400"}`}
            >
              {step.label}
            </div>

            {/* Đường kết nối giữa các bước */}
            {index < steps.length - 1 && (
              <div className="w-10 h-[2px] bg-gray-600 mx-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Tiêu đề */}
      <div className="text-center py-4">
        <h2 className="text-4xl font-bold text-yellow-400 flex justify-center items-center gap-2 underline decoration-yellow-400">
          <span>📍 Cùng khám phá</span>
          <span className="text-[4rem] xs:text-[5.375rem]">5</span>
          <span>chi nhánh 📖</span>
        </h2>
      </div>

      {/* Danh sách chi nhánh */}
      <div className="flex justify-center mt-3">
        <div className="flex flex-col items-center max-w-4xl w-[40%] mx-auto space-y-4">
          {/* Hàng trên (3 hình) */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {branches.slice(0, 3).map((branch, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg overflow-hidden border 
            ${selectedBranch === index ? "border-2 border-yellow-500" : "border border-white"} 
            transition-all`}
                onClick={() => handleBranchSelect(index)}
              >
                <div className="py-2 bg-black/50">
                  <h3 className="text-white text-xs font-semibold uppercase text-center">{branch.name}</h3>
                  <p className="text-gray-400 text-xs text-center">{branch.location}</p>
                </div>
                <div className="overflow-hidden aspect-square">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className={`w-full h-full object-cover transition-all 
                ${selectedBranch === index ? "grayscale-0" : "grayscale"}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Hàng dưới (2 hình, căn giữa) */}
          <div className="grid grid-cols-2  gap-4 w-[70%]">
            {branches.slice(3, 5).map((branch, index) => (
              <div
                key={index + 3}
                className={`cursor-pointer rounded-lg overflow-hidden border 
            ${selectedBranch === index + 3 ? "border-2 border-yellow-500" : "border border-white"} 
            transition-all`}
                onClick={() => handleBranchSelect(index + 3)}
              >
                <div className="py-2 bg-black/50">
                  <h3 className="text-white text-xs font-semibold uppercase text-center">{branch.name}</h3>
                  <p className="text-gray-400 text-xs text-center">{branch.location}</p>
                </div>
                <div className="overflow-hidden aspect-square">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className={`w-full h-full object-cover transition-all 
                ${selectedBranch === index + 3 ? "grayscale-0" : "grayscale"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>







      {/* Hiển thị BookingForm khi click vào chi nhánh */}
      {selectedBranch !== null && (
        <div className="mt-10 flex flex-col items-center">
          {/* Tiêu đề chi nhánh */}
          <h2 className="text-3xl font-bold text-yellow-500">{branches[selectedBranch].name}</h2>
          <p className="text-gray-300">{branches[selectedBranch].location}</p>

          {/* Ảnh chi nhánh lớn */}
          <div className="w-full max-w-2xl mt-4">
            <img
              src={branches[selectedBranch].image}
              alt={branches[selectedBranch].name}
              className="w-full rounded-lg"
            />
          </div>

          {/* Thông tin đặt bàn */}
          <div className="min-h-screen text-white p-8 flex flex-col items-center">
            <div className="max-w-7xl w-full">
              <h1 className="text-4xl font-bold text-yellow-400 mb-6 font-flowers">
                {t("titleBooking")}
              </h1>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Thông tin nhà hàng */}
                <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg text-white shadow-lg">
                  <div className="flex items-center space-x-2">
                    <FaClock className="" />
                    <p><strong>{t("openHours")}</strong> 17:00 - 22:00</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-12 w-full">
                    {/* Icon và Tiêu đề */}
                    <div className="flex items-center space-x-2 min-w-max">
                      <ImPriceTags className="text-white" />
                      <p className="text-white font-bold">{t("priceRange")}</p>
                    </div>

                    {/* Thanh Slider */}
                    <Slider
                      value={branches[selectedBranch]?.price || [0, 1000000]}
                      min={100000}
                      max={1400000}
                      step={50000}
                      valueLabelDisplay="on"
                      slots={{
                        valueLabel: ValueLabelComponent, // Sử dụng component tùy chỉnh
                      }}
                      sx={{
                        "& .MuiSlider-thumb": {
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#ffcc00",
                        },
                        "& .MuiSlider-track": {
                          height: "4px",
                          backgroundColor: "#ffcc00",
                        },
                        "& .MuiSlider-rail": {
                          height: "4px",
                          backgroundColor: "#666",
                        },
                      }}
                    />

                  </div>
                  <div className="flex items-center space-x-2 mt-12">
                    <GiKnifeFork className="text-white" />
                    <p><strong>{t("cuisine")}:</strong> {t("nameCuisine")}</p>
                  </div>
                  <div className="flex items-start space-x-2 mt-12">
                    <FaStar className="" />
                    <div>
                      <p><strong>{t("highlights")}:</strong></p>
                      <ul className="list-disc pl-5">
                        <li>{t("title1")}</li>
                        <li>{t("title2")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-12">
                    <FaUsers className="" />
                    <p><strong>{t("suitableFor")}:</strong> {t("suitableOptions")}</p>
                  </div>
                </div>

                {/* Form đặt bàn */}
                <div className="bg-[#333333] bg-opacity-80 p-6 rounded-lg w-full shadow-lg">
                  <h2 className="text-100 font-semibold mb-4 text-white">
                    {t("infoTitle")}
                  </h2>
                  <span className="my-4 block h-px w-full bg-black sm:my-3"></span>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: "date", type: "date", value: formData.date },
                      { name: "time", type: "select", options: ["17:00", "18:00", "19:00"], value: formData.time },
                      { name: "guests", type: "select", options: ["1", "2", "3", "4", "5+"], value: formData.guests },
                      { name: "eventType", type: "select", options: t("eventOptions", { returnObjects: true }), value: formData.eventType },
                    ].map((field, index) => (
                      <div key={index} className="flex items-center gap-4">
                        {/* Đảm bảo label có chiều rộng cố định */}
                        <label className="text-white w-40 flex-shrink-0">
                          {t(field.name)} <span className="text-red-500">*</span>
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
                            <option value="">{t("select")}</option>
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
                        {t("send")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div >

        </div>
      )}
    </div>
  );
};

export default Order;
