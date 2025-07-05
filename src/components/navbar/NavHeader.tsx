"use client";
import React from "react";
import { motion } from "framer-motion";

const NavHeader = () => {
  return (
    <>
      {" "}
      <nav>
        {" "}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="text-purple-600 font-bold text-xl mr-3 h-10 w-10 rounded-xl bg-gradient-to-r  from-gray-500 to-gray-100 flex items-center justify-center ">
            H
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Alhossiny
          </span>
        </motion.div>
      </nav>
    </>
  );
};

export default NavHeader;
