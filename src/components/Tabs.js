import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(tabs[0].label);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (tab) => {
    setActive(tab.label);
    setMenuOpen(false); // close menu on mobile after click

    // scroll smoothly to section
    const el = document.getElementById(tab.targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">


        {/* Logo: absolute on the left */}
        <div className="absolute left-4 flex-shrink-0">
          <img
            src="/logo.jpeg"
            alt="Udaan Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Desktop tabs: centered */}
        <div className="flex flex-1 justify-center space-x-6 md:flex hidden">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleClick(tab)}
              className={`px-3 py-2 font-medium ${
                active === tab.label
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button: absolute right */}
        <div className="absolute right-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleClick(tab)}
              className={`block w-full text-left px-4 py-2 font-medium ${
                active === tab.label
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
