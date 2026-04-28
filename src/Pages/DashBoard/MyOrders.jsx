
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

  console.log("orders", orders)
// TODO : _____________________ GET ALL ORDERS________________
  useEffect(() => {
    if (user?.email) {
      const fetchOrders = async () => {
        const res = await axiosInstance.get(
          `/user-orders?email=${user?.email}`,
        );
        setOrders(res.data);
      };
      fetchOrders();
    }
  }, [user?.email]);

  // TODO : _____________________ DELETE ORDER________________
  const handleDeleteOrder = async (orderId) => {
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
        setOrders(orders.filter((order) => order._id !== orderId));
        Swal.fire({
          title: "Deleted!",
          text: "Your order has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">
              Book Orders
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Manage your incoming book sales and shipping
            </p>
          </div>
          <div className="text-sm font-medium text-slate-500 bg-white md:bg-transparent p-2 md:p-0 rounded-lg shadow-sm md:shadow-none inline-block">
            Show:{" "}
            <span className="text-slate-800 font-bold">
              All Orders ({orders.length})
            </span>
          </div>
        </div>

        {/* --- MOBILE VIEW: CARDS (Visible only on small screens) --- */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-green-700 rounded-xl shrink-0">
                  <FiBookOpen size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 leading-tight pr-8">
                    {order.bookTitle}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">
                    ID: #{order._id.slice(-8)}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteOrder(order._id)}
                  className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <RiDeleteBinLine size={20} />
                </button>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-slate-600">
                    <FiPhone size={14} className="mr-2 text-slate-400" />
                    {order.shippingInfo.phone}
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      order.status === "pending"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    {order.status.toUpperCase()}
                  </div>
                </div>

                <div className="flex items-center text-sm text-slate-600">
                  <FiMapPin size={14} className="mr-2 text-slate-400" />
                  <span className="truncate">
                    {order.shippingInfo.district}
                  </span>
                </div>

                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl mt-2">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">
                      Total Amount
                    </p>
                    <p className="text-lg font-black text-slate-800 tracking-tight">
                      ৳{order.total}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase">
                      Payment
                    </p>
                    <p className="text-xs font-bold text-slate-600">COD Mode</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW: TABLE (Hidden on small screens) --- */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Order Details
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Location
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="group hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 text-green-700 rounded-full shrink-0">
                          <FiBookOpen size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-700 leading-tight">
                            {order.bookTitle}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-1 font-mono uppercase tracking-tighter">
                            #{order._id.slice(-8)}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm">
                      <p className="font-semibold text-slate-700">
                        {order.shippingInfo.name}
                      </p>
                      <div className="flex items-center text-xs text-slate-500 mt-1">
                        <FiPhone size={12} className="mr-1.5" />{" "}
                        {order.shippingInfo.phone}
                      </div>
                    </td>
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
                    <td className="px-6 py-5 whitespace-nowrap">
                      <p className="text-base font-black text-slate-800">
                        ৳{order.total}
                      </p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase">
                        {order.paymentStatus === "paid" ? "Paid Online" : "COD"}
                      </p>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === "pending"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        <FiClock className="mr-1.5" />{" "}
                        {order.status.toUpperCase()}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-red-200 hover:shadow-sm transition-all duration-200"
                      >
                        <RiDeleteBinLine size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="bg-white p-20 text-center rounded-2xl border-2 border-dashed border-slate-200 mt-4">
            <FiBookOpen size={40} className="mx-auto text-slate-200 mb-4" />
            <p className="text-slate-500">No orders found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
