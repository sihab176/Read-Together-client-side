import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxios from "../hooks/useAxios";
import LottieModule from "lottie-react";

const Lottie = LottieModule.default;

import successAnimation from "../assets/lotties/Verified.json";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const axiosInstance = useAxios();
  console.log("params", params, "sessionId", sessionId);

  useEffect(() => {
    const saveOrder = async () => {
      try {
        const res = await axiosInstance.get(`/checkout-session/${sessionId}`);
        console.log(res);
        const orderData = {
          ...res.data,
          paymentStatus: "paid",
        };
        await axiosInstance.post("/orders", orderData);
      } catch (error) {
        console.log(error);
      }
    };
    if (sessionId) {
      saveOrder();
    }
  }, [sessionId]);


  console.log("successAnimation", successAnimation);
  console.log("Lottie",Lottie);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-xl w-full">
        
        <div className="w-40 mx-auto">
          <Lottie animationData={successAnimation} loop={false} autoplay={true} />
        </div>

        <h1 className="text-2xl font-bold text-green-600 mt-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mt-2">
          Your payment has been completed successfully.
        </p>

        <Link to="/">
          <button className="mt-6 gradient-bg active:scale-95  hover:bg-green-700 text-white px-6 py-2 rounded-lg transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
      {/* <div>Payment Successful!</div> */}
    </>
  );
};

export default PaymentSuccess;
