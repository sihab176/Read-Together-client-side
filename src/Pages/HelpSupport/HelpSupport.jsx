// pages/HelpSupport.jsx
import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import SupportCards from "./SupportCards";
import FAQAndForm from "./FAQAndForm";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfd] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-2xl mb-4 text-emerald-600">
            <FaHandsHelping size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Help & Support
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Find answers to common questions or reach out to our support team.
            We're here to help you 24/7.
          </p>
        </div>

        {/* Support Cards Section */}
        <SupportCards />

        {/* FAQ and Contact Form Section */}
        <FAQAndForm />
      </div>
    </div>
  );
};

export default HelpSupport;
