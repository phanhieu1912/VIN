// import logo from './logo.svg';
import background from "./assets/background.png";
import Header from "./components/HeaderComponent";
import HeroSection from "./components/HeroSectionComponent";
import PromotionSection from "./components/PromosionComponent";
import BookingForm from "./components/BookingFromComponent";
import NewsSlider from "./components/NewsSliderComponent";
import HeroSlider from "./components/ContactComponent";
import Sidebar from "./components/Sidebar";

function App() {
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
      {/* Sidebar - Cố định ở bên trái */}
      <Sidebar />

      {/* Nội dung chính */}
      <div className="flex-1 overflow-y-auto">
        <Header />
        <HeroSection />
        <PromotionSection />
        <BookingForm />
        <NewsSlider />
        <HeroSlider />
      </div>
    </div>
  );
}

export default App;
