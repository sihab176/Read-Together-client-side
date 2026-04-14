import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiNotification3Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Mentors", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Learn<span className="text-orange-500">Up</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-emerald-500 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Icons & Login */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="text-gray-500 hover:text-emerald-500 transition-colors">
              <FiSearch size={22} />
            </button>
            <button className="text-gray-500 hover:text-emerald-500 transition-colors relative">
              <RiNotification3Line size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>

            <button className="px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 active:scale-95">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none p-2"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-white border-b`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <button className="w-full py-3 bg-emerald-500 text-white font-bold rounded-xl">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
