import React from "react";

interface PolygonContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PolygonContainer: React.FC<PolygonContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-[#00103B] text-white p-6 ${className}`}
      style={{
        clipPath: "polygon(0% 0%, 80% 0%, 100% 60%, 0% 100%)", // adjust points to match your shape
      }}
    >
      {children}
    </div>
  );
};

export default PolygonContainer;
