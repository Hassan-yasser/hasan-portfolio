"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProductGrap({
  emoji,
  i,
}: {
  emoji: string;
  background: string;
  hueA: number;
  hueB: number;
  i: number;
}) {
  const router = useRouter();
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 20,
    },
    onscreen: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
        delay: i * 0.2,
      },
    }),
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onClick={() =>
        router.push(
          i === 0
            ? "/projects?audit=Audit Station"
            : i === 1
            ? "/projects?textlogo=Audit Station Text Logo"
            : "/projects?logo=Calebrate"
        )
      }
      className="flex justify-center items-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      variants={cardVariants}
      custom={i}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full h-[300px] flex items-center justify-center px-20 rounded-3xl cursor-pointer transition-all duration-700
      bg-gradient-to-br from-white/5 via-white/10 to-white/5
      border border-white/10 backdrop-blur-xl
      hover:shadow-[0_0_50px_#a855f7aa] relative overflow-hidden`}
      >
        {/* تلميع خارجي متحرك بسيط */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-transparent blur-2xl opacity-20 pointer-events-none"></div>

        <motion.div
          animate={
            isHovered
              ? { rotateY: 15, rotateX: -5 }
              : { rotateY: 0, rotateX: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          className="w-full h-full rounded-2xl flex items-center justify-center text-[100px]"
        >
          <Image
            height={50}
            width={50}
            loading="lazy"
            src={emoji}
            alt="project"
            className="w-full h-auto object-contain max-h-[180px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
