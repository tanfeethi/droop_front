import { FaArrowRight } from "react-icons/fa";
import im1 from "/assets/heroCarousel/im1.webp";
import im2 from "/assets/heroCarousel/im2.webp";
import im3 from "/assets/heroCarousel/im3.webp";
import im4 from "/assets/heroCarousel/im4.webp";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselIndicator from "./Carouselndicator";
import WrapperContainer from "../WrapperContainer";

type CarouselProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const carouselData: CarouselProps[] = [
  { id: 1, title: "عنوان رقم 1", description: "وصف رقم 1", image: im1 },
  { id: 2, title: "عنوان رقم 2", description: "وصف رقم 2", image: im2 },
  { id: 3, title: "عنوان رقم 3", description: "وصف رقم 3", image: im3 },
  { id: 4, title: "عنوان رقم 4", description: "وصف رقم 4", image: im4 },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload Images
  useEffect(() => {
    carouselData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  // Next Slide Handler
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % carouselData.length);
  }, []);

  return (
    <section dir="rtl" className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Framer Motion */}
      <AnimatePresence mode="sync">
        <motion.img
          key={carouselData[activeIndex].id}
          src={carouselData[activeIndex].image}
          alt={`slide-${activeIndex}`}
          className="absolute inset-0 w-full h-full object-cover object-top will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          loading={activeIndex === 0 ? "eager" : "lazy"}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#09013285]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center text-white z-10">
        <WrapperContainer>
          <div className="flex items-center gap-9">
            {/* Arrow button */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#00103B] cursor-pointer"
            >
              <FaArrowRight className="text-white w-5 h-5" />
            </button>

            {/* Content */}
            <div className="border-r-2 border-white pr-5">
              {/* Indicators */}
              <div className="flex gap-[10px]">
                {carouselData.map((item, index) => (
                  <CarouselIndicator
                    onClick={() => setActiveIndex(index)}
                    key={item.id}
                    active={index === activeIndex}
                  />
                ))}
              </div>

              {/* Title + Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <h1 className="font-bold text-5xl max-w-[800px] mb-6 mt-12">
                    {carouselData[activeIndex].title}
                  </h1>
                  <p className="max-w-[759px]">
                    {carouselData[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA */}
              <button className="bg-[#274185] py-2.5 px-[86px] mt-14 rounded-[10px] font-bold">
                ابدأ الأن
              </button>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </section>
  );
};

export default HeroCarousel;
