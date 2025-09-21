import { useFetchStaticPages } from "../../../hooks/staticPages/useFetchStaticPages";
import AboutRoundedComponent from "../AboutRoundedComponent";

const VissionMetionSection = () => {
  const { data } = useFetchStaticPages();
  const vissionData = data?.find((item) => item.name === "vision");
  const missionData = data?.find((item) => item.name === "mission");
  return (
    <div className=" w-full mt-20 flex items-center gap-10">
      <div className="  flex flex-col gap-14 md:w-[60%]">
        <AboutRoundedComponent
          title={vissionData?.title || ""}
          content={vissionData?.text || ""}
        />
        <AboutRoundedComponent
          title={missionData?.title || ""}
          content={missionData?.text || ""}
        />
      </div>

      <div className="hidden w-[40%] md:flex">
        <img src="/assets/images/image2.webp" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default VissionMetionSection;
