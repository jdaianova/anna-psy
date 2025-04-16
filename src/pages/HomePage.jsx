import Footer from "../widgets/footer/Footer";
import Header from "../widgets/header/Header";
import HeroSection from "../widgets/hero-section/HeroSection";
import MainContent from "../widgets/main-content/MainContent";



const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MainContent />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
