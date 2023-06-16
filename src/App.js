import "./App.css";
// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./Root.css";
import About from "./components/About";
import { Utilities } from "./components/Utilities";
import TheKong from "./components/TheKong";
import MintNft from "./components/MintNft";
import Hero from "./components/Hero";
import Parteners from "./components/Parteners";
import RoadMap from "./components/RoadMap";
import "aos/dist/aos.css"; 
import Team from "./components/Team";
import Faqs from "./components/Faqs";
import { useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration:3000,
    });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Utilities />
      <TheKong />
      <MintNft />
      <RoadMap />
      <Parteners />
      <Team />
      <Faqs />
    </>
  );
}

export default App;
