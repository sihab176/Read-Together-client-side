import {
  FaTag,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaComments,
  FaLeaf,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    title: "Affordable prices",
    desc: "Books up to 70% off retail — and you set your own price when selling.",
    icon: FaTag,
    color: "bg-green-700 text-white",
  },
  {
    title: "Trusted sellers",
    desc: "Every seller is verified with reviews, ratings, and identity checks.",
    icon: FaShieldAlt,
    color: "bg-gray-200 text-gray-700",
  },
  {
    title: "Location-based search",
    desc: "Find books from readers near you for fast, local pickup.",
    icon: FaMapMarkerAlt,
    color: "bg-gray-200 text-gray-700",
  },
  {
    title: "Easy communication",
    desc: "Built-in chat lets you negotiate, ask questions, and arrange handoffs.",
    icon: FaComments,
    color: "bg-gray-200 text-gray-700",
  },
  {
    title: "Eco-friendly choice",
    desc: "Every resold book saves paper, water, and carbon. Read sustainably.",
    icon: FaLeaf,
    color: "bg-gray-200 text-gray-700",
  },
  {
    title: "Instant payouts",
    desc: "Get paid the moment your book sells — straight to your wallet.",
    icon: FaBolt,
    color: "bg-gray-200 text-gray-700",
  },
];

const WhySection = () => {
  return (
    <section className="py-20 bg-[#f5f5f3]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="inline-block px-4 py-1 text-xs font-medium bg-[#e8dcc7] text-gray-700 rounded-full mb-5">
          WHY BOOKLOOP
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto font-semibold text-gray-900 leading-tight">
          Built for readers,{" "}
          <span className="primary-text ">made for sharing</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl mb-4 ${item.color}`}
                >
                  <Icon size={16} />
                </div>

                {/* Title */}
                <h4 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;