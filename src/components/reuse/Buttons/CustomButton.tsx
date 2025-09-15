import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` font-bold px-4 text-2xl rounded-es-sm border border-[#274185] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
