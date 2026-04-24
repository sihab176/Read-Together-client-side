// import { useState } from "react";
// import { FiChevronRight } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";

// const books = [
//   {
//     id: 1,
//     title: "Debt — The First 5,000 Years",
//     author: "DAVID GRAEBER",
//     coverBg: "#c0392b",
//     coverText: "DEBT",
//     subText: "THE FIRST 5,000 YEARS",
//     tagline: "Diminutive rooms, grand possibilities. Small Homes, Grand Living shows how to make use of a limited space and turn a small apartment into a design marvel.",
//     description:
//       "Here anthropologist David Graeber presents a stunning reversal of conventional wisdom: he shows that before there was money, there was debt. For more than 5,000 years, since the beginnings of the first agrarian empires, humans have used elaborate credit systems to buy and sell goods—that is, long before the invention of coins or cash.",
//     editors: "Gestalten",
//     releaseDate: "May 2017",
//     format: "21 × 26 cm",
//     features: "Full color, 256 pages",
//     language: "English",
//     isbn: "978-3-89955-608-8",
//     reviewer: {
//       name: "Christopher Reath",
//       avatar: "CR",
//       quote:
//         "\"I didn't really finish reading this book. I'm not qualified to review this shit\"",
//     },
//   },
//   {
//     id: 2,
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. ROWLING",
//     coverBg: "#7b1f1f",
//     coverText: "HARRY POTTER",
//     subText: "SORCERER'S STONE",
//     tagline: "The book that started a generation. A young wizard's journey begins.",
//     description:
//       "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news.",
//     editors: "Scholastic",
//     releaseDate: "June 1997",
//     format: "19 × 24 cm",
//     features: "Full color, 309 pages",
//     language: "English",
//     isbn: "978-0-59-035342-7",
//     reviewer: {
//       name: "Emma W.",
//       avatar: "EW",
//       quote: "\"A magical masterpiece that defined my childhood.\"",
//     },
//   },
//   {
//     id: 3,
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "J.K. ROWLING",
//     coverBg: "#1a5c1a",
//     coverText: "HARRY POTTER",
//     subText: "CHAMBER OF SECRETS",
//     tagline: "The chamber has been opened. Enemies of the heir, beware.",
//     description:
//       "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.",
//     editors: "Scholastic",
//     releaseDate: "July 1998",
//     format: "19 × 24 cm",
//     features: "Full color, 341 pages",
//     language: "English",
//     isbn: "978-0-43-970901-7",
//     reviewer: {
//       name: "Ron B.",
//       avatar: "RB",
//       quote: "\"Darker, deeper, and even more thrilling than the first.\"",
//     },
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Prisoner of Azkaban",
//     author: "J.K. ROWLING",
//     coverBg: "#1a3a5c",
//     coverText: "HARRY POTTER",
//     subText: "PRISONER OF AZKABAN",
//     tagline: "He's back. And this time, he's not alone.",
//     description:
//       "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter's defeat of You-Know-Who was Black's downfall as well.",
//     editors: "Scholastic",
//     releaseDate: "September 1999",
//     format: "19 × 24 cm",
//     features: "Full color, 435 pages",
//     language: "English",
//     isbn: "978-0-43-965548-5",
//     reviewer: {
//       name: "Hermione G.",
//       avatar: "HG",
//       quote: "\"The time-turner twist is genius. Best of the series so far.\"",
//     },
//   },
// ];

// const BookCover = ({ book, size = "large" }) => {
//   const isLarge = size === "large";
//   return (
//     <div
//       className={`relative flex flex-col items-center justify-center rounded shadow-2xl select-none transition-all ${
//         isLarge ? "w-40 h-60 md:w-52 md:h-80" : "w-14 h-20"
//       }`}
//       style={{ backgroundColor: book.coverBg }}
//     >
//       <div className={`text-white font-black text-center leading-tight ${isLarge ? "text-xl px-3" : "text-[7px] px-1"}`}>
//         {book.coverText}
//       </div>
//       {isLarge && (
//         <>
//           <div className="w-3/4 border-t border-white opacity-60 my-1" />
//           <div className="text-white text-[9px] text-center font-semibold tracking-widest px-3 opacity-80 uppercase">
//             {book.subText}
//           </div>
//           <div className="absolute bottom-3 left-0 right-0 text-white text-[8px] text-center opacity-50 tracking-widest uppercase">
//             {book.author}
//           </div>
//         </>
//       )}
//       {!isLarge && (
//         <div className="text-white text-[5px] text-center opacity-70 px-1 mt-0.5 leading-tight">
//           {book.subText}
//         </div>
//       )}
//     </div>
//   );
// };

// export default function BookDetailsPage() {
//   const [selected, setSelected] = useState(0);
//   const book = books[selected];

//   return (
//     <div className="min-h-screen bg-gray-50 font-serif flex items-center justify-center p-4 ">
//       <div className="bg-white shadow-xl  w-full max-w-7xl mx-auto flex flex-col lg:flex-row overflow-hidden rounded-lg">

//         {/* Left: Book Cover (Top on mobile) */}
//         <div className="flex flex-col items-center justify-center bg-gray-100 px-6 py-10 lg:px-10 lg:py-12 lg:min-w-[280px]">
//           <BookCover book={book} size="large" />
//           <button className="mt-5 text-[10px] tracking-widest uppercase text-gray-400 hover:text-gray-600 transition-colors border-b border-gray-300 pb-0.5">
//             Click for Preview
//           </button>
//         </div>

//         {/* Center: Details (Middle on mobile) */}
//         <div className="flex-1 px-6 py-8 md:px-10 md:py-10 border-r border-gray-200">
//           <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-1" style={{ fontFamily: "Georgia, serif" }}>
//             {book.title}
//           </h1>
//           <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">
//             by {book.author}
//           </p>

//           <p className="text-sm italic text-gray-600 mb-4 leading-relaxed border-l-2 border-red-400 pl-3">
//             {book.tagline}
//           </p>

//           <p className="text-xs text-gray-500 leading-relaxed mb-7">
//             {book.description}
//           </p>

//           {/* Meta Grid - Responsive (2 cols on small, 3 on large) */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 text-xs mb-8 border-t border-b border-gray-100 py-4">
//             <div>
//               <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">Editors</span>
//               <span className="text-gray-700">{book.editors}</span>
//             </div>
//             <div>
//               <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">Features</span>
//               <span className="text-gray-700">{book.features}</span>
//             </div>
//             <div className="hidden md:block" />
//             <div>
//               <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">Release Date</span>
//               <span className="text-gray-700">{book.releaseDate}</span>
//             </div>
//             <div>
//               <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">Language</span>
//               <span className="text-gray-700">{book.language}</span>
//             </div>
//             <div className="hidden md:block" />
//             <div>
//               <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">Format</span>
//               <span className="text-gray-700">{book.format}</span>
//             </div>
//             <div>
//               <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-0.5">ISBN</span>
//               <span className="text-gray-700">{book.isbn}</span>
//             </div>
//           </div>

//           {/* Reviewer */}
//           <div className="flex items-start gap-3">
//             <div
//               className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
//               style={{ background: "linear-gradient(135deg,#e74c3c,#c0392b)" }}
//             >
//               {book.reviewer.avatar}
//             </div>
//             <div>
//               <p className="text-[11px] font-bold text-gray-700 mb-1">
//                 Reviewed By <span className="text-gray-900">{book.reviewer.name}</span>
//               </p>
//               <p className="text-xs text-gray-500 italic leading-snug">{book.reviewer.quote}</p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Thumbnail Sidebar (Bottom on mobile) */}
//         <div className="flex flex-row lg:flex-col gap-4 px-4 py-6 bg-gray-50 overflow-x-auto lg:overflow-x-hidden min-w-[90px] items-center border-t lg:border-t-0 border-gray-100">
//           {books.map((b, i) => (
//             <button
//               key={b.id}
//               onClick={() => setSelected(i)}
//               className={`flex-shrink-0 rounded transition-all duration-200 ${
//                 selected === i
//                   ? "ring-2 ring-red-500 scale-105 shadow-md"
//                   : "opacity-60 hover:opacity-90"
//               }`}
//             >
//               <BookCover book={b} size="small" />
//               <div className="hidden lg:block">
//                 <p className="text-[7px] text-gray-500 text-center mt-1 px-1 leading-tight uppercase tracking-wide">
//                     {b.coverText}
//                 </p>
//                 <p className="text-[6px] text-gray-400 text-center leading-tight px-1">
//                     {b.subText}
//                 </p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import { BiLocationPlus } from "react-icons/bi";

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
        className="w-full h-full object-cover rounded"
      />
    </div>
  );
};

export default function BookDetailsPage() {
  const [book, setBook] = useState(null);
  const axiosInstance = useAxios();
  const { id } = useParams();
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
  console.log("book", book);
  if (!book) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 font-serif flex items-center justify-center p-4  ">
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
          <p className="text-sm italic text-gray-600 mb-4 leading-relaxed border-l-2 border-red-400 pl-3">
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
            <p className="text-red-500 text-xl font-bold">
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
        </div>

        {/* Right (image thumbnails) */}
        <div className="flex flex-row lg:flex-col gap-4 px-4 py-6 bg-gray-50 overflow-x-auto lg:overflow-x-hidden min-w-[90px] items-center border-t lg:border-t-0 border-gray-100">
          {book.images?.map((img, i) => (
            <div key={i} className="w-14 h-20">
              <img src={img} className="w-full h-full object-cover rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
