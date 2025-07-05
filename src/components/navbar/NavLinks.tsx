import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const NavLinks = ({
  open,
  toggleOpen,
  openContactForm,
}: {
  openContactForm: () => void;
  toggleOpen: () => void;
  open: boolean;
}) => {
  return (
    <>
      {" "}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5 "
        >
          <nav className="flex flex-col space-y-3">
            {" "}
            {["Home", "About", "Projects", "Experience", "Contact"]?.map(
              (item: string, index: number) => {
                return (
                  <motion.div
                    onClick={toggleOpen}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 200,
                      delay: 0.7 + index * 0.2,
                    }}
                    key={item}
                    className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group "
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 right-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300  "></span>
                  </motion.div>
                );
              }
            )}
          </nav>
          <div className="pt-4  border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-5">
              <motion.a
                href="https://github.com/Hassan-yasser"
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                animate={{ opacity: 1, scale: 1 }}
                target="_blank"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                target="_blank"
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                href="https://www.linkedin.com/in/hasan-yaser-900998319/"
                animate={{ opacity: 1, scale: 1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 "
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
            <motion.a
              href="#Contact"
              onClick={openContactForm}
              className="mt-4 cursor-pointer block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold "
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default NavLinks;
