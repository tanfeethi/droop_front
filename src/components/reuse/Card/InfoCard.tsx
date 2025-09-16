import React from "react";

interface InfoCardProps {
  icon: React.ReactNode; // Icon or any JSX element
  title: string; // Card title
  description: string; // Card text
  className?: string; // Optional extra classes for outer div
  iconWrapperClass?: string; // Optional classes for icon wrapper
  textWidth?: string; // Optional width for text paragraph
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  className = "",
  iconWrapperClass = "",
  textWidth = "",
}) => {
  return (
    <div className={`p-6 border-r-2 border-[#274185] md:px-10 ${className}`}>
      <div
        className={`p-3 rounded-2xl border-2 w-fit border-[#274185] ${iconWrapperClass}`}
      >
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-[#274185] mt-4">{title}</h2>
      <p className={`text-lg ${textWidth} mt-2`}>{description}</p>
    </div>
  );
};

export default InfoCard;
