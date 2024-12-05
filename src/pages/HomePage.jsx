import HeroSection from "../components/HeroSection";
import VCIntro from "../components/VCIntro";
import DirectorIntro from "../components/DirectorIntro";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Objectives from "../components/Objectives";
import Functions from "../components/Functions";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <VCIntro />
      <DirectorIntro />
      <Vision />
      <Mission />
      <Objectives />
      <Functions />
      <Contact />
    </div>
  );
};

export default HomePage;
