import { motion } from "framer-motion";
import React from "react";

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold leading-tight mb-4 text-gray-800">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Team
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Be part of an innovative team that's shaping the future of
            technology
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            We're Growing!
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Currently building our careers page. Stay tuned for exciting
            opportunities to join our dynamic team of innovators and creators.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Opportunities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
