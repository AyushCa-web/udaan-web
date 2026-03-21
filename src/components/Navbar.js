import { useState, useEffect } from "react";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { label: "Home", targetId: "home" },
  { label: "Services", targetId: "services" },
  { label: "About Us", targetId: "about" },
  { label: "Testimonials", targetId: "testimonials" },
  { label: "Contact", targetId: "contact" },
];

export default function Navbar({ darkMode, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md"
        : "bg-white dark:bg-gray-900"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo("home")}>
          <Image
            src="/udaan-web/logo.jpeg"
            alt="Udaan Logo"
            width={120}
            height={56}
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.targetId)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === link.targetId
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo("schedule")}
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md"
          >
            Book Free Consult
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.targetId)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("schedule")}
            className="mt-2 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-sm"
          >
            Book Free Consult
          </button>
        </div>
      )}
    </nav>
  );
}
