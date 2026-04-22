import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [openPassword, setOpenPassword] = useState(false);
  const { createUser, googleLogin, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  // TODO:__________implement register functionality_________
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // TODO_______________SUBMI THE FORM DATA ___________________
  const onSubmit = async (data) => {
    console.log(data);
    //!CREATE USER IN FIREBASE=========>
    createUser(data.email, data.password)
      .then(async (result) => {
        const userData = {
          email: data.email,
          displayName: data.fullName,
          role: "user",
          phoneNumber: data.phoneNumber,
          createdAt: new Date(),
          lastLoginAt: new Date(),
        };
        const res = await axiosInstance.post("/users", userData);
        console.log("response--->", res);
        //! UPDATE USER DISPLAY NAME
        updateUser({
          displayName: data.fullName,
        })
          .then(() => {
            navigate("/");
            Swal.fire({
              icon: "success",
              title: "welcome to Read Together ",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        console.log("resule", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 ">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg"
            alt="Sign Up"
            className="w-full max-w-sm"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="Full Name"
                  className="input p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <input
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers allowed",
                    },
                    minLength: {
                      value: 10,
                      message: "Minimum 10 digits",
                    },
                  })}
                  placeholder="Mobile Number"
                  className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>

              {/* Username */}
              <div>
                <input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  placeholder="Username"
                  className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  })}
                  placeholder="Email"
                  className=" bg-gray-100  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type={openPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).+$/,
                      message:
                        "Must include uppercase, lowercase, number & special character",
                    },
                  })}
                  placeholder="Password"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div
                  className="absolute right-12 top-3 cursor-pointer"
                  onClick={() => setOpenPassword(!openPassword)}
                >
                  {openPassword ? (
                    <LuEye size={20} className="cursor-pointer" />
                  ) : (
                    <LuEyeOff size={20} className="cursor-pointer" />
                  )}
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={openPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm password required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  placeholder="Confirm Password"
                  className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div
                  className="absolute right-12 top-3 cursor-pointer"
                  onClick={() => setOpenPassword(!openPassword)}
                >
                  {openPassword ? (
                    <LuEye size={20} className="cursor-pointer" />
                  ) : (
                    <LuEyeOff size={20} className="cursor-pointer" />
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("termsAccepted", {
                  required: "You must accept terms",
                })}
              />
              <span>I accept Terms</span>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-sm">
                {errors.termsAccepted.message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#5D7DB3] text-white py-3 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
