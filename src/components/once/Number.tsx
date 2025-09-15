import React from "react";

interface NumberDisplayProps {
  number: string | number;
  size?: number; // font size in px
  strokeColor?: string;
  strokeWidth?: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({
  number,
  size = 100,
  strokeColor = "#1757FF", // default Tailwind blue-600
  strokeWidth = 2,
}) => {
  return (
    <svg
      width={size * 1.2}
      height={size * 1.2}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size}
        fontWeight="700"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="transparent"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {number}
      </text>
    </svg>
  );
};

export default NumberDisplay;
