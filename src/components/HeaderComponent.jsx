import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <header className="header-bg flex items-center justify-between py-3 px-10">
      {/* 🔹 Nút chọn ngôn ngữ */}
      <div className="flex items-center">
        <button
          className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-lg transition-all hover:bg-yellow-500 hover:text-black"
          onClick={() => i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi")} // ✅ Đổi ngôn ngữ
        >
          <img
            src={i18n.language === "vi" ? "/images/logovietnam.png" : "/images/logomy.jpg"}
            alt="flag"
            className="w-5 h-5 mr-2"
          />
          {i18n.language === "vi" ? "Tiếng Việt" : "English"} {/* Hiển thị ngôn ngữ hiện tại */}
        </button>
      </div>

      {/* 🔹 Phần logo và menu */}
      <div className="flex items-center justify-center gap-x-6">
        {/* Logo */}
        <img
          src="/images/logoVin.png"
          alt="VinWonders Logo"
          className="h-8 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Menu */}
        <nav>
          <ul className="flex items-center space-x-5 text-white text-sm">
            {/* Trang chủ giữ nguyên màu vàng */}
            <li className="text-yellow-400 flex items-center">
              <span className="mr-1">→</span> {t("home")}
            </li>

            {/* Các mục khác có hiệu ứng hover và điều hướng */}
            {["region", "menu", "services", "contact", "news"].map((key, index) => {
              const paths = {
                region: "/order",       
                menu: "/menu",         
                services: "/services",  
                contact: "/contact",    
                news: "/news",          
              };

              return (
                <li
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => navigate(paths[key])} 
                >
                  <span className="text-white group-hover:text-yellow-400 flex items-center transition duration-200">
                    <span className="hidden group-hover:inline-block mr-1">→</span>
                    {t(key)}
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
