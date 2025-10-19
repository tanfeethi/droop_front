import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import WrapperContainer from "../../components/reuse/WrapperContainer";
import SectionWithButtons from "../../components/reuse/SectionWithButtons";
import BackgroundCard from "../../components/reuse/Card/BackgroundCard";

interface Service {
  icon: string;
  title: string;
  text: string;
}

interface ServicesSectionProps {
  servicesData?: Service[];
}

const ServicesSection = ({ servicesData }: ServicesSectionProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation("home");

  return (
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
  );
};

export default ServicesSection;
