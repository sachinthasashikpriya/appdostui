import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "🌐",
      title: "Website",
      details: ["www.appdost.in"],
      link: "https://www.appdost.in",
    },
    {
      icon: "📧",
      title: "Email",
      details: ["contact@appdost.in", "hr@appdost.in"],
      link: "mailto:contact@appdost.in",
    },
    {
      icon: "📍",
      title: "Locations",
      details: ["HQ - Patna", "Motihari", "Banka"],
      link: null,
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 76350 75422", "+91 11 6929 0750"],
      link: "tel:+917635075422",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-200 to-purple-300 rounded-full blur-3xl opacity-20"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form and we’ll get back to you within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-10 text-gray-800">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-2 text-gray-800">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="mb-1">
                          {info.link && detailIndex === 0 ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                              target={info.title === "Website" ? "_blank" : undefined}
                              rel={info.title === "Website" ? "noopener noreferrer" : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            <span className="text-gray-600">{detail}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl border border-blue-200"
            >
              <h4 className="text-lg font-bold mb-3 text-gray-800">🚀 Ready to Start?</h4>
              <p className="text-gray-600 mb-4">
                Get a free consultation and project quote within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+917635075422"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:contact@appdost.in"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-400 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
                >
                  📧 Send Email
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-transformation">
                    Digital Transformation
                  </option>
                  <option value="consultation">Free Consultation</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  🚀
                </motion.span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 text-center">
                💡 We typically respond within 2–4 hours during business hours
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-3xl shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">
            🤝 Let's Build Something Amazing Together
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join 500+ satisfied clients who have transformed their businesses with AppDost
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              View Our Work
            </a>
            <a
              href="tel:+917635075422"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
