import { useTranslation } from "react-i18next";
import Divider from "../reuse/divider/Divider";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { Link } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className=" bg-[#000616]">
      <div>
        <footer className=" text-white pt-8 pb-4 relative overflow-hidden ">
          <div className=" px-4 relative z-10 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-blue-800">
              {/* Column 1: Logo and Contact Info */}
              <div data-aos="fade-right" className="flex flex-col items-start ">
                <div className="mb-6">
                  <div className="flex  flex-col">
                    <img
                      src="/assets/images/logoWhite.png"
                      alt="Al-Jeel Schools Logo"
                      className="h-16 w-auto"
                    />

                    <div data-aos="fade-up" className=" max-w-lg mt-5">
                      <p className="max-w-[250px] text-xs md:text-sm text-gray-300 leading-relaxed">
                        مركز دروب المستقبل للتدريب واالستشارات هو منصة رائدة
                        ومتخصصة في تطوير الكفاءات البشرية وتقديم الحلول
                        االستشارية المتقدمة. نسعى إلحداث فرق حقيقي في األداء
                        المؤسسي والفردي، من خالل تقديم برامج تدريبية معتمدة
                        واستشارات استراتيجية تتماشى مع التغيرات السريعة في بيئات
                        العمل
                      </p>
                    </div>

                    <div data-aos="fade-up" className=" mt-5">
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        الشروط و الاحكام
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Main Links */}
              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  {t("footer:footerPages.home.pageName")}
                </h3>
                <ul className="space-y-2">
                  <li>
                    {/* Chairman */}
                    <Link
                      to="/#Chairman"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.home.links.link1")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/#CFO" className="hover:text-blue-200 transition">
                      {t("footer:footerPages.home.links.link2")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#mission"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.home.links.link3")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#statistics"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.home.links.link4")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#diploma"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.home.links.link5")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#sponsers"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.home.links.link6")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#news"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.home.links.link7")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Secondary Links */}
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  {/* عن المدارس */}
                  {t("footer:footerPages.aboutSchools.pageName")}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.aboutSchools.links.link1")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/diploma-department"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.aboutSchools.links.link2")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education-stages"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.aboutSchools.links.link3")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vacancies"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.aboutSchools.links.link4")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education-fees"
                      className="hover:text-blue-200 transition"
                    >
                      {t("footer:footerPages.aboutSchools.links.link5")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Secondary Links */}
              <div data-aos="fade-left" className="space-y-2 text-gray-200 ">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  {t("footer:footerPages.schoolContact.Name")}
                </h3>

                <div className="flex items-center gap-2 ">
                  <FaEnvelope className="text-blue-300" />
                  <span>Email</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <FaPhone className="text-blue-300" />
                  <span>Phone</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <FaMapMarkerAlt className="text-blue-300" />
                  <span>address</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-white text-center p-5">
              <span>دروب المستقبل - جميع الحقوق محفوظة - © 2024</span>
            </div>
          </div>
        </footer>
      </div>
      <Divider />
    </div>
  );
};

export default Footer;
