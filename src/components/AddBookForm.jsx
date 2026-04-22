// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import {
//   FaBook,
//   FaUser,
//   FaTag,
//   FaMoneyBillWave,
//   FaMapMarkerAlt,
//   FaUserEdit,
//   FaBoxes,
//   FaImage,
//   FaLink,
//   FaImages,
// } from "react-icons/fa";

// const AddBookForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [files, setFiles] = useState([]);
//   const imageHostingkey = "1b9dc072b95ad90044546f449af37a13";

//   console.log(files);

//   const handleFileChange = (index, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newFiles = [...files];
//       newFiles[index] = file;
//       setFiles(newFiles);
//     }
//   };

//   const onSubmit = async (data) => {
//     // console.log("Submitted Data:", data);
//     try {
//       const uploadedImages = [];
//       for (let i = 0; i < files.length; i++) {
//         const formData = new FormData();
//         formData.append("image", files[i]);
//         const res = await fetch(
//           `https://api.imgbb.com/1/upload?key=${imageHostingkey}`,
//           {
//             method: "POST",
//             body: formData,
//           },
//         );
//         const response = await res.json();
//         if (response.success) {
//           uploadedImages.push(response.data.url);
//         }
//       }
//       data.images = uploadedImages;
//       console.log("Final data:", data);
//     } catch (error) {
//       console.error("Error uploading images:", error);
//       toast.error("Failed to upload images");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-4">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
//         <div className="dashboard-bg p-6">
//           <h2 className="text-3xl font-bold text-white flex items-center gap-3">
//             <FaBook /> Sell Your Used Book
//           </h2>
//           <p className="text-indigo-100 mt-2">
//             Accurate information helps buyers make faster decisions.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-10">
//           {/* Section 0: Book Image */}
//           <section className="flex flex-wrap items-center gap-5 mt-2">
//             {[...Array(2)].map((_, index) => {
//               const labelText = index === 0 ? "Front Cover Image" : "Back Cover Image";
//               return (
//                 <label
//                   key={index}
//                   htmlFor={`image-${index}`}
//                   className="cursor-pointer"
//                 >
//                   <input
//                     type="file"
//                     id={`image-${index}`}
//                     hidden
//                     onChange={(e) => handleFileChange(index, e)}
//                   />
//                   {files[index] ? (
//                     <img
//                       src={URL.createObjectURL(files[index])}
//                       alt="book"
//                       className="w-24 h-24 object-cover rounded-lg"
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center">
//                       <p className="text-[12px] p-1 text-gray-500 ">{labelText}</p>
//                       <FaImages className="w-24 h-24 text-gray-400 p-2 rounded-lg border" />
//                     </div>
//                   )}
//                 </label>
//               );
//             })}
//           </section>

//           {/* Section 1: Basic Info */}
//           <section>
//             <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
//               <FaBook className="dashboard-text" /> General Information
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Book Title
//                 </label>
//                 <input
//                   {...register("title")}
//                   className="input-style"
//                   placeholder="Higher Mathematics 1st Paper"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Author
//                 </label>
//                 <input
//                   {...register("author")}
//                   className="input-style"
//                   placeholder="e.g. Board Book"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Category
//                 </label>
//                 <select {...register("category")} className="input-style">
//                   <option value="Academic">Academic</option>
//                   <option value="Fiction">Fiction</option>
//                   <option value="Non-Fiction">Non-Fiction</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Publisher
//                 </label>
//                 <input
//                   {...register("bookDetails.publisher")}
//                   className="input-style"
//                   placeholder="e.g. Hasan Book House"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Level (e.g. HSC/O-Level)
//                 </label>
//                 <input
//                   {...register("level")}
//                   className="input-style"
//                   placeholder="HSC"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Edition
//                 </label>
//                 <input
//                   {...register("edition")}
//                   className="input-style"
//                   placeholder="2023"
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Section 2: Condition & Details */}
//           <section className="bg-slate-50 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
//               <FaTag className="dashboard-text" /> Book Condition
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Condition
//                 </label>
//                 <select
//                   {...register("bookDetails.condition")}
//                   className="input-style bg-white"
//                 >
//                   <option value="new">New / Like New</option>
//                   <option value="good">Good (Used)</option>
//                   <option value="moderate">Moderate</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Total Pages
//                 </label>
//                 <input
//                   type="number"
//                   {...register("bookDetails.pages")}
//                   className="input-style bg-white"
//                   placeholder="450"
//                 />
//               </div>
//               <div className="flex items-center gap-2 mt-8">
//                 <input
//                   type="checkbox"
//                   {...register("pricing.isNegotiable")}
//                   id="negotiable"
//                   className="w-5 h-5 accent-indigo-600"
//                 />
//                 <label
//                   htmlFor="negotiable"
//                   className="text-sm font-medium text-gray-700 cursor-pointer"
//                 >
//                   Negotiable
//                 </label>
//               </div>
//               <div className="flex items-center gap-2 mt-8">
//                 <input
//                   type="checkbox"
//                   {...register("bookDetails.isPreOrder")}
//                   id="preorder"
//                   className="w-5 h-5 accent-indigo-600"
//                 />
//                 <label
//                   htmlFor="preorder"
//                   className="text-sm font-medium text-gray-700 cursor-pointer"
//                 >
//                   Pre-Order
//                 </label>
//               </div>
//             </div>
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Condition Description
//               </label>
//               <textarea
//                 {...register("bookDetails.conditionDescription")}
//                 rows="2"
//                 className="input-style bg-white"
//                 placeholder="e.g. No pages missing, some pencil marks..."
//               ></textarea>
//             </div>
//           </section>

//           {/* Section 3: Pricing & Inventory */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
//                 <FaMoneyBillWave className="dashboard-text" /> Pricing
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex gap-4">
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Original Price (MRP)
//                     </label>
//                     <input
//                       type="number"
//                       {...register("pricing.originalPrice")}
//                       className="input-style"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Selling Price
//                     </label>
//                     <input
//                       type="number"
//                       {...register("pricing.basePrice")}
//                       className="input-style"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <section>
//               <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
//                 <FaBoxes className="dashboard-text" /> Inventory
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Stock Quantity
//                   </label>
//                   <input
//                     type="number"
//                     {...register("inventory.stock")}
//                     className="input-style"
//                     placeholder="1"
//                   />
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Section 4: Location */}
//           <section>
//             <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
//               <FaMapMarkerAlt className="dashboard-text" /> Location
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <input
//                 {...register("location.division")}
//                 placeholder="Division"
//                 className="input-style"
//               />
//               <input
//                 {...register("location.district")}
//                 placeholder="District"
//                 className="input-style"
//               />
//               <input
//                 {...register("location.area")}
//                 placeholder="Area/Sub-district"
//                 className="input-style"
//               />
//             </div>
//           </section>

//           <button
//             type="submit"
//             className="w-full dashboard-bg text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-95 flex justify-center items-center gap-2"
//           >
//             Publish Advertisement
//           </button>
//         </form>
//       </div>

//       <style jsx>{`
//         .input-style {
//           width: 100%;
//           padding: 0.75rem 1rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.75rem;
//           outline: none;
//           transition: all 0.2s;
//         }
//         .input-style:focus {
//           border-color: #1E5128;
//           box-shadow: 0 0 0 3px rgba(30, 81, 40, 0.1);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AddBookForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaBook,
  FaTag,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaBoxes,
  FaImages,
} from "react-icons/fa";

const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [files, setFiles] = useState([]);
  const imageHostingkey = "1b9dc072b95ad90044546f449af37a13";

  console.log(files);

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newFiles = [...files];
      newFiles[index] = file;
      setFiles(newFiles);
    }
  };

  const onSubmit = async (data) => {
    if (files.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }
    if (
      Number(data?.pricing?.basePrice) > Number(data?.pricing?.originalPrice)
    ) {
      return toast.error("Selling price cannot be greater than original price");
    }
    try {
      const uploadedImages = [];
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("image", files[i]);
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${imageHostingkey}`,
          {
            method: "POST",
            body: formData,
          },
        );
        const response = await res.json();
        if (response.success) {
          uploadedImages.push(response.data.url);
        }
      }
      data.images = uploadedImages;
      console.log("Final data:", data);
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Failed to upload images");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="dashboard-bg p-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaBook /> Sell Your Used Book
          </h2>
          <p className="text-indigo-100 mt-2">
            Accurate information helps buyers make faster decisions.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-10">
          {/* Section 0: Book Image */}
          <section className="flex flex-wrap items-center gap-5 mt-2">
            {[...Array(2)].map((_, index) => {
              const labelText =
                index === 0 ? "Front Cover Image" : "Back Cover Image";
              return (
                <label
                  key={index}
                  htmlFor={`image-${index}`}
                  className="cursor-pointer"
                >
                  <input
                    type="file"
                    id={`image-${index}`}
                    hidden
                    onChange={(e) => handleFileChange(index, e)}
                  />
                  {files[index] ? (
                    <img
                      src={URL.createObjectURL(files[index])}
                      alt="book"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] p-1 text-gray-500 ">
                        {labelText}
                      </p>
                      <FaImages className="w-24 h-24 text-gray-400 p-2 rounded-lg border" />
                    </div>
                  )}
                </label>
              );
            })}
          </section>

          {/* Section 1: Basic Info */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
              <FaBook className="dashboard-text" /> General Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Book Title
                </label>
                <input
                  {...register("title", { required: "Book title is required" })}
                  className="input-style"
                  placeholder="Higher Mathematics 1st Paper"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                  {...register("author", { required: "Author is required" })}
                  className="input-style"
                  placeholder="e.g. Board Book"
                />
                {errors.author && (
                  <p className="text-red-500 text-sm">
                    {errors.author.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="input-style"
                >
                  <option value="Academic">Academic</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Publisher
                </label>
                <input
                  {...register("bookDetails.publisher", {
                    required: "Publisher is required",
                  })}
                  className="input-style"
                  placeholder="e.g. Hasan Book House"
                />
                {errors.bookDetails?.publisher && (
                  <p className="text-red-500 text-sm">
                    {errors.bookDetails.publisher.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level (e.g. BBA/O-Level)
                </label>
                <input
                  {...register("level", { required: "Level is required" })}
                  className="input-style"
                  placeholder="BBA"
                />
                {errors.level && (
                  <p className="text-red-500 text-sm">{errors.level.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Edition
                </label>
                <input
                  {...register("edition", { required: "Edition is required" })}
                  className="input-style"
                  placeholder="2023"
                />
                {errors.edition && (
                  <p className="text-red-500 text-sm">
                    {errors.edition.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Section 2: Condition & Details */}
          <section className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
              <FaTag className="dashboard-text" /> Book Condition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Condition
                </label>
                <select
                  {...register("bookDetails.condition", {
                    required: "Condition is required",
                  })}
                  className="input-style bg-white"
                >
                  <option value="new">New / Like New</option>
                  <option value="good">Good (Used)</option>
                  <option value="moderate">Moderate</option>
                </select>
                {errors.bookDetails?.condition && (
                  <p className="text-red-500 text-sm">
                    {errors.bookDetails.condition.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Total Pages
                </label>
                <input
                  type="number"
                  {...register("bookDetails.pages", {
                    required: "Pages required",
                    min: { value: 1, message: "Must be at least 1" },
                  })}
                  className="input-style bg-white"
                />
                {errors.bookDetails?.pages && (
                  <p className="text-red-500 text-sm">
                    {errors.bookDetails.pages.message}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 mt-8">
                <input
                  type="checkbox"
                  {...register("pricing.isNegotiable")}
                  id="negotiable"
                  className="w-5 h-5 accent-indigo-600"
                />
                <label
                  htmlFor="negotiable"
                  className="text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Negotiable
                </label>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <input
                  type="checkbox"
                  {...register("bookDetails.isPreOrder")}
                  id="preorder"
                  className="w-5 h-5 accent-indigo-600"
                />
                <label
                  htmlFor="preorder"
                  className="text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Pre-Order
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Condition Description
              </label>
              <textarea
                {...register("bookDetails.conditionDescription")}
                rows="2"
                className="input-style bg-white"
                placeholder="e.g. No pages missing, some pencil marks..."
              ></textarea>
            </div>
          </section>

          {/* Section 3: Pricing & Inventory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                <FaMoneyBillWave className="dashboard-text" /> Pricing
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Original Price (MRP)
                    </label>
                    <input
                      type="number"
                      {...register("pricing.originalPrice")}
                      className="input-style"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Selling Price
                    </label>
                    <input
                      type="number"
                      {...register("pricing.basePrice", {
                        required: "Selling price required",
                        min: { value: 1, message: "Must be greater than 0" },
                      })}
                      className="input-style"
                    />
                    {errors.pricing?.basePrice && (
                      <p className="text-red-500 text-sm">
                        {errors.pricing.basePrice.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                <FaBoxes className="dashboard-text" /> Inventory
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    {...register("inventory.stock", {
                      required: "Stock is required",
                      min: { value: 1, message: "Minimum 1" },
                    })}
                    className="input-style"
                  />
                  {errors.inventory?.stock && (
                    <p className="text-red-500 text-sm">
                      {errors.inventory.stock.message}
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Section 4: Location */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
              <FaMapMarkerAlt className="dashboard-text" /> Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                {...register("location.division", {
                  required: "Division required",
                })}
                className="input-style"
              />
              {errors.location?.division && (
                <p className="text-red-500 text-sm">
                  {errors.location.division.message}
                </p>
              )}
              <input
                {...register("location.district", {
                  required: "District required",
                })}
                className="input-style"
              />
              {errors.location?.district && (
                <p className="text-red-500 text-sm">
                  {errors.location.district.message}
                </p>
              )}
              <input
                {...register("location.area", { required: "Area required" })}
                className="input-style"
              />
              {errors.location?.area && (
                <p className="text-red-500 text-sm">
                  {errors.location.area.message}
                </p>
              )}
            </div>
          </section>

          <button
            type="submit"
            className="w-full dashboard-bg text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-95 flex justify-center items-center gap-2"
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
          border-color: #1e5128;
          box-shadow: 0 0 0 3px rgba(30, 81, 40, 0.1);
        }
      `}</style>
    </div>
  );
};

export default AddBookForm;
