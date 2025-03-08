import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { MdOutlinePlace } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
const ContactSection = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    vi: {
      contact: "Liên Hệ",
      address: "Địa chỉ",
      timeOpen: "Giờ mở cửa",
      booking: "Đặt bàn ngay",
      callMe: "Hoặc qua Facebook",
      highlights: "Phương thức thanh toán",

    },
    en: {
      contact: "Contact",
      address: "Address",
      timeOpen: "Opening Hours",
      booking: "Book a table",
      callMe: "Or via Facebook at",
      highlights: "Payment methods",

    },
  };
  return (
    <section id="contact" className="w-full relative mx-auto h-auto pt-6 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tiêu đề */}
        <div className="opacity-100 translate-y-0 lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500">
            {translations[language].contact}
          </h2>
        </div>
        <div className="opacity-100 translate-y-0 lg:text-left">
          <img
            src="" // Đường dẫn đến ảnh của bạn
            alt=""
            className="w-auto h-12 sm:h-16" // Điều chỉnh kích thước nếu cần
          />
        </div>




        {/* Nội dung chính */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Danh sách địa chỉ */}
          <div className="w-full space-y-6 lg:w-1/2">
            <div className="opacity-100 translate-y-0">
              <h3 className="text-lg font-medium text-yellow-500"> {translations[language].address}</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center space-x-2">
                  <MdOutlinePlace className="" />
                  <span className="text-white">VINPEARL Nha Trang</span>
                </li>
              </ul>

            </div>
            <div className="opacity-100 translate-y-0">
              <h3 className="text-lg font-medium text-yellow-500">Hotline</h3>
              <p className="flex items-center gap-2 text-sm xs:text-base mt-2">
              <LuPhoneCall className="" />
              <span className="text-white">1900 277 207</span>
              </p>
            </div>
            {/* Giờ mở cửa */}
            <div className="opacity-100 translate-y-0">
              <h3 className="text-lg font-medium text-yellow-500"> {translations[language].timeOpen}</h3>
              <p className="flex items-center gap-2 text-sm xs:text-base mt-2">
                🕒 17:00 – 22:00 hàng ngày
              </p>
            </div>
            {/* Đặt bàn ngay */}
            <div className="opacity-100 translate-y-0">
              <h3 className="text-lg font-medium text-yellow-500"> {translations[language].booking}</h3>
              <div className="mt-2">
                <a
                  href="tel:1900 000 000"
                  className="block w-fit rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition py-2 px-4"
                >
                  1900 000 000
                </a>
                <p className="mt-3 flex items-center gap-2 text-sm">
                  📩  {translations[language].callMe}:
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 underline"
                  >
                    https://www.facebook.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bản đồ Google Maps */}
          <div className="w-full lg:w-1/2 opacity-100 translate-y-0">
            <div className="aspect-[489/311] overflow-hidden rounded-xl relative border border-gray-800 w-full sm:w-3/4 lg:w-full">
              <iframe
                title="VinPearl - Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.467530111957!2d109.23681377487972!3d12.216590988033609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317060cba964e5cd%3A0xdb7ef9203a5d3a16!2sVinpearl%20Nha%20Trang!5e0!3m2!1svi!2s!4v1741325421577!5m2!1svi!2s"
                loading="lazy"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-16 text-xs font-thin text-center">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-20">
          <div className="bg-gray-900/40 p-3 rounded-md flex items-center gap-7 text-center">
            <span> {translations[language].highlights}</span>
            {/* <div className="flex gap-2">
              <img src="visa-icon.svg" alt="Visa" className="w-8 h-5" />
              <img src="mastercard-icon.svg" alt="Mastercard" className="w-8 h-5" />
              <img src="jcb-icon.svg" alt="JCB" className="w-8 h-5" />
            </div> */}
          </div>
          <p className="text-center">Copyright © 2025 - Mars Venus</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
