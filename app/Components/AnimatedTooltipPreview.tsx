"use client";
import React from "react";
import { AnimatedTooltip } from '../../components/ui/animated-tooltip'
const people = [
  {
    id: 1,
    name: "Vaideesh Waran",
    designation: "3rd Year IT-C",
    image:'/images/vaidesh.jpg'
        },
  {
    id: 2,
    name: "Harish Kanna",
    designation: "3rd Year IT-A",
    image:'/images/harish.jpg'
     },
  {
    id: 3,
    name: "Lakshmi Narasimhan",
    designation: "3rd Year IT-B",
    image:'/images/lakshmi.jpg'
     },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
