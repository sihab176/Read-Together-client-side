import { useState } from "react";
import { BiBookOpen, BiChevronDown } from "react-icons/bi";

export default function FAQSection({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <BiBookOpen className="text-emerald-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-gray-100 rounded-xl">
            
            {/* Question Button */}
            <button
              onClick={() => handleToggle(faq.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-emerald-50/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <faq.icon size={18} className="text-emerald-500" />
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {faq.question}
                </span>
              </div>

              <BiChevronDown
                size={18}
                className={`transition-transform ${
                  openId === faq.id ? "rotate-180 text-emerald-600" : "text-gray-400"
                }`}
              />
            </button>

            {/* Answer */}
            {openId === faq.id && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}