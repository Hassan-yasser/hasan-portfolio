"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ViewAllButton = () => {
  const router = useRouter();
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center cursor-pointer mt-10"
      >
        <button
          onClick={() => router.push("/projects")}
          className="group relative cursor-pointer inline-flex items-center justify-center overflow-hidden px-8 py-3 font-semibold rounded-full transition bg-violet-600 hover:bg-violet-700 text-white"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-violet-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
          <span className="relative z-10">View All Projects</span>
        </button>
      </motion.div>
    </>
  );
};

export default ViewAllButton;
