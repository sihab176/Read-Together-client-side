import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { BiHeart, BiMapPin, BiChevronLeft, BiChevronRight } from "react-icons/bi";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";

const BookCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  // States
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState({});

  // Fetch Data using Axios
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        // Assuming your backend runs on localhost:5000 or relative path
        const response = await axios.get("http://localhost:3000/books"); 
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2d6a4f]"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 group">
      {/* Title/Header (Optional) */}
      <div className="mb-8 px-2">
        <h2 className="text-3xl font-bold text-gray-800">Featured Books</h2>
        <p className="text-gray-500">Discover your next favorite read</p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={books.length > 4} // Only loop if there are enough books
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onInit={(swiper) => {
          // Link custom buttons to swiper instance after init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#edede9]/50 transition-all duration-500 h-full flex flex-col"
            >
              {/* Image Section */}
              <div className="relative aspect-[5/6] overflow-hidden bg-gradient-to-br from-[#edede9] to-[#f5f5f0] p-6 flex items-center justify-center">
                <img
                  src={book.images?.[0]}
                  alt={book.title}
                  className="h-full bg-white p-4 w-auto object-contain drop-shadow-xl group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700"
                />
                <button
                  onClick={() => setLiked((p) => ({ ...p, [book._id]: !p[book._id] }))}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/70 backdrop-blur shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-10"
                >
                  <BiHeart
                    className={`w-5 h-5 transition-all ${liked[book._id] ? "fill-red-500 text-red-500 scale-110" : "text-gray-400"}`}
                  />
                </button>
              </div>

              {/* Details Section */}
              <div className="p-5 bg-white flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <BiMapPin className="w-3 h-3 text-yellow-600" />
                    {book.location?.area}, {book.location?.district}
                  </div>
                  <h3 className="font-semibold text-lg leading-tight truncate">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5">{book.author}</p>
                </div>

                <div className="flex items-end justify-between mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-green-800">
                      ৳{book.pricing?.basePrice}
                    </span>
                    {book.pricing?.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ৳{book.pricing?.originalPrice}
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/bookDetails/${book._id}`}
                    className="rounded-full bg-[#2d6a4f] hover:bg-[#1b4332] items-center flex text-white text-xs h-9 px-6 transition-colors"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Side Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-2"
      >
        <BiChevronLeft size={30} />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:right-2"
      >
        <BiChevronRight size={30} />
      </button>
    </div>
  );
};

export default BookCarousel;