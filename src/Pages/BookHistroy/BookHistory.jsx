import React, { useEffect, useState } from "react";
import HistoryHeader from "./HistoryHeader";
import BookHistoryCard from "./BookHistoryCard";
import HistorySidebar from "./HistorySidebar";
import useAuth from "../../hooks/useAuth";
import { BiBookOpen } from "react-icons/bi";
import { clearRecentBooks } from "../../utils/recentBooksStorage";

const BookHistory = () => {
  const key = "recentBooks_guest";
  const [allBooks, setAllBooks] = useState([]);
  const [viewedBooks, setViewedBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("recent");
  // console.log("sort type", sortType);
  // console.log(viewedBooks);
  //TODO : LOAD DATA FROM LOCAL STORAGE ||
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    setAllBooks(data);
    setViewedBooks(data);
  }, []);
  // TODO : FILTER AND SORT METHOD ||
  useEffect(() => {
    let filtered = allBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );
    let sorted;
    if (sortType === "recent") {
      sorted = [...filtered].sort(
        (a, b) => new Date(b.viewedAt) - new Date(a.viewedAt),
      );
    } else {
      sorted = [...filtered].sort(
        (a, b) => new Date(a.viewedAt) - new Date(b.viewedAt),
      );
    }
    // console.log(filtered.map((b) => b.viewedAt));
    setViewedBooks(sorted);
  }, [search, allBooks, sortType]);

  const handleClear = () => {
    clearRecentBooks();
    setAllBooks([]);
    setViewedBooks([]);
  };

  return (
    <div className="min-h-screen bg-[#f8faf9]  md:py-28">
      <div className="container mx-auto">
        <HistoryHeader
          search={search}
          setSearch={setSearch}
          handleClear={handleClear}
          sortType={sortType}
          setSortType={setSortType}
        />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main List */}
          <div className="flex-1 min-h-screen ">
            {!viewedBooks.length && (
              <div className="w-full flex items-center justify-center min-h-[400px] bg-gray-50 p-6">
                <div className="w-full max-w-4xl bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-3xl gradient-bg flex items-center justify-center shadow-2xl shadow-emerald-200/50 mb-8 transition-transform hover:scale-105 duration-300">
                    <BiBookOpen className="w-12 h-12 text-white" />
                  </div>

                  <div className="max-w-md">
                    <h1 className="text-3xl font-serif font-bold text-[#1a2e26] mb-3">
                      You haven't viewed any books yet
                    </h1>
                    <p className="text-slate-500 leading-relaxed mb-8">
                      Start exploring our library and the books you visit will
                      appear here for easy revisiting.
                    </p>
                  </div>

                  <button className="gradient-bg hover:bg-[#0a523f] text-white font-bold py-3 px-10 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-900/10">
                    Browse Books
                  </button>
                </div>
              </div>
            )}
            {viewedBooks?.map((book) => (
              <BookHistoryCard key={book.id} book={book} />
            ))}
          </div>

          {/* Sidebar */}
          <div className=" ">
            <HistorySidebar
              viewedBooks={viewedBooks}
              setViewedBooks={setViewedBooks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHistory;
