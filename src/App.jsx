import { useEffect } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  useEffect(() => {
    const y = sessionStorage.getItem("scrollPosition");
    if (y) {
      window.scrollTo({ top: parseInt(y), behavior: "instant" });
    }

    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <HomePage />;
};

export default App;
