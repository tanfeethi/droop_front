interface AboutRoundedComponentProps {
  title: string;
  content: string;
  className?: string; // allows extra customization if needed
}

const AboutRoundedComponent: React.FC<AboutRoundedComponentProps> = ({
  title,
  content,
  className = "",
}) => {
  return (
    <div
      className={`bg-gradient-to-l from-[#EBF0FE] to-white pr-12 py-10 rounded-tr-[65px] rounded-br-xl ${className}`}
    >
      <h3 className="text-3xl font-bold text-[#274185] mb-8 pt-2">{title}</h3>
      <p className="text-[#000D30] font-normal text-xl">{content}</p>
    </div>
  );
};

export default AboutRoundedComponent;
