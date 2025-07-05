"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiWifiOff } from "react-icons/bi";

const barVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    updateOnlineStatus(); // Set initial state

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          key="offline"
          variants={barVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-b-xl shadow-lg flex items-center gap-2"
        >
          <BiWifiOff className="w-5 h-5" />
          <span>No internet connection</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConnectionStatus;
