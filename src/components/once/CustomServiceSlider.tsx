import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
  type TargetResolver,
} from "framer-motion";
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

  // ✅ Typed transitions
  const springTransition: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 1.2,
  };

  const smoothTransition: Transition = {
    type: "tween",
    ease: [0.4, 0.0, 0.2, 1],
    duration: 0.9,
  };

  // ✅ Variants with proper TargetResolver typing
  const centerVariants: Variants = {
    enter: ((dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? 15 : -15,
    })) as TargetResolver,
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        ...springTransition,
        opacity: { duration: 0.7, ease: "easeOut" },
        scale: { ...springTransition, delay: 0.2 },
      },
    },
    exit: ((dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? -15 : 15,
      transition: smoothTransition,
    })) as TargetResolver,
  };

  const sideVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      filter: "blur(4px)",
    },
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        ...springTransition,
        opacity: { duration: 0.8, ease: "easeOut" },
        filter: { duration: 0.5, delay: 0.3 },
        scale: { ...springTransition, delay: 0.2 },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      filter: "blur(4px)",
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const buttonVariants: Variants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
    tap: {
      scale: 0.95,
      transition: { type: "spring", stiffness: 600, damping: 30 },
    },
  };

  const textContainerVariants: Variants = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
    exit: { opacity: 0 },
  };

  const textItemVariants: Variants = {
    enter: { y: 30, opacity: 0 },
    center: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { y: -20, opacity: 0 },
  };

  const leftIndex = (currentIndex - 1 + data.length) % data.length;
  const rightIndex = (currentIndex + 1) % data.length;

  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row w-full gap-5 pt-10 md:pt-20">
        {/* Left Image */}
        <div className="w-full md:w-[30%] shadow-xl rounded-xl overflow-hidden h-52 md:h-72">
          <AnimatePresence mode="popLayout">
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
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={centerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col"
            >
              <motion.img
                src={data[currentIndex].image}
                alt={data[currentIndex].title}
                className="w-full h-56 md:h-96 rounded-xl object-cover"
                initial={{ scale: 1.1, filter: "blur(2px)" }}
                animate={{
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    scale: { ...springTransition, delay: 0.5 },
                    filter: { duration: 0.6, delay: 0.6 },
                  },
                }}
              />
              <motion.div
                variants={textContainerVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.h3
                  variants={textItemVariants}
                  className="font-bold text-2xl md:text-[40px] text-[#274185] mt-5 mb-3"
                >
                  {data[currentIndex].title}
                </motion.h3>
                <motion.p
                  variants={textItemVariants}
                  className="text-base md:text-2xl font-normal"
                >
                  {data[currentIndex].description}
                </motion.p>
                <motion.button
                  variants={{ ...textItemVariants, ...buttonVariants }}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-[#00103B] rounded-xl text-white py-3 md:py-3.5 mt-4 flex justify-center items-center gap-2"
                >
                  <span className="text-lg md:text-2xl">اكتشف المزيد</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex w-full items-center justify-center gap-3.5 mt-4 md:mt-6">
            <motion.div
              onClick={handlePrev}
              className="bg-[#274185] rounded-full w-12 h-12 md:w-[50px] md:h-[50px] text-white flex items-center justify-center cursor-pointer"
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
            >
              <MdArrowForward />
            </motion.div>
            <motion.div
              onClick={handleNext}
              className="border border-[#274185] rounded-full w-12 h-12 md:w-[50px] md:h-[50px] flex items-center justify-center cursor-pointer"
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
            >
              <MdArrowBack />
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[30%] shadow-xl rounded-xl overflow-hidden h-52 md:h-72">
          <AnimatePresence mode="popLayout">
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
