import React from "react";

const Portpolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Our Development Process Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to deliver exceptional digital
            solutions
          </p>
        </div>

        {/* Process Cards */}
        <div className="space-y-8 mb-20">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Discovery & Planning
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We deep dive into your requirements, understand your business
                goals, analyze competitors, and create a comprehensive project
                roadmap with clear milestones.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Design & Prototype
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our design team creates intuitive wireframes, stunning UI
                mockups, and interactive prototypes that bring your vision to
                life before development begins.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Development & Testing
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Expert developers write clean, scalable code while our QA team
                performs rigorous testing to ensure flawless functionality
                across all devices and platforms.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  4
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Deployment & Support
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We handle the complete deployment process and provide ongoing
                maintenance, updates, and 24/7 technical support to keep your
                solution running smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest innovations and successful digital solutions
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Project 1 - BEU Mate */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-6xl">🎓</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                AI-Powered Educational Platform
              </h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-3">
                BEU Mate - Bihar Engineering
              </h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                An AI-powered study companion for B.Tech students offering
                personalized learning, career guidance, and placement prepara...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  React Native
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  AI/ML
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  📱 Play Store
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  🌐 Website
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - Devskillquest */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <div className="text-white text-6xl">💻</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Educational Platform
              </h3>
              <h4 className="text-lg font-semibold text-green-600 mb-3">
                Devskillquest
              </h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                An interactive learning platform designed for aspiring
                developers to master coding skills through hands-on projects,
                cod...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                  PostgreSQL
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  🌐 Website
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - The Weddings Chapter */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <div className="text-white text-6xl">💒</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Wedding Planning Portal
              </h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-3">
                The Weddings Chapter
              </h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                A premium wedding planning platform connecting couples with top
                vendors, venues, and services. Features vendor portfolio...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  PHP
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                  Laravel
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                  MySQL
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-1 text-pink-600 hover:text-pink-800 text-sm font-medium"
                >
                  🌐 Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mb-20">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>

        {/* Opensource & Innovation Projects Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Opensource & Innovation Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our open-source contributions and innovative research
            projects
          </p>
        </div>

        {/* Opensource Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Project 1 - DeepFake Detection */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              DeepFake Detection
            </h3>
            <p className="text-sm text-gray-600 mb-3 font-medium">
              AI/ML Summer Internship Project
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                AI/ML
              </span>
              <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                Jupyter
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Advanced deep learning model for detecting manipulated media using
              computer vision and neural networks. Summer internship research
              project.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 2 - NooBot */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
            <div className="text-4xl mb-4">🐍</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">NooBot</h3>
            <p className="text-sm text-gray-600 mb-3 font-medium">
              Intelligent Python Automation Bot
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                Python
              </span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                Automation
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Smart automation bot built with Python for task scheduling, data
              processing, and intelligent workflow automation.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 3 - EduTools */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">EduTools</h3>
            <p className="text-sm text-gray-600 mb-3 font-medium">
              Educational Web Platform
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                HTML/CSS
              </span>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                Education
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Collection of educational tools and utilities for students and
              teachers. Interactive learning resources and study aids.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 4 - DialogFlow Chatbot */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              DialogFlow Chatbot
            </h3>
            <p className="text-sm text-gray-600 mb-3 font-medium">
              Conversational AI Assistant
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs font-medium">
                DialogFlow
              </span>
              <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium">
                NLP
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Intelligent chatbot using Google's DialogFlow ES for natural
              language processing and automated customer support.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-orange-600 hover:text-orange-800 text-sm font-medium"
            >
              View on GitHub →
            </a>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-12 text-center text-white mb-20">
          <h3 className="text-3xl font-bold mb-4">
            Interested in working with us on your next project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's transform your ideas into innovative digital solutions that
            drive results
          </p>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project
          </button>
        </div>

        {/* Technologies We Master Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and
            innovative solutions
          </p>
        </div>

        {/* Technology Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {/* React */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">⚛️</div>
            <h4 className="text-lg font-semibold text-gray-800">React</h4>
          </div>

          {/* Node.js */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">🟢</div>
            <h4 className="text-lg font-semibold text-gray-800">Node.js</h4>
          </div>

          {/* Python */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">🐍</div>
            <h4 className="text-lg font-semibold text-gray-800">Python</h4>
          </div>

          {/* MongoDB */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">🍃</div>
            <h4 className="text-lg font-semibold text-gray-800">MongoDB</h4>
          </div>

          {/* AWS */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">☁️</div>
            <h4 className="text-lg font-semibold text-gray-800">AWS</h4>
          </div>

          {/* Docker */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">🐳</div>
            <h4 className="text-lg font-semibold text-gray-800">Docker</h4>
          </div>

          {/* Kotlin */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">📱</div>
            <h4 className="text-lg font-semibold text-gray-800">Kotlin</h4>
          </div>

          {/* TypeScript */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group">
            <div className="text-5xl mb-3 group-hover:animate-pulse">💙</div>
            <h4 className="text-lg font-semibold text-gray-800">TypeScript</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portpolio;
