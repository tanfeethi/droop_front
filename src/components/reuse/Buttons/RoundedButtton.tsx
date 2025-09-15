import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const RoundedButtton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[175px] h-[47px] bg-[#CFDCFF] font-bold text-2xl rounded-full border border-[#274185] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default RoundedButtton;




