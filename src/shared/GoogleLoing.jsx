import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLoing = () => {
  const { googleLogin } = use(AuthContext);
  const axiosInstance = useAxios();
  const navigate = useNavigate("/");
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(async (result) => {
        console.log(result.user.email);
        const user = result.user;
        const userInfo = {
          email: user.email,
          role: "user",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        console.log("userInfo", userInfo);
        const response = await axiosInstance.post("/users", userInfo);
        console.log("response", response);
        // navigate(`${location.state ? location.state : "/"}`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to login with Google");
      });
  };
  return (
    <div className="mb-2">
      <button
        className="w-full py-3 bg-gray-100 cursor-pointer mt-4 flex items-center justify-center gap-2 rounded-md"
        onClick={handleGoogleLogin}
      >
        <FcGoogle size={24} />
        Google Login
      </button>
    </div>
  );
};

export default GoogleLoing;
