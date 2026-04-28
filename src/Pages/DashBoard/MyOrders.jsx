import React, { useEffect, useState } from "react";
import { FiEye, FiClock, FiMapPin, FiPhone, FiBookOpen } from "react-icons/fi";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const axiosInstance = useAxios();
  //TODO : ___________________GET ALL ORDERS___________________
  useEffect(() => {
    if (user?.email) {
      const fetchOrders = async () => {
        const res = await axiosInstance.get(`/user-orders?email=${user?.email}`);
        setOrders(res.data);
      };

      fetchOrders();
    }
  }, [user?.email]);
  //TODO : ____________________DELETE ORDER_______________________
  const handleDeleteOrder = async (orderId) => {
    console.log("id", orderId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/user-orders/${orderId}`);
        console.log(res);
        setOrders(orders.filter((order) => order._id !== orderId));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-green-700  ">Book Orders</h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage your incoming book sales and shipping
            </p>
          </div>
          <div className="text-sm font-medium text-slate-500">
            Show: <span className="text-slate-800 font-bold">All Orders</span>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-bottom border-slate-200">
                    Order Details
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-bottom border-slate-200">
                    Customer Info
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-bottom border-slate-200">
                    Shipping Location
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-bottom border-slate-200">
                    Total Amount
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-bottom border-slate-200">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 border-bottom border-slate-200 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="group hover:bg-blue-50/30 transition-all duration-200"
                  >
                    {/* Book Details */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 text-green-700 rounded-full">
                          <FiBookOpen size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-700 leading-tight">
                            {order.bookTitle}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-1 font-mono uppercase">
                            #{order._id.slice(-8)}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Customer Info */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-semibold text-slate-700">
                        {order.shippingInfo.name}
                      </p>
                      <div className="flex items-center text-xs text-slate-500 mt-1">
                        <FiPhone size={12} className="mr-1.5" />
                        {order.shippingInfo.phone}
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-5">
                      <div className="flex items-start text-sm text-slate-600">
                        <FiMapPin
                          size={14}
                          className="mr-1.5 mt-0.5 text-slate-400"
                        />
                        <span className="max-w-[150px] leading-snug">
                          {order.shippingInfo.district}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-5">
                      <p className="text-base font-black text-slate-800">
                        ৳{order.total}
                      </p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase">
                        COD Payment
                      </p>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === "pending"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        <FiClock className="mr-1.5" />
                        {order.status.toUpperCase()}
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-green-700 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                      >
                        <RiDeleteBinLine size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer of Table */}
          <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
