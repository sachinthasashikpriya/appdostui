import React from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portpolio from "./components/Portpolio";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portpolio />
        <Careers />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
