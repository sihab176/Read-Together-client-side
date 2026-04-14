import React from "react";
import { FaBook, FaRecycle, FaUsers, FaStar } from "react-icons/fa";

const AboutStats = () => {
  const stats = [
    {
      id: 1,
      icon: <FaBook />,
      value: "50k+",
      label: "New Books Available",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 2,
      icon: <FaRecycle />,
      value: "15k+",
      label: "Used Books Collection",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 3,
      icon: <FaUsers />,
      value: "20k+",
      label: "Happy Readers",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      icon: <FaStar />,
      value: "4.8",
      label: "Average Rating",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-indigo-700 uppercase bg-indigo-100 rounded-full mb-4">
            Our Book Store
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Buy New & Used Books at the Best Price 📚
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover thousands of new and pre-loved books. Save money with used books 
            or enjoy the latest releases — all in one place.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-2 text-center"
            >
              
              {/* 🔥 Improved Icon Design */}
              <div
                className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r ${stat.color} text-white text-xl shadow-md group-hover:scale-110 transition`}
              >
                {stat.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                {stat.value}
              </h3>

              <p className="text-gray-500 mt-1 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;