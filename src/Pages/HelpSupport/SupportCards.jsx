import React from "react";
import { FaHandsHelping, FaMailBulk, FaPhone } from "react-icons/fa";

const Card = ({ icon: Icon, title, detail }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center w-full">
    <div className="bg-emerald-50 p-3 rounded-xl mb-4">
      <Icon className="text-emerald-600" size={24} />
    </div>
    <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500">{detail}</p>
  </div>
);

const SupportCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card icon={FaMailBulk} title="Email Us" detail="support@bookstore.com" />
      <Card icon={FaPhone} title="Call Us" detail="+1 (800) 123-4567" />
      <Card
        icon={FaHandsHelping}
        title="Help Center"
        detail="Browse our help articles"
      />
    </div>
  );
};

export default SupportCards;
