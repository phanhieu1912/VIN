// import logo from './logo.svg';
import background from "./assets/background.png";
import Header from "./components/HeaderComponent";
import HeroSection from "./components/HeroSectionComponent";
import PromotionSection from "./components/PromosionComponent";
import BookingForm from "./components/BookingFromComponent";
import NewsSlider from "./components/NewsSliderComponent";
import HeroSlider from "./components/ContactComponent";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <HeroSection/>
      <PromotionSection/>
      <BookingForm/>
      <NewsSlider/>
      <HeroSlider/>
    </div>
  );
}

export default App;
