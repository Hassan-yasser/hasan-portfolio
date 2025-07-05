import React from "react";
import { motion } from "framer-motion";

const ContactSecctionUI = ({
  handleSubmit,
  formErrors,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formErrors: {
    email: string;
    name: string;
    message: string;
  };
}) => {
  return (
    <>
      {" "}
      <section
        id="Contact"
        className="min-h-screen flex items-center justify-center px-4 py-16 bg-transparent text-white"
      >
        <div className="w-full sm:max-w-4xl  bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-8 shadow-2xl relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-center mb-8 text-white"
          >
            📬 Get In Touch
          </motion.h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
              />
              {formErrors.name && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-red-400 text-sm mt-2"
                >
                  {formErrors.name}
                </motion.p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
              />
              {formErrors.email && (
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-red-400 text-sm mt-2"
                >
                  {formErrors.email}
                </motion.p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
              />
              {formErrors.message && (
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-red-400 text-sm mt-1"
                >
                  {formErrors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full cursor-pointer px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSecctionUI;
