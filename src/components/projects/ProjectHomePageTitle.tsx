"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";

const ProjectHomePageTitle = () => {
  return (
    <>
      {" "}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center tracking-tight flex justify-center items-center gap-2"
      >
        <FaProjectDiagram className="text-purple-400 text-4xl" />
        Projects
      </motion.h2>
    </>
  );
};

export default ProjectHomePageTitle;
