// import { useEffect, useState } from "react";
// import useAxios from "../hooks/useAxios";
// import useAuth from "../hooks/useAuth";

// import toast from "react-hot-toast";
// import { useNavigate } from "react-router";

// const SellerBook = () => {
//   const axiosInstance = useAxios();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [books, setBooks] = useState([]);

//   // ✅ fetch seller books
//   useEffect(() => {
//     const fetchBooks = async () => {
//       const res = await axiosInstance.get(
//         `/my-books?email=${user?.email}`
//       );
//       setBooks(res.data);
//     };

//     if (user?.email) {
//       fetchBooks();
//     }
//   }, [user, axiosInstance]);

//   // ✅ delete
//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Are you sure?");
//     if (!confirm) return;

//     try {
//       const res = await axiosInstance.delete(`/books/${id}`);
//       if (res.data.deletedCount > 0) {
//         toast.success("Deleted successfully");
//         setBooks(books.filter((book) => book._id !== id));
//       }
//     } catch (err) {
//       toast.error("Delete failed");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">My Books</h2>

//       <div className="overflow-x-auto">
//         <table className="table w-full border">
//           <thead className="bg-gray-100">
//             <tr>
//               <th>#</th>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {books.map((book, index) => (
//               <tr key={book._id}>
//                 <td>{index + 1}</td>

//                 <td>
//                   <img
//                     src={book.images?.[0]}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                 </td>

//                 <td>{book.title}</td>
//                 <td>৳ {book.pricing?.basePrice}</td>
//                 <td>{book.status}</td>

//                 <td className="space-x-2">
//                   {/* EDIT */}
//                   <button
//                     onClick={() => navigate(`/edit-book/${book._id}`)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded"
//                   >
//                     Edit
//                   </button>

//                   {/* DELETE */}
//                   <button
//                     onClick={() => handleDelete(book._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SellerBook;