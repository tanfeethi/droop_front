import React from "react";
import { useTranslation } from "react-i18next";
import { TbCurrencyRiyal } from "react-icons/tb";

interface CourseDay {
  day: string;
  topics: string[];
}

interface CourseCardProps {
  id: number;
  image: string;
  title: string;
  description: CourseDay[];
  price: string;
  oldPrice?: string;
  duration: string;
  level: string;
  Accreditation_number: string;
  coursePlace: string;
  onRegister?: () => void;
  onDetails?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  price,
  oldPrice,
  duration,
  level,
  Accreditation_number,
  coursePlace,
  onRegister,
  onDetails,
}) => {
  const { t } = useTranslation("courses");
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col  justify-between h-full">
        {/* Image */}
        <div className="relative h-[300px] w-full">
          <img
            className="h-full w-full rounded-xl object-cover mb-4"
            src={image}
            alt={title}
          />
          <div className="absolute top-3 right-3 bg-white p-2 rounded-full">
            <span className="font-bold text-sm">
              {t("accreditation_number")} :{" "}
            </span>
            <span>{Accreditation_number}</span>
          </div>

          <div className="absolute top-3 left-3 bg-white p-2 rounded-full">
            <span className="font-bold text-sm px-5 text-green-600">
              {coursePlace}
            </span>
          </div>
        </div>

        {/* Price & Tags */}
        <div className="flex flex-wrap justify-between text-lg items-center">
          <div className="flex gap-2 my-3">
            <p className="text-black font-bold text-2xl flex items-center">
              {price} <TbCurrencyRiyal className="text-3xl" />
            </p>
            {oldPrice && (
              <p className="font-bold text-red-400 line-through flex items-center">
                {oldPrice} <TbCurrencyRiyal className="text-3xl" />
              </p>
            )}
          </div>
          <div className="flex gap-3 my-3">
            <div className="px-5 py-1 border rounded-lg text-[#727272]">
              {duration}
            </div>
            <div className="px-5 py-1 border rounded-lg text-[#727272]">
              {level}
            </div>
          </div>
        </div>

        {/* Title */}
        <p className="font-bold text-lg my-5">{title}</p>

        {/* Description as array */}
        <div className="space-y-3 max-h-[200px] pr-2">
          {description.map((day, i) => (
            <span className="text-sm text-[#727272] leading-relaxed" key={i}>
              {day.topics[0]}{" "}
            </span>
          ))}
          ...
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-5 mt-3.5">
          <button
            onClick={onRegister}
            className="p-3 bg-[#274185] rounded-lg text-white font-bold cursor-pointer hover:bg-[#1f356b] transition"
          >
            {t("register")}
          </button>
          <button
            onClick={onDetails}
            className="p-3 border border-[#274185] rounded-lg text-[#274185] font-bold cursor-pointer hover:bg-[#f3f4f6] transition"
          >
            {t("moreDetails")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
