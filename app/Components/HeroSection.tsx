"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {motion} from "framer-motion";
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


  return (
    <div className="relative font-jersey w-full min-h-screen lg:min-h-[90vh] bg-black overflow-hidden flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Spline Model Container - Full width on mobile, left side on desktop */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative order-2 lg:order-1">
          <div className="h-[55px] w-[200px] bottom-1 right-0 bg-black absolute"></div>
            <Spline scene="https://prod.spline.design/YrjdCaszJ9zPSoSp/scene.splinecode" />
          </div>

          {/* Text Container - Full width on mobile, right side on desktop */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6">
              Innovision'25
            </h1>

            {/* Countdown Timer */}
            <div className="text-white mt-6 mb-10 text-center">
      <p className="text-lg font-mono tracking-widest opacity-80">
        Coming Soon
      </p>
      <div className="grid grid-cols-4 gap-4 mt-4 font-mono text-white/75">
        {(["days", "hours", "minutes", "seconds"] as const).map((unit, index) => (
          <motion.div
            key={unit}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl min-w-[80px] shadow-lg border border-white/20">
              <span className="text-4xl font-bold">{countdown[unit]}</span>
            </div>
            <span className="text-xs mt-2 uppercase tracking-wide opacity-80">
              {unit}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

            {/* Optional: Add a CTA button */}
            <InteractiveHoverButton
              onClick={() =>
                window.open("https://rajalakshmi.org/innovision25", "_blank")
              }
             className="font-mono"
           >
              Register
            </InteractiveHoverButton>
          </div>
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
