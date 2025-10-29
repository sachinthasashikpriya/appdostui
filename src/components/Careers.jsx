import React from "react";

const Careers = () => {
  return (
    <section id="careers" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Be part of an innovative team that's shaping the future of technology
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">We're Growing!</h3>
          <p className="text-gray-600 mb-6">
            Currently building our careers page. Stay tuned for exciting
            opportunities.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Contact Us for Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
