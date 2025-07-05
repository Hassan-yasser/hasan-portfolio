"use client";
import React from "react";
import { motion } from "framer-motion";

const FirstSectionHeader = () => {
  return (
    <>
      {" "}
      <div className="z-40 xl:mb-0  w-full">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-2xl md:text-7xl text-center font-bold px-2 z-10 mb-6 "
        >
          Transforming Ideas into Interactive Interfaces
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-sm md:text-xl lg:text-xl px-3 text-purple-200 text-center"
        >
          Specialized in building responsive, accessible, and scalable web apps
          using React, Next.js, TypeScript, and modern UI tools like Tailwind,
          Framer Motion, and MUI. I create user-first experiences that are fast,
          fluid, and beautiful.
        </motion.p>
      </div>{" "}
    </>
  );
};

export default FirstSectionHeader;
