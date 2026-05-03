// components/HistorySidebar.jsx
import React, { useEffect, useState } from "react";
import {
  BiBarChart,
  BiBookOpen,
  BiPause,
  BiStar,
  BiTrash,
} from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { clearRecentBooks } from "../../utils/recentBooksStorage";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

const SidebarSection = ({ title, icon: Icon, children }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-6">
    <div className="flex items-center gap-2 mb-4">
      <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600">
        <Icon size={18} />
      </div>
      <h3 className="font-bold text-slate-800">{title}</h3>
    </div>
    {children}
  </div>
);

const HistorySidebar = ({ viewedBooks, setViewedBooks }) => {
  const [suggestedBook, setSuggestBook] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axiosInstance.get("/books?limit=3");
      setSuggestBook(response.data);
    };
    fetchBooks();
  }, []);
  // console.log("sucggested", suggestedBook);
  //TODO : HANDLE CLEAR HISTORY
  const handleClearHistory = () => {
    setViewedBooks([]);
    clearRecentBooks();
  };
  return (
    <div className="w-full lg:w-80 top-42 ">
      {/* Controls */}
      <SidebarSection title="History Controls " icon={IoSettingsOutline}>
        <div className="space-y-4 px-3 py-4">
          <button
            onClick={handleClearHistory}
            className="flex items-center gap-3 cursor-pointer text-sm font-medium text-rose-500 hover:opacity-80"
          >
            <BiTrash size={16} /> Clear All History
          </button>
          <button className="flex items-center gap-3 cursor-pointer text-sm font-medium text-slate-600 hover:text-slate-900">
            <BiPause size={20} /> Pause Tracking
          </button>
          <button className="flex items-center gap-3 cursor-pointer text-sm font-medium text-slate-600 hover:text-slate-900">
            <IoSettingsOutline size={16} /> Manage Settings
          </button>
        </div>
      </SidebarSection>

      {/* Quick Stats */}
      <SidebarSection title="Quick Stats" icon={BiBarChart}>
        <div className="grid grid-cols-2 gap-3 px-2 py-4">
          <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
            <div className="text-emerald-700 mb-1">
              <BiBookOpen size={16} />
            </div>
            <div className="text-2xl font-bold text-emerald-900">
              {viewedBooks.length}
            </div>
            <div className="text-[10px] font-bold text-emerald-700 uppercase">
              Books viewed
            </div>
          </div>
          <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
            <div className="text-emerald-700 mb-1">
              <BiStar size={16} />
            </div>
            <div className="text-base font-bold text-emerald-900">Fiction</div>
            <div className="text-[10px] font-bold text-emerald-700 uppercase">
              Top category
            </div>
          </div>
        </div>
      </SidebarSection>

      {/* Suggestions */}
      <SidebarSection title="Suggestions" icon={BiStar}>
        <div className="space-y-5">
          {suggestedBook?.map((book) => (
            <Link
              key={book._id}
              to={`/bookDetails/${book._id}`}
              className="flex gap-3 group cursor-pointer"
            >
              <div className="w-10 h-12  rounded shadow-sm mb-4 flex-shrink-0">
                <img
                  src={book?.images[0]}
                  alt={book?.title}
                  className="border p-1 border-gray-200"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                  {book?.title}
                </h4>
                <p className="text-[10px] text-slate-400">{book?.author}</p>
                <p className="text-xs font-bold text-emerald-900 mt-1">
                  {book?.pricing?.basePrice}
                </p>
              </div>
            </Link>
          ))}
          <button className="w-full text-center text-xs font-bold text-emerald-700 hover:underline pt-2">
            See more recommendations
          </button>
        </div>
      </SidebarSection>
    </div>
  );
};

export default HistorySidebar;
