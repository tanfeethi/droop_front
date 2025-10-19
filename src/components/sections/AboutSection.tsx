import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import WrapperContainer from "../../components/reuse/WrapperContainer";
import SectionWithButtons from "../../components/reuse/SectionWithButtons";
import ImageCard from "../../components/reuse/Card/ImageCard";
import VissionMetionSection from "../../components/reuse/vision_Metion/VissionMetionSection";

interface AboutSectionProps {
  aboutData?: {
    text: string;
  };
}

const AboutSection = ({ aboutData }: AboutSectionProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation("home");

  return (
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
  );
};

export default AboutSection;
