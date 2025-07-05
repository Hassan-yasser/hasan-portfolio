"use client";
import React from "react";
import { motion } from "framer-motion";

const Bupples = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 3 }}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="absolute w-10 h-10 rounded-full  bg-violet-800 to-black/5 opacity-20 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Bupples;
