"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/exp";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { getIconFor } from "@/lib/getIconFor";

const ExpCards = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="space-y-10"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp?.location}
            className="bg-gray-800/80 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm transition-all"
          >
            <div className="flex justify-between flex-col gap-3 sm:flex-row items-center mb-2">
              <h3 className="text-[10px] sm:text-xl font-semibold flex  items-center gap-2 text-purple-300">
                <FaBuilding /> {exp.position} @ {exp.company}
              </h3>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <FaCalendarAlt /> {exp.date}
              </span>
            </div>
            <p className="text-[9px] text-gray-400 italic mb-4 flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt /> {exp.location}
            </p>
            <ul className="list-none space-y-3 text-gray-200 pl-1">
              {exp.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[8px] sm:text-sm"
                >
                  {getIconFor(item)}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ExpCards;
