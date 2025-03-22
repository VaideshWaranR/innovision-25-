'use client'
import React from "react";
import HeroSection from "./Components/HeroSection";
import { AnimatedTooltipPreview } from "./Components/AnimatedTooltipPreview";
import Footer from "./Components/Footer";
import IT from "./Components/IT";
import { Rules } from "./Components/Rules";
import Events from "./Components/Events";
import Header from "./Components/Header";

const page = () => {
  const scrollToContent = () => {
    // You can specify the ID of the section you want to scroll to
    const contentElement = document.getElementById("content-section");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // If no specific ID is found, just scroll down a screen height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center scrollbar-hidden overflow-hidden">
      <Header />
      <HeroSection />
      <IT />
      <Events />
      <Rules />
      <Footer />

      {/* Scroll to Explore Indicator */}
      <div
        className="z-50 fixed bottom-5 right-2 flex flex-col items-center text-white cursor-pointer"
        onClick={scrollToContent}
      >
        <p className="uppercase text-[0.7rem] mb-2 font-light tracking-wider">
          scroll down
        </p>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
