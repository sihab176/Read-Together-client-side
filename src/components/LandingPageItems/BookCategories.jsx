import { useState } from "react";
import {
  MdOutlineTranslate,
  MdOutlineDesktopWindows,
  MdOutlineEditNote,
  MdOutlineAccountBalance,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

const categories = [
  {
    id: 1,
    title: "Language",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineTranslate size={36} />,
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineDesktopWindows size={36} />,
  },
  {
    id: 3,
    title: "Content Writing",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineEditNote size={36} />,
  },
  {
    id: 4,
    title: "Finance",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineAccountBalance size={36} />,
  },
  {
    id: 5,
    title: "Marketing",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineTranslate size={36} />,
  },
  {
    id: 6,
    title: "UI/UX",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineDesktopWindows size={36} />,
  },
  {
    id: 7,
    title: "SEO",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineEditNote size={36} />,
  },
  {
    id: 8,
    title: "Business",
    description: "Lorem Ipsum text.",
    icon: <MdOutlineAccountBalance size={36} />,
  },
];

export default function BookCategories() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 5;

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + visibleCount,
  );

  // 👉 middle index (2nd card)
  const middleIndex = 2;

  const handleNext = () => {
    if (startIndex + visibleCount < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Course Categories
        </h2>

        <div className="flex items-center gap-4">
          {/* Left */}
          <button
            onClick={handlePrev}
            className="w-9 h-9 border rounded-full flex items-center justify-center active:scale-95 transition"
          >
            <MdChevronLeft />
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-5 gap-4">
            {visibleCategories.map((cat, index) => {
              const isActive = index === middleIndex;

              return (
                <div
                  key={cat.id}
                  className={`rounded-2xl p-6 text-center transition ${
                    isActive
                      ? "bg-[#1a6b5a] text-white scale-105"
                      : "bg-[#fdf5f0]"
                  }`}
                >
                  <div className="mb-3 flex justify-center">{cat.icon}</div>

                  <h3 className="font-semibold">{cat.title}</h3>
                  <p className="text-xs">{cat.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right */}
          <button
            onClick={handleNext}
            className="w-9 h-9 border rounded-full flex items-center justify-center active:scale-95 transition"
          >
            <MdChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
