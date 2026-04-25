import {
  FaGraduationCap,
  FaBookOpen,
  FaLightbulb,
  FaTrophy,
  FaChild,
  FaCode,
} from "react-icons/fa";

const categories = [
  {
    title: "Academic",
    books: "12.4k books",
    icon: FaGraduationCap,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Fiction",
    books: "8.2k books",
    icon: FaBookOpen,
    color: "bg-red-100 text-red-500",
  },
  {
    title: "Non-Fiction",
    books: "6.7k books",
    icon: FaLightbulb,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Competitive",
    books: "4.1k books",
    icon: FaTrophy,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Children's",
    books: "3.8k books",
    icon: FaChild,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Tech & Code",
    books: "5.5k books",
    icon: FaCode,
    color: "bg-teal-100 text-teal-600",
  },
];

const AboutStats = () => {
  return (
    <section className="flex items-center justify-center bg-[#f5f5f3] h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Top Badge */}
        <div className="inline-block px-4 py-1 text-xs font-medium tracking-wide bg-[#e8dcc7] text-gray-700 rounded-full mb-5">
          BROWSE BY CATEGORY
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Find your next favorite{" "}
          <span className="primary-text">read</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Thousands of pre-loved books across every genre, waiting to find a new
          home.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mt-12">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="bg-white md:w-[200px] rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition duration-300"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl mb-4 ${cat.color}`}
                >
                  <Icon size={18} />
                </div>

                <h4 className="font-semibold text-gray-800">{cat.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{cat.books}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
