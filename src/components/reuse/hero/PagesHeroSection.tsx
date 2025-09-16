import WrapperContainer from "../WrapperContainer";

interface PagesHeroSectionProps {
  children?: React.ReactNode;
  bgImage?: string;
  bgGradient?: string;
  topOverlayColor?: string; // overlay color
  extraHeight?: string;
}

const PagesHeroSection = ({
  children,
  bgImage,
  bgGradient = "linear-gradient(to bottom, #00103B 90%, #274185 90%)",
  topOverlayColor = "rgba(0, 0, 0, 0.3)", // default semi-transparent black
  extraHeight = "h-[600px]",
}: PagesHeroSectionProps) => {
  return (
    <section
      className={`${extraHeight} pt-20 relative z-0`}
      style={{
        backgroundImage: bgImage
          ? `url(${bgImage}), ${bgGradient}`
          : bgGradient,
        backgroundSize: bgImage ? "100% 90%, 100% 100%" : "100% 100%",
        backgroundPosition: bgImage ? "top, center" : "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top overlay matches image height */}
      {bgImage && (
        <div
          style={{
            backgroundColor: topOverlayColor,
            height: "90%", // same as the image height
          }}
          className="absolute top-0 left-0 w-full"
        />
      )}

      <div className="w-full h-full flex flex-col relative">
        <WrapperContainer>
          <div className="text-white h-full">{children}</div>
        </WrapperContainer>
      </div>
    </section>
  );
};

export default PagesHeroSection;
