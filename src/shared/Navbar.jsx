import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiBookOpen, BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const links = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/Dashboard" },
  { label: "Categories", href: "#categories" },
  { label: "How it Works", href: "#how" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const {user} = useAuth();
  console.log("user", user);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/20  shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition">
            <BiBookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-semibold">
            Book<span className="primary-text">loop</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <FaUserCircle size={34} className="text-green-700"/>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full gradient-bg text-white text-sm font-medium hover:bg-gray-100 transition active:scale-95"
            >
              Login
            </Link>
          )}
          {/* <button className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:scale-105 hover:shadow-lg transition">
            Sell a Book
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <BiX size={24} /> : <BiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 p-4 rounded-2xl backdrop-blur-lg bg-white/80 shadow-lg border border-white/20 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              {link.label}
            </a>
          ))}

          <div className="flex gap-2 pt-2">
            <button className="flex-1 py-2 rounded-full hover:bg-gray-100 transition">
              Login
            </button>
            {/* <button className="flex-1 py-2 rounded-full bg-indigo-600 text-white">
              Sell
            </button> */}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
