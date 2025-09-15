import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import WrapperContainer from "../reuse/WrapperContainer";

interface SlideData {
  title: string;
  description: string;
  image: string;
}

const CustomServiceSlider = () => {
  const data: SlideData[] = [
    {
      title: "القطاع الحكومي",
      description:
        "نقدم برامج تدريبية متخصصة لدعم التحول المؤسسي وتعزيز كفاءة الاداء في الجهات الحكومية",
      image: "/assets/images/service1.webp",
    },
    {
      title: "القطاع الخاص",
      description:
        "نقدم برامج تدريبية متخصصة لدعم التحول المؤسسي وتعزيز كفاءة الاداء في الجهات الحكومية",
      image: "/assets/images/service2.webp",
    },
    {
      title: "الافراد",
      description:
        "نقدم برامج تدريبية متخصصة لدعم التحول المؤسسي وتعزيز كفاءة الاداء في الجهات الحكومية",
      image: "/assets/images/service1.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const centerVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  const sideVariants: Variants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  const leftIndex = (currentIndex - 1 + data.length) % data.length;
  const rightIndex = (currentIndex + 1) % data.length;

  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row w-full gap-5 pt-10 md:pt-20">
        {/* Left Image */}
        <div className="w-full md:w-[30%] shadow-xl rounded-xl overflow-hidden h-52 md:h-72">
          <AnimatePresence mode="wait">
            <motion.img
              key={leftIndex}
              src={data[leftIndex].image}
              alt={data[leftIndex].title}
              className="w-full h-full object-cover"
              variants={sideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* Center Content */}
        <div className="w-full md:w-[40%] bg-white shadow-xl rounded-xl overflow-hidden p-5 md:p-7 flex flex-col">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={centerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col"
            >
              <img
                src={data[currentIndex].image}
                alt={data[currentIndex].title}
                className="w-full h-56 md:h-96 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-bold text-2xl md:text-[40px] text-[#274185] mt-5 mb-3">
                  {data[currentIndex].title}
                </h3>
                <p className="text-base md:text-2xl font-normal">
                  {data[currentIndex].description}
                </p>
                <button className="w-full bg-[#00103B] rounded-xl text-white py-3 md:py-3.5 mt-4 flex justify-center items-center gap-2">
                  <span className="text-lg md:text-2xl">اكتشف المزيد</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex w-full items-center justify-center gap-3.5 mt-4 md:mt-6">
            <div
              onClick={handleNext}
              className="bg-[#274185] rounded-full w-12 h-12 md:w-[50px] md:h-[50px] text-white flex items-center justify-center cursor-pointer"
            >
              <MdArrowForward />
            </div>
            <div
              onClick={handlePrev}
              className="border border-[#274185] rounded-full w-12 h-12 md:w-[50px] md:h-[50px] flex items-center justify-center cursor-pointer"
            >
              <MdArrowBack />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[30%] shadow-xl rounded-xl overflow-hidden h-52 md:h-72">
          <AnimatePresence mode="wait">
            <motion.img
              key={rightIndex}
              src={data[rightIndex].image}
              alt={data[rightIndex].title}
              className="w-full h-full object-cover"
              variants={sideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default CustomServiceSlider;
