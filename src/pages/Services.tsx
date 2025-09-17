import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import ServiceCard from "../components/reuse/Card/ServiceCard";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import WrapperContainer from "../components/reuse/WrapperContainer";
import { useFetchServices } from "../hooks/service/useFetchService";

const Services = () => {
  const { data: serviceData } = useFetchServices();
  return (
    <>
      <PagesHeroSection
        bgImage="/assets/images/image1.jpg"
        topOverlayColor="rgba(9, 1, 50, 0.52)"
      >
        <RoundedButtton
          children="خدماتنا"
          className="bg-white/20 p-3 h-fit w-[250px]"
        />
      </PagesHeroSection>

      <section className="w-full min-h-screen pt-10">
        <WrapperContainer>
          <h1 className="text-[#274185] text-4xl font-bold mb-3">
            خدماتنا التدريبية واالستشارية
          </h1>
          <p className="text-2xl font-normal mr-8">
            نقدم في مركز دروب المستقبل حلولا تدريبية واستشارية شاملة للأفراد
            والمؤسسات، تشمل:
          </p>
          <div className="w-full mt-20">
            <div className="grid gap-12 mb-5 grid-cols-1 md:grid-cols-3 ">
              {serviceData?.map((service, index) => (
                <ServiceCard
                  key={index}
                  imageUrl={service.icon}
                  title={service.title}
                  description={service.text}
                  indexNumber={`0${index + 1}`}
                />
              ))}
            </div>
          </div>
        </WrapperContainer>
      </section>
    </>
  );
};

export default Services;
