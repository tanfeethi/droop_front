import WrapperContainer from "../../reuse/WrapperContainer";

const ServiceSliderSKL = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row w-full gap-5 pt-10 md:pt-20 animate-pulse">
        {/* Left Image Skeleton */}
        <div className="w-full md:w-[30%] shadow-xl rounded-xl overflow-hidden h-52 md:h-72 bg-gray-200" />

        {/* Center Content Skeleton */}
        <div className="w-full md:w-[40%] bg-white shadow-xl rounded-xl overflow-hidden p-5 md:p-7 flex flex-col">
          <div className="w-full h-56 md:h-96 bg-gray-200 rounded-xl" />
          <div className="mt-5 space-y-3">
            <div className="h-7 md:h-10 bg-gray-200 rounded w-3/4" />
            <div className="h-5 md:h-7 bg-gray-200 rounded w-full" />
            <div className="h-5 md:h-7 bg-gray-200 rounded w-5/6" />
            <div className="h-11 md:h-12 bg-gray-300 rounded-xl mt-4" />
          </div>
          <div className="flex items-center justify-center gap-3.5 mt-4 md:mt-6">
            <div className="bg-gray-300 rounded-full w-12 h-12 md:w-[50px] md:h-[50px]" />
            <div className="bg-gray-300 rounded-full w-12 h-12 md:w-[50px] md:h-[50px]" />
          </div>
        </div>

        {/* Right Image Skeleton */}
        <div className="w-full md:w-[30%] shadow-xl rounded-xl overflow-hidden h-52 md:h-72 bg-gray-200" />
      </div>
    </WrapperContainer>
  );
};

export default ServiceSliderSKL;
