import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import RoundedButtton from "../../components/reuse/Buttons/RoundedButtton";
import CustomServiceSlider from "../../components/once/CustomServiceSlider";

const ProgramsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("home");

  return (
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
  );
};

export default ProgramsSection;
