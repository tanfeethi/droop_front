import React from "react";

interface ImageCardProps {
  text?: string; // optional overlay text
  bgImage?: string; // background image URL
  bgGradient?: string; // optional gradient overlay
  extraClassName?: string; // additional classes
  textClassName?: string; // additional classes
}

const ImageCard: React.FC<ImageCardProps> = ({
  text,
  bgImage,
  bgGradient,
  textClassName,
  extraClassName = "rounded-xl h-[300px]",
}) => {
  return (
    <div
      className={`w-full mt-20 ${extraClassName} relative overflow-hidden flex items-center justify-center`}
    >
      {/* Background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Gradient overlay */}
      {bgGradient && (
        <div className="absolute inset-0" style={{ background: bgGradient }} />
      )}

      {/* Overlay text */}
      {text && (
        <span
          className={`relative text-white font-bold text-center px-4 ${textClassName}`}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default ImageCard;
