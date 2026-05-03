import React from "react";
import { LuBookOpen } from "react-icons/lu"; 
import authorImage from "../../assets/authorImage.png";

const AuthorSection = () => {

  const authorImageUrl =
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800";

  
  const PulitzerIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <path
        d="M12 15L15 21L12 19L9 21L12 15Z"
        fill="#EAB308"
        stroke="#EAB308"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9"
        r="7"
        stroke="#EAB308"
        strokeWidth="2"
        fill="white"
      />
      <circle cx="12" cy="9" r="4" fill="#FDE68A" />
    </svg>
  );

  return (
    <div className="bg-white min-h-screen p-10 ">
      <div className="text-center mt-10">
        <h5 className="bg-gray-100 rounded-full px-4 py-1 text-sm inline-block text-green-600">
          Author Spotligh
        </h5>
        <h1 className="text-4xl font-semibold mb-8">Meet the storytellers</h1>
      </div>
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-gray-100  rounded-3xl gap-20 p-8 md:p-12 w-full flex flex-col md:flex-row items-center  ">
        {/* Author Image Wrapper */}
        <div className="relative group w-full md:w-1/2 max-w-[450px]">
          <div className="overflow-hidden rounded-[35px] shadow-2xl">
            <img
              src={authorImage}
              alt="Eleanor Hayes"
              className="w-full h-full object-cover aspect-4/5 transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Badge: Refers to the Pulitzer Finalist note in image_ef2ac0.jpg */}
          <div className="absolute -bottom-4 -right-2 bg-white rounded-2xl py-3 px-6 flex items-center shadow-xl border border-neutral-50">
            <PulitzerIcon />
            <span className="text-neutral-800 text-sm font-bold tracking-tight">
              Pulitzer Finalist
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-3">
            <span className="text-green-600 uppercase text-xs font-bold tracking-[0.2em]">
              Featured Author
            </span>
            <h1 className="text-5xl   text-[#1A1A1A] tracking-tight">
              Eleanor Hayes
            </h1>
          </div>

          <p className="text-neutral-500 text-lg  max-w-2xl">
            Eleanor weaves quiet, devastating literary fiction set in the
            Pacific Northwest. With four novels translated into 22 languages,
            her work explores memory, distance, and the small revolutions of
            everyday life.
          </p>

          {/* Book Tags */}
          <div className="flex flex-wrap gap-3">
            {["The Salt Hours", "Northwind", "Letters Home"].map((title) => (
              <div
                key={title}
                className="flex items-center gap-2 border border-neutral-100 bg-white px-12 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                <LuBookOpen className="text-green-600 text-xl" />
                <span className="text-neutral-700 font-semibold text-sm">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="gradient-bg text-white  px-10 py-2 rounded-full shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:opacity-90 transition-all active:scale-95">
              View all books by Eleanor
            </button>
            <button className="bg-white border border-neutral-100 text-neutral-800  px-10 py-2 rounded-full shadow-sm hover:bg-neutral-50 transition-all active:scale-95">
              Read interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
