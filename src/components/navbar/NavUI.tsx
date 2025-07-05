import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const NavUI = ({
  openContactForm,
  toggleOpen,
  open,
}: {
  openContactForm: () => void;
  toggleOpen: () => void;
  open: boolean;
}) => {
  return (
    <>
      {" "}
      <div className="lg:flex hidden space-x-8 items-center">
        {["Home", "About", "Projects", "Experience", "Contact"]?.map(
          (item: string, index: number) => {
            return (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                  delay: 0.7 + index * 0.2,
                }}
                key={item}
                className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group "
                href={`#${item}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 right-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300  "></span>
              </motion.a>
            );
          }
        )}
      </div>
      <div className="md:flex hidden space-x-4 items-center ">
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 "
          href="https://github.com/Hassan-yasser"
          target="_blank"
        >
          <FiGithub className="w-5 h-5" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 "
          href="https://www.linkedin.com/in/hasan-yaser-900998319/"
          target="_blank"
        >
          <FiLinkedin className="w-5 h-5" />
        </motion.a>
        <motion.a
          onClick={openContactForm}
          href="#Contact"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            type: "decay",
            stiffness: 100,
            damping: 15,
          }}
          animate={{ opacity: 1, scale: 1 }}
          className="ml-4 px-4 cursor-pointer py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:text-white transition-all duration-500"
        >
          Hire Me
        </motion.a>
      </div>
      <div className="md:hidden flex items-center">
        <motion.button
          whileTap={{ scale: 0.7 }}
          className="text-gray-300 cursor-pointer"
          onClick={toggleOpen}
        >
          {open ? <FiX className="size-6" /> : <FiMenu className="size-6" />}
        </motion.button>
      </div>
    </>
  );
};

export default NavUI;
