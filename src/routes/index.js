import OrderPage from "../pages/OrderPage/Order"; // Import trang Order
import HomePage from "../pages/HomePage/HomePage";
import ThanhToanPage from "../pages/ThanhToan/ThanhToan";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true
  },
  {
    path: "/order",  // ✅ Thêm route cho trang đặt bàn
    page: OrderPage,
    isShowHeader: true
  },
  {
    path: "/thanhtoan",  // ✅ Thêm route cho trang đặt bàn
    page: ThanhToanPage,
    isShowHeader: true
  },
  // ... Các route khác
];
