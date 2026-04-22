import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import GoogleLoing from "../shared/GoogleLoing";

const LoginForm = () => {
  const { loginUser ,user } = use(AuthContext);
  const [openPassword, setOpenPassword] = useState(false);
  const navigate = useNavigate("/");
  console.log("user",user)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      loginUser(data.email, data.password).then((res) => {
        console.log("res", res);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          icon: "success",
          title: "welcome to Read Together ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  //   const password = watch("password");
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
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
                  className=" bg-gray-100 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div
                  className="absolute right-2 top-3 "
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
              Log In
            </button>
          </form>
          <GoogleLoing />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
