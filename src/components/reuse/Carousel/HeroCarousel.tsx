import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselIndicator from "./Carouselndicator";
import WrapperContainer from "../WrapperContainer";
import { useFetchHeroSlider } from "../../../hooks/heroSlider/heroSlider";

const HeroCarousel = () => {
  const { data: carouselData } = useFetchHeroSlider();

  const [activeIndex, setActiveIndex] = useState(0);

  if (!carouselData || carouselData.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Preload Images
  useEffect(() => {
    carouselData.forEach((item) => {
      const img = new Image();
      img.src = item.background;
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
          src={carouselData[activeIndex].background}
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
                    {carouselData[activeIndex].text}
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
