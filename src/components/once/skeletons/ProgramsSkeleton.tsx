import PagesHeroSection from "../../reuse/hero/PagesHeroSection";
import Divider from "../../reuse/divider/Divider";

const ProgramsSkeleton = () => {
  return (
    <PagesHeroSection extraHeight="min-h-screen">
      <div className="w-full mt-20 grid grid-cols-2 gap-6">
        {/* Left side skeleton */}
        <div>
          <div className="h-10 w-2/3 bg-gray-300 rounded animate-pulse mb-5"></div>
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-11"></div>
          <Divider />
          <div className="mt-11 flex items-center gap-8">
            <div className="h-14 w-32 bg-gray-300 rounded animate-pulse"></div>
            <div className="flex gap-5">
              <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="h-12 w-48 bg-gray-200 rounded-xl mt-6 animate-pulse"></div>
        </div>

        {/* Right side skeleton */}
        <div className="mt-20 relative">
          <div className="h-[450px] w-full bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </PagesHeroSection>
  );
};

export default ProgramsSkeleton;
