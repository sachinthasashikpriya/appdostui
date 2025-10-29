import { motion } from "framer-motion";
import React from "react";

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "150+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "💬" },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
    },
    {
      icon: "🎯",
      title: "Quality",
      description:
        "We deliver pixel-perfect designs and robust code that stands the test of time.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their vision and bring it to life.",
    },
    {
      icon: "⚡",
      title: "Speed",
      description:
        "Fast delivery without compromising on quality is our commitment to every project.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Your Trusted Partner for
              <br /> Complete Digital Transformation{" "}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AppDost is your trusted partner for complete digital
              transformation. We are a dynamic, innovation-driven IT solutions
              provider specializing in turning visionary ideas into powerful,
              market-ready products. Our mission is to empower businesses with
              cutting-edge technology solutions that drive growth, enhance user
              experiences, and create lasting digital impact.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                Our Mission
              </h4>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that
                drive growth, enhance user experiences, and create lasting
                digital impact.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl"
              />

              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-sm font-bold">Award Winner</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl mb-1">🚀</div>
                <div className="text-sm font-bold">Fast Growth</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-4">What We Do</h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer comprehensive IT solutions tailored to meet your business
            needs. Our expertise spans across various technologies and
            industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UI/UX Design Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🎨
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                UI/UX Design Excellence
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating intuitive and engaging user experiences with modern
                design principles, user research, and pixel-perfect interfaces
                that convert visitors into customers.
              </p>
            </motion.div>

            {/* Custom Software Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                💻
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Custom Software Development
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building tailored software solutions that perfectly fit your
                business requirements, from enterprise applications to
                specialized tools and automation systems.
              </p>
            </motion.div>

            {/* Web Application Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🌐
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Web Application Development
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developing responsive, fast, and secure web applications using
                modern frameworks like React, Next.js, and Node.js for optimal
                performance and scalability.
              </p>
            </motion.div>

            {/* Mobile App Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                📱
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Mobile App Development
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating native and cross-platform mobile applications for iOS
                and Android with seamless user experience and robust
                functionality.
              </p>
            </motion.div>

            {/* Full-Stack Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Full-Stack Development
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                End-to-end development services covering frontend, backend,
                databases, and deployment to deliver complete, production-ready
                solutions.
              </p>
            </motion.div>

            {/* Digital Transformation Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Digital Transformation Consulting
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic guidance to modernize your business processes, adopt
                new technologies, and stay competitive in the digital-first
                economy.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose AppDost Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-4">
            Why Choose AppDost
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We stand out from the competition with our unique approach to
            delivering exceptional results. Here's what makes us the preferred
            choice for businesses worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proven Track Record */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                Proven Track Record
              </h4>
              <p className="text-gray-600 text-sm">
                500+ successful projects delivered with 99% client satisfaction
                rate
              </p>
            </motion.div>

            {/* 24/7 Dedicated Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                💬
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                24/7 Dedicated Support
              </h4>
              <p className="text-gray-600 text-sm">
                Round-the-clock technical support and maintenance for all your
                projects
              </p>
            </motion.div>

            {/* Cutting-Edge Technology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                Cutting-Edge Technology
              </h4>
              <p className="text-gray-600 text-sm">
                Latest frameworks and tools ensuring future-proof and scalable
                solutions
              </p>
            </motion.div>

            {/* Agile Development Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                Agile Development Process
              </h4>
              <p className="text-gray-600 text-sm">
                Fast iterations and transparent communication throughout the
                project lifecycle
              </p>
            </motion.div>

            {/* Cost-Effective Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                💰
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                Cost-Effective Solutions
              </h4>
              <p className="text-gray-600 text-sm">
                Maximum value for your investment with transparent pricing and
                no hidden costs
              </p>
            </motion.div>

            {/* Expert Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border border-indigo-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                👥
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                Expert Team
              </h4>
              <p className="text-gray-600 text-sm">
                Skilled developers and designers with 5+ years of industry
                experience
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Work Culture and Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-4">
            Our Work Culture & Values
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-4">
            At AppDost, we believe in creating an environment where innovation
            thrives, collaboration flourishes, and every team member can reach
            their full potential.
          </p>
          <p className="text-center text-lg font-medium text-gray-700 mb-12">
            At AppDost, we believe in:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation First */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Innovation First
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Encouraging creative problem-solving and out-of-the-box thinking
                to deliver breakthrough solutions that exceed expectations.
              </p>
            </motion.div>

            {/* Collaborative Environment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Collaborative Environment
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Cross-functional teamwork where diverse perspectives come
                together to create amazing products and foster mutual growth.
              </p>
            </motion.div>

            {/* Continuous Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                📚
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Continuous Learning
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Regular training sessions, workshops, and skill development
                programs to keep our team at the forefront of technology.
              </p>
            </motion.div>

            {/* Growth Mindset */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl border border-orange-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🌱
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Growth Mindset
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Diverse projects and exposure to new technologies that challenge
                our team to grow professionally and personally.
              </p>
            </motion.div>

            {/* Work-Life Balance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                ⚖️
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Work-Life Balance
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Flexible work arrangements and supportive policies that ensure
                our team maintains a healthy balance between work and personal
                life.
              </p>
            </motion.div>

            {/* Recognition & Rewards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl border border-rose-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Recognition & Rewards
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Celebrating achievements, recognizing contributions, and
                rewarding excellence to motivate and appreciate our talented
                team.
              </p>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
