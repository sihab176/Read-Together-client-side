import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { useNavigate } from "react-router";

const BookHistoryCard = ({ book }) => {
  const navigate = useNavigate();
  const d = new Date(book.viewedAt);
  const date = d.toLocaleDateString("en-BD", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const time = d.toLocaleTimeString("en-BD", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleNavigate = (id) => {
    navigate(`/bookDetails/${id}`);
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-100 flex gap-6 shadow-sm hover:shadow-md transition-all mb-4 group">
      {/* Book Cover */}
      <div
        className={`w-32 h-44  flex-shrink-0 flex border border-gray-200 items-center justify-center text-center p-3 overflow-hidden shadow-xl transition-transform group-hover:scale-[1.02] ${book.bgColor}`}
      >
        {book.image ? (
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-serif font-bold text-white leading-tight">
            {book.title}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              Recently Viewed
            </span>

            <span className="text-slate-400 text-xs">{book.genre}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            {book.title}
          </h2>
          <p className="text-sm text-slate-500 mb-2 font-medium">
            by {book.author}
          </p>
          <p className="text-sm text-slate-400 line-clamp-2 max-w-2xl">
            {book.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-emerald-900">
              ${book.price}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <FaClock size={14} /> Viewed {date} at {time}
            </span>
          </div>
          <div className="">
            <button
              onClick={() => handleNavigate(book.id)}
              className="bg-emerald-900 text-[11px] text-white px-5 py-2 rounded active:scale-95 active:bg-emerald-950 cursor-pointer font-bold hover:bg-emerald-950 transition-colors"
            >
              View Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHistoryCard;
