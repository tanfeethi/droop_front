import HeroCarousel from "../components/reuse/Carousel/HeroCarousel";
import WrapperContainer from "../components/reuse/WrapperContainer";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import SectionWithButtons from "../components/reuse/SectionWithButtons";
import BackgroundCard from "../components/reuse/Card/BackgroundCard";
import CustomServiceSlider from "../components/once/CustomServiceSlider";
import ContactForm from "../components/once/ContactForm";
import VissionMetionSection from "../components/reuse/vision_Metion/VissionMetionSection";
import ImageCard from "../components/reuse/Card/ImageCard";
import { useNavigate } from "react-router";
import { useFetchServices } from "../hooks/service/useFetchService";
import { useFetchStaticPages } from "../hooks/staticPages/useFetchStaticPages";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const { data: servicesData } = useFetchServices();
  const { data: staticData } = useFetchStaticPages();
  const aboutData = staticData?.find((item) => item.name === "about_us");
  const { t, i18n } = useTranslation("home");

  return (
    <>
      <HeroCarousel />
      <section className="mb-10 pt-20">
        <WrapperContainer>
          <SectionWithButtons
            onPrimaryClick={() => {
              navigate("/about");
            }}
            title={t("home.about.title")}
            primaryButtonText={t("home.about.primaryButton")}
            secondaryButtonText={t("home.about.secondaryButton")}
            description={aboutData?.text || ""}
          />

          <ImageCard
            extraClassName="rounded-xl h-[400px]"
            bgImage="/assets/images/imag1.jpg"
          />

          <VissionMetionSection />
        </WrapperContainer>
      </section>

      <section className="bg-[#F6F9FF] pt-28">
        <WrapperContainer>
          <SectionWithButtons
            title={t("home.services.title")}
            primaryButtonText={t("home.services.primaryButton")}
            onPrimaryClick={() => {
              navigate("/services");
            }}
            onSecondaryClick={() => {
              navigate("/services");
            }}
            secondaryButtonText={t("home.services.secondaryButton")}
            description={t("home.services.description")}
          />

          <div className="w-full mt-20">
            <div className="grid gap-12 h-[580px] mb-5 grid-cols-1 md:grid-cols-3 ">
              {servicesData?.slice(0, 3).map((service, index) => (
                <BackgroundCard
                  key={index}
                  imageUrl={service.icon}
                  title={service.title}
                  description={service.text}
                />
              ))}
            </div>
          </div>
        </WrapperContainer>
      </section>

      <section className="w-full mt-16 text-center flex flex-col items-center justify-center mb-20">
        <RoundedButtton onClick={() => navigate("/services")} className="mb-9">
          <span className="px-7">{t("home.programs.button")}</span>
        </RoundedButtton>
        <h2 className="font-bold text-4xl text-[#274185]">
          {t("home.programs.title")}
        </h2>
        <p className="text-2xl font-normal mt-5">
          {t("home.programs.description")}
        </p>

        <div className="mt-12 w-full">
          <div
            style={{
              background:
                "linear-gradient(to bottom, #00103A 30%, transparent 30%)",
            }}
          >
            <CustomServiceSlider />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F4F7FF] flex flex-col md:flex-row ">
        <div className="bg-[#F4F7FF] pt-14 md:w-[40%]">
          <div className="md:w-[80%] m-auto">
            <RoundedButtton className="mb-10" type="button">
              <span className="px-5">{t("home.contact.button")}</span>
            </RoundedButtton>
            <p className="text-lg font-normal text-[#000000] mb-26 md:w-[60%]">
              {t("home.contact.description")}
            </p>
          </div>
          <div className="relative hidden md:block">
            <div
              className={`h-64 w-64 absolute ${
                i18n.language === "ar"
                  ? "-translate-x-1/2 -translate-y-1/3"
                  : "translate-x-2/3 -translate-y-1/3"
              } `}
            >
              <img
                src="/assets/images/HeadPhone.webp"
                alt=""
                className="w-full h-full transform -scale-x-100"
              />
            </div>
            <div
              className={`w-1/2 bg-[#274185] h-40 ${
                i18n.language === "ar" ? "rounded-l-full" : "rounded-r-full"
              } `}
            ></div>
          </div>
        </div>

        <div className="bg-[#00103B] py-20 md:w-[60%]">
          <WrapperContainer>
            <ContactForm
              buttonExtraClasses="text-[24px] gap-4 justify-center"
              buttonWidth="w-full"
            />
          </WrapperContainer>
        </div>
      </section>
    </>
  );
};

export default Home;
