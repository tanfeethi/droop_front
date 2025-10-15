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
import CourseCard from "../components/reuse/courseCard/CourseCard";

const Home = () => {
  const coursesData = [
    {
      coursePlace: "Online",
      Accreditation_number: "1733662",
      image: "/assets/images/coop1.webp",
      title: "التدريب على التحليل وعرض البيانات باستخدام Power BI",
      description: [
        {
          day: "اليوم 1",
          topics: [
            "مقدمة في تحليل البيانات وPower BI",
            "مفاهيم تحليل البيانات وأهميته",
            "التعرف على واجهة Power BI",
            "استيراد البيانات من مصادر مختلفة",
          ],
        },
        {
          day: "اليوم 2",
          topics: [
            "تنظيف وتحويل البيانات باستخدام Power Query",
            "أدوات التنظيف والتحويل",
            "إنشاء الجداول والعلاقات",
            "التعامل مع البيانات المفقودة والمكررة",
          ],
        },
        {
          day: "اليوم 3",
          topics: [
            "بناء النماذج وإنشاء المقاييس باستخدام DAX",
            "أساسيات لغة DAX",
            "إنشاء المقاييس (Measures) والحسابات (Calculated Columns)",
            "استخدام الجداول الزمنية",
          ],
        },
        {
          day: "اليوم 4",
          topics: [
            "تصميم التقارير ولوحات المعلومات",
            "عناصر التصميم الفعّال",
            "استخدام المرشحات والتفاعلية",
            "تخصيص التصاميم حسب الجمهور المستهدف",
          ],
        },
        {
          day: "اليوم 5",
          topics: [
            "النشر والمشاركة والتحسين",
            "مشاركة التقارير عبر Power BI Service",
            "إعداد التحديث التلقائي للبيانات",
            "مراجعة مشروع تطبيقي شامل",
          ],
        },
      ],
      price: "1,199",
      oldPrice: "1,699",
      duration: "5 أيام",
      level: "30 ساعة",
    },
    {
      coursePlace: "Online",
      Accreditation_number: "17339474",
      image: "/assets/images/coop1.webp",
      title:
        "التدريب على تطبيقات الذكاء الاصطناعي في الإدارة المكتبية والسكرتارية التنفيذية",
      description: [
        {
          day: "اليوم 1",
          topics: [
            "مقدمة في الذكاء الاصطناعي والإدارة المكتبية",
            "مفاهيم الذكاء الاصطناعي",
            "التحول الرقمي في السكرتارية",
            "أدوات الذكاء الاصطناعي الشائعة",
          ],
        },
        {
          day: "اليوم 2",
          topics: [
            "تطبيقات الذكاء الاصطناعي في تنظيم المهام",
            "استخدام أدوات مثل Microsoft Copilot وChatGPT",
            "جدولة الاجتماعات وإدارة الوقت",
            "أتمتة الردود والمراسلات",
          ],
        },
        {
          day: "اليوم 3",
          topics: [
            "إدارة الوثائق والمعلومات باستخدام الذكاء الاصطناعي",
            "تصنيف وأرشفة الوثائق",
            "البحث الذكي واسترجاع المعلومات",
            "حماية البيانات والخصوصية",
          ],
        },
        {
          day: "اليوم 4",
          topics: [
            "دعم اتخاذ القرار والتقارير الذكية",
            "تحليل البيانات المكتبية",
            "إنشاء تقارير تلقائية",
            "أدوات التنبؤ والتوصية",
          ],
        },
        {
          day: "اليوم 5",
          topics: [
            "مشروع تطبيقي وتقييم الأداء",
            "تنفيذ سيناريو عملي باستخدام أدوات AI",
            "تقييم الأداء والتحسين",
            "مناقشة التحديات المستقبلية",
          ],
        },
      ],
      price: "1,199",
      oldPrice: "1,699",
      duration: "5 أيام",
      level: "30 ساعة",
    },
    {
      coursePlace: "Online",
      Accreditation_number: "17336343",
      image: "/assets/images/coop1.webp",
      title: "التدريب على التسويق الرقمي Digital Marketing",
      description: [
        {
          day: "اليوم 1",
          topics: [
            "مقدمة في التسويق الرقمي",
            "مفاهيم واستراتيجيات التسويق الإلكتروني",
            "التعرف على القنوات الرقمية",
            "تحديد الجمهور المستهدف",
          ],
        },
        {
          day: "اليوم 2",
          topics: [
            "تحسين محركات البحث (SEO)",
            "الكلمات المفتاحية وتحليل المنافسين",
            "إنشاء محتوى متوافق مع SEO",
            "تحسين تجربة المستخدم في المواقع",
          ],
        },
        {
          day: "اليوم 3",
          topics: [
            "التسويق عبر وسائل التواصل الاجتماعي",
            "إعلانات فيسبوك وإنستجرام",
            "بناء العلامة التجارية على المنصات الاجتماعية",
            "قياس أداء الحملات",
          ],
        },
        {
          day: "اليوم 4",
          topics: [
            "التسويق عبر البريد الإلكتروني والإعلانات الممولة",
            "تصميم حملات بريدية فعّالة",
            "إدارة الميزانية الإعلانية",
            "تحليل النتائج باستخدام Google Analytics",
          ],
        },
        {
          day: "اليوم 5",
          topics: [
            "مشروع تطبيقي في التسويق الرقمي",
            "تطبيق عملي على إنشاء حملة متكاملة",
            "تحليل الأداء وتقديم التقارير",
            "نصائح للاستمرار في تطوير المهارات",
          ],
        },
      ],
      price: "1,199",
      oldPrice: "1,699",
      duration: "5 أيام",
      level: "30 ساعة",
    },
    {
      coursePlace: "Online",
      Accreditation_number: "17334351",
      image: "/assets/images/coop1.webp",
      title: "التدريب على إدارة المشاريع الإحترافية PMP",
      description: [
        {
          day: "اليوم 1",
          topics: [
            "مقدمة في إدارة المشاريع ومجالات المعرفة",
            "تعريف المشروع ودورة حياته",
            "نظرة عامة على دليل PMBOK",
            "أدوار ومسؤوليات مدير المشروع",
          ],
        },
        {
          day: "اليوم 2",
          topics: [
            "بدء وتخطيط المشروع",
            "إعداد ميثاق المشروع",
            "تحديد نطاق المشروع",
            "إعداد خطة إدارة المشروع",
          ],
        },
        {
          day: "اليوم 3",
          topics: [
            "تنفيذ المشروع وإدارته",
            "إدارة فرق العمل",
            "التواصل الفعّال",
            "إدارة الجودة والمشتريات",
          ],
        },
        {
          day: "اليوم 4",
          topics: [
            "مراقبة وضبط المشروع",
            "تتبع الأداء باستخدام مؤشرات KPI",
            "إدارة المخاطر والتغييرات",
            "تقارير الحالة والتقدم",
          ],
        },
        {
          day: "اليوم 5",
          topics: [
            "إغلاق المشروع والاستعداد للاختبار",
            "خطوات إغلاق المشروع",
            "مراجعة شاملة للمفاهيم",
            "نصائح لاجتياز اختبار PMP",
          ],
        },
      ],
      price: "1,199",
      oldPrice: "1,699",
      duration: "5 أيام",
      level: "30 ساعة",
    },
  ];

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

      <section className="w-full bg-[#F6F9FF] p-3">
        <div className="w-[98%] m-auto mb-3">
          <h1 className="text-[#274185] text-4xl font-bold mb-3">
            احدث الدورات التدريبية
          </h1>
          <p className="text-2xl font-normal">نص</p>
        </div>
        <div className="w-[98%] m-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {coursesData.map((course) => (
              <CourseCard
                key={course.Accreditation_number}
                {...course}
                onRegister={() => alert(`تم التسجيل في ${course.title}`)}
                onDetails={() => navigate("/course", { state: course })}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F4F7FF] flex flex-col md:flex-row mt-5">
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
