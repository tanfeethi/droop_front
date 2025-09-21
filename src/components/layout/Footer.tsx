import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa6";
import { Link } from "react-router";
import { TbBrandYoutube } from "react-icons/tb";
import { RiSnapchatLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { useFetchSettings } from "../../hooks/settings/useFetchSettings";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { data } = useFetchSettings();
  const { t } = useTranslation("footer");

  return (
    <footer className=" bg-[#000616]">
      <div>
        <div className=" text-white pt-8 pb-4 relative overflow-hidden ">
          <div className=" px-4 relative z-10 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b-1 border-white/50">
              {/* Column 1: Logo and Contact Info */}
              <div data-aos="fade-right" className="flex flex-col items-start ">
                <div className="mb-6 space-y-5">
                  <div className="flex flex-col">
                    <img
                      src="/assets/images/logoWhite.png"
                      alt="Al-Jeel Schools Logo"
                      className="h-20 w-52"
                    />

                    <div data-aos="fade-up" className=" max-w-lg mt-5">
                      <p className="md:max-w-[250px] text-xs md:text-sm text-gray-300 leading-relaxed">
                        {t("footer.about")}
                      </p>
                    </div>

                    {/* <div data-aos="fade-up" className=" mt-5">
                      <button className="text-xs md:text-sm text-gray-300 leading-relaxed cursor-pointer">
                        {t("footer.terms")}
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Column 2: Main Links */}
              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  {t("footer.quickLinks")}
                </h3>
                <ul className="space-y-5">
                  <li>
                    <Link to="/" className="hover:text-blue-200 transition">
                      {t("footer.home")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer.aboutUs")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Corporate_consulting"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer.corporateConsulting")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer.services")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer.contactUs")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Secondary Links */}
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  {t("footer.programs")}
                </h3>
                <ul className="space-y-5">
                  <li>
                    <Link
                      to="/programs"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer.governmentSector")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer.privateSector")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer.individuals")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div data-aos="fade-left" className="space-y-5 text-gray-200 ">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  {t("footer.contact")}
                </h3>

                <div className="flex items-center gap-2 ">
                  <FaEnvelope className="text-blue-300" />
                  <span>{data?.email}</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <FaPhone className="text-blue-300" />
                  {data?.phones[0]}
                </div>
                <div className="flex gap-4">
                  <div className="border border-white p-1 rounded-lg cursor-pointer">
                    <FaInstagram className="text-2xl font-bold" />
                  </div>
                  <div className="border border-white p-1 rounded-lg cursor-pointer">
                    <BsTwitterX className="text-2xl font-bold" />
                  </div>
                  <div className="border border-white p-1 rounded-lg cursor-pointer">
                    <RiSnapchatLine className="text-2xl font-bold" />
                  </div>
                  <div className="border border-white p-1 rounded-lg cursor-pointer">
                    <TbBrandYoutube className="text-2xl font-bold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-white text-center p-5">
              <span>{t("footer.rights")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
