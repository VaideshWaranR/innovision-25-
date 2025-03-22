"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load the Google Font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Jersey+10&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    setIsLoaded(true);

    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      if (difference < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center">
      <h1
        className="text-4xl md:text-6xl font-bold mb-8 text-white"
        style={{ fontFamily: "'Jersey 10', sans-serif" }}
      >
        Countdown to March 27, 2025
      </h1>

      {isLoaded && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <CountdownUnit value={days} label="Days" />
          <CountdownUnit value={hours} label="Hours" />
          <CountdownUnit value={minutes} label="Minutes" />
          <CountdownUnit value={seconds} label="Seconds" />
        </div>
      )}
    </div>
  );
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white bg-opacity-10 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-white border-opacity-20 w-full">
        <span
          className="text-4xl md:text-7xl font-bold text-white block"
          style={{ fontFamily: "'Jersey 10', sans-serif" }}
        >
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span
        className="text-lg md:text-xl mt-2 text-white"
        style={{ fontFamily: "'Jersey 10', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}
