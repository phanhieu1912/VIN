import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("vi");

  return (
    <header className="header-bg flex items-center justify-between py-3 px-10">
      <div className="flex items-center">
        <button
          className="flex items-center bg-gray-800 text-white px-3 py-1 rounded"
          onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
        >
          <img
            src={language === "vi" ? "/images/logomy.jpg" : "/images/logovietnam.png"}
            alt="flag"
            className="w-5 h-5 mr-2"
          />
          {language === "vi" ? "English" : "Tiếng Việt"}
        </button>
      </div>

      {/* Logo */}
      <div className="flex-3 flex items-center space-x-6 ml-4">
        {/* Logo */}
        <img src="/images/logoVin.png" alt="VinWonders Logo" className="h-8" />

        {/* Menu */}
        <nav>
          <ul className="flex items-center space-x-5 text-white text-sm">
            <li className="text-yellow-400 flex items-center">
              <span className="mr-1">→</span> Trang chủ
            </li>
            <li>Khu vực</li>
            <li>Menu</li>
            <li>Dịch vụ</li>
            <li>Liên hệ</li>
            <li>Bài viết & Sự kiện</li>
          </ul>
        </nav>
      </div>

      {/* Menu */}

    </header>
  );
};

export default Header;
