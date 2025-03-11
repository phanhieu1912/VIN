import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const [bookingData, setBookingData] = useState(null);
  const location = useLocation();
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    note: "",
  });
  const [errors, setErrors] = useState({}); // Lưu lỗi

  const validatePhone = (phone) => {
    const phoneRegex = /^0\d{9}$/; // Bắt đầu bằng 0 + 9 số tiếp theo
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };


  useEffect(() => {
    // Lấy dữ liệu từ state khi điều hướng
    if (location.state?.bookingData) {
      setBookingData(location.state.bookingData);
    }
  }, [location.state]); // Chạy lại nếu state thay đổi

  console.log(bookingData); // Kiểm tra dữ liệu

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });

    // Xóa lỗi khi user nhập lại đúng
    if (name === "phone" && validatePhone(value)) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
    if (name === "email" && validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!validatePhone(contactInfo.phone)) {
      newErrors.phone = "Số điện thoại phải có 10 số và bắt đầu bằng 0!";
    }

    if (!validateEmail(contactInfo.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form hợp lệ, gửi dữ liệu...");
    // Thực hiện gửi form ở đây
  };

  return (
    <div className="min-h-screen flex flex-col items-center  text-white p-6">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Xác Nhận Thanh Toán</h1>

      {bookingData ? (
        <div className="w-full max-w-2xl bg-black bg-opacity-60 p-6 rounded-lg shadow-lg border border-yellow-500">
          {/* Thông tin đặt bàn */}
          <h2 className="text-lg font-semibold  border-b border-yellow-500 pb-2 mb-4">
            Chi Tiết Đặt Bàn
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong>📅 Ngày đặt:</strong> {bookingData.date}</p>
            <p><strong>⏰ Giờ nhận bàn:</strong> {bookingData.time}</p>
            <p><strong>👥 Số lượng người:</strong> {bookingData.guests}</p>
            <p><strong>🎉 Loại tiệc:</strong> {bookingData.eventType}</p>
          </div>
          <h2 className="text-lg font-semibold  border-b border-yellow-500 pb-2 mb-6 mt-6">
            Thanh Toán
          </h2>

          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="">💰 Mức giá bạn đã chọn:</strong>
              <span className="text-xl font-bold text-yellow-300 ml-2">
                {bookingData.price
                  .map(Number)
                  .map(price => price.toLocaleString("vi-VN"))
                  .join(" -> ")}đ
              </span>
            </p>
          </div>
          <div className="mt-4 p-4 border border-yellow-500 rounded-lg bg-black/30">
            <h3 className=" font-semibold">💰 Đặt cọc</h3>
            <p className="text-xl font-bold text-yellow-300">
              {(Math.max(...bookingData.price.map(Number)) * 0.1).toLocaleString("vi-VN")}đ
            </p>
          </div>


          {/* Chọn phương thức thanh toán */}
          <div className="mt-4">
            <h3 className=" font-semibold">Chọn hình thức thanh toán:</h3>
            <div className="mt-2 space-y-2 text-gray-300">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="paymentMethod" value="transfer" className="form-radio text-yellow-400" defaultChecked />
                <span>💳 Chuyển khoản</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="paymentMethod" value="momo" className="form-radio text-yellow-400" />
                <span>📱 Ví Momo, Thẻ ATM, Thẻ Visa/Master/JCB</span>
              </label>
            </div>
          </div>
          {/* Form Liên Hệ */}
          <h2 className="text-lg font-semibold  border-b border-yellow-500 pb-2 mt-4 mb-3">
            Thông Tin Liên Hệ
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Họ và Tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={contactInfo.fullName}
            onChange={handleChange}
            className="w-full px-3 p-1.5 h-10 rounded text-white bg-transparent border border-gray-600 focus:border-yellow-500 placeholder-gray-400"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            required
            value={contactInfo.phone}
            onChange={handleChange}
            className={`w-full px-3 p-1.5 h-10 rounded text-white bg-transparent border ${
              errors.phone ? "border-red-500" : "border-gray-600"
            } focus:border-yellow-500 placeholder-gray-400`}
            placeholder="Nhập số điện thoại"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            required
            value={contactInfo.email}
            onChange={handleChange}
            className={`w-full px-3 p-1.5 h-10 rounded text-white bg-transparent border ${
              errors.email ? "border-red-500" : "border-gray-600"
            } focus:border-yellow-500 placeholder-gray-400`}
            placeholder="Nhập email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Ghi chú</label>
          <textarea
            name="note"
            rows="2"
            value={contactInfo.note}
            onChange={handleChange}
            className="w-full px-3 p-1.5 rounded text-white bg-transparent border border-gray-600 focus:border-yellow-500 placeholder-gray-400"
            placeholder="Nhập ghi chú"
          ></textarea>
        </div>
      </div>

      {/* Nút Gửi */}
      <div className="text-center mt-3">
        <button
          type="submit"
          className="px-4 py-2 text-black py-1 text-xs rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500 shadow-md hover:opacity-80 transition-all duration-200"
        >
          Đặt bàn ngay
        </button>
      </div>
    </form>

        </div>
      ) : (
        <p className="text-gray-400">Không có thông tin đặt bàn.</p>
      )}
    </div>
  );
};

export default Profile;
