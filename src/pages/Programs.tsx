import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";
import Divider from "../components/reuse/divider/Divider";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import WrapperContainer from "../components/reuse/WrapperContainer";
import Header from "../components/reuse/header/Header";
import NumberDisplay from "../components/once/NumberDisplay";

const Programs = () => {
  const data = [
    {
      title: "القطاع الحكومي",
      imgUrl: "assets/images/image1.webp",
    },
  ];

  return (
    <>
      <PagesHeroSection extraHeight="h-[600px]">
        <div className="w-full mt-20 grid grid-cols-2">
          <div className="">
            <h1 className="text-4xl font-bold mb-5">برامجنا المتخصصة</h1>
            <p className="text-2xl font-normal mb-11">
              نحرص على تقديم برامج مرنة تواكب احتياجات كلا من :
            </p>
            <Divider />
            <div className="mt-11 flex items-center gap-14">
              <span className="text-6xl font-bold block">القطاع الخاص</span>
              <div className="bg-[#5785FF] p-4 rounded-full flex items-center gap-5">
                <button className="border-2 border-[#274185] rounded-full h-16 w-16 flex items-center justify-center">
                  <IoArrowForwardOutline className="text-3xl text-[#274185]" />
                </button>
                <button className="bg-[#274185] rounded-full h-16 w-16 flex items-center justify-center">
                  <IoArrowBack className="text-3xl" />
                </button>
              </div>
            </div>
            <RoundedButtton
              children={
                <span className="flex items-center gap-5">
                  رؤية التفاصيل
                  <MdKeyboardDoubleArrowDown className="bg-[#416AD7] rounded-full text-5xl p-1" />
                </span>
              }
              className="bg-white/20 p-3 h-fit w-[250px] mt-6"
            />
          </div>

          <div className="">
            <div className=" mt-20 relative">
              <img src="/assets/images/laptop.png" alt="" />
              <div className="absolute inset-0 top-1s right-0 p-2">
                <WrapperContainer>
                  <img
                    src="/assets/images/service1.webp"
                    alt=""
                    className="rounded-xl h-[450px]"
                  />
                </WrapperContainer>
              </div>
            </div>
          </div>
        </div>
      </PagesHeroSection>

      <section className="bg-red-500 w-full mt-50 ">
        <div className="relative mb-26">
          <Header
            title="الاستشارات المؤسسية"
            subtitle="نقدم برامج تدريبية تهدف إلى تمكين الأفراد من تطوير مهاراتهم الذاتية والتقنية:"
          />
        </div>
        <WrapperContainer>
          <div className="bg-red-300 shadow-2xl rounded-2xl w-full p-11 grid grid-cols-1 gap-10 md:grid-cols-2 items-center mb-10">
            <div className="h-96">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div>
              <NumberDisplay number="01" strokeColor="white" size={120} />
              <div className=" text-right justify-start text-[#00103B] text-4xl font-bold mb-5">
                شهادة رقم 1
              </div>
              <div className="text-right justify-start text-slate-900 text-xl font-normal font-['Almarai'] capitalize leading-normal">
                شهادة دولية احترافية في المشتريات والمناقصات، تركز على أفضل
                الممارسات العالمية في إدارة العقود والتوريد. تؤهل المشاركين
                إلدارة عمليات الشراء بكفاءة عالية وتحقيق أفضل النتائج للجهات
                الحكومية.
              </div>
            </div>
          </div>
        </WrapperContainer>
      </section>
    </>
  );
};

export default Programs;
