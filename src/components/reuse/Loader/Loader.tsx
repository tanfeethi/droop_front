import { useEffect } from "react";

const PulseLoader = () => {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#314373] to-[#171A46] text-white">
      {/* Pulsing Rings */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute w-24 h-24 rounded-full border-4 border-[#ffffff40] animate-ping"></div>
        <div className="absolute w-24 h-24 rounded-full border-4 border-[#ffffff70] animate-pulse"></div>
        <div className="w-12 h-12 rounded-full bg-white shadow-lg"></div>
      </div>

      {/* Website Name */}
      <h1 className="mt-6 text-2xl md:text-3xl font-bold tracking-wide animate-fadeIn">
        دروب المستقبل
      </h1>
      <p className="mt-2 text-sm opacity-80 animate-fadeIn delay-500">
        استعد للمستقبل بخطوات واثقة
      </p>
    </div>
  );
};

export default PulseLoader;
