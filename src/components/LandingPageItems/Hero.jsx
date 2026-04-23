import { motion } from "framer-motion";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import heroBooks from "../../assets/hero-books.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden bg-gradient-to-br from-[#eef2ee] via-[#e4ebe6] to-[#f3e7d7]"
    >
      {/* Decorative blurs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-[#7aa889]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#e6c79c]/30 blur-3xl pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1f2d26 1px, transparent 1px), linear-gradient(90deg, #1f2d26 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass shadow mb-6">
            <BsStars className="w-3.5 h-3.5 text-[#e0a96d]" />
            <span className="text-xs font-medium text-[#1f2d26]">
              Over 50,000 books resold sustainably
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Smart Learning <br />
            Deeper & More <br />
            <span className="text-orange-500">-Amazing</span>{" "}
          </h1>

          {/* Text */}
          <p className="mt-6 text-lg text-[#5f6f65] max-w-xl">
            Give books a second life. Discover affordable reads, connect with
            local readers, and turn your shelf into earnings — all in one
            beautifully simple marketplace.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 rounded-full h-14 px-7 bg-[#2f6f55] text-white hover:bg-[#3f8a6a] transition">
              Browse Books
              <FaArrowRight />
            </button>

            <button className="rounded-full h-14 px-7 border border-[#d6d6d6] text-[#1f2d26] bg-white hover:bg-[#f5f5f5] transition">
              Sell Your Book
            </button>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-lg bg-white shadow-lg rounded-full p-1.5 flex items-center gap-2">
            <div className="pl-4 text-[#8a9a90]">
              <FaSearch />
            </div>

            <input
              type="text"
              placeholder="Try ‘Atomic Habits’ or ‘Engineering Mathematics’"
              className="flex-1 bg-transparent outline-none text-sm py-3 text-[#1f2d26] placeholder:text-[#8a9a90]"
            />

            <button className="rounded-full bg-[#1f2d26] text-white h-10 px-5 text-sm">
              Search
            </button>
          </div>

          {/* Users */}
          <div className="mt-10 flex items-center gap-6 text-sm text-[#5f6f65]">
            <div className="flex -space-x-2">
              {[
                "bg-green-300",
                "bg-yellow-300",
                "bg-red-300",
                "bg-blue-300",
              ].map((c, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${c} border-2 border-white`}
                />
              ))}
            </div>

            <div>
              <div className="font-semibold text-[#1f2d26]">
                12,000+ readers
              </div>
              <div className="text-xs">trade books every month</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        {/* Floating chip 1 */}
        <motion.div className="absolute top-6 right-2 md:right-80 z-20 glass shadow-elegant rounded-2xl px-4 py-3 flex items-center gap-3 animate-float-slow">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <span className="text-lg">📚</span>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Sold today</div>
            <div className="text-sm font-semibold">+248 books</div>
          </div>
        </motion.div>
        {/* Floating chip 2 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-0 md:right-4 z-20 glass shadow-elegant rounded-2xl px-4 py-3 animate-float"
        >
          <div className="text-xs text-muted-foreground">Saved by readers</div>
          <div className="text-lg font-display font-semibold text-gradient-primary">
            $1.2M+
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center "
        >
          {/* glow */}
          <div className="absolute w-[400px] pointer-events-none h-[400px] bg-linear-to-br from-[#7aa889] to-[#e6c79c] blur-3xl rounded-full" />

          <motion.img
            src={heroBooks}
            alt="books"
            className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl  "
            animate={{
              y: [0, -15, 0], // up-down
              rotate: [0, -5, 0], // slight left tilt
            }}
            transition={{
              duration: 6, // slow animation
              ease: "easeInOut",
              repeat: Infinity, // infinite loop
            }}
            style={{
              filter: "drop-shadow(0 30px 40px hsl(158 45% 22% / 0.25))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
