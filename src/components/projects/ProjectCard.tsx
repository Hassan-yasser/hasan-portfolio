"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCards({
  descrption,
  icon,
  label,
}: {
  descrption: string;
  icon: string;
  label: string;
}) {
  return (
    <motion.div
      layout
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg space-y-4 col-span-full"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ rotateX: 30, rotateY: 10 }}
      >
        <Image
          src={icon}
          alt={label}
          height={1000}
          priority
          width={1000}
          className="w-full h-[200px] object-contain rounded-xl"
        />
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl capitalize sm:text-4xl mb-4 sm:mt-20 sm:mb-10 font-bold text-white">
          {label}
        </h3>
        <p className="text-sm  sm:text-lg text-white/80 hover:text-violet-300/50 duration-300 transition-all">
          {descrption}
        </p>
      </motion.div>
    </motion.div>
  );
}
