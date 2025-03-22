"use client";

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const HeroSection = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date - example: May 15, 2025
  const targetDate = new Date("March 29, 2025").getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    // Update countdown immediately
    updateCountdown();

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
    <div className="relative font-jersey w-full min-h-screen lg:min-h-[90vh] bg-black overflow-hidden flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Spline Model Container - Full width on mobile, left side on desktop */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] order-2 lg:order-1">
            <Spline scene="https://prod.spline.design/YrjdCaszJ9zPSoSp/scene.splinecode" />
          </div>

          {/* Text Container - Full width on mobile, right side on desktop */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6">
              Innovision'25
            </h1>

            {/* Countdown Timer */}
            <div className="text-white mt-4 mb-8">
              <p className="text-5xl mb-2">Coming Soon</p>
              <div className="grid grid-cols-4 gap-4 mt-2">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-800 px-4 py-2 rounded-lg min-w-[70px]">
                    <span className="text-3xl">{countdown.days}</span>
                  </div>
                  <span className="text-sm mt-1">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-800 px-4 py-2 rounded-lg min-w-[70px]">
                    <span className="text-3xl">{countdown.hours}</span>
                  </div>
                  <span className="text-sm mt-1">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-800 px-4 py-2 rounded-lg min-w-[70px]">
                    <span className="text-3xl">{countdown.minutes}</span>
                  </div>
                  <span className="text-sm mt-1">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-800 px-4 py-2 rounded-lg min-w-[70px]">
                    <span className="text-3xl">{countdown.seconds}</span>
                  </div>
                  <span className="text-sm mt-1">Seconds</span>
                </div>
              </div>
            </div>

            {/* Optional: Add a CTA button */}
            <HoverBorderGradient
              onClick={() =>
                window.open("https://rajalakshmi.org/innovision25", "_blank")
              }
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-3xl cursor-pointer text-white py-2 px-6 rounded-full hover:bg-gray-200 hover:text-black"
            >
              Register
            </HoverBorderGradient>
          </div>
        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white cursor-pointer"
        onClick={scrollToContent}
      >
        <span className="text-sm mb-2 font-light tracking-wider">
          SCROLL TO EXPLORE
        </span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>

      {/* Black box at bottom right - keep it visible on all screen sizes */}
      <div className="bg-black h-[60px] w-[250px] absolute bottom-0 right-0 z-10"></div>

      {/* Animation for the scroll indicator */}
      <style jsx global>{`
        @keyframes scrollDown {
          0% {
            height: 0;
            opacity: 0;
            transform: translateY(0);
          }
          30% {
            height: 40%;
            opacity: 1;
          }
          60% {
            height: 80%;
            opacity: 1;
          }
          100% {
            height: 0;
            opacity: 0;
            transform: translateY(20px);
          }
        }
        .animate-scroll-down {
          animation: scrollDown 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
