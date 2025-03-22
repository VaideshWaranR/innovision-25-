import React from "react";
import HeroSection from "./Components/HeroSection";
import { AnimatedTooltipPreview } from "./Components/AnimatedTooltipPreview";
import Footer from "./Components/Footer";
import IT from "./Components/IT";
import { Rules } from "./Components/Rules";
import Events from "./Components/Events";
import Header from "./Components/Header";
const page = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <Header />
      <HeroSection />
      <IT />
      <Events />
      <Rules />
      <Footer />
    </div>
  );
};

export default page;
