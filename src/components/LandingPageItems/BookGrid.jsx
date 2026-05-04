import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import useAxios from "../../hooks/useAxios";
import BookCarousel from "../BookCarousel";

const BookGrid = () => {
  const [booksData, setBooksData] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axiosInstance.get("/books?limit=8");
      setBooksData(response.data);
    };
    fetchBooks();
  }, []);

  // console.log("book", booksData);

  return (
    <div className=" min-h-screen md:p-10 p-4 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksData?.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
