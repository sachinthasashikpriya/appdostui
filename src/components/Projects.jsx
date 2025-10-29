import React from 'react';

const projects = [
  { title: "BEU Mate", tech: "React Native, Node.js", link: "#" },
  { title: "Devskillquest", tech: "Next.js, TypeScript", link: "#" },
  { title: "The Weddings Chapter", tech: "Laravel, PHP", link: "#" }
];

export default function Projects(){
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:scale-[1.02] transition">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{p.tech}</p>
              <a href={p.link} className="mt-4 inline-block text-sm text-primary">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
