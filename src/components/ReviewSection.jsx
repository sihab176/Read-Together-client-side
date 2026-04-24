import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewSection = () => {
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  const ratingData = [
    { stars: 5, percentage: 0 },
    { stars: 4, percentage: 0 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white border border-gray-100 rounded-sm font-sans">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Rating Summary */}
        <div className="w-full md:w-1/3">
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-6xl font-bold text-[#001e1d]">0.0</h1>
            <div className="pt-2">
              <p className="text-sm font-medium text-gray-700">
                Average Rating
              </p>
              <div className="flex text-gray-300 my-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
                <span className="text-xs text-gray-400 ml-2">(0 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#001e1d]">
              0.00%{" "}
              <span className="text-sm font-normal text-gray-500 ml-2">
                Recommended{" "}
                <span className="text-gray-400 font-light">(1 of 3)</span>
              </span>
            </h2>
          </div>

          {/* Rating Bars */}
          <div className="space-y-3">
            {ratingData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex text-orange-500 min-w-[80px]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i < item.stars ? "text-orange-500" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-200"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 w-8">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Review Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-bold text-[#001e1d] mb-1 relative inline-block">
            Submit Your Review
            <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-orange-500"></span>
          </h2>

          <p className="text-sm text-gray-500 mt-6 mb-6 italic">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Write your opinion about the product
              </label>
              <textarea
                className="w-full border border-gray-200 rounded-sm p-4 text-sm focus:outline-none focus:border-orange-400 min-h-[150px] transition-colors"
                placeholder="Write Your Review Here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Rating:
              </label>
              <select
                className="w-full border border-gray-200 rounded-sm p-3 text-sm text-gray-500 focus:outline-none focus:border-orange-400 bg-white appearance-none transition-colors"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1em",
                }}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select One</option>
                <option value="5">5 Star - Excellent</option>
                <option value="4">4 Star - Good</option>
                <option value="3">3 Star - Average</option>
                <option value="2">2 Star - Poor</option>
                <option value="1">1 Star - Terrible</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#444] text-white px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-[#333] transition-colors mt-4"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
