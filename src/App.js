import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import "./translate/translate";
import background from "./assets/background.png";
import Header from "./components/HeaderComponent";
import Sidebar from "./components/Sidebar";
import DefaultComponent from "./components/DefaultComponent";

function AppLayout() {
  const location = useLocation(); // ✅ Lấy đường dẫn hiện tại
  const isHomePage = location.pathname === "/"; // ✅ Kiểm tra nếu là trang chủ

  return (
    <div
      className="flex min-h-screen w-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ✅ Chỉ hiển thị Sidebar nếu là trang Home */}
      {isHomePage && <Sidebar />}

      {/* Nội dung chính */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultComponent>
                  <route.page />
                </DefaultComponent>
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout /> {/* ✅ Bọc tất cả trong Router */}
    </Router>
  );
}

export default App;
