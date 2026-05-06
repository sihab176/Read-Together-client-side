const HeroBanner = () => {
  return (
    <div className="p-10 mb-8 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100 min-h-[360px] flex flex-col justify-between relative">
      {/* Background image overlay with opacity */}
      <img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2698&auto=format&fit=crop"
        alt="Bookstore background"
        className="absolute inset-0 object-cover w-full h-full opacity-30"
      />
      {/* Banner Content (Relative to be on top of bg) */}
      <div className="relative z-8 max-w-2xl">
        <p className="mb-4 text-sm  tracking-wider text-green-700 uppercase">
          Garrison Keillor
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight">
          A Book is a gift you can open again and again!
        </h1>
        <p className="mb-10 text-sm max-w-xl leading-relaxed text-neutral-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          ante id nunc faucibus ultricies quis quis ante. Ut feugiat suscipit
          facilisis.
        </p>
      </div>
      <div className="relative z-8 flex items-center gap-4">
        {/* Orange button replaced with Green primary button */}
        <button className="px-6 py-2 text-white transition duration-150 rounded-xl gradient-bg shadow-[0_10px_20px_rgba(22,163,74,0.3)]">
          Claim Discount
        </button>
        <button className="px-6 py-2 text-white transition duration-150 border rounded-xl border-neutral-100 hover:bg-white/10">
          Open Flash Sale
        </button>
      </div>
    </div>
  );
};
export default HeroBanner;
