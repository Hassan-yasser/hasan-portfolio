"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import React, { useEffect, useState } from "react";
import Bupples from "../background/Bupples";
import ProjectCards from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { allIngredients } from "@/data/Projects";
import { useRouter, useSearchParams } from "next/navigation";

const AllProjects = () => {
  const router = useRouter();
  const param = useSearchParams();

  const [activeProject, setActiveProject] = useState(() => {
    const found = allIngredients.find(
      (item) => item.label === param?.entries()?.next()?.value?.[0]
    );
    return found ? found.label : allIngredients[0].label;
  });
  useEffect(() => {
    setActiveProject(() => {
      const found = allIngredients.find(
        (item) => item.label === param?.entries()?.next()?.value?.[0]
      );
      return found ? found.label : allIngredients[0].label;
    });
  }, [param]);
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#2e2e3a] text-white px-6 py-12">
      <Bupples />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        className="!px-2 mb-12"
      >
        {allIngredients.map(({ icon, label }) => {
          const isActive = activeProject === label;

          return (
            <SwiperSlide key={label}>
              <motion.div
                whileHover={{ scale: 1.06 }}
                onClick={() => {
                  setActiveProject(label);
                  router.push(`/projects?${label}=${label}`);
                }}
                className={`cursor-pointer flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all
                  ${
                    isActive
                      ? "bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg border-white/20 scale-[1.05]"
                      : "hover:bg-white/10 border-transparent text-white/80"
                  }`}
              >
                <Image
                  src={icon}
                  alt={label}
                  height={40}
                  width={40}
                  loading="lazy"
                  className="object-contain size-[50px]"
                />
                <span className="text-sm font-medium text-center">
                  {label.split(" ")[0]}
                </span>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="grid md:grid-cols-2 gap-10">
        <AnimatePresence mode="wait">
          {allIngredients
            .filter((item) => item.label === activeProject)
            .map(({ descrption, icon, label }) => (
              <ProjectCards
                key={label}
                descrption={descrption}
                icon={icon}
                label={label}
              />
            ))}
        </AnimatePresence>
      </div>
      <motion.a
        download={"/Hasan Alhossiny CV.pdf"}
        href="/Hasan Alhossiny CV.pdf"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center mt-10 cursor-pointer block"
      >
        <button className="cursor-pointer px-8 w-full mb-14 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full text-lg font-semibold transition">
          Download CV
        </button>
      </motion.a>
    </div>
  );
};

export default AllProjects;
