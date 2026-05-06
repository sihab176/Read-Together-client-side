import React from "react";
// react-icons library theke Lu icons import kora hochche
import { LuSearch, LuChevronDown, LuLayoutGrid, LuList } from "react-icons/lu";

const AllBookTopBar = ({ search, setSearch, sort, setSort }) => {
  return (
    <>
      <nav>
        <h1 className="pb-4 px-4 text-4xl font-bold text-[#13724d]">
          Find your next obsession.
        </h1>
      </nav>
      <div className=" flex items-center justify-between px-4 py-2 mb-3 rounded-full bg-gray-100 border-b-2 border-[#e8e4f1] ">
        {/* 1. Search Bar Section */}
        <div className="relative flex-grow max-w-4xl mr-4">
          {/* Search icon - react-icons/lu theke neya */}
          <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search books by name, author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-full bg-white border border-[#e8e4f1] text-[#7d7494] focus:outline-none  focus:border-green-700 transition-all duration-150"
          />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* 2. Sort Dropdown */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-full bg-white border border-[#e8e4f1] text-[#7d7494] focus:outline-none  focus:border-green-700 transition-all duration-150"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          {/* 3. View Switcher - Green Palette implementation */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-[#e8e4f1]">
            {/* Active Grid View - Primary green gradient */}
            <button className="p-2 rounded-full bg-linear-to-r from-green-700 to-green-800 text-white shadow-md">
              <LuLayoutGrid className="h-4 w-4" />
            </button>

            {/* Inactive List View */}
            <button className="p-2 rounded-full text-gray-400 hover:text-green-600 transition-colors">
              <LuList className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBookTopBar;
