import { useState } from "react";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import Header from "../components/reuse/header/Header";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import WrapperContainer from "../components/reuse/WrapperContainer";
import { motion } from "framer-motion";

const Corporate_consulting = () => {
  const servicesData = [
    {
      title: "إعادة الهيكلة اإلدارية:",
      description:
        "تطوير الهياكل اإلدارية بما يتناسب مع احتياجات المؤسسة ويحقق أقصى استفادة من الموارد.",
      imageUrl: "/assets/images/image1.webp",
    },
    {
      title: "رفع كفاءة اإلنتاجية:",
      description:
        "تحسين العمليات الداخلية لزيادة الكفاءة اإلنتاجية وتحقيق نتائج ملموسة.",
      imageUrl: "/assets/images/image2.webp",
    },
    {
      title: "تطوير السياسات والإجراءات:",
      description:
        "تقديم استشارات لتطوير السياسات والإجراءات بما يتوافق مع أفضل الممارسات العالمية.",
      imageUrl: "/assets/images/service1.webp",
    },
    {
      title: "إدارة التغيير والتحول المؤسسي:",
      description:
        "دعم المؤسسات في عمليات التغيير والتحول المؤسسي لضمان استدامة النجاح والنمو.",
      imageUrl: "/assets/images/service2.webp",
    },
  ];

  // Default selected = first service
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <>
      <PagesHeroSection
        bgImage="/assets/images/image1.jpg"
        topOverlayColor="rgba(9, 1, 50, 0.52)"
      >
        <RoundedButtton
          children="الاستشارات المؤسسية"
          className="bg-white/20 p-3 h-fit"
        />
      </PagesHeroSection>

      <section className="w-full h-[150px] mt-20 mb-15 md:mb-0">
        <div className="relative">
          <Header
            title="الاستشارات المؤسسية"
            subtitle="نقدم برامج تدريبية تهدف إلى تمكين الأفراد من تطوير مهاراتهم الذاتية والتقنية:"
          />
        </div>
      </section>

      <WrapperContainer>
        <section className="flex flex-col gap-14 w-full py-14 md:flex-row relative">
          {/* Content Side */}
          <div className="w-full flex md:w-[70%] relative">
            <div className="flex flex-col gap-y-12 w-full relative">
              {servicesData.map((service, idx) => {
                const isActive = selectedService.title === service.title;
                return (
                  <div
                    key={idx}
                    className="relative cursor-pointer w-full"
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Background highlight that moves */}
                    {isActive && (
                      <motion.div
                        layoutId="highlight"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 border-r-4 border-r-[#274185] bg-gradient-to-r from-[#E4E7F2] to-[#F9FAFF] rounded-lg"
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

          {/* Image Side (no animation) */}
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
