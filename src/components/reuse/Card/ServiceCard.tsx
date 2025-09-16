import React from "react";
import NumberDisplay from "../../once/NumberDisplay";

interface BackgroundCardProps {
  imageUrl: string;
  overlayColor?: string; // hex or rgba
  title?: string;
  description?: string;
  children?: React.ReactNode; // Allow custom elements inside
  indexNumber: string;
}

const ServiceCard: React.FC<BackgroundCardProps> = ({
  imageUrl,
  overlayColor = "rgba(0,16,59,0.9)",
  title,
  description,
  children,
  indexNumber = "",
}) => {
  return (
    <div
      className="rounded-xl overflow-hidden w-full bg-center bg-cover flex flex-col justify-between p-4 h-[600px]"
      style={{
        backgroundImage: `
          linear-gradient(to top, ${overlayColor}, rgba(0,16,59,0)),
          url('${imageUrl}')
        `,
      }}
    >
      <NumberDisplay
        strokeColor="white"
        strokeWidth={1}
        size={150}
        number={indexNumber}
      />
      <div>
        {title && <h2 className="text-white text-[28px] font-bold">{title}</h2>}
        {description && (
          <p className="text-white text-[16px] font-normal">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default ServiceCard;
