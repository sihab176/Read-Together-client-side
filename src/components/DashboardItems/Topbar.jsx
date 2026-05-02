import { BiBell, BiCommand, BiSearch } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between w-full mb-2 rounded-2xl  bg-gray-100 shadow-sm px-10 py-4 sticky top-0 z-10">
      {/* 1. Search Bar Section */}
      <div className="relative w-full max-w-md group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <BiSearch className="h-5 w-5 text-gray-400 group-focus-within:text-[#1E5128] transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search task"
          className="block w-full pl-12 pr-12 py-3 bg-white border border-gray-100 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E5128]/10 focus:border-[#1E5128] transition-all shadow-sm"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg">
            <BiCommand size={10} /> F
          </kbd>
        </div>
      </div>

      {/* 2. Actions & Profile Section */}
      <div className="flex items-center gap-4">
        {/* Icon Buttons */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-500 hover:bg-gray-50 transition-colors shadow-sm relative">
            <FaCommentDots size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
          <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-500 hover:bg-gray-50 transition-colors shadow-sm relative">
            <BiBell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 ml-2">
          <div className="text-right">
            <h4 className="text-sm font-bold text-gray-800 leading-tight">
              Totok Michael
            </h4>
            <p className="text-[11px] text-gray-400">tmichael20@mail.com</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <img
              src="https://i.pravatar.cc/150?u=totok"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Topbar;
