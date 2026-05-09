import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";

const EditBookForm = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const user = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [files, setFiles] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  const imageHostingkey = "1b9dc072b95ad90044546f449af37a13";

  // ✅ 1. Load existing data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axiosInstance.get(`/books/${id}`);
        const book = res.data;

        reset(book); // 🔥 pre-fill form
        setExistingImages(book.images || []);
      } catch (err) {
        toast.error("Failed to load book data");
      }
    };

    fetchBook();
  }, [id, reset, axiosInstance]);

  // image select
  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newFiles = [...files];
      newFiles[index] = file;
      setFiles(newFiles);
    }
  };

  // ✅ 2. Submit Update
  const onSubmit = async (data) => {
    try {
      let updatedImages = [...existingImages];

      // new image upload হলে
      if (files.length > 0) {
        updatedImages = [];

        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append("image", files[i]);

          const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${imageHostingkey}`,
            {
              method: "POST",
              body: formData,
            }
          );

          const imgData = await res.json();
          if (imgData.success) {
            updatedImages.push(imgData.data.url);
          }
        }
      }

      data.images = updatedImages;

      const response = await axiosInstance.put(`/books/${id}`, data);

      if (response.data.modifiedCount > 0) {
        toast.success("Book updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" />
      <input {...register("author")} placeholder="Author" />

      {/* Image preview */}
      <div className="flex gap-4">
        {[0, 1].map((index) => (
          <label key={index}>
            <input
              type="file"
              hidden
              onChange={(e) => handleFileChange(index, e)}
            />

            {files[index] ? (
              <img
                src={URL.createObjectURL(files[index])}
                className="w-20"
              />
            ) : (
              existingImages[index] && (
                <img src={existingImages[index]} className="w-20" />
              )
            )}
          </label>
        ))}
      </div>

      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;