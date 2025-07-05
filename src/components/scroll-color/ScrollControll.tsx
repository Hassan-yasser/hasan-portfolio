"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";

const ScrollControll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* شريط التقدم فوق */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-violet-500 to-purple-700 origin-left z-[9999]"
      />
    </>
  );
};

export default ScrollControll;
