import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";
import Divider from "../components/reuse/divider/Divider";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import WrapperContainer from "../components/reuse/WrapperContainer";
import Header from "../components/reuse/header/Header";
import Sector from "../components/reuse/Sector";

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
            <div className="mt-11 flex items-center gap-8">
              <span className="text-6xl font-bold block">القطاع الخاص</span>
              <div className="bg-[#5785FF] p-2 rounded-full flex justify-between gap-5 px-5">
                <button className="border-2 border-[#274185] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
                  <IoArrowForwardOutline className="text-3xl text-[#274185]" />
                </button>
                <button className="bg-[#274185] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
                  <IoArrowBack className="text-3xl" />
                </button>
              </div>
            </div>
            <RoundedButtton
              children={
                <span className="flex items-center gap-5">
                  رؤية التفاصيل
                  <MdKeyboardDoubleArrowDown className="bg-[#416AD7] rounded-full text-4xl p-1" />
                </span>
              }
              className="bg-blue-600/30 p-3 h-fit w-[250px] mt-6"
            />
          </div>

          <div className="">
            <div className=" mt-20 relative">
              <img src="/assets/images/laptop.webp" alt="" />
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

      <section className=" w-full mt-50 ">
        <div className="relative mb-26">
          <Header
            title="الاستشارات المؤسسية"
            subtitle="نقدم برامج تدريبية تهدف إلى تمكين الأفراد من تطوير مهاراتهم الذاتية والتقنية:"
          />
        </div>
        <WrapperContainer>
          <Sector
            number="01"
            strokeColor="#00103B"
            size={120}
            title="شهادة رقم 1"
            description="شهادة دولية احترافية في المشتريات والمناقصات..."
            image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000"
          />

          <Sector
            number="02"
            strokeColor="#00103B"
            size={120}
            title="شهادة رقم 2"
            description="شهادة دولية احترافية في المشتريات والمناقصات..."
            image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000"
          />
        </WrapperContainer>
      </section>
    </>
  );
};

export default Programs;
