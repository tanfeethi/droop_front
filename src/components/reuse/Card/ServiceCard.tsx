import React from "react";
import NumberDisplay from "../../once/NumberDisplay";
import DOMPurify from "dompurify";

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
      className="rounded-xl overflow-hidden w-full bg-center bg-cover flex flex-col justify-between p-5 h-[600px]"
      style={{
        backgroundImage: `
          linear-gradient(to top, ${overlayColor}, rgba(0,16,59,0)),
          url('${imageUrl}')
        `,
        backgroundSize: "100% 100%",
        backgroundClip: "padding-box",
      }}
    >
      <NumberDisplay
        strokeColor="white"
        strokeWidth={1}
        size={150}
        number={indexNumber}
      />
      <div>
        {title && (
          <h2 className="text-white text-[28px] font-bold">
            {DOMPurify.sanitize(title, { ALLOWED_TAGS: [] })}
          </h2>
        )}
        {description && (
          <p className="text-white text-[16px] font-normal">
            {DOMPurify.sanitize(description, { ALLOWED_TAGS: [] })}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default ServiceCard;
