import React, { useEffect, useState } from "react";
import {
  FiClock,
  FiPhone,
  FiBookOpen,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const PaymentHistoryPage = () => {
  const [paymentOrders, setPaymentOrders] = useState([]);
  const { user } = useAuth();
  const axiosInstance = useAxios();

  useEffect(() => {
    if (user?.email) {
      const fetchOrders = async () => {
        const res = await axiosInstance.get(
          `/user-payment-history?email=${user?.email}`,
        );
        setPaymentOrders(res.data);
      };
      fetchOrders();
    }
  }, [user?.email]);

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">
              Payment History
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Track your past transactions and book purchases
            </p>
          </div>
          <div className="text-sm font-medium text-slate-500 bg-white md:bg-transparent px-3 py-1.5 md:p-0 rounded-lg shadow-sm md:shadow-none inline-block border border-slate-200 md:border-none">
            Records:{" "}
            <span className="text-slate-800 font-bold">
              {paymentOrders.length}
            </span>
          </div>
        </div>

        {/* --- MOBILE VIEW: CARDS (Visible only on small screens) --- */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {paymentOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-50 text-green-700 rounded-xl">
                  <FiBookOpen size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 leading-tight">
                    {order.bookTitle}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5 uppercase tracking-wider">
                    #{order._id.slice(-8)}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-slate-600 font-medium">
                    <FiCalendar size={14} className="mr-2 text-slate-400" />
                    {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                  <div
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {order.paymentStatus}
                  </div>
                </div>

                <div className="flex items-center text-sm text-slate-600">
                  <FiPhone size={14} className="mr-2 text-slate-400" />
                  {order.shippingInfo?.phone || "N/A"}
                </div>

                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl mt-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white rounded-lg shadow-xs text-slate-700">
                      <FiDollarSign size={14} />
                    </div>
                    <p className="text-lg font-black text-slate-800 tracking-tight">
                      ৳{order.total}
                    </p>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {order.paymentMethod || "COD"}
                  </p>
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
                    Customer Info
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Purchase Date
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Total Amount
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                    Payment Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paymentOrders.map((order) => (
                  <tr
                    key={order._id}
                    className="group hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 text-green-700 rounded-lg">
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
                    <td className="px-6 py-5">
                      <p className="text-sm font-semibold text-slate-700">
                        {order.shippingInfo.name}
                      </p>
                      <div className="flex items-center text-xs text-slate-500 mt-1">
                        <FiPhone size={12} className="mr-1.5" />
                        {order.shippingInfo.phone}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-600">
                      <div className="flex items-center">
                        <FiCalendar size={14} className="mr-2 text-slate-400" />
                        {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <p className="text-base font-black text-slate-800">
                        ৳{order.total}
                      </p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter">
                        Paid Online
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          order.paymentStatus === "paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        <FiClock className="mr-1.5" />
                        {order.paymentStatus.toUpperCase()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {paymentOrders.length === 0 && (
          <div className="bg-white p-12 md:p-20 text-center rounded-2xl border-2 border-dashed border-slate-200 mt-4">
            <FiBookOpen size={40} className="mx-auto text-slate-200 mb-4" />
            <h2 className="text-lg font-bold text-slate-800">
              No History Found
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              You haven't made any purchases yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
