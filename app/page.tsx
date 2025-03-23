'use client'
import React, { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { AnimatedTooltipPreview } from "./Components/AnimatedTooltipPreview";
import Footer from "./Components/Footer";
import IT from "./Components/IT";
import { Rules } from "./Components/Rules";
import Events from "./Components/Events";
import Header from "./Components/Header";

const page = () => {
  const scrollToContent = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const newScroll = window.scrollY + window.innerHeight; // Scroll down by 1/4th of screen height
  
    if (window.scrollY + window.innerHeight >= maxScroll) {
      // If already at the bottom, scroll back to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Otherwise, scroll down normally
      window.scrollTo({
        top: newScroll,
        behavior: "smooth",
      });
    }
  };
  
  
  return (
    <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center scrollbar-hidden overflow-hidden" id="content-section">
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
