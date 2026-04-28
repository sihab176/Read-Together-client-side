import { useEffect, useState } from "react";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

export default function CheckoutPage() {
  const [deliveryType, setDeliveryType] = useState("home");
  const [payment, setPayment] = useState("cod");
  const [checkoutBook, setCheckoutBook] = useState(null);

  const axiosInstance = useAxios();
  const { user } = useAuth();
  const { id } = useParams();
  // console.log("suser", user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // fetch book
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axiosInstance.get(`/books/${id}`);
        setCheckoutBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, [id]);

  if (!checkoutBook) return <p className="text-center mt-10">Loading...</p>;

  // submit handler
  const onSubmit = async (data) => {
    const orderData = {
      bookId: id,
      bookTitle: checkoutBook.title,
      price: checkoutBook.pricing.basePrice,
      deliveryType,
      paymentMethod: payment,
      deliveryCharge: 60,
      total: Number(checkoutBook.pricing.basePrice) + 60,
      shippingInfo: data,
      status: "pending",
      buyerEmail: user?.email,
      createdAt: new Date(),
    };
    // console.log("this order data", orderData);

    try {
      if (payment === "cod") {
        const res = await axiosInstance.post("/orders", orderData);
        console.log("response", res);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Order placed successfully ✅",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        const res = await axiosInstance.post(
          "/create-checkout-session",
          orderData,
        );
        window.location.href = res.data.url;
        console.log("response", res);

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen bg-gray-100 p-6 grid md:grid-cols-3 gap-6 mt-20 lg:px-16"
    >
      {/* LEFT */}
      <div className="md:col-span-2 space-y-6">
        {/* Delivery */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-3">Delivery Type</h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setDeliveryType("home")}
              className={`px-4 py-2 rounded-lg border ${deliveryType === "home" ? "gradient-bg text-white" : ""}`}
            >
              Home Delivery
            </button>
            <button
              type="button"
              onClick={() => setDeliveryType("pickup")}
              className={`px-4 py-2 rounded-lg border ${deliveryType === "pickup" ? "gradient-bg text-white" : ""}`}
            >
              Pick-up
            </button>
          </div>
        </div>
        {/* Shipping Address */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-3">Shipping Address</h2>

          <div className="grid md:grid-cols-2 gap-3">
            {/* Name */}
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^01[3-9]\d{8}$/,
                    message: "Invalid phone number",
                  },
                })}
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* District */}
            <div>
              <input
                {...register("district", { required: "District is required" })}
                placeholder="District"
                className="border border-gray-300 p-3 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.district && (
                <p className="text-red-500 text-sm mt-1">
                  District is required
                </p>
              )}
            </div>

            {/* Thana */}
            <div>
              <input
                {...register("thana", { required: "Thana is required" })}
                placeholder="Thana"
                className="border border-gray-300 p-3 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.thana && (
                <p className="text-red-500 text-sm mt-1">Thana is required</p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <input
                {...register("address", { required: "Address is required" })}
                placeholder="Full Address"
                className="border border-gray-300 p-3 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">Address is required</p>
              )}
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-3">Payment Method</h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPayment("cod")}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg ${payment === "cod" ? "gradient-bg text-white" : ""}`}
            >
              <FaMoneyBillWave /> Cash on Delivery
            </button>

            <button
              type="button"
              onClick={() => setPayment("card")}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg ${payment === "card" ? "gradient-bg text-white" : ""}`}
            >
              <FaCreditCard /> Card
            </button>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white p-4">
          <textarea
            {...register("notes")}
            className="border border-gray-300 p-3 rounded-md w-full  focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="Optional note..."
          ></textarea>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-white p-5 rounded-2xl shadow h-fit">
        <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

        <div className="flex gap-3 items-center border-b pb-3">
          <img
            src={checkoutBook.images[0]}
            className="w-18 h-24 object-cover rounded border-5 border-gray-200"
          />
          <div>
            <h3 className="font-medium">{checkoutBook.title}</h3>
            <p className="text-sm text-gray-500">{checkoutBook.author}</p>
            <p className="text-xs">{checkoutBook.format}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>৳{checkoutBook.pricing.basePrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>৳60</span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>৳{Number(checkoutBook.pricing.basePrice) + 60}</span>
          </div>
        </div>

        <button className="mt-5 w-full gradient-bg text-white py-2 rounded-lg hover:opacity-95">
          {payment === "cod" ? "Place Order" : "Pay Now"}
        </button>
      </div>
    </form>
  );
}
