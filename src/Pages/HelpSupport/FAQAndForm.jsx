// components/FAQAndForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import {
  BiBookOpen,
  BiChevronDown,
  BiCreditCard,
  BiSearch,
  BiSend,
} from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { RiRefreshLine } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import FAQSection from "./FAQSection";

const faqs = [
  {
    id: 1,
    question: "How can I buy a book?",
    answer:
      "Click on 'Buy Now' button, fill in your details and place the order.",
    icon: CiShoppingCart,
  },
  {
    id: 2,
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 2-3 working days depending on your location.",
    icon: BsTruck,
  },
  {
    id: 3,
    question: "What is the refund policy?",
    answer: "You can request a refund within 3 days if the product is damaged.",
    icon: RiRefreshLine,
  },
  {
    id: 4,
    question: "How can I contact the seller?",
    answer:
      "You can contact the seller via the message option or support page.",
    icon: FiMessageCircle,
  },
  {
    id: 5,
    question: "What payment methods are accepted?",
    answer: "We accept Cash on Delivery and Card payments.",
    icon: BiCreditCard,
  },
  {
    id: 6,
    question: "Can I track my order?",
    answer:
      "Yes, you can track your order from your dashboard after placing it.",
    icon: BiSearch,
  },
];

const FAQAndForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form Section */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <BiSend className="text-emerald-600" size={22} />
          <h2 className="text-xl font-bold text-gray-800">Contact Support</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email
            </label>
            <input
              {...register("email", { required: true })}
              placeholder="you@example.com"
              className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows="4"
              placeholder="Write your problem here..."
              className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
            ></textarea>
          </div>
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-200 active:scale-[0.98]">
            <BiSend size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQAndForm;
