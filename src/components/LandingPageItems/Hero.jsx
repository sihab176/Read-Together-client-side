import React from "react";
import { BsGoogle, BsGooglePlay } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Hero = () => {
  return (
    <section
      style={{
        background: "#f0f4f0",
        backgroundImage:
          "radial-gradient(circle, #c8d8c8 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
      className="relative w-full min-h-screen flex items-center bg-white overflow-hidden px-6 lg:px-20"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content Area */}
        <div className="z-10">
          <span className="inline-block px-4 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-6">
            eLearning Platform
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Smart Learning <br />
            Deeper & More <br />
            <span className="text-orange-500">-Amazing</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg leading-relaxed">
            Phosfluorescently deploy unique intellectual capital without
            enterprise-after bricks & clicks synergy. Enthusiastically
            revolutionize intuitive.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <button className="px-8 py-4 bg-emerald-400 hover:bg-emerald-500 text-white font-bold rounded-full transition-all flex items-center gap-2">
              Start Free Trial <span>↗</span>
            </button>

            <button className="flex items-center gap-3 font-bold text-gray-800 hover:text-orange-500 transition-colors">
              <span className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                ▶
              </span>
              How it Work
            </button>
          </div>
        </div>

        {/* Right Image/Graphic Area */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Floating Icons */}
          <div
            className="absolute top-20 left-10 p-1 bg-white shadow-xl rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "2s" }}
          >
            <FaYoutube className="text-red-600 text-2xl" />
          </div>

          <div
            className="absolute top-10 right-20 p-1 bg-white shadow-lg rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3s" }}
          >
            <FcGoogle className="text-2xl" />
          </div>

          {/* Main Student Image */}
          <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(/src/assets/background.png)` }}
          >
            {/* Note: Replace this placeholder with your actual image path */}
            <img
              src="/src/assets/hero.png"
              alt="Student"
              className="h-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
