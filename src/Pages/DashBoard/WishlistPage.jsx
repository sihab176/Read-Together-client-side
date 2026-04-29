// import React, { useEffect, useState } from "react";
// import useAxios from "../../hooks/useAxios";
// import useAuth from "../../hooks/useAuth";
// import { FiBookOpen, FiCalendar, FiClock, FiDollarSign, FiPhone } from "react-icons/fi";

// const WishlistPage = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const axiosInstance = useAxios();
//   const { user } = useAuth();
//   useEffect(() => {
//     if (user?.email) {
//       axiosInstance.get(`/wishlist/${user?.email}`).then((response) => {
//         setWishlist(response.data);
//       });
//     }
//   }, [user?.email]);
//   console.log("wishlist",wishlist)

//   return <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
//             <div>
//               <h1 className="text-xl md:text-2xl font-bold text-slate-800">
//                 Payment History
//               </h1>
//               <p className="text-xs md:text-sm text-slate-500 mt-1">
//                 Track your past transactions and book purchases
//               </p>
//             </div>
//             <div className="text-sm font-medium text-slate-500 bg-white md:bg-transparent px-3 py-1.5 md:p-0 rounded-lg shadow-sm md:shadow-none inline-block bwish bwish-slate-200 md:bwish-none">
//               Records:{" "}
//               <span className="text-slate-800 font-bold">
//                 {wishlist.length}
//               </span>
//             </div>
//           </div>

//           {/* --- MOBILE VIEW: CARDS (Visible only on small screens) --- */}
//           <div className="grid grid-cols-1 gap-4 md:hidden">
//             {wishlist?.map((wish) => (
//               <div
//                 key={wish._id}
//                 className="bg-white p-5 rounded-2xl bwish bwish-slate-200 shadow-sm"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2.5 bg-blue-50 text-green-700 rounded-xl">
//                     <img src={wish.bookImage} alt={wish.bookTitle} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-slate-800 leading-tight">
//                       {/* {wish.bookTitle} */}
//                     </h3>
//                     <p className="text-[10px] text-slate-400 font-mono mt-0.5 uppercase tracking-wider">
//                       {/* #{wish._id.slice(-8)} */}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-3 pt-3 bwish-t bwish-slate-100">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center text-sm text-slate-600 font-medium">
//                       <FiCalendar size={14} className="mr-2 text-slate-400" />
//                       {new Date(wish.createdAt).toLocaleDateString()}
//                     </div>
//                     <div
//                       className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
//                         wish.paymentStatus === "paid"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-orange-100 text-orange-600"
//                       }`}
//                     >
//                       {/* {wish.paymentStatus} */}
//                     </div>
//                   </div>

//                   <div className="flex items-center text-sm text-slate-600">
//                     <FiPhone size={14} className="mr-2 text-slate-400" />
//                     {/* {wish.shippingInfo?.phone || "N/A"} */}
//                   </div>

//                   <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl mt-1">
//                     <div className="flex items-center gap-2">
//                       <div className="p-1.5 bg-white rounded-lg shadow-xs text-slate-700">
//                         {/* <FiDollarSign size={14} /> */}
//                       </div>
//                       <p className="text-lg font-black text-slate-800 tracking-tight">
//                         ৳{wish.total}
//                       </p>
//                     </div>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                       {/* {wish.paymentMethod || "COD"} */}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* --- DESKTOP VIEW: TABLE (Hidden on small screens) --- */}
//           <div className="hidden md:block bg-white rounded-2xl shadow-sm bwish bwish-slate-200 overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full text-left bwish-separate bwish-spacing-0">
//                 <thead>
//                   <tr className="bg-slate-50">
//                     <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 bwish-b bwish-slate-200">
//                       wish Details
//                     </th>
//                     <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 bwish-b bwish-slate-200">
//                       Customer Info
//                     </th>
//                     <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 bwish-b bwish-slate-200">
//                       Purchase Date
//                     </th>
//                     <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 bwish-b bwish-slate-200">
//                       Total Amount
//                     </th>
//                     <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 bwish-b bwish-slate-200">
//                       Payment Status
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100">
//                   {wishlist?.map((wish) => (
//                     <tr
//                       key={wish._id}
//                       className="group hover:bg-blue-50/30 transition-all duration-200"
//                     >
//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-3">
//                           <div className="p-2 bg-gray-200 text-green-700 rounded-lg shadow-xl border border-gray-200">
//                            <img src={wish.bookImage} alt={wish.bookTitle} className="w-8 h-12 object-cover rounded" />
//                           </div>
//                           <div>
//                             <p className="font-bold text-slate-700 leading-tight">
//                               {wish.bookTitle}
//                             </p>
//                             <p className="text-[11px] text-slate-400 mt-1 font-mono uppercase">
//                               #{wish._id.slice(-8)}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-5">
//                         <p className="text-sm font-semibold text-slate-700">
//                           {wish.author}
//                         </p>
//                         <div className="flex items-center text-xs text-slate-500 mt-1">
//                           <FiPhone size={12} className="mr-1.5" />
//                           {/* {wish.shippingInfo.phone} */}
//                         </div>
//                       </td>
//                       <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-600">
//                         <div className="flex items-center">
//                           <FiCalendar size={14} className="mr-2 text-slate-400" />
//                           {new Date(wish.createdAt).toLocaleDateString()}
//                         </div>
//                       </td>
//                       <td className="px-6 py-5 whitespace-nowrap">
//                         <p className="text-base font-black text-slate-800">
//                           {/* ৳{wish.total} */}
//                         </p>
//                         <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter">
//                           Paid Online
//                         </p>
//                       </td>
//                       <td className="px-6 py-5">
//                         {/* <div
//                           className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
//                             wish.paymentStatus === "paid"
//                               ? "bg-green-100 text-green-700"
//                               : "bg-orange-100 text-orange-600"
//                           }`}
//                         >
//                           <FiClock className="mr-1.5" />
//                           {wish.paymentStatus.toUpperCase()}
//                         </div> */}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Empty State */}
//           {wishlist.length === 0 && (
//             <div className="bg-white p-12 md:p-20 text-center rounded-2xl bwish-2 bwish-dashed bwish-slate-200 mt-4">
//               <FiBookOpen size={40} className="mx-auto text-slate-200 mb-4" />
//               <h2 className="text-lg font-bold text-slate-800">
//                 No History Found
//               </h2>
//               <p className="text-slate-500 text-sm mt-1">
//                 You haven't made any purchases yet.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
// };

// export default WishlistPage;
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { FiBookOpen, FiCalendar, FiMapPin, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axiosInstance.get(`/wishlist/${user?.email}`).then((response) => {
        setWishlist(response.data);
      });
    }
  }, [user?.email, axiosInstance]);

  // HANDLE VIEW
  const handleView = (bookId) => {
    navigate(`/bookDetails/${bookId}`);
  };

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">
              My Wishlist
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Keep track of books you want to read or buy later
            </p>
          </div>
          <div className="text-sm font-medium text-slate-500 bg-white md:bg-transparent px-3 py-1.5 md:p-0 rounded-lg shadow-sm md:shadow-none inline-block border border-slate-200 md:border-none">
            Items:{" "}
            <span className="text-slate-800 font-bold">{wishlist.length}</span>
          </div>
        </div>

        {/* --- MOBILE VIEW: CARDS --- */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {wishlist?.map((wish) => (
            <div
              key={wish._id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-slate-200">
                  <img
                    src={wish.bookImage}
                    alt={wish.bookTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 leading-tight">
                    {wish.bookTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center">
                    <FiUser className="mr-1" /> {wish.author}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1 uppercase tracking-wider">
                    #{wish._id.slice(-8)}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-slate-600 font-medium">
                    <FiCalendar size={14} className="mr-2 text-slate-400" />
                    {new Date(wish.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-lg font-black text-green-700">
                    ৳{wish.bookPrice}
                  </div>
                </div>

                <div className="flex items-center text-sm text-slate-600 italic">
                  <FiMapPin size={14} className="mr-2 text-slate-400" />
                  {wish.location?.district}, {wish.location?.division}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW: TABLE --- */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Book Details
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Author
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Location
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Added Date
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Price
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {wishlist?.map((wish) => (
                  <tr
                    key={wish._id}
                    className="group hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-14 bg-gray-200 rounded shadow-md border border-gray-100 shrink-0 overflow-hidden">
                          <img
                            src={wish.bookImage}
                            alt={wish.bookTitle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-slate-700 leading-tight">
                            {wish.bookTitle}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-1 font-mono uppercase">
                            #{wish._id.slice(-8)}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-semibold text-slate-700">
                        {wish.author}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600 italic">
                      <div className="flex items-center">
                        <FiMapPin size={14} className="mr-1.5 text-slate-400" />
                        {wish.location?.district}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-600">
                      <div className="flex items-center">
                        <FiCalendar size={14} className="mr-2 text-slate-400" />
                        {new Date(wish.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <p className="text-lg font-black text-green-700">
                        ৳{wish.bookPrice}
                      </p>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <button
                        onClick={() => handleView(wish.bookId)}
                        className="px-3 py-1 bg-green-800 text-sm text-white rounded-full hover:bg-green-900 transition-colors active:scale-95 cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 && (
          <div className="bg-white p-12 md:p-20 text-center rounded-2xl border-2 border-dashed border-slate-200 mt-4">
            <FiBookOpen size={40} className="mx-auto text-slate-200 mb-4" />
            <h2 className="text-lg font-bold text-slate-800">
              Your Wishlist is Empty
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Browse books and add them to your wishlist!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
