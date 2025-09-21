import React from "react";
import WrapperContainer from "../WrapperContainer";
import DOMPurify from "dompurify";

interface HeaderProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  roundedSide?: "left" | "right"; // choose which side to round
  titleColor?: string;
  subtitleColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  bgColor = "bg-blue-500",
  width = "w-80",
  height = "h-24",
  roundedSide = "left",
  titleColor = "text-[#00103B]",
  subtitleColor = "text-slate-900",
}) => {
  const roundedClass =
    roundedSide === "left" ? "rounded-l-[64px]" : "rounded-r-[64px]";

  return (
    <div className={`${width} ${height} ${bgColor} ${roundedClass}`}>
      <WrapperContainer>
        <span className="absolute top-6 right-[10%] flex flex-col md:top-6">
          <span
            className={`text-3xl font-bold mb-12 ${titleColor} md:text-5xl md:mb-8`}
          >
            {DOMPurify.sanitize(title, { ALLOWED_TAGS: [] })}
          </span>
          {subtitle && (
            <span
              className={`text-right justify-start text-2xl font-normal font-['Almarai'] ${subtitleColor}`}
            >
              {DOMPurify.sanitize(subtitle, { ALLOWED_TAGS: [] })}
            </span>
          )}
        </span>
      </WrapperContainer>
    </div>
  );
};

export default Header;
