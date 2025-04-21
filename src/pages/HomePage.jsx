import ScrollToTopButton from "../shared/ui/scroll-to-top-button/ScrollToTopButton";
import Footer from "../widgets/footer/Footer";
import Header from "../widgets/header/ui/Header";
import HeroSection from "../widgets/hero-section/ui/HeroSection";
import MainContent from "../widgets/main-content/ui/MainContent";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex-base overflow-hidden">
        <HeroSection />
        <MainContent />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default HomePage;
