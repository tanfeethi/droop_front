import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa6";
import { Link } from "react-router";
import { TbBrandYoutube } from "react-icons/tb";
import { RiSnapchatLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-[#000616]">
      <div>
        <footer className=" text-white pt-8 pb-4 relative overflow-hidden ">
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
                  روابط سريعة
                </h3>
                <ul className="space-y-5">
                  <li>
                    {/* Chairman */}
                    <Link
                      to="/#Chairman"
                      className="hover:text-blue-200 transition"
                    >
                      الرئيسية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#mission"
                      className="hover:text-blue-200 transition"
                    >
                      من نحن
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#statistics"
                      className="hover:text-blue-200 transition"
                    >
                      الاستشارات المؤسسية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#diploma"
                      className="hover:text-blue-200 transition"
                    >
                      خدماتنا
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#sponsers"
                      className="hover:text-blue-200 transition"
                    >
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Secondary Links */}
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  برامجنا
                </h3>
                <ul className="space-y-5">
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-blue-200 transition"
                    >
                      القطاع الحكومي
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/diploma-department"
                      className="hover:text-blue-200 transition"
                    >
                      القطاع الخاص
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vacancies"
                      className="hover:text-blue-200 transition"
                    >
                      الأفراد
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Secondary Links */}
              <div data-aos="fade-left" className="space-y-5 text-gray-200 ">
                <h3 className="text-lg font-bold mb-4 text-blue-200">
                  تواصل معنا
                </h3>

                <div className="flex items-center gap-2 ">
                  <FaEnvelope className="text-blue-300" />
                  <span>البريد الإليكتروني</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <FaPhone className="text-blue-300" />
                  <span>رقم الجوال</span>
                </div>
                {/* <div className="flex items-center gap-2 ">
                  <FaMapMarkerAlt className="text-blue-300" />
                  <span>address</span>
                </div> */}
                <div className="flex gap-4">
                  <div className="border border-white p-1 rounded-lg">
                    <FaInstagram className="text-2xl font-bold" />
                  </div>
                  <div className="border border-white p-1 rounded-lg">
                    <BsTwitterX className="text-2xl font-bold" />
                  </div>
                  <div className="border border-white p-1 rounded-lg">
                    <RiSnapchatLine className="text-2xl font-bold" />
                  </div>
                  <div className="border border-white p-1 rounded-lg">
                    <TbBrandYoutube className="text-2xl font-bold" />
                  </div>
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
    </div>
  );
};

export default Footer;
