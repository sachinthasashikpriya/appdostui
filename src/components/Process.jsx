import React from 'react';

const steps = [
  { title: "Discovery & Planning", desc: "Requirement analysis, roadmap" },
  { title: "Design & Prototype", desc: "Wireframes, UI mockups" },
  { title: "Development & Testing", desc: "Agile sprints, QA" },
  { title: "Deployment & Support", desc: "Release & 24/7 maintenance" }
];

export default function Process(){
  return (
    <section className="py-16">
      <div className="container text-center">
        <h2 className="text-2xl font-bold">Our Development Process</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s,i)=>(
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="text-2xl font-bold mb-2">{i+1}</div>
              <div className="font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
