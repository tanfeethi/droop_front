import { TfiThumbUp } from "react-icons/tfi";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import ImageCard from "../components/reuse/Card/ImageCard";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import VissionMetionSection from "../components/reuse/vision_Metion/VissionMetionSection";
import WrapperContainer from "../components/reuse/WrapperContainer";
import InfoCard from "../components/reuse/Card/InfoCard";
import { PiCertificateFill } from "react-icons/pi";
import NumberDisplay from "../components/once/NumberDisplay";
import { useFetchStaticPages } from "../hooks/staticPages/useFetchStaticPages";
import { FaHandsHelping } from "react-icons/fa";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  const { data: staticData } = useFetchStaticPages();
  const aboutData = staticData?.find((item) => item.name === "about_us");

  // Ensure achievements is always an array
  const achivementData = t("about.achievements", {
    returnObjects: true,
  }) as unknown as string[];

  const achievementsArray = Array.isArray(achivementData) ? achivementData : [];

  return (
    <>
      <PagesHeroSection
        bgImage="/assets/images/imag1.jpg"
        topOverlayColor="rgba(9, 1, 50, 0.52)"
      >
        <RoundedButtton
          children={t("about.hero_button")}
          className="bg-white/20 p-3 h-fit w-[250px]"
        />
      </PagesHeroSection>

      <section className="mt-14">
        <WrapperContainer>
          <h1 className="text-4xl text-[#274185] font-extrabold mb-10">
            {t("about.title")}
          </h1>
          <p className="w-[98%]">
            <span className="block mb-7 text-xl font-normal"></span>
            <span className="block text-xl font-normal">
              {DOMPurify.sanitize(aboutData?.text || "", {
                ALLOWED_TAGS: [],
              })}
            </span>
          </p>
          <VissionMetionSection />
        </WrapperContainer>
        <ImageCard
          extraClassName="rounded-none h-[500px]"
          bgImage="/assets/images/contactOverlayImage.webp"
          bgGradient="linear-gradient(to bottom, rgba(0,16,59,0.5), rgba(39,65,133,0.5))"
          text={t("about.values_section")}
          textClassName="text-5xl"
        />
      </section>

      <section className="bg-[#FDFFFF] md:p-28">
        <WrapperContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-16">
            <InfoCard
              icon={<TfiThumbUp className="text-6xl scale-x-[-1]" />}
              title={t("about.info_cards.transparency_title")}
              description={t("about.info_cards.transparency_desc")}
            />
            <InfoCard
              icon={<PiCertificateFill className="text-6xl scale-x-[-1]" />}
              title={t("about.info_cards.quality_title")}
              description={t("about.info_cards.quality_desc")}
            />

            <InfoCard
              icon={<HiMiniRectangleGroup className="text-6xl scale-x-[-1]" />}
              title={t("about.info_cards.impact_title")}
              description={t("about.info_cards.impact_desc")}
            />
            <InfoCard
              icon={<FaHandsHelping className="text-6xl scale-x-[-1]" />}
              title={t("about.info_cards.partnerships_title")}
              description={t("about.info_cards.partnerships_desc")}
            />
          </div>
        </WrapperContainer>
      </section>

      <section className="flex flex-col w-full bg-[#F9FAFF] py-14 md:flex-row">
        {/* Image Side */}
        <div className="hidden w-[30%] flex-shrink-0 md:block">
          <div className="h-full">
            <img
              src="/assets/images/GroupImage.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full flex md:w-[70%]">
          <WrapperContainer>
            <div className="flex flex-col justify-between h-full">
              <h5 className="text-6xl font-extrabold text-blue-900 mb-6">
                {t("about.achievements_title")}
              </h5>

              {achievementsArray.map((desc, idx) => (
                <div className="flex items-center mb-4" key={idx}>
                  <div className="flex items-center border-l-4 w-fit bg-gradient-to-r from-[#E4E7F2] to-[#F9FAFF] border-l-[#274185] py-5 text-[#000D30] rounded-l-[5px]">
                    <span className="ml-5 font-bold md:text-xl">{desc}</span>
                  </div>
                  <NumberDisplay number={`0${idx + 1}`} />
                </div>
              ))}
            </div>
          </WrapperContainer>
        </div>
      </section>
    </>
  );
};

export default About;
