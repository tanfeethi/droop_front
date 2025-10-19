import { useTranslation } from "react-i18next";
import RoundedButtton from "../../components/reuse/Buttons/RoundedButtton";
import WrapperContainer from "../../components/reuse/WrapperContainer";
import ContactForm from "../../components/once/ContactForm";

const ContactSection = () => {
  const { t, i18n } = useTranslation("home");

  return (
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
  );
};

export default ContactSection;
