import React, { useState, useEffect } from "react";
import { LuClock, LuChevronRight, LuDot } from "react-icons/lu"; // Modern Lucide icons
import { RiBook2Line } from "react-icons/ri"; // Remix icon for variety

const SummerReadingSale = () => {
  // Timer Logic: Set to match the "02 Days" state in image_eddca4.jpg
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 15,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen flex items-center justify-center ">
      {/* Container: Primary Green Gradient as requested */}
      <div className="relative bg-linear-to-br from-[#034b11] via-emerald-700 to-teal-900 rounded-[40px] shadow-2xl shadow-green-200/40 p-10 md:p-16 max-w-7xl w-full overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-white/10">
        {/* Subtle Background Pattern using React Icons */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-8 p-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <LuDot key={i} className="text-white text-2xl" />
          ))}
        </div>

        {/* Left Content */}
        <div className="flex-1 z-10 space-y-6 text-center md:text-left">
          {/* Label Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <LuClock className="text-white mr-2 text-sm" />
            <span className="text-white text-[11px] font-bold uppercase tracking-widest">
              Limited time
            </span>
          </div>

          {/* Main Headline from image_eddca4.jpg */}
          <h1 className="text-white md:text-6xl text-4xl font-black leading-[1.1] tracking-tighter">
            Up to <span className="text-emerald-200">50% OFF</span> <br />
            Summer Reading Sale
          </h1>

          <p className="text-emerald-50 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0 opacity-90">
            Stock up your shelf — bestsellers, new releases, and timeless
            classics, all on sale this weekend.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <button className="group bg-white text-emerald-700 font-bold px-10 py-4 rounded-full text-base shadow-lg hover:shadow-emerald-900/20 transition-all flex items-center gap-2">
              Shop the sale
              <LuChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white font-semibold px-6 py-4 hover:bg-white/10 rounded-full transition-colors">
              See all deals
            </button>
          </div>
        </div>

        {/* Right Countdown: Glassmorphism Design */}
        <div className="z-10 flex flex-col items-center md:items-end gap-6">
          <span className="text-emerald-100 text-[10px] font-black uppercase tracking-[0.3em] opacity-80">
            Sale ends in
          </span>

          <div className="flex items-center gap-3 md:gap-4">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEC", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[24px] md:w-24 md:h-24 w-16 h-16 flex items-center justify-center shadow-xl">
                  <span className="text-white md:text-4xl text-2xl font-black tracking-tighter">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-emerald-100 text-[10px] font-bold mt-3 tracking-widest">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Book Icon in background */}
        <RiBook2Line className="absolute -bottom-10 -right-10 text-white opacity-5 text-[300px] rotate-12" />
      </div>
    </div>
  );
};

export default SummerReadingSale;
