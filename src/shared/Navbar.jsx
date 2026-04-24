// import React, { useState } from "react";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { RiNotification3Line } from "react-icons/ri";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Courses", href: "#" },
//     { name: "Dashboard", href: "/dashboard" },
//     { name: "About Us", href: "#" },
//   ];

//   return (
//     <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-2">
//               <span className="text-white font-bold text-xl">L</span>
//             </div>
//             <span className="text-2xl font-bold text-gray-900 tracking-tight">
//               Learn<span className="text-orange-500">Up</span>
//             </span>
//           </div>

//           {/* Desktop Nav Links */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-600 hover:text-emerald-500 font-medium transition-colors duration-300"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Right Side Icons & Login */}
//           <div className="hidden md:flex items-center space-x-5">
//             <button className="text-gray-500 hover:text-emerald-500 transition-colors">
//               <FiSearch size={22} />
//             </button>
//             <button className="text-gray-500 hover:text-emerald-500 transition-colors relative">
//               <RiNotification3Line size={22} />
//               <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
//             </button>

//             <Link to="/login" className="px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 active:scale-95">
//               Login
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-800 focus:outline-none p-2"
//             >
//               {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-white border-b`}
//       >
//         <div className="px-4 pt-2 pb-6 space-y-2">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 rounded-md"
//             >
//               {link.name}
//             </a>
//           ))}
//           <div className="pt-4 border-t border-gray-100">
//             <Link to="/login" className="w-full py-3 bg-emerald-500 text-white font-bold rounded-xl">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { BiBookOpen, BiMenu, BiX } from "react-icons/bi";

// const links = [
//   { label: "Home", href: "#home" },
//   { label: "Books", href: "#featured" },
//   { label: "Categories", href: "#categories" },
//   { label: "How it Works", href: "#how" },
// ];

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -30, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//         scrolled ? "glass-strong shadow-soft" : "bg-transparent"
//       }`}
//     >
//       <nav className="container flex items-center justify-between h-16 md:h-20">
//         <a href="#home" className="flex items-center gap-2 group">
//           <div className="relative w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elegant group-hover:scale-105 transition-transform duration-300">
//             <BiBookOpen
//               className="w-5 h-5 text-primary-foreground"
//               strokeWidth={2.5}
//             />
//           </div>
//           <span className="font-display text-2xl font-semibold tracking-tight">
//             Book<span className="text-gradient-primary">loop</span>
//           </span>
//         </a>

//         <div className="hidden md:flex items-center gap-1">
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors duration-300"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <div className="hidden md:flex items-center gap-3">
//           <button variant="ghost" className="rounded-full font-medium">
//             Login
//           </button>
//           <button className="rounded-full bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium px-5">
//             Sell a Book
//           </button>
//         </div>

//         <button
//           aria-label="Toggle menu"
//           className="md:hidden p-2 rounded-xl hover:bg-secondary transition"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <BiX className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
//         </button>
//       </nav>

//       {open && (
//         <div className="md:hidden glass-strong border-t border-border/50 px-6 py-4 flex flex-col gap-2 animate-fade-in">
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setOpen(false)}
//               className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-secondary transition"
//             >
//               {link.label}
//             </a>
//           ))}
//           <div className="flex gap-2 pt-2">
//             <button variant="ghost" className="flex-1 rounded-full">
//               Login
//             </button>
//             <button className="flex-1 rounded-full bg-gradient-primary text-primary-foreground">
//               Sell
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.header>
//   );
// };

// export default Navbar;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiBookOpen, BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router";

const links = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/Dashboard" },
  { label: "Categories", href: "#categories" },
  { label: "How it Works", href: "#how" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        scrolled
          ? "backdrop-blur-md bg-white/20  shadow-lg"
          : "bg-transparent"
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
          <Link to="/login" className="px-4 py-2 rounded-full gradient-bg text-white text-sm font-medium hover:bg-gray-100 transition active:scale-95">
            Login
          </Link>
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