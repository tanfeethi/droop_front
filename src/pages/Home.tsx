import HeroCarousel from "../components/reuse/Carousel/HeroCarousel";
import WrapperContainer from "../components/reuse/WrapperContainer";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import SectionWithButtons from "../components/reuse/SectionWithButtons";
import BackgroundCard from "../components/reuse/Card/BackgroundCard";
import CustomServiceSlider from "../components/once/CustomServiceSlider";
import ContactForm from "../components/once/ContactForm";
import VissionMetionSection from "../components/reuse/vision_Metion/VissionMetionSection";
import ImageCard from "../components/reuse/Card/ImageCard";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <section className="mb-10 pt-20">
        <WrapperContainer>
          <SectionWithButtons
            title="مركز دروب المستقبل للتدريب واالستشارات"
            primaryButtonText="من نحن"
            secondaryButtonText="تعرف علينا"
            description="منصة رائدة ومتخصصة في تطوير الكفاءات البشرية وتقديم الحلول االستشارية المتقدمة. نسعى إلحداث فرق حقيقي في األداء المؤسسي والفردي، من خالل تقديم برامج تدريبية معتمدة واستشارات استراتيجية تتماشى مع التغيرات السريعة في بيئات العمل"
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
            title="خدماتنا التدريبية واالستشارية"
            primaryButtonText="خدماتنا"
            secondaryButtonText="رؤية الكل"
            description="نقدم في مركز دروب المستقبل حلولا تدريبية واستشارية شاملة للأفراد والمؤسسات، تشمل:"
          />

          <div className="w-full mt-20">
            <div className="grid gap-12 h-[580px] mb-5 grid-cols-1 md:grid-cols-3 ">
              <BackgroundCard


                imageUrl="/assets/images/service1.webp"
                title="القيادة والادارة التنفيذية"
                description="تطوير المهارات القيادية واإلدارية"
              
              />

              <BackgroundCard
                imageUrl="/assets/images/service2.webp"
                title="القيادة والادارة التنفيذية"
                description="تطوير المهارات القيادية واإلدارية"
              />

              <BackgroundCard
                imageUrl="/assets/images/service1.webp"
                title="القيادة والادارة التنفيذية"
                description="تطوير المهارات القيادية واإلدارية"
              />
            </div>
          </div>
        </WrapperContainer>
      </section>

      <section className="w-full mt-16 text-center flex flex-col items-center justify-center mb-20">
        <RoundedButtton className="mb-9" children={<span>خدماتنا</span>} />
        <h2 className="font-bold text-4xl text-[#274185]">برامجنا المتخصصة</h2>
        <p className="text-2xl font-normal mt-5">
          نحرص على تقديم برامج مرنة تواكب احتياجات كلا من :
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
            <RoundedButtton
              className="mb-10"
              children={<span>تواصل معنا</span>}
              type="button"
            />
            <p className="text-lg font-normal text-[#000000] mb-26 md:w-[60%]">
              نحن هنا لمساعدتك. إذا كان لديك أي استفسار حول خدماتنا أو تحتاج إلى
              استشارة، لا تتردد في التواصل معنا عبر النموذج أدناه أو بوسائل
              الاتصال المباشرة.
            </p>
          </div>
          <div className="relative hidden md:block">
            <div className="h-64 w-64 absolute -translate-x-1/2 -translate-y-1/3">
              <img
                src="/assets/images/HeadPhone.webp"
                alt=""
                className="w-full h-full transform -scale-x-100"
              />
            </div>
            <div className="w-1/2 bg-[#274185] h-40 rounded-l-full"></div>
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
