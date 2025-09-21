import React from "react";
import NumberDisplay from "../once/NumberDisplay";
import DOMPurify from "dompurify";

interface SectorProps {
  number: string;
  strokeColor?: string;
  size?: number;
  title: string;
  description: string;
  image: string;
}

const Sector: React.FC<SectorProps> = ({
  number,
  strokeColor = "white",
  size = 120,
  title,
  description,
  image,
}) => {
  return (
    <div className=" shadow-lg rounded-2xl w-full p-5 grid grid-cols-1 gap-10 md:grid-cols-2 items-center mb-10">
      {/* Image */}
      <div className="h-96">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={image}
          alt={title}
        />
      </div>

      {/* Content */}
      <div>
        <NumberDisplay number={number} strokeColor={strokeColor} size={size} />

        <div className="text-right justify-start text-[#00103B] text-4xl font-bold mb-5">
          {DOMPurify.sanitize(title, { ALLOWED_TAGS: [] })}
        </div>

        <div className="text-right justify-start text-slate-900 text-xl font-normal font-['Almarai'] capitalize leading-normal">
          {DOMPurify.sanitize(description, { ALLOWED_TAGS: [] })}
        </div>
      </div>
    </div>
  );
};

export default Sector;
