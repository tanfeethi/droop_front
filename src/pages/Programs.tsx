import { useState } from "react";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";
import Divider from "../components/reuse/divider/Divider";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import WrapperContainer from "../components/reuse/WrapperContainer";
import Header from "../components/reuse/header/Header";
import Sector from "../components/reuse/Sector";
import { useFetchProgSliders } from "../hooks/programsSliders/useFetchProgSliders";
import { motion, AnimatePresence } from "framer-motion";
import ProgramsSkeleton from "../components/once/skeletons/ProgramsSkeleton";

interface SlideData {
  title: string;
  description: string;
  image: string;
}

const Programs = () => {
  const { data: programsData } = useFetchProgSliders();

  const data: SlideData[] =
    programsData?.map((item) => ({
      title: item.title || "",
      description: item.text || "",
      image: item.background || "",
    })) ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  if (!data.length) {
    return <ProgramsSkeleton />;
  }

  return (
    <>
      <PagesHeroSection extraHeight="h-[600px]">
        <div className="w-full mt-20 grid grid-cols-2">
          {/* === LEFT SIDE (Text + Buttons) === */}
          <div>
            <h1 className="text-4xl font-bold mb-5">برامجنا المتخصصة</h1>
            <p className="text-2xl font-normal mb-11">
              نحرص على تقديم برامج مرنة تواكب احتياجات كلا من :
            </p>
            <Divider />

            <div className="mt-11 flex items-center gap-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl font-bold block"
                >
                  {data[currentIndex].title}
                </motion.span>
              </AnimatePresence>

              <div className="bg-[#5785FF] p-2 rounded-full flex justify-between gap-5 px-5">
                <button
                  onClick={handleNext}
                  className="border-2 border-[#274185] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer"
                >
                  <IoArrowForwardOutline className="text-3xl text-[#274185]" />
                </button>
                <button
                  onClick={handlePrev}
                  className="bg-[#274185] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer"
                >
                  <IoArrowBack className="text-3xl" />
                </button>
              </div>
            </div>

            <RoundedButtton
              className="bg-blue-600/30 p-3 h-fit w-[250px] mt-6"
              onClick={() => {
                window.scrollBy({ top: 600, behavior: "smooth" });
              }}
            >
              <span className="flex items-center gap-5">
                رؤية التفاصيل
                <MdKeyboardDoubleArrowDown className="bg-[#416AD7] rounded-full text-4xl p-1" />
              </span>
            </RoundedButtton>
          </div>

          {/* === RIGHT SIDE (Image) === */}
          <div>
            <div className="mt-20 relative">
              <img src="/assets/images/laptop.webp" alt="" />

              <div className="absolute inset-0 right-0 p-2">
                <WrapperContainer>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentIndex}
                        src={data[currentIndex].image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatePresence>
                  </div>
                </WrapperContainer>
              </div>
            </div>
          </div>
        </div>
      </PagesHeroSection>

      {/* === DETAILS SECTION === */}
      <section className="w-full mt-50">
        <div className="relative mb-26">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Header
                title={data[currentIndex].title}
                subtitle={data[currentIndex].description}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <WrapperContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              {programsData &&
                programsData[currentIndex]?.details?.map((item, index) => (
                  <Sector
                    key={index}
                    number={`0${index + 1}`}
                    strokeColor="#00103B"
                    size={120}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </WrapperContainer>
      </section>
    </>
  );
};

export default Programs;
