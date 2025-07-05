"use client";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import TeckSkill from "./TeckSkill";
import InfoCards from "./InfoCards";

export default function AboutCard() {
  return (
    <motion.div
      id="About"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className="perspective-[1200px] group pt-32"
    >
      <div
        className="transition-transform animate-pulse  duration-500   cursor-grab duration-initial delay-100 transform-gpu
        max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10
        rounded-3xl  p-10 text-white space-y-8
        shadow-inner shadow-purple-500/10
        hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]"
        style={{ animationDuration: "20s" }}
      >
        <div className="flex items-center gap-4">
          <FaUserAlt className="text-violet-400 text-4xl" />
          <h2 className="text-3xl font-bold tracking-wide">About Me</h2>
        </div>

        {/* نبذة */}
        <p className="text-purple-200 text-lg leading-loose">
          Hello! Im{" "}
          <span className="text-violet-400 font-semibold">Hasan Alhossiny</span>
          , a passionate{" "}
          <span className="text-sky-400">Frontend Developer</span> focused on
          building beautiful, high-performing, and responsive websites using
          modern tools and best practices.
        </p>

        <InfoCards />

        <TeckSkill />
      </div>
    </motion.div>
  );
}
