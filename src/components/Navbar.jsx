import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Improved intersection observer with better detection
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -50% 0px", // More balanced margins
      threshold: [0.1, 0.3, 0.5], // Multiple thresholds for better detection
    };

    const observerCallback = (entries) => {
      // Find all intersecting entries
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting
      );

      if (intersectingEntries.length > 0) {
        // Sort by intersection ratio and position in viewport
        const sortedEntries = intersectingEntries.sort((a, b) => {
          // First sort by intersection ratio (higher is better)
          const ratioComparison = b.intersectionRatio - a.intersectionRatio;
          if (Math.abs(ratioComparison) > 0.1) {
            return ratioComparison;
          }

          // If ratios are similar, prefer the one closer to viewport center
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          const viewportCenter = window.innerHeight / 2;

          const aDistance = Math.abs(
            aRect.top + aRect.height / 2 - viewportCenter
          );
          const bDistance = Math.abs(
            bRect.top + bRect.height / 2 - viewportCenter
          );

          return aDistance - bDistance;
        });

        const bestEntry = sortedEntries[0];
        const sectionId = bestEntry.target.id;

        if (sectionId && sections.includes(sectionId)) {
          console.log(
            `Section detected: ${sectionId}, ratio: ${bestEntry.intersectionRatio.toFixed(
              2
            )}`
          );
          setActiveSection(sectionId);
        }
      }
    };

    // Fallback scroll-based detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;

          if (scrollPosition >= elementTop - 100) {
            const newActiveSection = sections[i];
            if (newActiveSection !== activeSection) {
              console.log(
                `Scroll fallback: Setting active section to ${newActiveSection}`
              );
              setActiveSection(newActiveSection);
            }
            break;
          }
        }
      }
    };

    // Create and setup observer
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const observeSections = () => {
      let observedCount = 0;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
          observedCount++;
          console.log(`Observing section: ${sectionId}`);
        } else {
          console.warn(`Section not found: ${sectionId}`);
        }
      });

      console.log(
        `Total sections observed: ${observedCount}/${sections.length}`
      );
    };

    // Setup observers and scroll listener
    const timeoutId = setTimeout(() => {
      observeSections();
      // Add scroll listener as fallback
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]); // Add activeSection as dependency

  const handleNavClick = (sectionId) => {
    console.log("Navigation clicked:", sectionId);

    // Immediately set active section for instant feedback
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // Scroll to section with offset for sticky header
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Account for sticky header
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
    console.log("Mobile menu toggled:", !isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileButton = event.target.closest("[data-mobile-menu-button]");
      const mobileMenu = event.target.closest("[data-mobile-menu]");

      if (isMobileMenuOpen && !mobileButton && !mobileMenu) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

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
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
        <div className="container flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              AD
            </div>
            <div>
              <div className="font-semibold">AppDost</div>
              <div className="text-xs text-gray-500">Complete IT Solution</div>
            </div>
          </a>

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
                    ? "bg-white/30 backdrop-blur-sm text-blue-600 font-semibold shadow-lg ring-1 ring-white/40 transform scale-105"
                    : "hover:text-blue-600 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            data-mobile-menu-button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden relative z-50 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`absolute w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}

      <nav
        data-mobile-menu
        className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-white shadow-lg border-t transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 max-h-96 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
