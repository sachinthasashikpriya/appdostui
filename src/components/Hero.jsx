import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-hero-pattern py-20">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          {/* Badge */}

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg font-semibold text-gray-600 mb-4 tracking-wide"
          >
            Complete IT solution provider since 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-5xl font-extrabold leading-tight"
          >
            Transform Your Ideas Into <br /> Digital Reality{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              digital reality
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-700 max-w-2xl"
          >
            Your trusted partner for comprehensive IT solutions. From mobile
            apps to enterprise software, we bring innovation and excellence to
            every project with our expert team of developers.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
              Explore Our Services
            </a>
            <a className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
              Get Free Consultation
            </a>
          </div>

          <div className="mt-6 flex gap-8 text-sm text-gray-600">
            <div>
              <strong className="text-black">100%</strong> Client Satisfaction
            </div>
            <div>
              <strong className="text-black">24/7</strong> Support
            </div>
            <div>
              <strong className="text-black">Fast</strong> Delivery
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-2xl p-6 shadow-2xl animate-float"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              alt="app preview"
              className="rounded-lg w-full object-cover"
            />
            <div className="mt-4">
              <div className="font-semibold">Featured Project — BEU Mate</div>
              <div className="text-sm text-gray-500">
                AI-powered educational app
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
