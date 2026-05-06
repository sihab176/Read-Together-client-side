import React, { useEffect, useState } from "react";
import AllBookTopBar from "./AllBookTopBar";
import useAxios from "../../hooks/useAxios";
import BookCard from "../../components/LandingPageItems/BookCard";
import NoBookFound from "../../components/NoBookFound";

const AllBooks = () => {
  const [booksData, setBooksData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const limit = 8;
  const axiosInstance = useAxios();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axiosInstance.get(
        `/all-books?search=${search}&sort=${sort}&page=${page}&limit=${limit}`,
      );
      setBooksData(response.data.books);
    };
    fetchBooks();
  }, [search, sort, page, limit]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setPage(1); // reset page
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <section className="pt-28 max-w-7xl mx-auto ">
        <AllBookTopBar
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />
      </section>
      <section className="h-screen overflow-y-auto">
        {/* all books */}
      {!booksData.length && <NoBookFound />}
      <section className="md:p-10 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {booksData?.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
      </section>
      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 
          disabled:bg-gray-300 
          disabled:cursor-not-allowed
          bg-[#1E5128]
          text-white
           rounded"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-white border-3 border-green-700  rounded-full">
          {page}
        </span>
        <button
          onClick={() => setPage(page + 1)}
           disabled={booksData.length < limit}
          className="px-4 py-2 
          disabled:bg-gray-300 
          disabled:cursor-not-allowed
          bg-[#1E5128]
          text-white
           rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
