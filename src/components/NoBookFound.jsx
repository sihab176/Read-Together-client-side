import React from "react";
import { BiSad } from "react-icons/bi";
// We'll use LuBookX from Lucide Icons to match the 'closed book with X' style
import { LuBookX } from "react-icons/lu";

const NoBookFound = () => {
  return (
    <div className="flex items-center justify-center bg-white pt-12">
      {/* The main card container with large rounded corners and a soft shadow */}
      <div className="flex flex-col p-6 items-center justify-center w-full max-w-5xl  text-center bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-neutral-100">
        {/* The Icon Container with the new green gradient and a green shadow */}
        <div className="relative mb-12 flex items-center justify-center w-24 h-24 rounded-full gradient-bg shadow-[0_15px_30px_rgba(34,197,94,0.3)]">
          {/* The Book Icon */}
          <LuBookX className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>

        {/* The Heading with the emoji */}
        <h1 className="mb-4 text-5xl font-bold tracking-tighter text-neutral-900 flex items-center gap-3">
          No books found
          <span className="text-5xl text-green-700">
            <BiSad/>
          </span>
        </h1>

        {/* The Descriptive Text */}
        <p className="max-w-md mb-12 text-xl font-medium leading-normal text-neutral-500">
          We couldn't find anything matching your filters. Try loosening them
          up.
        </p>


      </div>
    </div>
  );
};

export default NoBookFound;
