import { TfiThumbUp } from "react-icons/tfi";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import ImageCard from "../components/reuse/Card/ImageCard";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import VissionMetionSection from "../components/reuse/vision_Metion/VissionMetionSection";
import WrapperContainer from "../components/reuse/WrapperContainer";
import InfoCard from "../components/reuse/Card/InfoCard";
import { PiCertificateFill } from "react-icons/pi";
import NumberDisplay from "../components/once/NumberDisplay";

const About = () => {
  return (
    <>
      <PagesHeroSection
        bgImage="/assets/images/imag1.jpg"
        topOverlayColor="rgba(9, 1, 50, 0.52)"
      >
        <RoundedButtton
          children="من نحن"
          className="bg-white/20 p-3 h-fit w-[250px]"
        />
      </PagesHeroSection>

      <section className="mt-14">
        <WrapperContainer>
          <h1 className="text-4xl text-[#274185] font-extrabold mb-10">
            مركز دروب المستقبل للتدريب واالستشارات
          </h1>
          <p className="w-[98%]">
            <span className="block mb-7 text-2xl font-normal">
              منصة رائدة ومتخصصة في تطوير الكفاءات البشرية وتقديم الحلول
              االستشارية المتقدمة. نسعى إلحداث فرق حقيقي في األداء المؤسسي
              والفردي، من خالل تقديم برامج تدريبية معتمدة واستشارات استراتيجية
              تتماشى مع التغيرات السريعة في بيئات العمل
            </span>

            <span className="block mb-7 text-2xl font-normal">
              نحن ملتزمون بنقل الخبرات العالمية عبر مدربين معتمدين و أساليب
              تدريب تفاعلية لنصنع فرق حقيقي في تحسين األداء المؤسسي والفردي
              ومواكبة تحوالت سوق العمل المتجددة
            </span>

            <span className="block mb-7 text-2xl font-normal">
              ونعتز بدورنا في دعم مستهدفات رؤية المملكة ،2030 من خالل اإلسهام في
              تنمية رأس المال البشري وتعزيز ثقافة التعلم والتطوير المستمر
            </span>
          </p>
          <VissionMetionSection />
        </WrapperContainer>
        <ImageCard
          extraClassName="rounded-none h-[500px]"
          bgImage="/assets/images/image1.webp"
          bgGradient="linear-gradient(to bottom, rgba(0,16,59,0.5), rgba(39,65,133,0.5))"
          text="قيمنا"
          textClassName="text-5xl"
        />
      </section>

      <section className="bg-[#FDFFFF] md:p-28">
        <WrapperContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-16">
            <InfoCard
              icon={<TfiThumbUp className="text-6xl scale-x-[-1]" />}
              title="الشفافية والالتزام"
              description="نلتزم في مركز دروب المستقبل بتقديم خدمات تدريبية واستشارية واضحة، حيث نبني عالقات ثقة قوية مع عمالئنا و نحرص على أن تكون كل خطوة مع عمالئنا مدعومة بالوضوح والمصداقية"
            />
            <InfoCard
              icon={<PiCertificateFill className="text-6xl scale-x-[-1]" />}
              title="الجودة"
              description="نضع أعلى معايير الجودة في جميع برامجنا التدريبية واالستشارية لمساعدة عمالئنا على التفوق في مجاالتهم.ونقدم تجارب تدريبية
تواكب تطورات األعمال للوصول لنتائج ترضي المؤسسات واألفراد."
            />
            <InfoCard
              icon={<TfiThumbUp className="text-6xl scale-x-[-1]" />}
              title="أثر قابل للقياس"
              description="نحرص على أن تكون كل تجربة تدريبية أو استشارية لدينا نقطة تحول حقيقية لعمالئنا. و نعمل على قياس أثر برامجنا من خلال
تحسين األداء المهني وزيادة الكفاءة في العمل"
            />
            <InfoCard
              icon={<TfiThumbUp className="text-6xl scale-x-[-1]" />}
              title="الشفافية والالتزام"
              description="نؤمن بقوة التعاون والشراكات الفاعلة مع عمالئنا وشركائنا االستراتيجيين. نعمل مًعا لتحقيق أهداف مشتركة ودفع استراتيجيات
التحول والنمو"
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
                إنجازاتنا
              </h5>

              {[...Array(4)].map((_, idx) => (
                <div className="flex items-center mb-4" key={idx}>
                  <div className="flex items-center border-l-4 w-fit bg-gradient-to-r from-[#E4E7F2] to-[#F9FAFF] border-l-[#274185] py-5 text-[#000D30] rounded-l-[5px]">
                    <span className="ml-5 font-bold md:text-3xl">
                      شراكات استراتيجية ناجحة مع الجهات الحكومية والخاصة، بما في
                      ذلك التعاون مع بلدية الخرج، مما عزز من تأثير برامجنا
                    </span>
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
