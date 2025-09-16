import AboutRoundedComponent from "../AboutRoundedComponent";

const VissionMetionSection = () => {
  return (
    <div className=" w-full mt-20 flex items-center">
      <div className="  flex flex-col gap-14 md:w-[60%]">
        <AboutRoundedComponent
          title="رسالتنا"
          content="نسعى لأن نكون الخيار األول في مجال التدريب واالستشارات على مستوى المملكة ، من خلال تقديم برامج متميزة تساهم في تطوير مهارات الافراد وتحقيق الكفاءة للمنشآت، مما يساهم في بناء مستقبل مهني واعد."
        />
        <AboutRoundedComponent
          title="رؤيتنا"
          content="حلولا تدريبية واستشارية مبتكرة وذات جودة عالية، تركز على تطوير قدرات الموارد البشرية وتعزيز الاداء المؤسسي. نسعى نقدم لدعم استراتيجيات التحول والنمو في مختلف القطاعات، بما يساعد الافراد و المؤسسات على التميز والنجاح في بيئة األعمال المتغيرة."
        />
      </div>

      <div className="hidden w-[40%] md:flex">
        <img src="/assets/images/image2.webp" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default VissionMetionSection;
