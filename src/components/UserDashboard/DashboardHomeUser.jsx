import AuthorsSection from "./AuthorsSection";
import BestPopularSection from "./BestPopularSection";
import FreeBooksSection from "./FreeBooksSection";
import HeroBanner from "./HeroBanner";

const DashboardHomeUser = () => {
  return (
    // Main container with light grey background like the dashboard
    <div className="min-h-screen p-4 bg-neutral-50  rounded-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
        {/* Left main content area (70% width on large screens) */}
        <div className="grow lg:w-[90%]">
          <HeroBanner />
          <BestPopularSection />
        </div>

        {/* Right sidebar area (30% width on large screens) */}
        <div className="flex flex-col gap-4 lg:w-[30%]">
          <AuthorsSection />
          <FreeBooksSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardHomeUser;
