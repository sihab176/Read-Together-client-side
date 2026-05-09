
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { IoStarSharp } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router";


const BestPopularSection = () => {
  const [booksData, setBooksData] = useState([]);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get("/books?limit=8"); // ✅ only 4 বই
        setBooksData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, [axiosInstance]);
  // console.log(booksData)

  return (
    <div className="max-w-7xl mx-auto ">
      {/* ✅ GRID layout → no scrollbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        
        {booksData?.slice(0, 8).map((b, i) => (
          <div
            key={b._id || i}
            className="group rounded-3xl bg-card p-4 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="relative h-[200px] rounded-2xl overflow-hidden">
              
              <img
                src={b?.images?.[0] || "https://via.placeholder.com/200"}
                alt={b?.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

              {/* ✅ TOP LEFT BADGE */}
              <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 text-gray-800 shadow">
                🔥 Trending
              </span>

              {/* hover button */}
              <button
                onClick={() => navigate(`/bookDetails/${b._id}`)}
                className="absolute left-1/2 -translate-x-1/2 bottom-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black rounded-full px-4 py-2 text-[11px] whitespace-nowrap font-semibold flex items-center gap-2 shadow"
              >
                <BsEye /> Quick View
              </button>
            </div>

            {/* INFO */}
            <div className="pt-4">
              <h3 className="font-semibold">{b?.title}</h3>

              <p className="text-sm text-gray-500">
                {b?.author || "Unknown Author"}
              </p>

              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <IoStarSharp key={k} className="h-3.5 w-3.5" />
                  ))}
                </div>

                <span className="font-bold text-green-600">
                  ${b?.pricing?.basePrice || "0.00"}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BestPopularSection;