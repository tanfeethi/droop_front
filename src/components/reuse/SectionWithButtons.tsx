// components/SectionWithButtons.tsx
import { TbArrowLeftDashed } from "react-icons/tb";
import RoundedButtton from "./Buttons/RoundedButtton";
import CustomButton from "./Buttons/CustomButton";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";

interface SectionWithButtonsProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  icon?: React.ReactNode;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  reverse?: boolean;
  className?: string;
}

const SectionWithButtons: React.FC<SectionWithButtonsProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  icon = <TbArrowLeftDashed />,
  onPrimaryClick,
  onSecondaryClick,
  reverse = false,
  className = "",
}) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
    >
      {/* Text + Primary Button */}
      <div className="md:w-[70%]">
        <RoundedButtton type="button" onClick={onPrimaryClick}>
          {primaryButtonText}
        </RoundedButtton>

        <h1 className="font-bold text-[#274185] text-4xl mt-14">{title}</h1>

        <p className="text-[#000D30] w-full mt-12 md:w-[70%]">
          {DOMPurify.sanitize(description, { ALLOWED_TAGS: [] })}
        </p>
      </div>

      {/* Secondary Button */}
      <div className=" flex items-center justify-center md:justify-end mt-5 md:w-[30%]  ">
        <CustomButton
          onClick={onSecondaryClick}
          className="py-3 rounded-[5px] text-[#274185]"
        >
          <span className="flex items-center gap-4">
            <span>{secondaryButtonText}</span>
            <span className={`${i18n.language === "en" && "rotate-180"}`}>
              {icon}
            </span>
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

export default SectionWithButtons;
