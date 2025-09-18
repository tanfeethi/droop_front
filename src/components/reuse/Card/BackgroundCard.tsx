import React from "react";
import DOMPurify from "dompurify";

interface BackgroundCardProps {
  imageUrl: string;
  overlayColor?: string; // hex or rgba
  title?: string;
  description?: string;
  children?: React.ReactNode; // Allow custom elements inside
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  imageUrl,
  overlayColor = "rgba(0,16,59,0.7)",
  title,
  description,
  children,
}) => {
  return (
    <div
      className="rounded-xl overflow-hidden w-full bg-center bg-cover flex flex-col justify-end p-4"
      style={{
        backgroundImage: `
          linear-gradient(to top, ${overlayColor}, rgba(0,16,59,0)),
          url('${imageUrl}')
        `,
      }}
    >
      {title && (
        <h2 className="text-white text-[28px] font-bold">
          {DOMPurify.sanitize(title, { ALLOWED_TAGS: [] })}
        </h2>
      )}
      {description && (
        <p className="text-white text-[16px] font-normal">
          {" "}
          {DOMPurify.sanitize(description, { ALLOWED_TAGS: [] })}
        </p>
      )}
      {children}
    </div>
  );
};

export default BackgroundCard;
