import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import useAxios from "../../hooks/useAxios";

const books = [
  {
    id: 1,
    title: "English 1st Paper",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 260,
    oldPrice: 270,
    location: "Mohammadpur, Dhaka",
    rating: 4,
    image: "https://i.ibb.co/8b1cQhK/book1.jpg",
    condition: "New",
  },
  {
    id: 2,
    title: "Higher Math",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 300,
    oldPrice: 350,
    location: "Dhanmondi, Dhaka",
    rating: 5,
    image: "https://i.ibb.co/8b1cQhK/book2.jpg",
    condition: "Used",
  },
  {
    id: 3,
    title: "Physics 1st Paper",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 220,
    oldPrice: 250,
    location: "Mirpur, Dhaka",
    rating: 4,
    image: "https://i.ibb.co/8b1cQhK/book3.jpg",
    condition: "Used",
  },
  {
    id: 4,
    title: "Chemistry",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 280,
    oldPrice: 300,
    location: "Uttara, Dhaka",
    rating: 4,
    image: "https://i.ibb.co/8b1cQhK/book4.jpg",
    condition: "New",
  },
  {
    id: 5,
    title: "Bangla 1st Paper",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 200,
    oldPrice: 230,
    location: "Farmgate, Dhaka",
    rating: 3,
    image: "https://i.ibb.co/8b1cQhK/book5.jpg",
    condition: "Used",
  },
  {
    id: 6,
    title: "Biology",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 240,
    oldPrice: 260,
    location: "Banani, Dhaka",
    rating: 5,
    image: "https://i.ibb.co/8b1cQhK/book6.jpg",
    condition: "New",
  },
  {
    id: 7,
    title: "ICT",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 180,
    oldPrice: 200,
    location: "Gulshan, Dhaka",
    rating: 4,
    image: "https://i.ibb.co/8b1cQhK/book7.jpg",
    condition: "Used",
  },
  {
    id: 8,
    title: "Accounting",
    category: "ACADEMIC • HSC",
    author: "Board Book",
    price: 260,
    oldPrice: 290,
    location: "Motijheel, Dhaka",
    rating: 4,
    image: "https://i.ibb.co/8b1cQhK/book8.jpg",
    condition: "New",
  },
];

const BookGrid = () => {
  const [booksData, setBooksData] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axiosInstance.get("/books");
      // console.log("response", response);
      setBooksData(response.data);
    };
    fetchBooks();
  }, []);

  // console.log("book", booksData);

  return (
    <div className=" min-h-screen p-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksData?.map((book) => (
          <BookCard key={book._id} book={book} />
          // <div key={book._id}>{book.title}</div>
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
