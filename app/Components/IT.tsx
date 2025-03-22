"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
const IT = () => {
  return (
    <div className="h-60 relative w-[90%] p-2 overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <p className="text-center mt-2 text-neutral-300 relative z-20 lg:text-xl sm:text-[0.9rem] md:text-lg">
        We the{" "}
        <span className="font-bold">Department of Information Technology </span>
        are extremely honored to present to you the 11th series of Innovision-
        the flagship event of our department. Join in to showcase your skills by
        exhibiting your projects, to compete with young minds and grab exciting
        prizes. Hurry up!!! Register soon..
      </p>
    </div>
  );
};
export default IT;
