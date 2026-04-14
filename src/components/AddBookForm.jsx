// import React from 'react';
// import { useForm } from 'react-hook-form';
// import {
//   FaBook, FaUser, FaTags, FaDollarSign,
//   FaLayerGroup, FaInfoCircle, FaPhone, FaEnvelope
// } from 'react-icons/fa';

// const AddBookForm = () => {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm({
//     defaultValues: {
//       title: "Higher Mathematics 1st Paper",
//       author: "Board Book",
//       category: "Academic",
//       level: "HSC",
//       department: "Science",
//       edition: "2023",
//       language: "Bangla",
//       bookType: "used",
//       condition: "good",
//       isPreOrder: false,
//       basePrice: 300,
//       profitPercentage: 10,
//       finalPrice: 330,
//       stock: 5,
//       availability: "in_stock",
//       description: "Helpful for HSC students",
//       seller: {
//         name: "Shariar",
//         email: "user@email.com",
//         phone: "01XXXXXXXXX"
//       }
//     }
//   });

//   const onSubmit = (data) => {
//     console.log("Form Submitted Data:", data);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
//         <div className="flex items-center gap-3 mb-8 border-b pb-4">
//           <FaBook className="text-indigo-600 text-3xl" />
//           <h2 className="text-2xl font-bold text-gray-800">বইয়ের বিস্তারিত তথ্য দিন</h2>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
//           {/* Section 1: Basic Information */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                 <FaBook className="text-gray-400" /> Book Title
//               </label>
//               <input
//                 {...register("title", { required: true })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                 placeholder="Title"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                 <FaUser className="text-gray-400" /> Author
//               </label>
//               <input
//                 {...register("author", { required: true })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//               />
//             </div>
//           </div>

//           {/* Section 2: Category & Edition */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
//               <select {...register("category")} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
//                 <option value="Academic">Academic</option>
//                 <option value="Story">Story</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Edition</label>
//               <input {...register("edition")} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
//               <input {...register("language")} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//             </div>
//           </div>

//           {/* Section 3: Condition & Pricing */}
//           <div className="bg-indigo-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Condition</label>
//               <select {...register("condition")} className="w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-indigo-500">
//                 <option value="good">Good</option>
//                 <option value="new">New</option>
//                 <option value="moderate">Moderate</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                 <FaDollarSign className="text-green-600" /> Base Price
//               </label>
//               <input
//                 type="number"
//                 {...register("basePrice")}
//                 className="w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Final Price (330)</label>
//               <input
//                 type="number"
//                 readOnly
//                 {...register("finalPrice")}
//                 className="w-full px-4 py-2 bg-gray-100 border rounded-lg cursor-not-allowed"
//               />
//             </div>
//           </div>

//           {/* Section 4: Stock & Availability */}
//           <div className="flex flex-wrap gap-6 items-center border-t pt-6">
//             <div className="flex items-center gap-2">
//               <input type="checkbox" {...register("isPreOrder")} id="preOrder" className="w-5 h-5 accent-indigo-600" />
//               <label htmlFor="preOrder" className="text-sm font-medium text-gray-700 cursor-pointer">Available for Pre-Order</label>
//             </div>
//             <div className="flex-1 min-w-[150px]">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Stock Amount</label>
//               <input type="number" {...register("stock")} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//             </div>
//           </div>

//           {/* Section 5: Seller Info */}
//           <div className="border rounded-xl p-4 bg-gray-50">
//             <h3 className="text-sm font-bold uppercase text-gray-500 mb-4 tracking-wider">Seller Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="relative">
//                 <FaUser className="absolute top-3 left-3 text-gray-400" />
//                 <input {...register("seller.name")} placeholder="Name" className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//               </div>
//               <div className="relative">
//                 <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//                 <input {...register("seller.email")} placeholder="Email" className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//               </div>
//               <div className="relative">
//                 <FaPhone className="absolute top-3 left-3 text-gray-400" />
//                 <input {...register("seller.phone")} placeholder="Phone" className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//               </div>
//             </div>
//           </div>

//           {/* Section 6: Description */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//               <FaInfoCircle className="text-gray-400" /> Description
//             </label>
//             <textarea
//               {...register("description")}
//               rows="3"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//               placeholder="Tell us more about the book..."
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 active:scale-95"
//           >
//             Save Book Information
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBookForm;


import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  FaBook, FaUser, FaTag, FaMoneyBillWave, 
  FaMapMarkerAlt, FaUserEdit, FaBoxes, FaImage, FaLink 
} from 'react-icons/fa';

const AddBookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-indigo-700 p-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaBook /> Sell Your Used Book
          </h2>
          <p className="text-indigo-100 mt-2">Accurate information helps buyers make faster decisions.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-10">
          
          {/* Section 1: Basic Info */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
              <FaBook className="text-indigo-600" /> General Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
                <input {...register("title")} className="input-style" placeholder="Higher Mathematics 1st Paper" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input {...register("author")} className="input-style" placeholder="e.g. Board Book" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select {...register("category")} className="input-style">
                  <option value="Academic">Academic</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Publisher</label>
                <input {...register("bookDetails.publisher")} className="input-style" placeholder="e.g. Hasan Book House" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Level (e.g. HSC/O-Level)</label>
                <input {...register("level")} className="input-style" placeholder="HSC" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Edition</label>
                <input {...register("edition")} className="input-style" placeholder="2023" />
              </div>
            </div>
          </section>

          {/* Section 2: Condition & Details */}
          <section className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
              <FaTag className="text-indigo-600" /> Book Condition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                <select {...register("bookDetails.condition")} className="input-style bg-white">
                  <option value="new">New / Like New</option>
                  <option value="good">Good (Used)</option>
                  <option value="moderate">Moderate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Pages</label>
                <input type="number" {...register("bookDetails.pages")} className="input-style bg-white" placeholder="450" />
              </div>
              <div className="flex items-center gap-2 mt-8">
                <input type="checkbox" {...register("pricing.isNegotiable")} id="negotiable" className="w-5 h-5 accent-indigo-600" />
                <label htmlFor="negotiable" className="text-sm font-medium text-gray-700 cursor-pointer">Negotiable</label>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <input type="checkbox" {...register("bookDetails.isPreOrder")} id="preorder" className="w-5 h-5 accent-indigo-600" />
                <label htmlFor="preorder" className="text-sm font-medium text-gray-700 cursor-pointer">Pre-Order</label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Condition Description</label>
              <textarea {...register("bookDetails.conditionDescription")} rows="2" className="input-style bg-white" placeholder="e.g. No pages missing, some pencil marks..."></textarea>
            </div>
          </section>

          {/* Section 3: Pricing & Inventory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                <FaMoneyBillWave className="text-indigo-600" /> Pricing
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Original Price (MRP)</label>
                    <input type="number" {...register("pricing.originalPrice")} className="input-style" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price</label>
                    <input type="number" {...register("pricing.basePrice")} className="input-style" />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                <FaBoxes className="text-indigo-600" /> Inventory
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                  <input type="number" {...register("inventory.stock")} className="input-style" placeholder="1" />
                </div>
              </div>
            </section>
          </div>

          {/* Section 4: Location */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
              <FaMapMarkerAlt className="text-indigo-600" /> Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input {...register("location.division")} placeholder="Division" className="input-style" />
              <input {...register("location.district")} placeholder="District" className="input-style" />
              <input {...register("location.area")} placeholder="Area/Sub-district" className="input-style" />
            </div>
          </section>

          {/* Section 5: Media */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
              <FaImage className="text-indigo-600" /> Media (URL)
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input {...register("media.images.0")} placeholder="Front Cover Image URL" className="input-style" />
                <input {...register("media.images.1")} placeholder="Back Cover Image URL" className="input-style" />
              </div>
              <div className="relative">
                <FaLink className="absolute top-3 left-3 text-gray-400" />
                <input {...register("media.videoReview")} placeholder="Video Review Link (YouTube/Drive)" className="input-style pl-10" />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-95 flex justify-center items-center gap-2"
          >
            Publish Advertisement
          </button>
        </form>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-style:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
      `}</style>
    </div>
  );
};

export default AddBookForm;