"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { tools } from "@/data/tools";
import { motion } from "framer-motion";

export default function ToolsSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className="w-full -mt-16"
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: true,
        }}
        grabCursor={true}
        className=""
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
          1300: {
            slidesPerView: 8,
          },
        }}
      >
        {tools.map((tool) => (
          <SwiperSlide key={tool.name}>
            <div className="group flex flex-col cursor-pointer py-10  items-center justify-center min-w-[120px] transition-all duration-300">
              <div
                className="p-4 rounded-xl shadow-lg bg-gradient-to-br from-white/10 via-[#7c3aed]/10 to-white/10 
                 group-hover:scale-110 group-hover:shadow-[0_0_25px_#9333ea,_0_0_50px_#7c3aed] 
                 transition-all duration-500 ease-in-out"
              >
                <div className="transition-transform duration-300 group-hover:scale-125">
                  {tool.icon}
                </div>
              </div>

              <p
                className="text-white mt-2 text-sm transition-all duration-300 
                 group-hover:text-[#c084fc] group-hover:drop-shadow-[0_0_5px_#a855f7]"
              >
                {tool.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
