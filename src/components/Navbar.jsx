import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "portfolio",
      "careers",
      "blog",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // More balanced margins for better detection
      threshold: [0.1, 0.25], // Multiple thresholds for better accuracy
    };

    const observerCallback = (entries) => {
      // Sort entries by intersection ratio to get the most visible one
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries[0];
        const sectionId = mostVisible.target.id;
        if (sectionId && sections.includes(sectionId)) {
          setActiveSection(sectionId);
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Function to observe sections with retry mechanism
    const observeSections = () => {
      let observedCount = 0;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
          observedCount++;
          console.log(`Observing section: ${sectionId}`); // Debug log
        } else {
          console.warn(`Section not found: ${sectionId}`); // Debug log
        }
      });

      console.log(
        `Total sections observed: ${observedCount}/${sections.length}`
      ); // Debug log
    };

    // Longer timeout to ensure all components are fully rendered
    const timeoutId = setTimeout(observeSections, 500);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Handle manual navigation clicks
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    // Brief timeout to allow smooth scrolling before observer takes over
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "careers", label: "Careers", href: "#careers" },
    { id: "blog", label: "Blog", href: "#blog" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30 border-b border-white/20">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => handleNavClick("home")}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
            AD
          </div>
          <div>
            <div className="font-semibold">AppDost</div>
            <div className="text-xs text-gray-500">Complete IT Solution</div>
          </div>
        </a>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-white/30 backdrop-blur-sm text-primary font-semibold shadow-lg ring-1 ring-white/40 transform scale-105"
                  : "hover:text-primary hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            className="p-2 rounded-md bg-gray-100/80 backdrop-blur-sm"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
