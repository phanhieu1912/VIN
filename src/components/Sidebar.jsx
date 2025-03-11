import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate(); 
    return (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 w-36 bg-transparent z-50 flex flex-col items-center">
            {/* Các nút đặt bàn */}
            <div className="space-y-2 w-full">
                <button className="w-32 text-black py-1 text-xs rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500 shadow-md hover:opacity-80 transition-all duration-200"
                onClick={() => navigate("/order")}>
                    Đặt bàn ngay
                </button>
                <button className="w-32 text-black py-1 text-xs rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500 shadow-md hover:opacity-80 transition-all duration-200">
                    Xác nhận đặt bàn
                </button>
                <button className="w-32 text-black py-1 text-xs rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500 shadow-md hover:opacity-80 transition-all duration-200">
                    Hotline liên hệ
                </button>
            </div>

            {/* Mạng xã hội */}
            <ul className="flex justify-center space-x-1 mt-3">
                <li>
                    <a href="https://www.facebook.com/MarsVenusRestaurant" target="_blank" className="hover:opacity-80">
                        <FaFacebook size={18} color="#3B5998" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@MarsVenusRestaurant" target="_blank" className="hover:opacity-80">
                        <FaYoutube size={18} color="#FF0000" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/marsvenusrestaurant" target="_blank" className="hover:opacity-80">
                        <FaInstagram size={18} color="#E4405F" />
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@nhahangmarsvenus" target="_blank" className="hover:opacity-80">
                        <FaTiktok size={18} color="gray" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
