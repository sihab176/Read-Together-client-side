import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import { BiLocationPlus } from "react-icons/bi";
import ReviewSection from "../../components/ReviewSection";
import BookCarousel from "../../components/BookCarousel";

const BookCover = ({ book, size = "large" }) => {
  const isLarge = size === "large";

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded shadow-2xl select-none transition-all ${
        isLarge ? "w-40 h-60 md:w-52 md:h-80" : "w-14 h-20"
      }`}
    >
      {/* 🔥 real image */}
      <img
        src={book.images?.[0]}
        alt={book.title}
        className="w-full h-full object-cover rounded border-16 border-white"
      />
    </div>
  );
};

export default function BookDetailsPage() {
  const [book, setBook] = useState(null);
  const axiosInstance = useAxios();
  const { id } = useParams();
  const navigete = useNavigate();
  console.log("id", id);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axiosInstance.get(`/books/${id}`);
        console.log("res", res); // id dynamic করলে আরো ভালো
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [id]);
  // console.log("book", book);
  if (!book) return <p className="text-center mt-10">Loading...</p>;

  const handleBuy = () => {
    // console.log("Buy now");
    navigete(`/checkout/${id}`);
  };

  return (
    <>
      {/* BOOK DETAILS SECTION */}
      <section className="min-h-screen bg-gray-50 font-serif flex items-center justify-center p-4  ">
        <div className="bg-white mt-20 shadow-xl w-full max-w-7xl mx-auto flex flex-col lg:flex-row overflow-hidden rounded-lg">
          {/* Left */}
          <div className="flex flex-col items-center justify-center bg-gray-100 px-6 py-10 lg:px-10 lg:py-12 lg:min-w-[280px]">
            <BookCover book={book} size="large" />
          </div>

          {/* Center */}
          <div className="flex-1 px-6 py-8 md:px-10 md:py-10 border-r border-gray-200">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-1">
              {book.title}
            </h1>

            <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">
              by {book.author}
            </p>

            {/* 🔥 description */}
            <p className="text-sm italic text-gray-600 mb-4 leading-relaxed border-l-2 border-green-600 pl-3">
              {book.bookDetails?.conditionDescription}
            </p>

            {/* 🔥 meta */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 text-xs mb-8 border-t border-b border-gray-100 py-4">
              <div>
                <span className="text-gray-400 font-semibold uppercase block">
                  Publisher
                </span>
                <span className="text-gray-700">
                  {book.bookDetails?.publisher}
                </span>
              </div>

              <div>
                <span className="text-gray-400 font-semibold uppercase block">
                  Pages
                </span>
                <span className="text-gray-700">{book.bookDetails?.pages}</span>
              </div>

              <div>
                <span className="text-gray-400 font-semibold uppercase block">
                  Edition
                </span>
                <span className="text-gray-700">{book.edition}</span>
              </div>

              <div>
                <span className="text-gray-400 font-semibold uppercase block">
                  Category
                </span>
                <span className="text-gray-700">{book.category}</span>
              </div>

              <div>
                <span className="text-gray-400 font-semibold uppercase block">
                  Level
                </span>
                <span className="text-gray-700">{book.level}</span>
              </div>

              <div>
                <span className="text-gray-400 font-semibold uppercase block">
                  Condition
                </span>
                <span className="text-gray-700">
                  {book.bookDetails?.condition}
                </span>
              </div>
            </div>

            {/* 🔥 price */}
            <div className="mb-6">
              <p className="text-gray-400 line-through text-sm">
                ৳{book.pricing?.originalPrice}
              </p>
              <p className="primary-text text-xl font-bold">
                ৳{book.pricing?.basePrice}
              </p>
            </div>

            {/* 🔥 location */}
            <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
              <span className="text-green-700">
                <BiLocationPlus />
              </span>{" "}
              {book.location?.area}, {book.location?.district},{" "}
              {book.location?.division}
            </p>

            {/* 🔥 stock */}
            <p className="text-sm text-green-600">
              In Stock: {book.inventory?.stock}
            </p>

            {/* 🔥 seller */}
            <div className="mt-6">
              <p className="text-xs text-gray-400 uppercase"> Seller</p>
              <p className="text-sm text-gray-700">{book.seller?.name}</p>
              {/* <p className="text-xs text-gray-500">{book.seller?.email}</p> */}
            </div>
            <button
              onClick={handleBuy}
              className="gradient-bg cursor-pointer active:scale-95 transition-transform text-white py-1 px-3 rounded w-full mt-4"
            >
              Buy Now
            </button>
          </div>

          {/* Right (image thumbnails) */}
          <div className="flex flex-row lg:flex-col gap-4 px-4 py-6 bg-gray-100 overflow-x-auto lg:overflow-x-hidden min-w-[90px] items-center border-t lg:border-t-0 border-gray-100">
            {book.images?.map((img, i) => (
              <div key={i} className="w-16 h-22">
                <img src={img} className="w-full h-full object-cover rounded border-6 border-white cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BOOK REVIEW SECTION */}
      <section>
        <ReviewSection />
      </section>
      {/* BOOK CAROUSEL SECTION */}
      <section>
        <BookCarousel />
      </section>
    </>
  );
}
