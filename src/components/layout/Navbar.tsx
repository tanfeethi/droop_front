import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../utils/i18n";
import { FaRegDotCircle, FaBars, FaTimes } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation("nav");

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
      <div
        className={`flex justify-between items-center px-6 py-4 xl:px-8 2xl:px-20 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#00103B]/50 shadow-md"
            : "bg-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <div className="w-32 aspect-[16/9]">
          <img
            src={"/assets/images/logoWhite.png"}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-x-6 text-[12px] xl:text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-2xl p-2 font-bold custom-underline-left rounded-full"
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-2xl p-2 font-bold custom-underline-left rounded-full"
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                من نحن
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Corporate_consulting"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-2xl p-2 font-bold custom-underline-left rounded-full"
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                الاستشارات المؤسسية
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-2xl p-2 font-bold custom-underline-left rounded-full"
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                خدماتنا
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/programs"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-2xl p-2 font-bold custom-underline-left rounded-full"
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                برامجنا
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/contact-us">
            <button className="px-5 py-2 bg-[#274185] text-white text-xl rounded-full flex items-center gap-3">
              <FaRegDotCircle />
              تواصل معنا
            </button>
          </NavLink>

          <button
            onClick={toggleLanguage}
            className="bg-[#FFFFFF1F]/90 rounded-full flex items-center font-bold text-white border-white gap-3 border-2 px-2 py-1"
          >
            <TbRefresh className="bg-[#00103B] p-2 h-9 w-9 text-white rounded-full" />
            <FaRegDotCircle className="text-white" />
            <span className="text-lg">
              {i18n.language === "en" ? "ع" : "EN"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-white text-black z-[999] shadow-md lg:hidden">
          <ul className="flex flex-col items-center text-lg font-medium px-6 py-4 space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black underline" : "hover:text-black"
                }
              >
                {t("home")}
              </NavLink>
            </li>
            <NavLink to="/contact-us">
              <button className="bg-white px-5 py-2 rounded-md text-black flex items-center gap-3">
                {t("contact")}
              </button>
            </NavLink>
            <button
              onClick={toggleLanguage}
              className="bg-[#D5D5D5] h-[45px] w-[45px] flex items-center justify-center rounded-full font-bold"
            >
              {i18n.language === "en" ? "ع" : "EN"}
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
