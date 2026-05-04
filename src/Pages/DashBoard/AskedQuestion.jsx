import React from "react";

import FAQSection from "../HelpSupport/FAQSection";
import { BiCreditCard, BiSearch } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { RiRefreshLine } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";

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
const AskedQuestion = () => {
  return (
    <div className="">
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default AskedQuestion;
