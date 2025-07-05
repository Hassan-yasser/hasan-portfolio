import React from "react";
import { FaCode, FaLaptopCode, FaRocket, FaTools } from "react-icons/fa";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard
          icon={<FaLaptopCode />}
          color="text-pink-400"
          title="UI/UX First Approach"
          desc="My designs always focus on user experience and interaction. I use tools like Figma and Framer to create smooth, animated interfaces."
        />
        <InfoCard
          icon={<FaCode />}
          color="text-green-400"
          title="Clean, Scalable Code"
          desc="I write modular and reusable code with a focus on performance and scalability using TypeScript, React, and Next.js."
        />
        <InfoCard
          icon={<FaTools />}
          color="text-yellow-300"
          title="Modern Tech Stack"
          desc="From Tailwind to Redux and Firebase, I use modern tools to build real-world production apps."
        />
        <InfoCard
          icon={<FaRocket />}
          color="text-red-400"
          title="Always Learning"
          desc="I constantly explore new tools, libraries, and frameworks to stay ahead of the curve in frontend development."
        />
      </div>
    </>
  );
};

export default InfoCards;
