import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    icon: "📱",
    title: "Android App Development",
    description:
      "Custom Android applications built with the latest technologies to bring your ideas to life.",
    features: [
      "Native & Hybrid Apps",
      "Play Store Deployment",
      "Maintenance & Support",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Responsive and scalable web applications tailored to your business needs.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Progressive Web Apps",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🎨",
    title: "UI/UX Development",
    description:
      "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
    features: ["User Research", "Wireframing", "Brand Identity"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "💼",
    title: "CRM Software",
    description:
      "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
    features: [
      "Custom Development",
      "Integration Services",
      "Training & Support",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description:
      "Protect your business with robust security solutions and best practices.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
    gradient: "from-gray-700 to-gray-900",
  },
];

export default function Services() {
  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold leading-tight mb-4 text-gray-800">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            End-to-end IT solutions — custom software, UI/UX, cloud
            infrastructure and more. We deliver comprehensive technology
            services to transform your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group border border-gray-200 relative overflow-hidden"
            >
              {/* Blue border animation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-border animate-spin-slow"></div>
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                      ></div>
                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            🚀 Ready to Transform Your Business?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution
            that drives results. Get a free consultation and detailed project
            proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
