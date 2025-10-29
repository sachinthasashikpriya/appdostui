import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Insights & Tech Articles Section */}
        <div className="text-center mb-16">
          {/* Latest Updates Button */}
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-medium mb-6 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-sm">
            Latest Updates
          </button>

          <h2 className="text-4xl font-extrabold leading-tight mb-4 text-gray-800">
            Insights & Tech Articles
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay informed with our latest insights, tech trends, and industry
            expertise
          </p>
        </div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Article Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200">
            {/* Image Section with Hover Button */}
            <div className="relative h-48 bg-gradient-to-br from-purple-500 to-indigo-600 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-80">📝</div>
              </div>

              {/* Read Article Button - appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-100">
                  Read Article →
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Category and Reading Time */}
              <div className="flex items-center justify-between mb-3">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                  Design
                </span>
                <span className="text-gray-500 text-xs">12 min</span>
              </div>

              {/* Article Title */}
              <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                Modern UI/UX Design Principles for Better User Experience
              </h4>

              {/* Article Preview */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                Discover the latest design trends and principles that create
                engaging user interfaces. Learn how to implement modern design
                patterns...
              </p>

              {/* Author and Date */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  AP
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    AppDost Team
                  </p>
                  <p className="text-xs text-gray-500">Oct 12, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200">
            {/* Image Section with Hover Button */}
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-teal-600 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-80">💻</div>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-100">
                  Read Article →
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Development
                </span>
                <span className="text-gray-500 text-xs">8 min</span>
              </div>

              <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                Building Scalable React Applications with Modern Architecture
              </h4>

              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                Learn best practices for structuring large-scale React
                applications. Explore component patterns, state management, and
                performance optimization...
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  AP
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    AppDost Team
                  </p>
                  <p className="text-xs text-gray-500">Oct 10, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200">
            {/* Image Section with Hover Button */}
            <div className="relative h-48 bg-gradient-to-br from-green-500 to-emerald-600 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-80">🚀</div>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-100">
                  Read Article →
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  DevOps
                </span>
                <span className="text-gray-500 text-xs">15 min</span>
              </div>

              <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                Complete Guide to CI/CD Pipeline Implementation with Docker
              </h4>

              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                Master continuous integration and deployment with Docker
                containers. Set up automated testing, building, and deployment
                workflows...
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  AP
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    AppDost Team
                  </p>
                  <p className="text-xs text-gray-500">Oct 08, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
