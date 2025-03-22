"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";
const Events = () => {
  return (
    <div className="bg-black">
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-8 sm:px-6 lg:px-8 max-w-7xl place-items-center">
        <Card
          title="POWEROID"
          ti="WOMEN SKILL DEVELOPMENT"
          dec="In 2023, women empowerment continues to be a global priority, with progress made in many areas such as education, healthcare, and political representation. However, there is still a long way to go in achieving true gender equality. Governments, businesses, and individuals must take active steps to break down systemic barriers and support women's advancement."
          icon={<AceternityIcon />}
          im='relaxed'
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // containerClassName="bg-emerald-900"
            containerClassName="bg-black"
          />
        </Card>
        <Card
          title="BASIRICH"
          ti="SMART SYSTEM ON FOOD, AGRICULTURE, WATER, EDUCATION, HEALTH CARE AND TRANSPORTATION"
          dec="Smart systems are revolutionizing the way we approach health, transport, and agriculture. In health, smart systems monitor patients remotely, streamline medical record keeping, and aid in personalized care. In transport, smart systems optimize traffic flow, reduce emissions, and increase the speed and reliability of transportation services"
          icon={<AceternityIcon />}
          im='smart'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="UTILEN"
          ti="ASSISTIVE TECHNOLOGIES FOR ELDERLY AND SPECIAL CHILDREN"
          dec="Assistive technologies help elderly and special needs children with various tasks, from mobility aids to communication devices, enabling them to live more independently. Examples include hearing aids, wheelchairs, adaptive switches, and speech synthesizers. These technologies improve quality of life and provide essential support for daily living"
          icon={<AceternityIcon />}
          im='old'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            // containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="EDIFEE"
          ti="INTELLIGENT TECHNOLOGY TOWARDS COMMUNITY HELPERS"
          dec="Intelligent technology can aid community helpers by automating tasks, improving communication and increasing efficiency, ultimately leading to better outcomes for those in need. This can be achieved through the use of AI, machine learning and other cutting-edge technologies"
          icon={<AceternityIcon />}
          im='future'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            // containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="OTHERS"
          ti="OPEN DOMAIN"
          dec="This domain serves as a platform for exploring diverse topics, from environmental sustainability and emerging technologies to social challenges and the future of work. Participants are encouraged to share unique perspectives, research, and visionary ideas, fostering knowledge exchange and thought-provoking discussions."
          icon={<AceternityIcon />}
          im='open-source'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
  ti,
  dec,
  im
}: {
  title: string;
  ti: string;
  dec: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  im:string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(true)}
      className="border border-white/[0.4] cursor-pointer group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-[90%] p-4 relative h-[28rem] overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 max-w-full overflow-hidden">
        <h1 className={`text-white text-center text-xl md:text-2xl font-bold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:hidden transition duration-200 w-full mx-auto flex items-center justify-center ${hovered ?'hidden':'opacity-1000'} flex flex-col gap-2`}>
          {title}
          <Image src={`/images/${im}.png`} alt='' width={100} height={100}/>
        </h1>
        <h2 className={`text-white text-base md:text-lg text-center hidden group-hover/canvas-card:block relative z-10  mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 line-clamp-2 ${hovered ?'opacity-100':''}`}>
          {ti}
        </h2>
        <div className="h-full overflow-y-auto">
          <p className={`text-white text-sm md:text-base opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-thin group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 overflow-y-auto max-h-56 pr-2 ${hovered ?'opacity-100':""}`}>
            {dec}
          </p>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 md:h-10 md:w-10 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="white"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Events;
