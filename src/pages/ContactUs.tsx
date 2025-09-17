import { BiSolidLeftArrow } from "react-icons/bi";
import ContactForm from "../components/once/ContactForm";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import WrapperContainer from "../components/reuse/WrapperContainer";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";

const ContactUs = () => {
  return (
    <>
      <PagesHeroSection>
        <WrapperContainer>
          <div className="text-white">
            <div className="grid grid-cols-2 h-full">
              <div className="h-full flex items-center justify-start">
                <RoundedButtton
                  children="تواصل معنا"
                  className="bg-white/30 "
                />
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/assets/images/triangleImage.png"
                  alt=""
                  className="pointer-events-none"
                />
              </div>
            </div>
          </div>
        </WrapperContainer>
      </PagesHeroSection>

      <section className="min-h-screen bg-white pt-12 z-10">
        <WrapperContainer>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <h1 className="text-4xl text-[#00103B] font-extrabold mb-6">
                ابقي علي تواصل !
              </h1>
              <p>
                نحن هنا لمساعدتك. إذا كان لديك أي استفسار حول خدماتنا أو تحتاج
                إلى استشارة، لا تتردد في التواصل معنا عبر النموذج أدناه أو
                بوسائل الاتصال المباشرة.
              </p>
              <div className="mt-5">
                <ContactForm
                  inputBg="bg-[#F0F0F0]"
                  labelColor="text-[#274185]"
                  buttonExtraClasses="text-[24px] p-10 gap-4"
                  buttonWidth="mb-10 md:w-1/3"
                  buttonBg="bg-[#00103B]"
                />
              </div>
            </div>
          </div>
        </WrapperContainer>
      </section>
      <section
        className="h-[550px] overflow-hidden w-full bg-center bg-cover flex flex-col justify-end p-4"
        style={{
          backgroundImage: `
          linear-gradient(to bottom, rgba(0, 16, 59, 0.6), rgba(0, 16, 59, 0.6)),
          url('${"/assets/images/contactOverlayImage.webp"}')
        `,
        }}
      >
        <WrapperContainer>
          <div className="grid md:grid-cols-2 gap-5 text-white">
            <div>
              <div className="flex items-center text-4xl gap-8 mb-20">
                <BiSolidLeftArrow />
                <h3>تابعونا علي</h3>
              </div>
              <div className="flex text-3xl gap-14 md:text-6xl">
                <FaXTwitter />
                <AiFillInstagram />
                <BsSnapchat />
                <FaLinkedinIn />
              </div>
            </div>
            <div className="flex gap-6 flex-col md:justify-end md:text-left">
              <div className="flex flex-col">
                <span className="text-lg mb-8 md:text-3xl">رقم التواصل</span>
                <span className="text-xl font-bold md:text-4xl">
                  0x00000000000
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-lg mb-8 md:text-3xl">الفاكس</span>
                <span className="text-xl font-bold md:text-4xl">
                  011-2936421
                </span>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </section>
      <section>
        <div>
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=riyad+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
              popolazione comuni Italia mappa interattiva
            </a>
          </iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
