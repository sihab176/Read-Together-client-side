// import { useEffect, useState } from "react";
// import { BsEye } from "react-icons/bs";
// import { FaLaptopMedical } from "react-icons/fa";
// import { IoStarSharp } from "react-icons/io5";
// import useAxios from "../../hooks/useAxios";

// const books = [
//   { title: "The Midnight Library", author: "Matt Haig", price: "$18.99", badge: "🔥 Trending", grad: "from-violet-500 to-fuchsia-500" },
//   { title: "Atomic Habits", author: "James Clear", price: "$22.50", badge: "Best Seller", grad: "from-amber-500 to-orange-600" },
//   { title: "Project Hail Mary", author: "Andy Weir", price: "$24.00", badge: "🔥 Trending", grad: "from-sky-500 to-indigo-600" },
//   { title: "Klara and the Sun", author: "Kazuo Ishiguro", price: "$19.99", badge: "Editor's Pick", grad: "from-emerald-500 to-teal-600" },
//   { title: "Tomorrow x3", author: "Gabrielle Zevin", price: "$21.00", badge: "Best Seller", grad: "from-pink-500 to-rose-600" },
//   { title: "Lessons in Chemistry", author: "Bonnie Garmus", price: "$20.50", badge: "🔥 Trending", grad: "from-cyan-500 to-blue-600" },
//   { title: "Fourth Wing", author: "Rebecca Yarros", price: "$26.00", badge: "Best Seller", grad: "from-red-500 to-purple-600" },
// ];

// const TrendingBooks = () => {
//       const [booksData, setBooksData] = useState([]);
//       const axiosInstance = useAxios();
//       useEffect(() => {
//         const fetchBooks = async () => {
//           const response = await axiosInstance.get("/books?limit=8");
//           setBooksData(response.data);
//         };
//         fetchBooks();
//       }, []);
// console.log(booksData)

//   return (
//     <section className="relative py-24 overflow-hidden max-w-7xl mx-auto">
//       <div className="absolute inset-0 -z-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--brand)/0.15),transparent_50%),radial-gradient(circle_at_80%_60%,hsl(var(--brand-2)/0.15),transparent_50%)]" />
//       <div className="container relative">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
//           <div>
//             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
//               <FaLaptopMedical className="h-4 w-4" /> What's hot right now
//             </span>
//             <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Trending & Popular Books</h2>
//             <p className="mt-3 text-muted-foreground max-w-xl">Discover the titles everyone's talking about this week.</p>
//           </div>
//           <button className="gradient-bg px-3 py-2">view All</button>
//         </div>

//         <div className="relative -mx-4 px-4">
//           <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none">
//             {booksData.map((b, i) => (
//               <div
//                 key={i}
//                 className="group relative shrink-0 w-[240px] snap-start rounded-3xl bg-card p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
//                 style={{ boxShadow: "var(--shadow-card)" }}
//               >
//                 <div className={`relative aspect-[3/4] rounded-2xl bg-gray-200 overflow-hidden flex items-end p-4`}>
//                   <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-foreground backdrop-blur">
//                     Trending
//                   </span>
//                         <img src={b.images[0]} alt="" />

//                   <div className="text-white">
//                     <div className="text-xs uppercase tracking-widest opacity-80">Bestseller</div>
//                     <div className="text-lg font-bold leading-tight mt-1">{b.title}</div>
//                   </div>
//                   <button className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-foreground rounded-full py-2 text-sm font-semibold flex items-center justify-center gap-2">
//                     <BsEye className="h-4 w-4" /> Quick View
//                   </button>
//                 </div>
//                 <div className="pt-4 px-1">
//                   <h3 className="font-semibold leading-tight">{b.title}</h3>
//                   <p className="text-sm text-muted-foreground">{b.author}</p>
//                   <div className="flex items-center justify-between mt-3">
//                     <div className="flex items-center gap-1 text-amber-500">
//                       {Array.from({ length: 5 }).map((_, k) => <IoStarSharp key={k} className="h-3.5 w-3.5 fill-current" />)}
//                     </div>
//                     <span className="font-bold text-brand">{b.price}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingBooks;

import { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaLaptopMedical } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router";

const TrendingBooks = () => {
  const [booksData, setBooksData] = useState([]);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get(`/all-books?sort=1&limit=5`);
        console.log({ response });
        setBooksData(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [axiosInstance]); // ✅ dependency add করা হয়েছে
  console.log("book data", booksData);
  return (
    <section className="relative py-24 overflow-hidden max-w-7xl mx-auto">
      <div className="absolute inset-0 -z-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--brand)/0.15),transparent_50%),radial-gradient(circle_at_80%_60%,hsl(var(--brand-2)/0.15),transparent_50%)]" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
              <FaLaptopMedical className="h-4 w-4" /> What's hot right now
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Trending & Popular Books
            </h2>

            <p className="mt-3 text-muted-foreground max-w-xl">
              Discover the titles everyone's talking about this week.
            </p>
          </div>

          <button className="bg-gray-200 px-3 py-1 text-sm rounded-full">
            View All
          </button>
        </div>

        <div className="relative -mx-4 px-4">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none">
            {booksData?.map((b, i) => (
              <div
                key={b._id || i} // ✅ better key
                className="group relative shrink-0 w-[240px] snap-start rounded-3xl bg-card p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[3/4] rounded-2xl bg-gray-200 overflow-hidden flex items-end p-4">
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-foreground backdrop-blur">
                    Trending
                  </span>

                  {/* ✅ image safe access */}
                  <img
                    src={b?.images?.[0] || "https://via.placeholder.com/200"}
                    alt={b?.title || "book"}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="relative  text-white">
                    <div className="text-xs uppercase tracking-widest opacity-80">
                      Bestseller
                    </div>
                    <div className="text-lg font-bold text-green-700 leading-tight mt-1">
                      {b?.title}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/bookDetails/${b._id}`)}
                    className="absolute active:scale-95 cursor-pointer inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-foreground rounded-full py-2 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <BsEye className="h-4 w-4" /> Quick View
                  </button>
                </div>

                <div className="pt-4 px-1">
                  <h3 className="font-semibold leading-tight">{b?.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {b?.author || "Unknown Author"}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <IoStarSharp
                          key={k}
                          className="h-3.5 w-3.5 fill-current"
                        />
                      ))}
                    </div>

                    <span className="font-bold text-brand">
                      ${b?.price || "0.00"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
