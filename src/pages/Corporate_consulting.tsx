import { useState } from "react";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import Header from "../components/reuse/header/Header";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import WrapperContainer from "../components/reuse/WrapperContainer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";

const Corporate_consulting = () => {
  const { t } = useTranslation("corporate");

  // services come from translation files
  const servicesData = t("corporateConsulting.services", {
    returnObjects: true,
  }) as { title: string; description: string; imageUrl?: string }[];

  // add static images while keeping texts from translation
  const servicesWithImages = [
    { ...servicesData[0], imageUrl: "/assets/images/coop1.webp" },
    { ...servicesData[1], imageUrl: "/assets/images/image2.webp" },
    { ...servicesData[2], imageUrl: "/assets/images/service1.webp" },
    { ...servicesData[3], imageUrl: "/assets/images/service2.webp" },
  ];

  const [selectedService, setSelectedService] = useState(servicesWithImages[0]);

  return (
    <>
      <PagesHeroSection
        bgImage="/assets/images/imag1.jpg"
        topOverlayColor="rgba(9, 1, 50, 0.52)"
      >
        <RoundedButtton className="bg-white/20 p-3 h-fit">
          {t("corporateConsulting.heroButton")}
        </RoundedButtton>
      </PagesHeroSection>

      <section className="w-full h-[150px] mt-20 mb-15 md:mb-0">
        <div className="relative">
          <Header
            spacing={i18n.language === "ar" ? "right-[10%]" : "left-[10%]"}
            roundedSide={i18n.language === "ar" ? "left" : "right"}
            title={t("corporateConsulting.headerTitle")}
            subtitle={t("corporateConsulting.headerSubtitle")}
          />
        </div>
      </section>

      <WrapperContainer>
        <section className="flex flex-col gap-14 w-full py-14 md:flex-row relative">
          {/* Content Side */}
          <div className="w-full flex md:w-[70%] relative">
            <div className="flex flex-col gap-y-12 w-full relative">
              {servicesWithImages.map((service, idx) => {
                const isActive = selectedService.title === service.title;
                return (
                  <div
                    key={idx}
                    className="relative cursor-pointer w-full"
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Background highlight */}
                    {isActive && (
                      <motion.div
                        layoutId="highlight"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 border-r-4 border-r-[#274185] bg-gradient-to-r from-[#E4E7F2] to-[#F9FAFF] rounded-lg rounded-r-none"
                      />
                    )}

                    {/* Content */}
                    <div className="relative flex flex-col py-5 px-3 w-full text-[#000D30]">
                      <span
                        className={`mr-5 text-2xl font-extrabold mb-3 ${
                          isActive ? "text-[#274185]" : "text-gray-700"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`mr-5 font-bold md:text-xl ${
                          isActive ? "text-black" : "text-gray-500"
                        }`}
                      >
                        {service.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Side */}
          <div className="hidden w-[35%] flex-shrink-0 md:block">
            <div className="h-full bg-[#00103B] rounded-2xl p-5">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>
      </WrapperContainer>
    </>
  );
};

export default Corporate_consulting;
