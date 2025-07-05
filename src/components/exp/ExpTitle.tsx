"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const ExpTitle = () => {
  return (
    <>
      {" "}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-4xl font-bold mb-12 text-center tracking-tight"
      >
        <FaLaptopCode className="inline-block mr-2 text-purple-400" />
        Experience
      </motion.h2>
    </>
  );
};

export default ExpTitle;
