import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const translations = {
    vi: {
      home: "Trang chủ",
      region: "Khu vực",
      menu: "Menu",
      services: "Dịch vụ",
      contact: "Liên hệ",
      news: "Bài viết & Sự kiện",
      switch: "Tiếng Việt",
    },
    en: {
      home: "Home",
      region: "Region",
      menu: "Menu",
      services: "Services",
      contact: "Contact",
      news: "News & Events",
      switch: "English",
    },
  };

  return (
    <header className="header-bg flex items-center justify-between py-3 px-10">
      {/* Phần chọn ngôn ngữ */}
      <div className="flex items-center">
        <button
          className="flex items-center bg-gray-800 text-white px-3 py-1 rounded"
          onClick={toggleLanguage}
        >
          <img
            src={language === "vi" ? "/images/logovietnam.png" : "/images/logomy.jpg"}
            alt="flag"
            className="w-5 h-5 mr-2"
          />
          {translations[language].switch}
        </button>
      </div>

      {/* Phần logo và menu */}
      <div className="flex items-center justify-center gap-x-6">
        {/* Logo */}
        <img src="/images/logoVin.png" alt="VinWonders Logo" className="h-8" />

        {/* Menu */}
        <nav>
          <ul className="flex items-center space-x-5 text-white text-sm">
            {/* Giữ nguyên Trang chủ màu vàng và có mũi tên */}
            <li className="text-yellow-400 flex items-center">
              <span className="mr-1">→</span> {translations[language].home}
            </li>

            {/* Các mục khác có hiệu ứng hover */}
            {Object.keys(translations[language]).map((key, index) => {
              if (key === "home" || key === "switch") return null; // Bỏ qua Trang chủ và nút chuyển ngôn ngữ
              return (
                <li
                  key={index}
                  className="relative group cursor-pointer"
                >
                  <span className="text-white group-hover:text-yellow-400 flex items-center transition duration-200">
                    <span className="hidden group-hover:inline-block mr-1">→</span>
                    {translations[language][key]}
                  </span>
                  
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
